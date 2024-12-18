"use server";
import { reqUrl } from "@/config";

export interface Post {
  featured_media: number | null;
  id: number;
  slug: string;
  title: { rendered: string };
  content?: { rendered: string };
  featuredImageUrl?: string;
}

export const fetchPosts = async (): Promise<Post[]> => {
  try {
    const revalidateValue = process.env.VERCEL ? 1 : false;

    const res = await fetch(
      `${reqUrl}/posts?_fields=id,slug,title,content,featured_media&per_page=40&categories=4`,
      { next: { revalidate: revalidateValue } }
    );
    console.log(res);

    const fetchedPosts: Post[] = await res.json();
    console.log(fetchedPosts);

    const processedPosts = await Promise.all(
      fetchedPosts.map(async (post) => {
        if (post.featured_media) {
          const mediaRes = await fetch(`${reqUrl}/media/${post.featured_media}`, {
            headers: {
              'Access-Control-Allow-Origin': '*',
            },
          });
          const media = await mediaRes.json();
          post.featuredImageUrl = media.source_url;
        }
        return post;
      })
    );

    return processedPosts;
  } catch (error) {
    console.error("Fetching error", error);
    return [];
  }
};
