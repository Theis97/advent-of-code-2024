import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/advent-of-code-2024/")({
  component: Index,
});

function Index() {
  return <div>Welcome to my Advent of Code 2024!</div>;
}
