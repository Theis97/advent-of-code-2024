import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createLazyFileRoute("/advent-of-code-2024/day-8")({
  component: DayEight,
});

const isNodeInBounds = (
  node: [number, number],
  heightBound: number,
  widthBound: number
) => {
  return (
    node[0] >= 0 &&
    node[0] < heightBound &&
    node[1] >= 0 &&
    node[1] < widthBound
  );
};

const calculateAntinodesPartTwo = (
  coordOne: [number, number],
  coordTwo: [number, number],
  heightBound: number,
  widthBound: number
) => {
  const heightDiff = coordOne[0] - coordTwo[0];
  const widthDiff = coordOne[1] - coordTwo[1];

  let antinodes: [number, number][] = [];

  let outNode: [number, number] = coordOne;
  while (isNodeInBounds(outNode, heightBound, widthBound)) {
    antinodes.push(outNode);
    outNode = [outNode[0] + heightDiff, outNode[1] + widthDiff];
  }

  let inNode: [number, number] = coordTwo;
  while (isNodeInBounds(inNode, heightBound, widthBound)) {
    antinodes.push(inNode);
    inNode = [inNode[0] - heightDiff, inNode[1] - widthDiff];
  }

  return antinodes;
};

const calculateAntinodesPartOne = (
  coordOne: [number, number],
  coordTwo: [number, number],
  heightBound: number,
  widthBound: number
) => {
  const heightDiff = coordOne[0] - coordTwo[0];
  const widthDiff = coordOne[1] - coordTwo[1];
  const antinodeOne: [number, number] = [
    coordOne[0] + heightDiff,
    coordOne[1] + widthDiff,
  ];
  const antinodeTwo: [number, number] = [
    coordTwo[0] - heightDiff,
    coordTwo[1] - widthDiff,
  ];

  let results: [number, number][] = [];
  if (isNodeInBounds(antinodeOne, heightBound, widthBound)) {
    results.push(antinodeOne);
  }
  if (isNodeInBounds(antinodeTwo, heightBound, widthBound)) {
    results.push(antinodeTwo);
  }

  return results;
};

function DayEight() {
  const [input, setInput] = useState("");

  const inputLines = input.trim().split("\n");

  const mapWidth = inputLines[0].length;
  const mapHeight = inputLines.length;

  const antennas = new Map<string, [number, number][]>();
  for (let i = 0; i < mapHeight; i++) {
    for (let j = 0; j < mapWidth; j++) {
      const frequency = inputLines[i][j];
      if (frequency !== ".") {
        const antennaCoords = antennas.get(frequency);
        if (antennaCoords) {
          antennaCoords.push([i, j]);
        } else {
          antennas.set(frequency, [[i, j]]);
        }
      }
    }
  }

  const partOneUniqueAntinodes: [number, number][] = [];
  const partTwoUniqueAntinodes: [number, number][] = [];
  antennas.forEach((antennaCoords) => {
    for (let i = 0; i < antennaCoords.length - 1; i++) {
      for (let j = i + 1; j < antennaCoords.length; j++) {
        const partOneAntinodes = calculateAntinodesPartOne(
          antennaCoords[i],
          antennaCoords[j],
          mapHeight,
          mapWidth
        );
        partOneAntinodes.forEach((antinode) => {
          if (
            partOneUniqueAntinodes.every(
              (uniqueAntiode) =>
                uniqueAntiode[0] !== antinode[0] ||
                uniqueAntiode[1] !== antinode[1]
            )
          ) {
            partOneUniqueAntinodes.push(antinode);
          }
        });
        const partTwoAntinodes = calculateAntinodesPartTwo(
          antennaCoords[i],
          antennaCoords[j],
          mapHeight,
          mapWidth
        );
        partTwoAntinodes.forEach((antinode) => {
          if (
            partTwoUniqueAntinodes.every(
              (uniqueAntiode) =>
                uniqueAntiode[0] !== antinode[0] ||
                uniqueAntiode[1] !== antinode[1]
            )
          ) {
            partTwoUniqueAntinodes.push(antinode);
          }
        });
      }
    }
  });

  return (
    <div>
      <h2>Day 8</h2>
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
      Part 1 antinode count: {partOneUniqueAntinodes.length}; Part 2 antinode
      count: {partTwoUniqueAntinodes.length}
    </div>
  );
}
