import { FormProvider, useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/router";
import { SuccessModal } from "./SuccessModal";
import axios from "axios";
import {
  Course,
  GlobalSpreadsheetData,
  SchoolSpreadsheetData,
} from "@/domains";
import { SchoolSwimmingForm, BasicSwimmingForm, ProSwimmingForm } from "..";
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
  const isKindergardenSwimming = courseName === "skolky";
  const isSchoolSwimming = courseName === "skoly";
  const isBasicSwimming = courseName === "zakladni-plavani";
  const isImproveSwimming = courseName === "zdokonalovaci-plavani";
  const isConditionSwimming = courseName === "kondicni-plavani";

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
      {/* //todo -> udelej global komponent pro School a Kindergarden */}
      {/* //todo -> passuj jen nejakou prop */}
      {isKindergardenSwimming && (
        <SchoolSwimmingForm
          onSubmit={handleSubmit(onSubmit)}
          errors={errors}
          isLoading={isLoading}
        />
      )}
      {isSchoolSwimming && (
        <SchoolSwimmingForm
          onSubmit={handleSubmit(onSubmit)}
          errors={errors}
          isLoading={isLoading}
        />
      )}
      {isBasicSwimming && (
        <BasicSwimmingForm
          onSubmit={handleSubmit(onSubmit)}
          errors={errors}
          isLoading={isLoading}
        />
      )}
      {/* //todo -> udelej global komponent pro basic, impro a condition swimming */}
      {isImproveSwimming && (
        <BasicSwimmingForm
          onSubmit={handleSubmit(onSubmit)}
          errors={errors}
          isLoading={isLoading}
        />
      )}
      {isConditionSwimming && (
        <ProSwimmingForm
          onSubmit={handleSubmit(onSubmit)}
          errors={errors}
          isLoading={isLoading}
        />
      )}
    </FormProvider>
  );
};
