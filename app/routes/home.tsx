import type { Route } from "./+types/home";
import { redirect } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "User dashboard" },
    { name: "description", content: "Welcome to User dashboard!" },
  ];
}

export function loader({}) {
  return redirect("/users");
}
