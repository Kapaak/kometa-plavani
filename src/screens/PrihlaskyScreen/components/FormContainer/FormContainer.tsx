import { useRouter } from "next/router";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";

import axios from "axios";
import posthog from "posthog-js";

import {
  Course,
  DayAbbr,
  GlobalSpreadsheetData,
  SchoolSpreadsheetData,
  convertAbbrToWeekDaysDiacritics,
} from "~/domains";
import {
  calculatePriceAfterDiscount,
  uploadGlobalSpreadsheet,
  uploadSchoolSpreadsheet,
} from "~/utils";

import {
  AdvancedForm,
  BasicForm,
  ConditionForm,
  KindergardenForm,
  SchoolForm,
} from "..";
import { AdultForm } from "../AdultForm";
import { SuccessModal } from "./SuccessModal";

interface FormContainerProps {
  spreadsheetId: string;
  courseName: Course;
  templateId: string;
}

type FormData = GlobalSpreadsheetData & SchoolSpreadsheetData;

export const FormContainer = ({
  spreadsheetId,
  courseName,
  templateId,
}: FormContainerProps) => {
  const isKindergardenSwimming = courseName === "skolky";
  const isSchoolSwimming = courseName === "skoly";
  const isBasicSwimming = courseName === "zakladni-plavani";
  const isAdvancedSwimming = courseName === "zdokonalovaci-plavani";
  const isConditionSwimming = courseName === "kondicni-plavani";
  const isAdultSwimming = courseName === "plavani-pro-dospele";

  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const form = useForm<FormData>();

  const {
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = form;

  const sendEmail = async (formValues: FormData, showNotifications = false) => {
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

    try {
      await axios.post("/api/email", {
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

      showNotifications &&
        toast.success("Potvrzovací email úspěšně odeslán.", {
          autoClose: 3000,
          hideProgressBar: true,
        });

      setIsOpen(true);
    } catch (error) {
      showNotifications &&
        toast.error(
          "Nepodařilo se zaslat potvrzovací email. Zkuste to prosím znovu, nebo nás kontaktujte."
        );
    }
  };

  const handleExcelUpload = async (formData: FormData) => {
    if (courseName !== "skoly" && courseName !== "skolky") {
      return uploadGlobalSpreadsheet(spreadsheetId, formData);
    }

    return uploadSchoolSpreadsheet(spreadsheetId, formData);
  };

  const onSubmit = async (formValues: FormData) => {
    setIsLoading(true);

    try {
      await Promise.all([handleExcelUpload(formValues), sendEmail(formValues)]);
      setIsOpen(true);
    } catch (error) {
      toast.error("Nepodařilo se vytvořit přihlášku. Zkuste to prosím znovu.");
    } finally {
      setIsLoading(false);
      posthog.capture("conversion", { property: "value" });
    }
  };

  const resetAll = () => {
    reset({
      gender: "",
      midTerm: "",
      lessonsPrice: getValues("lessonsPrice"),
    });
    setIsOpen(false);
  };

  return (
    <FormProvider {...form}>
      <SuccessModal
        isOpen={isOpen}
        retryEmailSend={async () => await sendEmail(getValues(), true)}
        addChild={resetAll}
        redirect={() => router.push("/")}
      />
      {isKindergardenSwimming && (
        <KindergardenForm
          onSubmit={handleSubmit(onSubmit)}
          errors={errors}
          isLoading={isLoading}
        />
      )}
      {isSchoolSwimming && (
        <SchoolForm
          onSubmit={handleSubmit(onSubmit)}
          errors={errors}
          isLoading={isLoading}
        />
      )}
      {isBasicSwimming && (
        <BasicForm
          onSubmit={handleSubmit(onSubmit)}
          errors={errors}
          isLoading={isLoading}
        />
      )}
      {isAdvancedSwimming && (
        <AdvancedForm
          onSubmit={handleSubmit(onSubmit)}
          errors={errors}
          isLoading={isLoading}
        />
      )}
      {isConditionSwimming && (
        <ConditionForm
          onSubmit={handleSubmit(onSubmit)}
          errors={errors}
          isLoading={isLoading}
        />
      )}
      {isAdultSwimming && (
        <AdultForm
          onSubmit={handleSubmit(onSubmit)}
          errors={errors}
          isLoading={isLoading}
        />
      )}
    </FormProvider>
  );
};
