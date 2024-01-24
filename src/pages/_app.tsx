import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import { ThemeProvider } from "@mui/material/styles";
import THEME from "@/styles/themes/theme";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      }),
  )
  return( 
  <>
  <ThemeProvider theme={THEME}>
   <QueryClientProvider client={queryClient}>
    <Component {...pageProps} />
    </QueryClientProvider>
    </ThemeProvider>
  </>  
  );
}
