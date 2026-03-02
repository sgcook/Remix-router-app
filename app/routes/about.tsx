import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Page" },
    { name: "description", content: "About the app" },
  ];
}

export default function About() {
  return <div>I am an about page</div>;
}
