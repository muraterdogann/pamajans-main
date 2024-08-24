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

/**
 * PamAjans kategorisindeki slug'ları almak için API çağrısı
 */
async function getPamAjansSlugs(): Promise<string[]> {
  const url = `https://dashboard.pushouse.com/wp-json/custom/v1/pages/pamAjans`;
  const res = await fetch(url, { next: { revalidate: 86400 } });

  if (!res.ok) {
    console.error("Failed to fetch PamAjans slugs");
    return [];
  }

  const pages = await res.json();
  return pages.map((page: { slug: string }) => page.slug);
}

/**
 * Verilen slug'a göre post verisini almak için API çağrısı
 * Sadece PamAjans kategorisine ait slug'lar için veri döndürür.
 */
export async function getPostData(slug: string): Promise<Post | null> {
  console.log("getPostData", slug);

  // PamAjans kategorisindeki slug'ları alıyoruz
  const pamAjansSlugs = await getPamAjansSlugs();

  // Eğer verilen slug PamAjans slug'ları arasında yoksa null döndürüyoruz
  if (!pamAjansSlugs.includes(slug)) {
    console.warn(`Slug ${slug} is not in PamAjans category`);
    return null;
  }

  // Eğer slug PamAjans kategorisindeyse, o slug için veri alıyoruz
  const url = `${reqUrl}/pages?slug=${slug}&_fields=id,slug,title,content,yoast_head,yoast_head_json`;
  console.log(url);

  const res = await fetch(url, {
    next: { revalidate: 86400 },
  });
  console.log(res.status);

  if (!res.ok) {
    console.error("Failed to fetch post data");
    return null;
  }

  const posts: Post[] = await res.json();
  console.log("Fetched posts:", posts);

  if (!posts || posts.length === 0) {
    return null;
  }

  return posts[0];
}
