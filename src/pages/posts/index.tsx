import Head from "next/head";
import styles from "./styles.module.scss";

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
