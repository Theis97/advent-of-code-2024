import { createLazyFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createLazyFileRoute('/advent-of-code-2024/day-3')({
  component: DayThree,
})

const instructionRegex = /mul\(\d{1,3},\d{1,3}\)/g
// matches portions of input in which muls are disabled
const disabledRegex = /don't\(\).*?(?:do\(\)|$)/g
const operandRegex = /(\d+)/g

function DayThree() {
  const [input, setInput] = useState('')
  const inputLines = input.trim().replace(/\s/g, '')

  const allMuls = [...inputLines.matchAll(instructionRegex)]

  let partOneAnswer = 0
  for (const mulInst of allMuls) {
    const operands = mulInst[0].match(operandRegex)
    if (operands && operands.length === 2) {
      partOneAnswer += parseInt(operands[0]) * parseInt(operands[1])
    }
  }

  let disabledMulValues = 0
  const disabledSections = [...inputLines.matchAll(disabledRegex)]
  for (const section of disabledSections) {
    const sectionResult = [...section[0].matchAll(instructionRegex)]
    for (const mulInst of sectionResult) {
      const operands = mulInst[0].match(operandRegex)
      if (operands && operands.length === 2) {
        disabledMulValues += parseInt(operands[0]) * parseInt(operands[1])
      }
    }
  }

  return (
    <div>
      <h2>Day 3</h2>
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
      Part One Answer: {partOneAnswer}; Part 2 Answer:{' '}
      {partOneAnswer - disabledMulValues}
    </div>
  )
}
