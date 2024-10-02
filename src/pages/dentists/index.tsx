import { FC } from "react";
import Head from "next/head";

interface DentistsProps {}

const Dentists: FC<DentistsProps> = ({}) => {
  return (
    <div className="p-8">
      <Head>
        <title>Document Hub</title>
      </Head>
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Dentists
      </h2>
    </div>
  );
};

export default Dentists;
