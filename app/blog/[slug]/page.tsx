"use client";
import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import parse, { domToReact, DOMNode } from "html-react-parser";
import { getPostData, Post, OgImage } from "./action"; 
import {
  WPBlockHeading,
  WPBlockParagraph,
  WPBlockImage,
  WPBlockButton,
  WPBlockList,
  WPBlockListItem,
} from "@/styledComponents/BlogContentStyles";

interface TPageProps {
  params: {
    slug?: string;
  };
}

const replaceNodeWithComponent = (domNode: DOMNode) => {
  if (domNode.type === "tag" && domNode.name) {
    const children = domToReact(domNode.children as unknown as DOMNode[], {
      replace: replaceNodeWithComponent,
    });
    switch (domNode.name) {
      case "h1":
      case "h2":
        return <WPBlockHeading>{children}</WPBlockHeading>;
      case "p":
        return <WPBlockParagraph>{children}</WPBlockParagraph>;
      case "figure":
        return <WPBlockImage>{children}</WPBlockImage>;
      case "ul":
        return <WPBlockList>{children}</WPBlockList>;
      case "li":
        return <WPBlockListItem>{children}</WPBlockListItem>;
      case "div":
        return <WPBlockButton>{children}</WPBlockButton>;
      default:
        return null;
    }
  }
  return null;
};

const adjustSchemaForFrontend = (schema: any, oldDomain: string, newDomain: string): any => {
  if (!schema) return schema;
  const schemaString = JSON.stringify(schema);
  return JSON.parse(schemaString.replace(new RegExp(oldDomain, "g"), newDomain));
};

const PostPage: NextPage<TPageProps> = ({ params }) => {
  const [postData, setPostData] = useState<Post | null>(null);

  useEffect(() => {
    const slug = window.location.pathname;
    const fetchPostData = async () => {
      const data = await getPostData(slug);
      setPostData(data);
    };
    fetchPostData();
  }, []);

  if (!postData) {
    return <div className="h-[150rem]">Yükleniyor...</div>;
  }

  const parsedContent = postData.content?.rendered
    ? parse(postData.content.rendered, { replace: replaceNodeWithComponent })
    : null;

  const metadata = {
    title: postData.yoast_head_json?.title || postData.title.rendered,
    description: postData.yoast_head_json?.description || "Varsayılan Açıklama",
    icons: {
      icon: '/images/pam-ajans-logo-siyah.svg',
    },
    robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    author: "pamajans",
    charset: "utf-8",
    viewport: "width=device-width, initial-scale=1",
    og: {
      locale: postData.yoast_head_json?.og_locale || "tr_TR",
      type: postData.yoast_head_json?.og_type || "article",
      title: postData.yoast_head_json?.og_title || postData.title.rendered,
      description: postData.yoast_head_json?.og_description || "Varsayılan Açıklama",
      url: new URL(postData.slug, "https://pamajans.com/blog/").href,
      site_name: "pamajans",
      publisher: "https://www.facebook.com/pamajans/",
      images: postData.yoast_head_json?.og_image?.map((image: OgImage) => ({
        url: new URL(image.url, "https://dashboard.pushouse.com").href,
      })),
    },
    twitter: {
      card: postData.yoast_head_json?.twitter_card || "summary_large_image",
      title: postData.yoast_head_json?.twitter_title || postData.title.rendered,
      description: postData.yoast_head_json?.twitter_description || "Varsayılan Açıklama",
    },
    schema: JSON.stringify(
      adjustSchemaForFrontend(
        postData.yoast_head_json?.schema,
        "(dönüştürülecek url)",
        "pamajans.com"
      )
    ),
  };

  return (
    <>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="robots" content={metadata.robots} />
        <link rel="icon" href={metadata.icons.icon} />
        <meta name="author" content={metadata.author} />
        <meta charSet={metadata.charset} />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content={metadata.viewport} />
        <meta property="og:locale" content={metadata.og.locale} />
        <meta property="og:type" content={metadata.og.type} />
        <meta property="og:title" content={metadata.og.title} />
        <meta property="og:description" content={metadata.og.description} />
        <meta property="og:url" content={metadata.og.url} />
        <meta property="og:site_name" content={metadata.og.site_name} />
        <meta property="article:publisher" content={metadata.og.publisher} />
        {metadata.og.images?.map((image, index) => (
          <meta key={index} property="og:image" content={image.url} />
        ))}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: metadata.schema }} />
      </head>

      <section className="relative w-full mb-16 bg-[f5f8fa] h-auto ">
        {/* Banner */}
        <div className="font-display text-jacarta-300 rounded-bl-[60px] rounded-br-[60px] lg:rounded-bl-[120px] lg:rounded-br-[120px] text-white bg-main pt-32 pb-8 text-center text-5xl dark:text-white">
          <h2>{postData.title.rendered}</h2>
        </div>

        <div className="container mt-16 mb-16">
          <div>{parsedContent}</div>
        </div>
      </section>
    </>
  );
};

export default PostPage;
