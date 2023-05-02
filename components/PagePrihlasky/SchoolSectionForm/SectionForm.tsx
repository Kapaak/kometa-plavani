import { FormProvider, useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/router";
import { SuccessModal } from "./SuccessModal";
import { appendSpreadsheet } from "@/libs";
import dayjs from "dayjs";
// import { FormValues } from "../PagePrihlasky.interface";
import axios from "axios";
import { SchoolForm } from "../SchoolForm";

interface SchoolSectionFormProps {
  spreadsheet: string;
}

export const SchoolSectionForm = ({ spreadsheet }: SchoolSectionFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const onSubmit = async (d: any) => {
    const newVals = normalizeSelectInputs(d);
    setIsLoading(true);
    try {
      await handleExcelUpload(newVals);
      axios.post("/api/email", { email: d?.email });
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
    await appendSpreadsheet(
      {
        "Časová značka": currentDateTime,
        Jméno: d?.firstName,
        Příjmení: d?.lastName,
        Pohlaví: d?.gender,
        "Rodné číslo": d?.personalIdNum,
        "Je dítě občan ČR": d?.czechNationality,
        "Datum narození": d?.dateOfBirth,
        "Zdravotní pojišťovna": d?.insurance,
        Telefon: d?.phone,
        Email: d?.email,
        "Adresa a číslo popisné": d?.address,
        Město: d?.city,
        PSČ: d?.postCode,
        Alergie: d?.alergy,
        "Plavecké schopnosti": d?.swimmingAbilities,
        "Zdravotní potíže": d?.healthIssues,
        "Jak jste se o nás dozvěděli": d?.foundUs,
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
      <SchoolForm
        onSubmit={handleSubmit(onSubmit)}
        errors={errors}
        isLoading={isLoading}
      />
    </FormProvider>
  );
};
