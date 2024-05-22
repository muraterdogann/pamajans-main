// action.ts
"use server"
import { reqUrl } from "@/config";

export interface OgImage {
  url: string;
  width?: number;
  height?: number;
  type?: string;
}

export interface Post {
  id: number;
  slug: string;
  title: { rendered: string };
  content?: { rendered: string };
  yoast_head?: string;
  yoast_head_json?: {
    title?: string;
    description?: string;
    og_locale?: string;
    og_type?: string;
    og_title?: string;
    og_description?: string;
    og_url?: string;
    og_site_name?: string;
    og_image?: OgImage[];
    twitter_card?: string;
    twitter_title?: string;
    twitter_description?: string;
    robots?: {
      index?: string;
      follow?: string;
      max_snippet?: string;
      max_image_preview?: string;
      max_video_preview?: string;
    };
    author?: string;
    schema?: any;
  };
}

export async function getPostData(slug: string): Promise<Post | null> {
  console.log("getPostData", slug);

  const url = `${reqUrl}/pages?slug=${slug}&_fields=id,slug,title,content,yoast_head,yoast_head_json`;

  const res = await fetch(url,{
    next:{revalidate:100}
  });
  console.log(res.status);

  const posts: Post[] = await res.json();

  if (!posts || posts.length === 0) {
    return null;
  }

  return posts[0];
}
