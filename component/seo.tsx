import Head from "next/head";
import { FC } from "react";
import { Post,OgImage } from "@/app/blog/[slug]/action";

interface MetadataProps {
  postData: Post;
}

const adjustSchemaForFrontend = (
  schema: any,
  oldDomain: string,
  newDomain: string
): any => {
  if (!schema) return schema;
  const schemaString = JSON.stringify(schema);
  return JSON.parse(
    schemaString.replace(new RegExp(oldDomain, "g"), newDomain)
  );
};

const Metadata: FC<MetadataProps> = ({ postData }) => {
  const ogImages = postData.yoast_head_json?.og_image?.map((image: OgImage) => ({
    url: new URL(image.url, "https://dashboard.pushouse.com").href,
    width: image.width,
    height: image.height,
  }));

  return (
    <Head>
      <title>{postData.yoast_head_json?.title || postData.title.rendered}</title>
      <meta
        name="description"
        content={postData.yoast_head_json?.description || "Varsayılan Açıklama"}
      />
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta name="author" content="pushouse" />
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
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
        content={postData.yoast_head_json?.og_title || postData.title.rendered}
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
      {ogImages?.map((image, index) => (
        <meta key={index} property="og:image" content={image.url} />
      ))}
      <meta
        name="twitter:card"
        content={
          postData.yoast_head_json?.twitter_card || "summary_large_image"
        }
      />
      <meta
        name="twitter:title"
        content={postData.yoast_head_json?.twitter_title || postData.title.rendered}
      />
      <meta
        name="twitter:description"
        content={
          postData.yoast_head_json?.twitter_description || "Varsayılan Açıklama"
        }
      />
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
  );
};

export default Metadata;
