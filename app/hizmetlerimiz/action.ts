"use server";
import { reqUrl } from "@/config";

export interface OgImage {
  url: string;
  width?: number;
  height?: number;
  type?: string;
}

export interface Post {
  content: any;
  slug: string;
  yoast_head_json: {
    twitter_title: string;
    twitter_description: string;
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
    robots?: {
      index?: string;
      follow?: string;
      max_snippet?: string;
      max_image_preview?: string;
      max_video_preview?: string;
    };
    schema?: any;
  };
}

export async function getSlugs(): Promise<string[]> {
  const url = "https://dashboard.pushouse.com/wp-json/custom/v1/pages/pamAjans";
  const res = await fetch(url);
  const slugs = await res.json();
  return slugs.map((item: { slug: string }) => item.slug);
}

export async function getPostData(slug: string): Promise<Post | null> {
  console.log("getPostData", slug);

  const url = `${reqUrl}/pages?slug=${slug}&_fields=slug,yoast_head_json`;
  console.log("API URL:", url);

  const res = await fetch(url, {
    next: { revalidate: 86400 },
  });

  console.log("Response status:", res.status);

  if (res.status !== 200) {
    console.error("Failed to fetch data from API");
    return null;
  }

  const posts: Post[] = await res.json();
  console.log("Fetched posts:", posts);

  if (!posts || posts.length === 0) {
    console.error("No posts found for the given slug:", slug);
    return null;
  }

  return posts[0];
}

export async function getYoastDataForAllSlugs() {
  const slugs = await getSlugs();
  const yoastDataPromises = slugs.map((slug) => getPostData(slug));
  const yoastData = await Promise.all(yoastDataPromises);
  return yoastData.filter((data) => data !== null);
}
