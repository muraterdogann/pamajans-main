import React from "react";
import ServicePage from "./servicePage";
import { getPostData, Post, adjustSchemaForFrontend } from "./action";


interface Metadata {
  title: string;
  description: string;
  icons:any;
  robots?: string;
  authors?: { name: string }[];
  viewport?: {
    width: string;
    initialScale: number;
  };
  openGraph?: {
    locale: string;
    type: "article";
    title: string;
    description: string;
    url: string;
    siteName: string;
    images?: { url: string }[];
  };
  twitter?: {
    card: "summary_large_image";
    title: string;
    description: string;
  };
  other?: {
    "article:publisher": string;
  };
  alternates?: {
    canonical: string;
  };
  additionalMetaTags?: { name: string; content: string }[]; // Added property
  jsonLd?: any;
}


export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const postData: Post | null = await getPostData(params.slug);

  if (!postData) {
    return {
      title: "Page Not Found",
      description: "The page you are looking for does not exist.",
      icons: {
        icon: '/images/pam-ajans-logo-siyah.svg',
      },
    };
  }

  return {
    title: postData.yoast_head_json?.title || postData.title.rendered,
    description: postData.yoast_head_json?.description || "Varsayılan Açıklama",
    icons: {
      icon: '/images/pam-ajans-logo-siyah.svg',
    },
    robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    authors: [{ name: "pamajans" }],
    viewport: {
      width: "device-width",
      initialScale: 1,
    },
    openGraph: {
      locale: postData.yoast_head_json?.og_locale || "tr_TR",
      type: (postData.yoast_head_json?.og_type || "article") as "article",
      title: postData.yoast_head_json?.og_title || postData.title.rendered,
      description: postData.yoast_head_json?.og_description || "Varsayılan Açıklama",
      url: `https://pamajans.com/hizmetlerimiz/${postData.slug}`,
      siteName: "pamajans",
      images: postData.yoast_head_json?.og_image?.map((image) => ({
        url: `https://dashboard.pushouse.com${image.url}`,
      })),
    },
    twitter: {
      card: (postData.yoast_head_json?.twitter_card || "summary_large_image") as "summary_large_image",
      title: postData.yoast_head_json?.twitter_title || postData.title.rendered,
      description: postData.yoast_head_json?.twitter_description || "Varsayılan Açıklama",
    },
    other: {
      "article:publisher": "https://www.facebook.com/pamajans/",
    },
    alternates: {
      canonical: `https://pamajans.com/hizmetlerimiz/${postData.slug}`,
    },
    additionalMetaTags: [
      {
        name: "article:publisher",
        content: "https://www.facebook.com/pamajans/",
      },
    ],
    jsonLd: adjustSchemaForFrontend(
      postData.yoast_head_json?.schema,
      "(dönüştürülecek url)",
      "pamajans.com"
    ),
  };
}


const Page = ({params}:{params: {slug:string}})=>{
  return (
    <div>
      <ServicePage params = {{slug:params.slug}}/>
    </div>
  )
}
export default Page;