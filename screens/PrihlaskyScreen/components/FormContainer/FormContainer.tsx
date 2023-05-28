import { FormProvider, useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/router";
import { SuccessModal } from "./SuccessModal";
import { appendSpreadsheet } from "@/libs";
import dayjs from "dayjs";
import axios from "axios";
import { SchoolForm } from "../SchoolForm";
import { CourseForm } from "../CourseForm";
import { Course } from "@/domains";

interface FormContainerProps {
  spreadsheet: string;
  courseName: Course;
}

export const FormContainer = ({
  spreadsheet,
  courseName,
}: FormContainerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const onSubmit = async (d: any) => {
    const newVals = normalizeSelectInputs(d);
    setIsLoading(true);
    try {
      await handleExcelUpload(newVals);
      axios.post("/api/email", { email: d?.email ?? d?.contactPersonEmail });
    } catch (e) {
      console.log("cant send email or create user");
    } finally {
      setIsOpen(true);
      setIsLoading(false);
    }
  };

  //todo select input vraci {label:"...",value:"..."}, ja chci ale jen "...", to se nastavuje uvnitr toho selectu nejak
  const normalizeSelectInputs = (data: any) => {
    const newData = { ...data };
    newData.czechNationality = data?.czechNationality?.value;
    newData.gender = data?.gender?.value;
    newData.insurance = data?.insurance?.value;
    newData.swimmingAbilities = data?.swimmingAbilities?.value;
    //dalši
    newData.preferedDay = data?.preferedDay?.value;
    newData.preferedTime = data?.preferedTime?.value;

    return newData;
  };

  const form = useForm<any>();

  const {
    handleSubmit,
    formState: { errors },
    reset,
  } = form;

  const resetAll = () => {
    //ty select pole se neresetovaly, kdyz jsem dal reset()
    reset({
      gender: "",
      czechNationality: "",
      insurance: "",
      swimmingAbilities: "",
    });
    setIsOpen(false);
  };

  const redirectHome = () => {
    router.push("/");
  };

  const handleExcelUpload = async (d: any) => {
    const currentDateTime = dayjs().format("DD-MM-YYYY hh:mm");

    if (courseName === "kurzy")
      return await appendSpreadsheet(
        {
          "Časová značka": currentDateTime,
          Jméno: d?.firstName,
          Příjmení: d?.lastName,
          Pohlaví: d?.gender,
          "Rodné číslo": d?.personalIdNum,
          "Datum narození": d?.dateOfBirth,
          Telefon: d?.phone,
          Email: d?.email,
          "Adresa a číslo popisné": d?.address,
          Město: d?.city,
          PSČ: d?.postCode,
          Alergie: d?.alergy,
          "Zdravotní potíže": d?.healthIssues,
        },
        spreadsheet
      );

    return await appendSpreadsheet(
      {
        "Název školy": d?.schoolName,
        Adresa: d?.address,
        "IČ nebo DIČ": d?.identifier,
        "Kontaktní osoba": d?.contactPerson,
        "Telefon kontaktní osoby": d?.contactPersonPhone,
        "Email kontaktní osoby": d?.contactPersonEmail,
        "Počet lekcí": d?.lessonsCount,
        "Počet dětí": d?.childrenCount,
        "Preferovaný den": d?.preferedDay,
        "Preferovaný čas": d?.preferedTime,
      },
      spreadsheet
    );
  };

  return (
    <FormProvider {...form}>
      <SuccessModal
        isOpen={isOpen}
        addChild={resetAll}
        redirect={redirectHome}
      />
      {courseName === "skoly" && (
        <SchoolForm
          onSubmit={handleSubmit(onSubmit)}
          errors={errors}
          isLoading={isLoading}
        />
      )}
      {courseName === "kurzy" && (
        <CourseForm
          onSubmit={handleSubmit(onSubmit)}
          errors={errors}
          isLoading={isLoading}
        />
      )}
      {courseName === "skolky" && (
        <SchoolForm
          onSubmit={handleSubmit(onSubmit)}
          errors={errors}
          isLoading={isLoading}
        />
      )}
    </FormProvider>
  );
};
