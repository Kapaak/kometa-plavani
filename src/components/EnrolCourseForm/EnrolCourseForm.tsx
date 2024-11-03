import { useRouter } from "next/router";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";

import posthog from "posthog-js";

import { useSendEmail } from "~/adapters";
import { courseEnrollmentData } from "~/constants/enrol-course";
import { GlobalSpreadsheetData, SchoolSpreadsheetData } from "~/domains";
import { uploadGlobalSpreadsheet, uploadSchoolSpreadsheet } from "~/utils";

import {
  AdultForm,
  AdvancedForm,
  BasicForm,
  ConditionForm,
  KindergardenForm,
  SchoolForm,
  SuccessModal,
} from "./parts";

interface EnrolCourseFormProps {
  formTypeId?: string;
  googleSheetId?: string;
}

type SendEmailFormData = GlobalSpreadsheetData & SchoolSpreadsheetData;

export const EnrolCourseForm = ({
  formTypeId,
  googleSheetId,
}: EnrolCourseFormProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { sendEmail, isLoading } = useSendEmail(false);

  const router = useRouter();

  const form = useForm<SendEmailFormData>();

  const enrolCourse = courseEnrollmentData.find((d) => d.value === formTypeId);

  const {
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = form;

  const handleExcelUpload = async (formData: SendEmailFormData) => {
    if (!enrolCourse || (!enrolCourse.spreadsheetId && !googleSheetId)) {
      return;
    }

    if (enrolCourse?.name !== "skoly" && enrolCourse?.name !== "skolky") {
      return uploadGlobalSpreadsheet(
        googleSheetId ?? enrolCourse.spreadsheetId,
        formData
      );
    }

    return uploadSchoolSpreadsheet(
      googleSheetId ?? enrolCourse.spreadsheetId,
      formData
    );
  };

  const onSubmit = async (formValues: SendEmailFormData) => {
    if (!enrolCourse) {
      return;
    }

    try {
      await Promise.all([
        handleExcelUpload(formValues),
        sendEmail({ formValues, templateId: enrolCourse.templateId }),
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
        formData={{
          formValues: getValues(),
          templateId: enrolCourse?.templateId,
        }}
        addChild={resetAll}
        redirect={() => router.push("/")}
      />
      {enrolCourse?.name === "skolky" && (
        <KindergardenForm
          onSubmit={handleSubmit(onSubmit)}
          errors={errors}
          isLoading={isLoading}
        />
      )}
      {enrolCourse?.name === "skoly" && (
        <SchoolForm
          onSubmit={handleSubmit(onSubmit)}
          errors={errors}
          isLoading={isLoading}
        />
      )}
      {enrolCourse?.name === "zakladni-plavani" && (
        <BasicForm
          onSubmit={handleSubmit(onSubmit)}
          errors={errors}
          isLoading={isLoading}
        />
      )}
      {enrolCourse?.name === "zdokonalovaci-plavani" && (
        <AdvancedForm
          onSubmit={handleSubmit(onSubmit)}
          errors={errors}
          isLoading={isLoading}
        />
      )}
      {enrolCourse?.name === "kondicni-plavani" && (
        <ConditionForm
          onSubmit={handleSubmit(onSubmit)}
          errors={errors}
          isLoading={isLoading}
        />
      )}
      {enrolCourse?.name === "plavani-pro-dospele" && (
        <AdultForm
          onSubmit={handleSubmit(onSubmit)}
          errors={errors}
          isLoading={isLoading}
        />
      )}
    </FormProvider>
  );
};
