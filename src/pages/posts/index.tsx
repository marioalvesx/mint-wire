import Head from "next/head";
import styles from "./styles.module.scss";
import { getPrismicClient } from "@/services/prismic";
import { GetStaticProps } from "next";
import Prismic from "@prismicio/client";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
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

export const getStaticProps = async () => {
  const prismic = getPrismicClient();

  try{
    // const response = await prismic.query(
    //   Prismic.filter.at("document.type", "Post"),
    //   {        
    //     pageSize: 100,
    //   }
    // );

    const response = await prismic.getAllByType("post", {
      fetch: ['publication.title', 'publication.content'],
      pageSize: 100
    });

    console.log(JSON.stringify(response, null, 2));  
  }catch(error) {
    console.log(error);
  }
  return {
    props: {},
  };
};
