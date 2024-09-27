import { useToast } from "@/hooks/use-toast";
import "@/styles/globals.css";
import { persistor, store } from "@/redux/store";
import { Metadata, NextPage } from "next";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ReactElement, ReactNode } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "@/components/ui/toaster";
import RootLayout from "../components/layout/RootLayout";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export const metadata: Metadata = {
  title: "DCMS",
  description: "Dental Clinic Management System",
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);
  const { toast } = useToast();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Toaster />
        <RootLayout>{getLayout(<Component {...pageProps} />)}</RootLayout>
      </PersistGate>
    </Provider>
  );
}
