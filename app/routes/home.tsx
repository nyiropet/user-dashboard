import type { Route } from "./+types/home";
import { Users } from "../components/users";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "User dashboard" },
    { name: "description", content: "Welcome to User dashboard!" },
  ];
}

export default function Home() {
  return <Users />;
}
