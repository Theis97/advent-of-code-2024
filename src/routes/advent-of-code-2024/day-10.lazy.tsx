import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createLazyFileRoute("/advent-of-code-2024/day-10")({
  component: DayTen,
});

const getNeighbors = (
  node: [number, number],
  maxWidth: number,
  maxHeight: number
) => {
  let neighbors: [number, number][] = [];
  if (node[0] - 1 >= 0) {
    neighbors.push([node[0] - 1, node[1]]);
  }
  if (node[1] - 1 >= 0) {
    neighbors.push([node[0], node[1] - 1]);
  }
  if (node[0] + 1 < maxHeight) {
    neighbors.push([node[0] + 1, node[1]]);
  }
  if (node[1] + 1 < maxWidth) {
    neighbors.push([node[0], node[1] + 1]);
  }

  return neighbors;
};

function DayTen() {
  const [input, setInput] = useState("");

  const inputLines = input.trim().split("\n");

  let map: number[][] = [];
  const trailheads: [number, number][] = [];
  for (let i = 0; i < inputLines.length; i++) {
    map.push([]);
    for (let j = 0; j < inputLines[i].length; j++) {
      const height = parseInt(inputLines[i][j]);
      map[i].push(height);
      if (height === 0) {
        trailheads.push([i, j]);
      }
    }
  }

  let totalScore = 0;
  trailheads.forEach((trailhead) => {
    let explored: [number, number][] = [];
    let toExplore = [trailhead];
    for (let i = 1; i <= 9; i++) {
      let validNeighbors: [number, number][] = [];
      toExplore.forEach((node) => {
        const neighbors = getNeighbors(node, map[0].length, map.length);
        const filteredNeighbors = neighbors.filter((neighbor) => {
          return (
            map[neighbor[0]][neighbor[1]] === i &&
            !validNeighbors.some(
              (n) => n[0] === neighbor[0] && n[1] === neighbor[1]
            ) &&
            !explored.some((n) => n[0] === neighbor[0] && n[1] === neighbor[1])
          );
        });
        validNeighbors = validNeighbors.concat(filteredNeighbors);
      });

      toExplore.forEach((node) => explored.push(node));
      toExplore = validNeighbors;
      if (i === 9) {
        totalScore += validNeighbors.length;
      }
    }
  });

  return (
    <div>
      <h2>Day 10</h2>
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
      Sum of scores: {totalScore}; Sum of Ratings: Coming soon...
    </div>
  );
}
