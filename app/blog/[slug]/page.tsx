"use client";
import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import Head from "next/head";
import parse, { domToReact, DOMNode } from "html-react-parser";
import { reqUrl } from "@/config";
import {
  WPBlockHeading,
  WPBlockParagraph,
  WPBlockImage,
  WPBlockButton,
  WPBlockList,
  WPBlockListItem,
} from "@/styledComponents/BlogContentStyles";

interface OgImage {
  url: string;
  width?: number;
  height?: number;
  type?: string;
}

interface Post {
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

type TPageProps = {
  params: {
    slug?: string;
  };
};

const replaceNodeWithComponent = (domNode: DOMNode) => {
  if (domNode.type === "tag" && domNode.name) {
    let children = domToReact(domNode.children as unknown as DOMNode[], {
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
    }
  }
  return null;
};

const PostPage = ({ post }: any) => {
  const [postData, setPostData] = useState<Post | null>(null);
  console.log(post);

  useEffect(() => {
    const slug = window.location.pathname; // slug'un pencere konumunda olduğunu varsayıyorum
    const fetchPostData = async () => {
      const data = await getPostData(slug);
      setPostData(data);
    };
    fetchPostData();
  }, []); // Sadece bir kez çalıştırmak için boş bağımlılık dizisi
  console.log(postData);
  if (!postData) {
    return <div>Yükleniyor...</div>;
  }

  const parsedContent = postData.content?.rendered
    ? parse(postData.content.rendered, { replace: replaceNodeWithComponent })
    : null;

  function adjustSchemaForFrontend(
    schema: any,
    oldDomain: string,
    newDomain: string
  ): any {
    if (!schema) return schema;
    const schemaString = JSON.stringify(schema);
    return JSON.parse(
      schemaString.replace(new RegExp(oldDomain, "g"), newDomain)
    );
  }

  return (
    <>
      <Head>
        {/* Title */}
        <title>
          {postData.yoast_head_json?.title || postData.title.rendered}
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content={
            postData.yoast_head_json?.description || "Varsayılan Açıklama"
          }
        />

        {/* Robots */}
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />

        {/* Author */}
        <meta name="author" content="pushouse" />

        {/* Charset and Viewport */}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph tags */}
        <meta
          property="og:locale"
          content={postData.yoast_head_json?.og_locale || "tr_TR"}
        />
        <meta
          property="og:type"
          content={postData.yoast_head_json?.og_type || "article"}
        />
        <meta
          property="og:title"
          content={
            postData.yoast_head_json?.og_title || postData.title.rendered
          }
        />
        <meta
          property="og:description"
          content={
            postData.yoast_head_json?.og_description || "Varsayılan Açıklama"
          }
        />
        <meta
          property="og:url"
          content={new URL(postData.slug, "https://pamajans.com/blog/").href}
        />
        <meta property="og:site_name" content="pamajans" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/pamajans/"
        />

        {/* Open Graph Image */}
        {postData.yoast_head_json?.og_image?.map(
          (image: OgImage, index: number) => (
            <meta
              key={index}
              property="og:image"
              content={
                new URL(image.url, "https://dashboard.pushouse.com").href
              }
            />
          )
        )}

        {/* Twitter Card tags */}
        <meta
          name="twitter:card"
          content={
            postData.yoast_head_json?.twitter_card || "summary_large_image"
          }
        />
        <meta
          name="twitter:title"
          content={
            postData.yoast_head_json?.twitter_title || postData.title.rendered
          }
        />
        <meta
          name="twitter:description"
          content={
            postData.yoast_head_json?.twitter_description ||
            "Varsayılan Açıklama"
          }
        />

        {/* Schema.org tags */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              adjustSchemaForFrontend(
                postData.yoast_head_json?.schema,
                "(dönüştürülecek url)",
                "pamajans.com"
              )
            ),
          }}
        />
      </Head>

      <section className="relative w-full mb-16 bg-[f5f8fa]">
        {/* Banner */}
        <div className="font-display text-jacarta-300 rounded-bl-[60px] rounded-br-[60px] lg:rounded-bl-[120px] lg:rounded-br-[120px] text-white bg-main pt-32 pb-8 text-center text-5xl dark:text-white">
        <h2>{postData.title.rendered}</h2>
      </div>

        <div className="container mt-16 mb-16 ">
          <div>{parsedContent}</div>
        </div>
      </section>
    </>
  );
};

async function getPostData(slug: string): Promise<Post | null> {
  console.log(slug);
  slug = slug.substring(slug.indexOf("/blog") + "/blog".length);
  // Slug'dan "/blog/" kısmını ayır

  const res = await fetch(
    `${reqUrl}/posts?slug=${slug}&_fields=id,slug,title,content,yoast_head,yoast_head_json`
  );
  const posts: Post[] = await res.json();
  console.log("posts", posts);
  if (!posts || posts.length === 0) {
    return null;
  }

  return posts[0];
}

async function path(): Promise<{ params: { slug: string } }[]> {
  const res = await fetch(`${reqUrl}/posts?_fields=slug`);
  const posts: { slug: string }[] = await res.json();
  console.log("path post ", posts);
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return paths;
}

export default PostPage;
