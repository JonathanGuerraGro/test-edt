import Layout from "@/components/layout";
import "../styles/scss/main.scss";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}
