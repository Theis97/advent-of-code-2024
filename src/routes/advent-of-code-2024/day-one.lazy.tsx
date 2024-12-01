import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/advent-of-code-2024/day-one")({
  component: DayOne,
});

function DayOne() {
  return <div>Coming Soon...</div>;
}
