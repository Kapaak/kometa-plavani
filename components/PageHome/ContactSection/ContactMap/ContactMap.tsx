//styles
import * as S from "./ContactMap.style";

const ContactMap = () => {
  return (
    <S.Map
      src={`https://snazzymaps.com/embed/${process.env.MAPS_URL}` || ""}
    ></S.Map>
  );
};

export default ContactMap;
