import { FC } from "react";
import Head from "next/head";

interface NotFoundProps {}

const PageNotFound: FC<NotFoundProps> = ({}) => {
  return (
    <div className="p-8">
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        404 - Page Not Found
      </h2>
    </div>
  );
};

export default PageNotFound;
