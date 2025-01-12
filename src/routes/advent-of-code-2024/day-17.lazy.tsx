import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import styled from "styled-components";

export const Route = createLazyFileRoute("/advent-of-code-2024/day-17")({
  component: DaySeventeen,
});

const runProgram = (
  regAInit: number,
  regBInit: number,
  regCInit: number,
  program: string[]
) => {
  let regA = regAInit;
  let regB = regBInit;
  let regC = regCInit;
  let output: number[] = [];
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

  return output;
};

function DaySeventeen() {
  const [input, setInput] = useState("");
  const [customRegA, setCustomRegA] = useState(0);
  const [customRegB, setCustomRegB] = useState(0);
  const [customRegC, setCustomRegC] = useState(0);
  const [customProgram, setCustomProgram] = useState<string>("");
  const [customProgramOutput, setCustomProgramOutput] = useState<number[]>([]);

  const inputLines = input.trim().split("\n");
  let output: number[] = [];
  let partTwoAnswer = 0;
  if (inputLines.length > 1) {
    const regA = parseInt(inputLines[0].split(":")[1].trim());
    const regB = parseInt(inputLines[1].split(":")[1].trim());
    const regC = parseInt(inputLines[2].split(":")[1].trim());

    const program = inputLines[4].split(":")[1].trim().split(",");

    output = runProgram(regA, regB, regC, program);
  }

  return (
    <div>
      <h2>Day 17</h2>
      <Flex>
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
          Program output: {output.join(",")}, Part 2 Answer: {partTwoAnswer}
        </div>
        <div>
          <CustomProgramSubmission>
            <div>
              <label>Register A: </label>
              <input
                type="number"
                onChange={(e) => {
                  setCustomRegA(parseInt(e.target.value));
                }}
              />
            </div>
            <div>
              <label>Register B: </label>
              <input
                type="number"
                onChange={(e) => {
                  setCustomRegB(parseInt(e.target.value));
                }}
              />
            </div>
            <div>
              <label>Register C: </label>
              <input
                type="number"
                onChange={(e) => {
                  setCustomRegC(parseInt(e.target.value));
                }}
              />
            </div>
            <div>
              <label>Program: </label>
              <input
                type="text"
                onChange={(e) => {
                  setCustomProgram(e.target.value);
                }}
              />
            </div>
            <button
              onClick={() => {
                const cleanedCustomProgram = customProgram.split(",");
                setCustomProgramOutput(
                  runProgram(
                    customRegA,
                    customRegB,
                    customRegC,
                    cleanedCustomProgram
                  )
                );
              }}
            >
              Submit
            </button>
          </CustomProgramSubmission>
          <div>Output: {customProgramOutput.join(",")}</div>
        </div>
      </Flex>
    </div>
  );
}

const Flex = styled.div`
  display: flex;

  > div {
    padding: 10px;
  }
`;

const CustomProgramSubmission = styled.div`
  display: flex;
  flex-direction: column;
`;
