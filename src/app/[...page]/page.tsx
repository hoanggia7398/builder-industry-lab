"use client";
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../components/builder";
import { useEffect, useState } from "react";

// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: Promise<{
    page: string[];
  }>;
}

export default function Page(props: PageProps) {
  const builderModelName = "page";
  const [content, setContent] = useState(null);

  useEffect(() => {
    async function fetchContent() {
      const resolvedParams = await props.params;
      const content = await builder
        .get(builderModelName, {
          userAttributes: {
            urlPath: "/" + (resolvedParams?.page?.join("/") || ""),
          },
        })
        .toPromise();
      setContent(content);
    }
    fetchContent();
  }, [props.params]);

  return (
    <div className="dark:bg-gray-300 dark:text-black">
      {content && (
        <RenderBuilderContent content={content} model={builderModelName} />
      )}
    </div>
  );
}
