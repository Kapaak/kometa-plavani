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
import { BasicSwimmingForm } from "../BasicSwimmingForm";
import { ProSwimmingForm } from "../ProSwimmingForm";

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
      axios.post("/api/email", {
        email: d?.email ?? d?.contactPersonEmail,
        templateId:
          courseName === "skoly-skolky"
            ? "d-59d5da971b4b4f61851ebd6dda8af4c6"
            : "d-874de2c55ad944d890768e75b9b2969b",
      });
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
      preferedDay: "",
      preferedTime: "",
    });
    setIsOpen(false);
  };

  const redirectHome = () => {
    router.push("/");
  };

  const handleExcelUpload = async (d: any) => {
    const currentDateTime = dayjs().format("DD-MM-YYYY hh:mm");
    console.log(d, "ddxx");
    console.log(d?.notes, "note");

    //tady budu spis met opacnou otazku !== skoly-skolky
    if (courseName !== "skoly-skolky")
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
          "Cenová kategorie": d?.lessonsPrice,
          "Zdravotní potíže": d?.healthIssues,
          Úroveň: d?.level,
          "Den a čas": d?.lessonsDayTime,
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
        "Cenová kategorie": d?.lessonsPrice,
        "Počet dětí": d?.childrenCount,
        Úroveň: d?.level,
        "Den a čas": d?.lessonsDayTime,
        Pololetí: d?.midTerm,
        Poznámky: d?.notes,
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
