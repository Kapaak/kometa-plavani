//libraries
import Link from "next/link";
//styles
import { MainSubheadline, MaxHeight, A, Flex, MaxWidth } from "@/styles";
import * as S from "./Error.style";

const Error = () => {
  return (
    <div>
      <MaxHeight>
        <MaxWidth>
          <Flex justify="center" align="center" gap="2rem" textAlign="center">
            <S.MainHeadline>ups, vedle!</S.MainHeadline>
            <MainSubheadline>
              je nam to líto, stránka kterou hledáte není k dispozici
            </MainSubheadline>
            <Link href="/">
              <A variant="transparent-blue">hlavní stránka</A>
            </Link>
          </Flex>
        </MaxWidth>
      </MaxHeight>
    </div>
  );
};

export default Error;