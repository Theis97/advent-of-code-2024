import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createLazyFileRoute("/advent-of-code-2024/day-four")({
  component: DayFour,
});

function DayFour() {
  const [input, setInput] = useState("");

  const inputLines = input.trim().split("\n");

  // This solution feels woefully barbaric but I'm too tired to come up
  // with something more elegant right now.

  let letterGrid: string[][] = [];
  for (let i = 0; i < inputLines.length; i++) {
    letterGrid.push([]);
    for (let char of inputLines[i]) {
      if (char === "X" || char === "M" || char === "A" || char === "S") {
        letterGrid[i].push(char);
      }
    }
  }

  let xmasCount = 0;
  // Check horizontals
  for (let i = 0; i < letterGrid.length; i++) {
    for (let j = 0; j < letterGrid[0].length - 3; j++) {
      xmasCount =
        letterGrid[i][j] === "X" &&
        letterGrid[i][j + 1] === "M" &&
        letterGrid[i][j + 2] === "A" &&
        letterGrid[i][j + 3] === "S"
          ? xmasCount + 1
          : xmasCount;
      xmasCount =
        letterGrid[i][j] === "S" &&
        letterGrid[i][j + 1] === "A" &&
        letterGrid[i][j + 2] === "M" &&
        letterGrid[i][j + 3] === "X"
          ? xmasCount + 1
          : xmasCount;
    }
  }

  // Check verticals
  for (let i = 0; i < letterGrid.length - 3; i++) {
    for (let j = 0; j < letterGrid[0].length; j++) {
      xmasCount =
        letterGrid[i][j] === "X" &&
        letterGrid[i + 1][j] === "M" &&
        letterGrid[i + 2][j] === "A" &&
        letterGrid[i + 3][j] === "S"
          ? xmasCount + 1
          : xmasCount;
      xmasCount =
        letterGrid[i][j] === "S" &&
        letterGrid[i + 1][j] === "A" &&
        letterGrid[i + 2][j] === "M" &&
        letterGrid[i + 3][j] === "X"
          ? xmasCount + 1
          : xmasCount;
    }
  }

  // Check \ diagonals
  for (let i = 0; i < letterGrid.length - 3; i++) {
    for (let j = 0; j < letterGrid[0].length - 3; j++) {
      xmasCount =
        letterGrid[i][j] === "X" &&
        letterGrid[i + 1][j + 1] === "M" &&
        letterGrid[i + 2][j + 2] === "A" &&
        letterGrid[i + 3][j + 3] === "S"
          ? xmasCount + 1
          : xmasCount;
      xmasCount =
        letterGrid[i][j] === "S" &&
        letterGrid[i + 1][j + 1] === "A" &&
        letterGrid[i + 2][j + 2] === "M" &&
        letterGrid[i + 3][j + 3] === "X"
          ? xmasCount + 1
          : xmasCount;
    }
  }

  // Check / diagonals
  for (let i = 0; i < letterGrid.length - 3; i++) {
    for (let j = 0; j < letterGrid[0].length - 3; j++) {
      xmasCount =
        letterGrid[i][j + 3] === "X" &&
        letterGrid[i + 1][j + 2] === "M" &&
        letterGrid[i + 2][j + 1] === "A" &&
        letterGrid[i + 3][j] === "S"
          ? xmasCount + 1
          : xmasCount;
      xmasCount =
        letterGrid[i][j + 3] === "S" &&
        letterGrid[i + 1][j + 2] === "A" &&
        letterGrid[i + 2][j + 1] === "M" &&
        letterGrid[i + 3][j] === "X"
          ? xmasCount + 1
          : xmasCount;
    }
  }

  let masCrossCount = 0;
  for (let i = 0; i < letterGrid.length - 2; i++) {
    for (let j = 0; j < letterGrid[0].length - 2; j++) {
      if (letterGrid[i + 1][j + 1] === "A") {
        masCrossCount =
          (letterGrid[i][j] === "M" &&
            letterGrid[i][j + 2] === "M" &&
            letterGrid[i + 2][j] === "S" &&
            letterGrid[i + 2][j + 2] === "S") ||
          (letterGrid[i][j] === "M" &&
            letterGrid[i + 2][j] === "M" &&
            letterGrid[i][j + 2] === "S" &&
            letterGrid[i + 2][j + 2] === "S") ||
          (letterGrid[i + 2][j + 2] === "M" &&
            letterGrid[i + 2][j] === "M" &&
            letterGrid[i][j + 2] === "S" &&
            letterGrid[i][j] === "S") ||
          (letterGrid[i][j + 2] === "M" &&
            letterGrid[i + 2][j + 2] === "M" &&
            letterGrid[i][j] === "S" &&
            letterGrid[i + 2][j] === "S")
            ? masCrossCount + 1
            : masCrossCount;
      }
    }
  }

  return (
    <div>
      <label>Day 4 input: </label>
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
      XMAS count: {xmasCount}; X-MAS count: {masCrossCount}
    </div>
  );
}
