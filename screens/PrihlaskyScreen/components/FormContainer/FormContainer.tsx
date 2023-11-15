import { FormProvider, useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/router";
import { SuccessModal } from "./SuccessModal";
import axios from "axios";
import {
  Course,
  DayAbbr,
  GlobalSpreadsheetData,
  SchoolSpreadsheetData,
  convertAbbrToWeekDaysDiacritics,
} from "@/domains";
import {
  SchoolForm,
  BasicForm,
  KindergardenForm,
  AdvancedForm,
  ConditionForm,
} from "..";
import { uploadGlobalSpreadsheet, uploadSchoolSpreadsheet } from "@/utils";
import { AdultForm } from "../AdultForm";

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
    reset,
  } = form;

  const handleExcelUpload = async (formData: FormData) => {
    if (courseName !== "skoly" && courseName !== "skolky") {
      return uploadGlobalSpreadsheet(spreadsheetId, formData);
    }

    return uploadSchoolSpreadsheet(spreadsheetId, formData);
  };

  const onSubmit = async (formValues: FormData) => {
    setIsLoading(true);

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
      await handleExcelUpload(formValues);
      await axios.post("/api/email", {
        email: formValues?.email ?? formValues?.contactPersonEmail,
        templateId: templateId,
        day: fullDaysTimes,
        price: formValues.lessonsPrice,
      });
    } catch (error) {
      console.log("cant send email or upload spreadsheet", error);
    } finally {
      setIsOpen(true);

      setIsLoading(false);
    }
  };

  const resetAll = () => {
    reset({
      gender: "",
      midTerm: "",
    });
    setIsOpen(false);
  };

  return (
    <FormProvider {...form}>
      <SuccessModal
        isOpen={isOpen}
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
