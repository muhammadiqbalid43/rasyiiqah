import DashboardLayout from "@/components/dashboard/dashboard-layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
const queryClient = new QueryClient();
import { NuqsAdapter } from "nuqs/adapters/next/pages";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (router.pathname.startsWith("/dashboard")) {
    return (
      <QueryClientProvider client={queryClient}>
        <NuqsAdapter>
          <DashboardLayout>
            <Component {...pageProps} />
            <Toaster />
          </DashboardLayout>
        </NuqsAdapter>
      </QueryClientProvider>
    );
  }
  return <Component {...pageProps} />;
}
