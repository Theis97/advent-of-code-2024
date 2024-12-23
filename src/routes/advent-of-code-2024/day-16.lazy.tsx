import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createLazyFileRoute("/advent-of-code-2024/day-16")({
  component: DaySixteen,
});

enum Direction {
  Up,
  Right,
  Down,
  Left,
}

const turn = (direction: Direction, clockwise: boolean) => {
  if (clockwise) {
    return direction + (1 % 4);
  } else {
    return direction === Direction.Up ? Direction.Left : direction - 1;
  }
};

type Node = {
  coord: [number, number];
  facing: Direction;
};

type Edge = {
  node: Node;
  weight: number;
};

function DaySixteen() {
  const [input, setInput] = useState("");

  const inputLines = input.trim().split("\n");

  let map: string[][] = [];
  let startTile: [number, number] = [-1, -1];
  let endTile: [number, number] = [-1, -1];
  for (let i = 0; i < inputLines.length; i++) {
    map.push([]);
    for (let j = 0; j < inputLines[i].length; j++) {
      map[i].push(inputLines[i][j]);
      if (inputLines[i][j] === "S") {
        startTile = [i, j];
      } else if (inputLines[i][j] === "E") {
        endTile = [i, j];
      }
    }
  }

  // construct a graph where each node consists of a tile coordinate and a facing direction.
  // edges are weighted based on the score incurred by moving from one position to another.
  let exploredTiles: [number, number][] = [];
  let tilesToExplore: [number, number][] = [startTile];
  let graph = new Map<Node, Edge[]>();
  while (tilesToExplore.length > 0 && startTile[0] !== -1) {
    let nextTilesToExplore: [number, number][] = [];
    tilesToExplore.forEach((tile) => {
      // create 4 nodes for each direction you can face on this tile
      for (let i = 0; i < 4; i++) {
        graph.set({ coord: tile, facing: i }, [
          { node: { coord: tile, facing: turn(i, true) }, weight: 1000 },
          { node: { coord: tile, facing: turn(i, false) }, weight: 1000 },
        ]);
      }

      if (map[tile[0] - 1][tile[1]] !== "#") {
        // Tile above is open
        const neighborTile: [number, number] = [tile[0] - 1, tile[1]];
        if (
          !nextTilesToExplore.some(
            (t) => t[0] === neighborTile[0] && t[1] === neighborTile[1]
          ) &&
          !exploredTiles.some(
            (t) => t[0] === neighborTile[0] && t[1] === neighborTile[1]
          )
        ) {
          nextTilesToExplore.push(neighborTile);
        }
        let edges = graph.get({ coord: tile, facing: Direction.Up });
        edges &&
          edges.push({
            node: { coord: neighborTile, facing: Direction.Up },
            weight: 1,
          });
      } else if (map[tile[0]][tile[1] + 1] !== "#") {
        // Tile to the right is open
        const neighborTile: [number, number] = [tile[0], tile[1] + 1];
        if (
          !nextTilesToExplore.some(
            (t) => t[0] === neighborTile[0] && t[1] === neighborTile[1]
          ) &&
          !exploredTiles.some(
            (t) => t[0] === neighborTile[0] && t[1] === neighborTile[1]
          )
        ) {
          nextTilesToExplore.push(neighborTile);
        }
        let edges = graph.get({ coord: tile, facing: Direction.Right });
        edges &&
          edges.push({
            node: { coord: neighborTile, facing: Direction.Right },
            weight: 1,
          });
      } else if (map[tile[0] + 1][tile[1]] !== "#") {
        // Tile below is open
        const neighborTile: [number, number] = [tile[0] + 1, tile[1]];
        if (
          !nextTilesToExplore.some(
            (t) => t[0] === neighborTile[0] && t[1] === neighborTile[1]
          ) &&
          !exploredTiles.some(
            (t) => t[0] === neighborTile[0] && t[1] === neighborTile[1]
          )
        ) {
          nextTilesToExplore.push(neighborTile);
        }
        let edges = graph.get({ coord: tile, facing: Direction.Down });
        edges &&
          edges.push({
            node: { coord: neighborTile, facing: Direction.Down },
            weight: 1,
          });
      } else if (map[tile[0]][tile[1] - 1] !== "#") {
        // Tile to the left is open
        const neighborTile: [number, number] = [tile[0], tile[1] - 1];
        if (
          !nextTilesToExplore.some(
            (t) => t[0] === neighborTile[0] && t[1] === neighborTile[1]
          ) &&
          !exploredTiles.some(
            (t) => t[0] === neighborTile[0] && t[1] === neighborTile[1]
          )
        ) {
          nextTilesToExplore.push(neighborTile);
        }
        let edges = graph.get({ coord: tile, facing: Direction.Left });
        edges &&
          edges.push({
            node: { coord: neighborTile, facing: Direction.Left },
            weight: 1,
          });
      }

      tilesToExplore = nextTilesToExplore;
      exploredTiles.push(tile);
    });
  }

  return (
    <div>
      <h2>Day 16</h2>
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
      Coming Soon...
    </div>
  );
}
