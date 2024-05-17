import { reqUrl } from "@/config";
interface YoastSEOData {
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
export async function fetchYoastSEOData(slug: string): Promise<YoastSEOData> {
    const res = await fetch(`${reqUrl}/pages?slug=${slug}&_fields=yoast_head_json`);
    const data: { yoast_head_json: YoastSEOData }[] = await res.json();

    if (!data || data.length === 0) {
        throw new Error(`Yoast SEO data for slug ${slug} not found`);
    }

    return data[0].yoast_head_json;
}
