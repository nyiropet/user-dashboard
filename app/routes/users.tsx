import type { Route } from "./+types/home";
import { UserProvider, useUsers } from "../contexts/user-context";
import { UsersTable } from "../components/users-table";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "User dashboard" },
    { name: "description", content: "Welcome to User dashboard!" },
  ];
}

export default function Users({ loaderData }: Route.ComponentProps) {
  return (
    <UserProvider>
      <UsersTable />
    </UserProvider>
  );
}
