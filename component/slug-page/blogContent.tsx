"use client";
import parse, { DOMNode, domToReact } from "html-react-parser";
import {
  BlogContentWrapper,
  WPBlockButton,
  WPBlockHeading,
  WPBlockImage,
  WPBlockList,
  WPBlockListItem,
  WPBlockParagraph,
} from "../../styledComponents/BlogContentStyles";

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

type BlogContentProps = {
  content: string;
};

const BlogContent = ({ content }: BlogContentProps) => {
  const parsedContent = parse(content, { replace: replaceNodeWithComponent });

  return (
    <BlogContentWrapper className="container mt-16 mb-16 bg-[f5f8fa]">
      <div>{parsedContent}</div>
    </BlogContentWrapper>
  );
};

export default BlogContent;
