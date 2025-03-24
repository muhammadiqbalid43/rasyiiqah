import DashboardLayout from "@/components/dashboard/dashboard-layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (router.pathname.startsWith("/dashboard")) {
    return (
      <DashboardLayout>
        <Component {...pageProps} />
      </DashboardLayout>
    );
  }
  return <Component {...pageProps} />;
}
