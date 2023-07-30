import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | ig.news</title>
      </Head>
      <h1>Hello World</h1>
    </>
  );
}
