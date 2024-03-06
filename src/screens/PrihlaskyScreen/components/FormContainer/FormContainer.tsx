import { useRouter } from "next/router";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";

import posthog from "posthog-js";

import { useSendEmail } from "~/adapters";
import {
  Course,
  GlobalSpreadsheetData,
  SchoolSpreadsheetData,
} from "~/domains";
import { uploadGlobalSpreadsheet, uploadSchoolSpreadsheet } from "~/utils";

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

type SendEmailFormData = GlobalSpreadsheetData & SchoolSpreadsheetData;

export const FormContainer = ({
  spreadsheetId,
  courseName,
  templateId,
}: FormContainerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { sendEmail, isLoading } = useSendEmail(false);

  const router = useRouter();

  const form = useForm<SendEmailFormData>();

  const {
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = form;

  const handleExcelUpload = async (formData: SendEmailFormData) => {
    if (courseName !== "skoly" && courseName !== "skolky") {
      return uploadGlobalSpreadsheet(spreadsheetId, formData);
    }

    return uploadSchoolSpreadsheet(spreadsheetId, formData);
  };

  const onSubmit = async (formValues: SendEmailFormData) => {
    try {
      await Promise.all([
        handleExcelUpload(formValues),
        sendEmail({ formValues, templateId }),
      ]);
      setIsOpen(true);

      posthog.capture("conversion", { property: "value" });
    } catch (error) {
      toast.error("Nepodařilo se vytvořit přihlášku. Zkuste to prosím znovu.");
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
        formData={{ formValues: getValues(), templateId }}
        addChild={resetAll}
        redirect={() => router.push("/")}
      />
      {courseName === "skolky" && (
        <KindergardenForm
          onSubmit={handleSubmit(onSubmit)}
          errors={errors}
          isLoading={isLoading}
        />
      )}
      {courseName === "skoly" && (
        <SchoolForm
          onSubmit={handleSubmit(onSubmit)}
          errors={errors}
          isLoading={isLoading}
        />
      )}
      {courseName === "zakladni-plavani" && (
        <BasicForm
          onSubmit={handleSubmit(onSubmit)}
          errors={errors}
          isLoading={isLoading}
        />
      )}
      {courseName === "zdokonalovaci-plavani" && (
        <AdvancedForm
          onSubmit={handleSubmit(onSubmit)}
          errors={errors}
          isLoading={isLoading}
        />
      )}
      {courseName === "kondicni-plavani" && (
        <ConditionForm
          onSubmit={handleSubmit(onSubmit)}
          errors={errors}
          isLoading={isLoading}
        />
      )}
      {courseName === "plavani-pro-dospele" && (
        <AdultForm
          onSubmit={handleSubmit(onSubmit)}
          errors={errors}
          isLoading={isLoading}
        />
      )}
    </FormProvider>
  );
};
