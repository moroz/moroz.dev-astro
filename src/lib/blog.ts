import { getCollection } from "astro:content";

const isDev = process.env.NODE_ENV !== "production";

export const getSortedPosts = async () => {
  const posts = await getCollection("blog", ({ data }) => isDev || !data.draft);
  return posts.sort((a, b) => {
    if (a.data.date > b.data.date) return -1;
    if (a.data.date < b.data.date) return 1;
    if (a.slug > b.slug) return -1;
    if (a.slug < b.slug) return 1;
    return 0;
  });
};
