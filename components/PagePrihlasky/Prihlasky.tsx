//components
import ServiceSections from "./ServiceSections/ServiceSections";
//styles
import { MaxWidth } from "@/styles";
//data
import { data } from "./data";

const Prihlasky = () => {
  return (
    <MaxWidth>
      <ServiceSections data={data} />
    </MaxWidth>
  );
};

export default Prihlasky;
