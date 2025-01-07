import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createLazyFileRoute("/advent-of-code-2024/day-17")({
  component: DaySeventeen,
});

function DaySeventeen() {
  const [input, setInput] = useState("");

  const inputLines = input.trim().split("\n");
  let output: number[] = [];
  if (inputLines.length > 1) {
    let regA = parseInt(inputLines[0].split(":")[1].trim());
    let regB = parseInt(inputLines[1].split(":")[1].trim());
    let regC = parseInt(inputLines[2].split(":")[1].trim());

    const program = inputLines[4].split(":")[1].trim().split(",");

    let instructionPointer = 0;

    while (instructionPointer >= 0 && instructionPointer < program.length - 1) {
      const instruction = program[instructionPointer];
      const literalOperand = parseInt(program[instructionPointer + 1]);

      const comboOperand =
        literalOperand === 4
          ? regA
          : literalOperand === 5
            ? regB
            : literalOperand === 6
              ? regC
              : literalOperand; // We're not worrying about reserved and invalid operands for now

      switch (instruction) {
        case "0":
          regA = Math.floor(regA / 2 ** comboOperand);
          instructionPointer += 2;
          break;
        case "1":
          // bxl
          regB = regB ^ literalOperand;
          instructionPointer += 2;
          break;
        case "2":
          // bst
          regB = comboOperand % 8;
          instructionPointer += 2;
          break;
        case "3":
          // jnz
          if (regA !== 0) {
            instructionPointer = literalOperand;
          } else {
            instructionPointer += 2;
          }
          break;
        case "4":
          // bxc
          regB = regB ^ regC;
          instructionPointer += 2;
          break;
        case "5":
          // out
          output.push(comboOperand % 8);
          instructionPointer += 2;
          break;
        case "6":
          // bdv
          regB = Math.floor(regA / 2 ** comboOperand);
          instructionPointer += 2;
          break;
        case "7":
          // cdv
          regC = Math.floor(regA / 2 ** comboOperand);
          instructionPointer += 2;
          break;
        default:
          // We'll just ignore invalid opcodes for now
          instructionPointer += 2;
      }
    }
  }

  return (
    <div>
      <h2>Day 17</h2>
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
      {output.join(",")}
    </div>
  );
}
