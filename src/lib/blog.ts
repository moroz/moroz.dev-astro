import { getCollection, CollectionEntry } from "astro:content";

const isDev = process.env.NODE_ENV !== "production";

const sorter = (a: CollectionEntry<any>, b: CollectionEntry<any>) => {
  if (a.data.date > b.data.date) return -1;
  if (a.data.date < b.data.date) return 1;
  if (a.slug > b.slug) return -1;
  if (a.slug < b.slug) return 1;
  return 0;
};

export const getSortedPosts = async () => {
  const posts = await getCollection("blog", ({ data }) => isDev || !data.draft);
  return posts.sort(sorter);
};

export const getSortedVideos = async () => {
  const videos = await getCollection("videos");
  return videos.sort(sorter);
};
