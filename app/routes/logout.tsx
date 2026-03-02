import type { Route } from "../+types/root";
import { logout } from "~/session.server";

export const action = async ({ request }: Route.ActionArgs) => logout(request);

export const loader = async ({ request }: Route.ActionArgs) => logout(request);
