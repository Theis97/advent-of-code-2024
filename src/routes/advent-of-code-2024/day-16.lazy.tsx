import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { removeAt } from "../../tools/array";
import styled, { css } from "styled-components";

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

const nodeToKey = (node: Node) => {
  return `${node.coord[0]},${node.coord[1]},${node.facing}`;
};

// Assumes nodeToKey was used to form the key string
// const keyToNode = (key: string): Node => {
//   const values = key.split(",").map((str) => parseInt(str));
//   return { coord: [values[0], values[1]], facing: values[2] };
// };

const isSameNode = (nodeA: Node, nodeB: Node) => {
  return (
    nodeA.coord[0] === nodeB.coord[0] &&
    nodeA.coord[1] === nodeB.coord[1] &&
    nodeA.facing === nodeB.facing
  );
};

// The following solution seems to work for the given test examples,
// but fails for the real input and is also very slow.
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
  let graph = new Map<string, Edge[]>();
  while (tilesToExplore.length > 0 && startTile[0] !== -1) {
    let nextTilesToExplore: [number, number][] = [];
    tilesToExplore.forEach((tile) => {
      // create 4 nodes for each direction you can face on this tile
      for (let i = 0; i < 4; i++) {
        graph.set(nodeToKey({ coord: tile, facing: i }), [
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
        let edges = graph.get(nodeToKey({ coord: tile, facing: Direction.Up }));
        edges &&
          edges.push({
            node: { coord: neighborTile, facing: Direction.Up },
            weight: 1,
          });
      }
      if (map[tile[0]][tile[1] + 1] !== "#") {
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
        let edges = graph.get(
          nodeToKey({ coord: tile, facing: Direction.Right })
        );
        edges &&
          edges.push({
            node: { coord: neighborTile, facing: Direction.Right },
            weight: 1,
          });
      }
      if (map[tile[0] + 1][tile[1]] !== "#") {
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
        let edges = graph.get(
          nodeToKey({ coord: tile, facing: Direction.Down })
        );
        edges &&
          edges.push({
            node: { coord: neighborTile, facing: Direction.Down },
            weight: 1,
          });
      }
      if (map[tile[0]][tile[1] - 1] !== "#") {
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
        let edges = graph.get(
          nodeToKey({ coord: tile, facing: Direction.Left })
        );
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

  const startNode: Node = { coord: startTile, facing: Direction.Right };
  let scoreToReachNodes = new Map<string, number>();
  graph.forEach((_, key) => {
    scoreToReachNodes.set(key, Number.MAX_SAFE_INTEGER);
  });
  scoreToReachNodes.set(nodeToKey(startNode), 0);

  let nodesToExplore = [startNode];
  let explored: Node[] = [];
  while (nodesToExplore.length > 0) {
    // get the next node to explore with the lowest distance
    let currentNode = nodesToExplore[0];
    let selectedIndex = 0;
    nodesToExplore.forEach((node, index) => {
      let currentDist = scoreToReachNodes.get(nodeToKey(currentNode));
      let thisDist = scoreToReachNodes.get(nodeToKey(node));
      if (
        thisDist !== undefined &&
        currentDist !== undefined &&
        thisDist < currentDist
      ) {
        currentNode = node;
        selectedIndex = index;
      }
    });
    nodesToExplore = removeAt(nodesToExplore, selectedIndex);
    explored.push(currentNode);

    const currentScore = scoreToReachNodes.get(nodeToKey(currentNode));
    let edges = graph.get(nodeToKey(currentNode));
    edges?.forEach((edge) => {
      if (
        !nodesToExplore.some((node) => isSameNode(node, edge.node)) &&
        !explored.some((node) => isSameNode(node, edge.node))
      ) {
        nodesToExplore.push(edge.node);
      }
      // update shortest known distances to neighbors
      if (currentScore !== undefined) {
        let newDist = currentScore + edge.weight;
        let shortestKnown = scoreToReachNodes.get(nodeToKey(edge.node));
        if (shortestKnown !== undefined && newDist < shortestKnown) {
          scoreToReachNodes.set(nodeToKey(edge.node), newDist);
        }
      }
    });
  }

  let lowestScore = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < 4; i++) {
    const endNode: Node = { coord: endTile, facing: i };
    let candidateScore = scoreToReachNodes.get(nodeToKey(endNode));
    if (candidateScore !== undefined && candidateScore < lowestScore) {
      lowestScore = candidateScore;
    }
  }

  return (
    <StyledDiv>
      <h2>Day 16</h2>
      <div>
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
        {lowestScore}
      </div>
      <Maze>
        {map.map((row) => (
          <div>
            {row.map((col) => {
              if (col === "#") {
                return <Tile wall />;
              } else {
                return <Tile />;
              }
            })}
          </div>
        ))}
      </Maze>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const Maze = styled.div`
  display: flex;
`;

const Tile = styled.div<{ wall?: boolean }>`
  width: 5px;
  height: 5px;
  background-color: white;

  ${(props) =>
    props.wall &&
    css`
      background-color: black;
    `}
`;
