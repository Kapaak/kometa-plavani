import { toast } from "react-toastify";

import { useMutation } from "@tanstack/react-query";

import {
  DayAbbr,
  GlobalSpreadsheetData,
  SchoolSpreadsheetData,
  convertAbbrToWeekDaysDiacritics,
} from "~/domains";
import { calculatePriceAfterDiscount } from "~/utils";
import { fetcherPost } from "~/utils/axios";

type SendEmailFormData = GlobalSpreadsheetData & SchoolSpreadsheetData;

export type SendEmailAdapter = {
  formValues: SendEmailFormData;
  templateId: string;
};

export function useSendEmail(showNotifications = false) {
  const { mutateAsync, isError, isPending, isSuccess } = useMutation<
    any,
    Error,
    SendEmailAdapter
  >({
    mutationKey: ["sendEmail"],
    onSuccess: () => {
      showNotifications &&
        toast.success("Potvrzovací email úspěšně odeslán.", {
          autoClose: 3000,
          hideProgressBar: true,
        });
    },
    onError: () => {
      showNotifications &&
        toast.error(
          "Nepodařilo se zaslat potvrzovací email. Zkuste to prosím znovu, nebo nás kontaktujte."
        );
    },
    mutationFn: ({ formValues, templateId }) => {
      const multipleDays = formValues.lessonsDayTime?.split(",");

      const fullDaysTimes: string[] = [];

      multipleDays?.forEach(async (day, index) => {
        const dayTimeAbbr = day?.split("_");
        const dayAbbr = dayTimeAbbr?.[0] as DayAbbr;
        const timeAbbr = dayTimeAbbr?.[1];

        fullDaysTimes.push(
          `${index > 0 ? ", " : ""} ${convertAbbrToWeekDaysDiacritics(
            dayAbbr
          )} ${timeAbbr}:00`
        );
      });

      return fetcherPost("/api/email", {
        email: formValues?.email ?? formValues?.contactPersonEmail,
        templateId: templateId,
        day: fullDaysTimes,
        price: Math.floor(
          calculatePriceAfterDiscount(
            formValues.lessonsPrice ?? 0,
            formValues.discount ?? 0
          )
        ),
      });
    },
  });

  function sendEmail(props: SendEmailAdapter) {
    return mutateAsync(props);
  }

  return {
    sendEmail,
    isError,
    isLoading: isPending,
    isSuccess,
  };
}
