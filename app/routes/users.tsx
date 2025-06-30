import type { Route } from "./+types/home";
import { UsersTable } from "../components/users-table";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "User dashboard" },
    { name: "description", content: "Welcome to User dashboard!" },
  ];
}

export async function loader() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) {
    throw new Response("Failed to fetch users", { status: res.status });
  }
  const users = await res.json();

  return users;
}

export default function Users({ loaderData }: Route.ComponentProps) {
  const users = loaderData;

  return <UsersTable users={users} />;
}
