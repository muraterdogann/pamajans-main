// import { Metadata } from "next";
// import { Post, OgImage, adjustSchemaForFrontend } from "@/app/hizmetlerimiz/[slug]/action";

// export const generateMetadata = (postData: Post): Metadata => {
//   const {
//     yoast_head_json: yoast,
//     title: { rendered: postTitle },
//     slug,
//   } = postData;

//   const ogImageTags = yoast?.og_image?.map((image: OgImage) => ({
//     url: new URL(image.url, "https://dashboard.pushouse.com").href,
//   }));

//   return {
//     title: yoast?.title || postTitle,
//     description: yoast?.description || "Varsayılan Açıklama",
//     openGraph: {
//       type: yoast?.og_type || "article",
//       locale: yoast?.og_locale || "tr_TR",
//       title: yoast?.og_title || postTitle,
//       description: yoast?.og_description || "Varsayılan Açıklama",
//       url: new URL(slug, "https://pamajans.com/").href,
//       siteName: "pamajans",
//       images: ogImageTags?.map((img) => ({ url: img.url })) || [],
//     },
//     twitter: {
//       card: yoast?.twitter_card || "summary_large_image",
//       title: yoast?.twitter_title || postTitle,
//       description: yoast?.twitter_description || "Varsayılan Açıklama",
//     },
//     robots: `${yoast?.robots?.index || "index"}, ${yoast?.robots?.follow || "follow"}, max-snippet:${yoast?.robots?.max_snippet || "-1"}, max-image-preview:${yoast?.robots?.max_image_preview || "large"}, max-video-preview:${yoast?.robots?.max_video_preview || "-1"}`,
//     additionalMetaTags: [
//       { name: "author", content: "pushouse" },
//       { httpEquiv: "X-UA-Compatible", content: "IE=edge" },
//       { name: "viewport", content: "width=device-width, initial-scale=1" },
//     ],
//     other: {
//       "application/ld+json": JSON.stringify(
//         adjustSchemaForFrontend(
//           yoast?.schema,
//           "dashboard.pushouse.com",
//           "localhost:3000"
//         )
//       ),
//     },
//   };
// };
