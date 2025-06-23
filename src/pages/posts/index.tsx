import Head from "next/head";
import styles from "./styles.module.scss";
import { getPrismicClient } from "@/services/prismic";

import { GetStaticProps } from "next";
import Prismic from "@prismicio/client";
import { RichText } from "prismic-dom";
import { log } from "console";
import Link from "next/link";

type Post = {
  slug: string;
  title: string;
  excerpt?: string;
  updatedAt: string;
};

interface PostsProps {
  posts: Post[]
}

export default function Posts({ posts }: PostsProps) {
  console.log(posts);
  
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          {posts.map(post => (            
            <Link legacyBehavior href={`/posts/${post.slug}`}>
              <a key={post.slug}>
                <time>{post.updatedAt}</time>
                <strong>{post.title}</strong>
                <p>{post.excerpt}</p>
              </a>
            </Link>
          ))}           
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

    const response = await prismic.getAllByType("post", {
      fetch: ['publication.title', 'publication.content'],
      pageSize: 100
    });

    console.log(JSON.stringify(response, null, 2));  
    
    const posts = response.map(post => {
      
      return {
        slug: post.uid,
        title: RichText.asText(post.data.title),
        excerpt: post.data.content1.find((content: { type: any; }) => content.type === 'paragraph')?.text ?? '',
        updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: 'long',
          year: "numeric"
        })
      };
    });

    console.log(JSON.stringify(response, null, 2));
    return {
      props: {posts},
    };
};
