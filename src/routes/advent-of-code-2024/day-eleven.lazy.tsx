import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createLazyFileRoute("/advent-of-code-2024/day-eleven")({
  component: DayEleven,
});

function DayEleven() {
  const [input, setInput] = useState("");

  const startingStones = input.trim().split(" ");

  // For part 1 just doing the naive implementation is fine.
  // Part 2 will require something more clever.
  let currentStones = startingStones;
  let nextStones: string[] = [];
  for (let i = 0; i < 25; i++) {
    currentStones.forEach((stone) => {
      // Remove leading zeros
      stone = parseInt(stone).toString();
      if (stone === "0") {
        nextStones.push("1");
      } else if (stone.length % 2 === 0) {
        nextStones.push(stone.slice(0, stone.length / 2));
        nextStones.push(stone.slice(stone.length / 2));
      } else {
        const value = parseInt(stone) * 2024;
        nextStones.push(value.toString());
      }
    });
    currentStones = nextStones;
    nextStones = [];
  }

  return (
    <div>
      <h2>Day 11</h2>
      <label>Input: </label>
      <input
        type="file"
        onChange={(e) => {
          const reader = new FileReader();
          if (e.target.files) {
            reader.readAsText(e.target.files[0]);

            reader.onload = function () {
              if (typeof reader.result === "string") {
                setInput(reader.result);
              }
            };

            reader.onerror = function () {
              console.log(reader.error);
            };
          }
        }}
      />
      # Stones after 25 blinks: {currentStones.length}; # Stones after 75
      blinks: Coming soon...
    </div>
  );
}
