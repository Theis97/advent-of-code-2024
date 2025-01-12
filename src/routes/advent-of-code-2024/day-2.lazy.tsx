import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { removeAt } from "../../tools/array";

export const Route = createLazyFileRoute("/advent-of-code-2024/day-2")({
  component: DayTwo,
});

type Trend = "undetermined" | "increasing" | "decreasing";

const reportIsSafe = (report: number[]) => {
  let isSafe = true;
  let trend: Trend = "undetermined";
  for (let i = 0; i < report.length - 1; i++) {
    const difference = report[i] - report[i + 1];
    if (Math.abs(difference) < 1 || Math.abs(difference) > 3) {
      isSafe = false;
    }
    if (i === 0) {
      trend = difference > 0 ? "decreasing" : "increasing";
    } else {
      const currentTrend: Trend = difference > 0 ? "decreasing" : "increasing";
      if (trend !== currentTrend) {
        isSafe = false;
      }
    }
  }
  return isSafe;
};

function DayTwo() {
  const [input, setInput] = useState("");

  const inputLines = input.trim().split("\n");

  let safeReportCount = 0;
  let safeReportWithDampeningCount = 0;
  inputLines.forEach((report) => {
    const levels = report
      .trim()
      .split(" ")
      .map((value) => parseInt(value));

    if (reportIsSafe(levels)) {
      safeReportCount += 1;
    } else {
      // Just try going through removing each level
      for (let i = 0; i < levels.length; i++) {
        if (reportIsSafe(removeAt(levels, i))) {
          safeReportWithDampeningCount += 1;
          break;
        }
      }
    }
  });

  return (
    <div>
      <h2>Day 2</h2>
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
      Safe reports: {safeReportCount}; Safe reports with damping:{" "}
      {safeReportCount + safeReportWithDampeningCount}
    </div>
  );
}
