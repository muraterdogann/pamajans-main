"use server";
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

// Slugları getiren fonksiyon
export async function getSlugs(): Promise<string[]> {
  const url = "https://dashboard.pushouse.com/wp-json/custom/v1/pages/pamAjans";
  const res = await fetch(url);

  if (!res.ok) {
    console.error(`Failed to fetch slugs: ${res.status} ${res.statusText}`);
    return [];
  }

  const slugs = await res.json();
  return slugs.map((item: { slug: string }) => item.slug);
}

// Yoast verilerini ve diğer bilgileri getiren fonksiyon
export async function getPostData(slug: string): Promise<Post | null> {
  console.log("getPostData", slug);

  const url = `${reqUrl}/pages?slug=${slug}&_fields=id,slug,title,content,yoast_head,yoast_head_json`;
  console.log(url);

  const res = await fetch(url, {
    next: { revalidate: 86400 },
  });

  if (!res.ok) {
    console.error(`Failed to fetch post data: ${res.status} ${res.statusText}`);
    return null;
  }

  const posts: Post[] = await res.json();
  console.log("Fetched posts:", posts);

  if (!posts || posts.length === 0) {
    return null;
  }

  return posts[0];
}

// Slug'ları al ve her slug için getPostData'yı çağır
export async function getAllPostsData() {
  const slugs = await getSlugs();
  console.log("Fetched slugs:", slugs);

  const postDataPromises = slugs.map((slug) => getPostData(slug));
  const allPostsData = await Promise.all(postDataPromises);

  return allPostsData.filter((data) => data !== null);
}
