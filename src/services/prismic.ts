import Prismic from "@prismicio/client";

export function getPrismicClient() {
  const prismic = Prismic.createClient("mynewss", {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  });

  return prismic;
}
