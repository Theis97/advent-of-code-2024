import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import styled from "styled-components";
import { run3BitProgram } from "../../common/day17";

export const Route = createLazyFileRoute("/advent-of-code-2024/day-17")({
  component: DaySeventeen,
});

function DaySeventeen() {
  const [input, setInput] = useState("");
  const [customRegA, setCustomRegA] = useState(0);
  const [customRegB, setCustomRegB] = useState(0);
  const [customRegC, setCustomRegC] = useState(0);
  const [customProgram, setCustomProgram] = useState<string>("");
  const [customProgramOutput, setCustomProgramOutput] = useState<number[]>([]);
  const [partTwoAnswer, setPartTwoAnswer] = useState(-1);

  const partTwoWorker = new Worker(
    new URL("../../webworkers/day-17-part-2.ts", import.meta.url),
    { type: "module" }
  );
  partTwoWorker.onmessage = (e) => {
    setPartTwoAnswer(e.data);
  };

  const inputLines = input.trim().split("\n");
  let output: number[] = [];
  if (inputLines.length > 1) {
    const regA = parseInt(inputLines[0].split(":")[1].trim());
    const regB = parseInt(inputLines[1].split(":")[1].trim());
    const regC = parseInt(inputLines[2].split(":")[1].trim());

    const program = inputLines[4].split(":")[1].trim().split(",");

    output = run3BitProgram(regA, regB, regC, program);

    partTwoWorker.postMessage({ regA: 0, regB, regC, program });
  }

  return (
    <div>
      <h2>Day 17</h2>
      <Flex>
        <ColumnFlex>
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
          </div>
          <div>Program output: {output.join(",")} </div>
          <div>Part 2 Answer: {partTwoAnswer}</div>
        </ColumnFlex>
        <div>
          <ColumnFlex>
            <CustomInput>
              <label>Register A: </label>
              <input
                type="number"
                onChange={(e) => {
                  setCustomRegA(parseInt(e.target.value));
                }}
              />
            </CustomInput>
            <CustomInput>
              <label>Register B: </label>
              <input
                type="number"
                onChange={(e) => {
                  setCustomRegB(parseInt(e.target.value));
                }}
              />
            </CustomInput>
            <CustomInput>
              <label>Register C: </label>
              <input
                type="number"
                onChange={(e) => {
                  setCustomRegC(parseInt(e.target.value));
                }}
              />
            </CustomInput>
            <CustomInput>
              <label>Program: </label>
              <input
                type="text"
                onChange={(e) => {
                  setCustomProgram(e.target.value);
                }}
              />
            </CustomInput>
            <button
              onClick={() => {
                const cleanedCustomProgram = customProgram.split(",");
                setCustomProgramOutput(
                  run3BitProgram(
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
          </ColumnFlex>
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

const ColumnFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

const CustomInput = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;

  label {
    margin-right: 5px;
  }
`;
