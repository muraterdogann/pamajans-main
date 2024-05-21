
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
    const res = await fetch(`${reqUrl}/posts?_fields=id,slug,title,content,featured_media&per_page=40`);
    const fetchedPosts: Post[] = await res.json();

    const processedPosts = await Promise.all(fetchedPosts.map(async (post) => {
      if (post.featured_media) {
        const mediaRes = await fetch(`${reqUrl}/media/${post.featured_media}`, {
          headers: {
            'Access-Control-Allow-Origin': '*'
          }
        });
        const media = await mediaRes.json();
        post.featuredImageUrl = media.source_url;
      }
      return post;
    }));

    return processedPosts;
  } catch (error) {
    console.error("Fetching error", error);
    return [];
  }
};
