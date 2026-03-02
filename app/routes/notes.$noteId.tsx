import {
  Form,
  isRouteErrorResponse,
  redirect,
  useLoaderData,
  useRouteError,
} from "react-router";

import type { Route } from "../+types/root";
import { deleteNote, getNote } from "~/models/note.server";
import { requireUserId } from "~/session.server";

export const loader = async ({ params, request }: Route.LoaderArgs) => {
  console.log("Inside note slug path", params.noteId);
  const userId = await requireUserId(request);
  if (!params.noteId) {
    throw new Response("Note id not found");
  }
  console.log("Getting note");
  const note = await getNote({ id: params.noteId, userId });
  if (!note) {
    throw new Response("Not Found", { status: 404 });
  }
  return { note };
};

export const action = async ({ params, request }: Route.ActionArgs) => {
  const userId = await requireUserId(request);
  if (!params.noteId) {
    throw new Response("Note id not found");
  }
  await deleteNote({ id: params.noteId, userId });

  return redirect("/notes");
};

export default function NoteDetailsPage() {
  const data = useLoaderData<typeof loader>();

  return (
    <div>
      <h3 className="text-2xl font-bold">{data.note.title}</h3>
      <p className="py-6">{data.note.body}</p>
      <hr className="my-4" />
      <Form method="post">
        <button
          type="submit"
          className="rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400"
        >
          Delete
        </button>
      </Form>
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (error instanceof Error) {
    return <div>An unexpected error occurred: {error.message}</div>;
  }

  if (!isRouteErrorResponse(error)) {
    return <h1>Unknown Error</h1>;
  }

  if (error.status === 404) {
    return <div>Note not found</div>;
  }

  return <div>An unexpected error occurred: {error.statusText}</div>;
}
