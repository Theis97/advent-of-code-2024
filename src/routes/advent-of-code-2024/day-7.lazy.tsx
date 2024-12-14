import { createLazyFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createLazyFileRoute('/advent-of-code-2024/day-7')({
  component: DaySeven,
})

const partTwoSolve = (
  currentValue: number,
  target: number,
  remaining: number[],
): boolean => {
  const concated = parseInt(currentValue.toString() + remaining[0].toString())
  if (remaining.length === 1) {
    const added = currentValue + remaining[0]
    const multiplied = currentValue * remaining[0]

    if (added === target || multiplied === target || concated === target) {
      return true
    } else {
      return false
    }
  } else {
    return (
      partTwoSolve(currentValue + remaining[0], target, remaining.slice(1)) ||
      partTwoSolve(currentValue * remaining[0], target, remaining.slice(1)) ||
      partTwoSolve(concated, target, remaining.slice(1))
    )
  }
}

const partOneSolve = (
  currentValue: number,
  target: number,
  remaining: number[],
): boolean => {
  if (remaining.length === 1) {
    const added = currentValue + remaining[0]
    const multiplied = currentValue * remaining[0]

    if (added === target || multiplied === target) {
      return true
    } else {
      return false
    }
  } else {
    return (
      partOneSolve(currentValue + remaining[0], target, remaining.slice(1)) ||
      partOneSolve(currentValue * remaining[0], target, remaining.slice(1))
    )
  }
}

function DaySeven() {
  const [input, setInput] = useState('')

  const inputLines = input.trim().split('\n')

  let partOneCalibration = 0
  let partTwoCalibration = 0
  if (input !== '') {
    inputLines.forEach((line) => {
      const splitLine = line.split(':')
      const testValue = parseInt(splitLine[0])
      const operands = splitLine[1]
        .trim()
        .split(' ')
        .map((value) => parseInt(value))
      const isPartOnePossible = partOneSolve(
        operands[0],
        testValue,
        operands.slice(1),
      )
      const isPartTwoPossible = partTwoSolve(
        operands[0],
        testValue,
        operands.slice(1),
      )
      partOneCalibration = isPartOnePossible
        ? partOneCalibration + testValue
        : partOneCalibration
      partTwoCalibration = isPartTwoPossible
        ? partTwoCalibration + testValue
        : partTwoCalibration
    })
  }

  return (
    <div>
      <h2>Day 7</h2>
      <label>Input: </label>
      <input
        type="file"
        onChange={(e) => {
          const reader = new FileReader()
          if (e.target.files) {
            reader.readAsText(e.target.files[0])

            reader.onload = function () {
              if (typeof reader.result === 'string') {
                setInput(reader.result)
              }
            }

            reader.onerror = function () {
              console.log(reader.error)
            }
          }
        }}
      />
      Part One Answer: {partOneCalibration}; Part Two Answer:{' '}
      {partTwoCalibration}
    </div>
  )
}
