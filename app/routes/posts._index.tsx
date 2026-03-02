import { Link, useLoaderData } from "react-router";

import { getPosts } from "~/models/post.server";

export const loader = async () => {
  return { posts: await getPosts() };
};

export default function Posts() {
  const { posts } = useLoaderData<typeof loader>();
  return (
    <main>
      <h1>Posts</h1>
      <Link to="admin" className="text-red-600 underline">
        Admin
      </Link>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug} className="text-blue-600 underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
