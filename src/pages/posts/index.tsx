import Head from "next/head";
import styles from "./styles.module.scss";
import { getPrismicClient } from "@/services/prismic";
import { GetStaticProps } from "next";

export default function Posts() {
  return (
    <>
      <Head>
        <title></title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>15/10/2023</time>
            <strong>Titulo do post</strong>
            <p>Corpo do post</p>
          </a>
          <a href="">
            <time>15/10/2023</time>
            <strong>Titulo do post</strong>
            <p>Corpo do post</p>
          </a>
          <a href="">
            <time>15/10/2023</time>
            <strong>Titulo do post</strong>
            <p>Corpo do post</p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [prismic.predicates.at("document.type", "publication")],
    {
      fetch: ["publication.title", "publication.content"],
      pageSize: 100,
    }
  );

  console.log(response);

  return {
    props: {},
  };
};
