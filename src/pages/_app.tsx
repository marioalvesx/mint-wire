import { Header } from "@/components/Header";
import type { AppProps } from "next/app";
import { Provider as NextAuthProvider } from "next-auth/client";

import "../styles/global.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    <NextAuthProvider/>
  );
}
