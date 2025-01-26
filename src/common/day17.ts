export interface ProgramData {
  regA: number;
  regB: number;
  regC: number;
  program: string[];
}

export function isProgramData(obj: any): obj is ProgramData {
  return (
    obj.regA !== undefined &&
    typeof obj.regA === "number" &&
    obj.regB !== undefined &&
    typeof obj.regB === "number" &&
    obj.regC !== undefined &&
    typeof obj.regC === "number" &&
    obj.program !== undefined &&
    obj.program.every !== undefined &&
    obj.program.every((value: any) => typeof value === "string")
  );
}

export const run3BitProgram = (
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
