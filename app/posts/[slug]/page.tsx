import Link from "next/link";
import { draftMode } from "next/headers";

import MoreStories from "../../more-stories";
import Avatar from "../../avatar";
import Date from "../../date";
import CoverImage from "../../cover-image";

import { Markdown } from "@/lib/markdown";
import { getAllPosts, getPostAndMorePosts } from "@/lib/api";

export async function generateStaticParams() {
  const allPosts = await getAllPosts(false);

  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const { isEnabled } = await draftMode();
  const { post, morePosts } = await getPostAndMorePosts(slug, isEnabled);

  return (
    <div className="container mx-auto px-5">
      <h2 className="inline-block mb-20 mt-8 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter transition-transform duration-300 hover:scale-110">
        <Link href="/" className="text-[#5EFF8C]">
          Blog de Viagens.
        </Link>
      </h2>
      <article>
        <h1 className="mb-12 text-center text-6xl font-bold leading-tight tracking-tighter md:text-left md:text-7xl md:leading-none lg:text-8xl text-[#5EFF8C]">
          {post.title}
        </h1>
        <div className="hidden md:mb-12 md:block text-white">
          {post.author && (
            <Avatar name={post.author.name} picture={post.author.picture} />
          )}
        </div>
        <div className="mb-8 sm:mx-0 md:mb-16 rounded-md">
          <CoverImage title={post.title} url={post.coverImage.url} />
        </div>
        <div className="mx-auto max-w-2xl">
          <div className="mb-6 block md:hidden">
            {post.author && (
              <Avatar name={post.author.name} picture={post.author.picture} />
            )}
          </div>
          <div className="mb-6 text-lg text-[#5EFF8C]">
            <Date dateString={post.date} />
          </div>
        </div>

        <div className="mx-auto max-w-2xl">
          <div className="prose text-white">
            <Markdown content={post.content} />
          </div>
        </div>
      </article>
      <hr className="border-accent-2 mt-28 mb-24 border-[#5EFF8C]" />
      <MoreStories morePosts={morePosts} />
    </div>
  );
}
