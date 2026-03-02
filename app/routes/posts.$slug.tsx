import { marked } from "marked";
import { useLoaderData } from "react-router";
import invariant from "tiny-invariant";

import type { Route } from "../+types/root";
import { getPost } from "~/models/post.server";

export const loader = async ({ params }: Route.LoaderArgs) => {
  invariant(params.slug, "params.slug is required");

  const post = await getPost(params.slug);
  invariant(post, `Post not found: ${params.slug}`);

  const html = marked(post.markdown);
  return { html, post };
};

export default function PostSlug() {
  const { html, post } = useLoaderData<typeof loader>();
  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="my-6 border-b-2 text-center text-3xl">{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
}
