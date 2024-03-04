import * as prismic from "@prismicio/client";

export function getPrismicClient() {
  const prismicClient = prismic.createClient(
    process.env.PRISMIC_ENDPOINT!,
    {
      accessToken: process.env.PRISMIC_ACCESS_TOKEN || '',           
    }
    );
    return prismicClient;

}
