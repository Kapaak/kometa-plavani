import { A } from "@/styles";
import { NextPage } from "next";
import Link from "next/link";

const Prihlasky: NextPage = () => {
  return (
    <div>
      <h1>Prihlasky</h1>
      <a href="/">prihlasky</a>
      <Link href="/">
        <A variant="transparent-blue">prihlasky</A>
      </Link>
    </div>
  );
};

export default Prihlasky;
