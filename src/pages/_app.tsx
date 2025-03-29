import DashboardLayout from "@/components/dashboard/dashboard-layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (router.pathname.startsWith("/dashboard")) {
    return (
      <QueryClientProvider client={queryClient}>
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      </QueryClientProvider>
    );
  }
  return <Component {...pageProps} />;
}
