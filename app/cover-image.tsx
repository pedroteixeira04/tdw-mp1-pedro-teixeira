import ContentfulImage from "../lib/contentful-image";
import Link from "next/link";

function cn(...classes: (string | Record<string, boolean> | undefined)[]) {
  return classes
    .flatMap((cls) => {
      if (!cls) return [];
      if (typeof cls === "string") return cls;
      if (typeof cls === "object")
        return Object.entries(cls)
          .filter(([_, value]) => value)
          .map(([key]) => key);
      return [];
    })
    .join(" ");
}

type CoverImageProps = {
  title: string;
  url: string;
  slug?: string;
};

export default function CoverImage({ title, url, slug }: CoverImageProps) {
  const image = (
    <ContentfulImage
      alt={`Cover Image for ${title}`}
      priority
      width={2000}
      height={1000}
      src={url}
      className={cn("w-full h-auto rounded-xl shadow-small", {
        "hover:shadow-medium transition-shadow duration-200": !!slug,
      })}
    />
  );

  return (
    <div className="sm:mx-0 overflow-hidden rounded-xl">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          <div>{image}</div>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
