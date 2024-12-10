import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createLazyFileRoute("/advent-of-code-2024/day-nine")({
  component: DayNine,
});

function DayNine() {
  const [input, setInput] = useState("");

  const diskMap = input.trim();

  let fileId = 0;
  let memory: number[] = [];
  for (let i = 0; i < diskMap.length; i++) {
    const blockSize = parseInt(diskMap[i]);
    if (i % 2 === 0) {
      // file
      for (let j = 0; j < blockSize; j++) {
        memory.push(fileId);
      }
      fileId++;
    } else {
      // empty space, represented by -1
      for (let j = 0; j < blockSize; j++) {
        memory.push(-1);
      }
    }
  }

  let leftBound = 0;
  let rightBound = memory.length - 1;
  while (leftBound <= rightBound) {
    const leftBlock = memory[leftBound];
    const rightBlock = memory[rightBound];
    if (leftBlock === -1 && rightBlock !== -1) {
      memory[leftBound] = rightBlock;
      memory[rightBound] = -1;
      leftBound++;
      rightBound--;
    } else {
      if (leftBlock !== -1) {
        leftBound++;
      }
      if (rightBlock === -1) {
        rightBound--;
      }
    }
  }

  let checksum = 0;
  for (let i = 0; i < memory.length; i++) {
    const block = memory[i];
    if (block === -1) {
      break;
    }
    checksum += i * block;
  }

  return (
    <div>
      <label>Day 9 input: </label>
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
      Part One Checksum: {checksum}; Part Two Checksum: Coming soon...
    </div>
  );
}
