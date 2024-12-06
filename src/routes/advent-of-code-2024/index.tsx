import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/advent-of-code-2024/')({
  component: Index,
})

function Index() {
  return (
    <div>
      <h2>Welcome to my Advent of Code 2024!</h2>
      <p>
        For now this site is VERY rough around the edges as I am focusing on
        simply solving the puzzles, but I plan on polishing things up when I
        have the time!
      </p>
    </div>
  )
}
