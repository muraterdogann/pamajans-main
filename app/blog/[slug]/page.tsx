
import parse, { domToReact, DOMNode } from "html-react-parser";
import { getPostData, OgImage } from "./action"; 
import {
  WPBlockHeading,
  WPBlockParagraph,
  WPBlockImage,
  WPBlockButton,
  WPBlockList,
  WPBlockListItem,
} from "@/styledComponents/BlogContentStyles";
import { redirect } from "next/navigation";
import Head from "next/head";

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
        return (
          <WPBlockImage>
          {children}
          </WPBlockImage>
        );
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
 
 const PostPage= async ({ params }: TPageProps) => {
  console.log(params.slug)
  const postData = await getPostData(params.slug!)
console.log(postData)
  if (!postData) redirect("/not_found");

  const parsedContent = postData.content?.rendered
    ? parse(postData.content.rendered, { replace: replaceNodeWithComponent })
    : null;

  return (
    <>
    <Head>
      <title>{postData.yoast_head_json?.title || postData.title.rendered}</title>
      <meta name="description" content={postData.yoast_head_json?.description || 'Varsayılan Açıklama'} />
      <link rel="icon" href="/images/pam-ajans-logo-siyah.webp" type="image/webp" />

      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="author" content="pamajans" />
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:locale" content={postData.yoast_head_json?.og_locale || 'tr_TR'} />
      <meta property="og:type" content={postData.yoast_head_json?.og_type || 'article'} />
      <meta property="og:title" content={postData.yoast_head_json?.og_title || postData.title.rendered} />
      <meta property="og:description" content={postData.yoast_head_json?.og_description || 'Varsayılan Açıklama'} />
      <meta property="og:url" content={new URL(postData.slug, 'https://pamajans.com/blog/').href} />
      <meta property="og:site_name" content="pamajans" />
      <meta property="article:publisher" content="https://www.facebook.com/pamajans/" />

      {postData.yoast_head_json?.og_image?.map((image: OgImage, index: number) => (
        <meta key={index} property="og:image" content={new URL(image.url.replace(".png", ".webp"), 'https://dashboard.pushouse.com').href} />
      ))}

      <meta name="twitter:card" content={postData.yoast_head_json?.twitter_card || 'summary_large_image'} />
      <meta name="twitter:title" content={postData.yoast_head_json?.twitter_title || postData.title.rendered} />
      <meta name="twitter:description" content={postData.yoast_head_json?.twitter_description || 'Varsayılan Açıklama'} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(adjustSchemaForFrontend(postData.yoast_head_json?.schema, 'dashboard.pushouse.com', 'pamajans.com')) }} />
      </Head>
      <section className="relative w-full mb-16 bg-[f5f8fa] h-auto">
        <div className="font-display drop-shadow-[black_2px_2px_6px] rounded-bl-[60px] rounded-br-[60px] lg:rounded-bl-[120px] lg:rounded-br-[120px] text-white bg-main pt-32 pb-8 text-center text-5xl dark:text-white">
          <h2>{postData.title.rendered}</h2>
        </div>

        <div className="container mt-16 mb-16">
          <div className="normal-case">{parsedContent}</div>
        </div>
      </section>
    </>
  );
};

export default PostPage;
