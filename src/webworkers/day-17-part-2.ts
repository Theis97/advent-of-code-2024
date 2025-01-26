import { isProgramData, run3BitProgram } from "../common/day17";

onmessage = (e) => {
  if (isProgramData(e.data)) {
    let result = e.data.regA;
    let isFinished = false;
    while (!isFinished) {
      if (result >= Number.MAX_SAFE_INTEGER) {
        console.log("Worker: Reached Maximum Limit");
        break;
      }
      if (result % 10000000 === 0) {
        console.log(`Worker: Tested up to ${result}`);
      }

      const testOutput = run3BitProgram(
        result,
        e.data.regB,
        e.data.regC,
        e.data.program
      );
      if (
        e.data.program.length === testOutput.length &&
        e.data.program.every(
          (value, index) => parseInt(value) === testOutput[index]
        )
      ) {
        isFinished = true;
      } else {
        result++;
      }
    }
    postMessage(result);
  } else {
    console.log("Worker: Received invalid data");
  }
};
