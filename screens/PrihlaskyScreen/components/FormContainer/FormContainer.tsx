import { FormProvider, useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/router";
import { SuccessModal } from "./SuccessModal";
import axios from "axios";
import { SchoolForm } from "../SchoolForm";
import {
  Course,
  GlobalSpreadsheetData,
  SchoolSpreadsheetData,
} from "@/domains";
import { BasicSwimmingForm } from "../BasicSwimmingForm";
import { ProSwimmingForm } from "../ProSwimmingForm";
import { uploadGlobalSpreadsheet, uploadSchoolSpreadsheet } from "@/utils";

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
    if (courseName !== "skoly-skolky") {
      return uploadGlobalSpreadsheet(spreadsheetId, formData);
    }

    return uploadSchoolSpreadsheet(spreadsheetId, formData);
  };

  const onSubmit = async (formValues: FormData) => {
    setIsLoading(true);

    try {
      await handleExcelUpload(formValues);
      await axios.post("/api/email", {
        email: formValues?.email ?? formValues?.contactPersonEmail,
        templateId: templateId,
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
      {courseName === "zdokonalovaci-plavani" && (
        <ProSwimmingForm
          onSubmit={handleSubmit(onSubmit)}
          errors={errors}
          isLoading={isLoading}
        />
      )}
      {courseName === "zakladni-plavani" && (
        <BasicSwimmingForm
          onSubmit={handleSubmit(onSubmit)}
          errors={errors}
          isLoading={isLoading}
        />
      )}
      {courseName === "skoly-skolky" && (
        <SchoolForm
          onSubmit={handleSubmit(onSubmit)}
          errors={errors}
          isLoading={isLoading}
        />
      )}
    </FormProvider>
  );
};
