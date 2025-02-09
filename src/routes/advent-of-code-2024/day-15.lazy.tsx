import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createLazyFileRoute("/advent-of-code-2024/day-15")({
  component: DayFifteen,
});

function DayFifteen() {
  const [input, setInput] = useState("");

  let gpsSum = 0;

  const inputChunks = input.trim().split("\n\n");
  if (inputChunks.length >= 2) {
    const mazeLines = inputChunks[0].split("\n");
    const moves = inputChunks[1].replace(/\n/g, "");

    let map: string[][] = [];
    let robotCoords: [number, number] = [-1, -1];
    for (let i = 0; i < mazeLines.length; i++) {
      map.push([]);
      for (let j = 0; j < mazeLines[i].length; j++) {
        map[i].push(mazeLines[i][j]);
        if (mazeLines[i][j] === "@") {
          robotCoords = [i, j];
          map[i][j] = ".";
        }
      }
    }

    for (let move of moves) {
      let targetPos = [robotCoords[0], robotCoords[1]];
      let moveDirection = [0, 0];
      switch (move) {
        case "^":
          moveDirection[0] = -1;
          targetPos[0] += moveDirection[0];
          break;
        case ">":
          moveDirection[1] = 1;
          targetPos[1] += moveDirection[1];
          break;
        case "v":
          moveDirection[0] = 1;
          targetPos[0] += moveDirection[0];
          break;
        case "<":
          moveDirection[1] = -1;
          targetPos[1] += moveDirection[1];
          break;
      }

      if (map[targetPos[0]][targetPos[1]] === ".") {
        robotCoords = [targetPos[0], targetPos[1]];
      } else if (map[targetPos[0]][targetPos[1]] === "O") {
        // If there's a box in the way, we have to look ahead and
        // see if there is an open space we can push the box(es) into.
        let lookahead = [targetPos[0], targetPos[1]];
        while (map[lookahead[0]][lookahead[1]] === "O") {
          lookahead = [
            lookahead[0] + moveDirection[0],
            lookahead[1] + moveDirection[1],
          ];
        }
        if (map[lookahead[0]][lookahead[1]] === ".") {
          map[lookahead[0]][lookahead[1]] = "O";
          map[targetPos[0]][targetPos[1]] = ".";
          robotCoords = [targetPos[0], targetPos[1]];
        }
      }
    }

    for (let i = 0; i < map.length; i++) {
      for (let j = 0; j < map[0].length; j++) {
        if (map[i][j] === "O") {
          gpsSum += i * 100 + j;
        }
      }
    }
  }

  return (
    <div>
      <h2>Day 15</h2>
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
      Part 1 Answer: {gpsSum}
    </div>
  );
}
