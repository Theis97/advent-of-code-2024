import { createLazyFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createLazyFileRoute('/advent-of-code-2024/day-1')({
  component: DayOne,
})

function DayOne() {
  const [input, setInput] = useState('')

  const inputLines = input.trim().split('\n')
  let leftList: number[] = []
  let rightList: number[] = []
  let rightListNumberCounts: Map<number, number> = new Map()
  inputLines.forEach((line) => {
    let numbers = line.split('   ')
    leftList.push(parseInt(numbers[0]))
    const rightNumber = parseInt(numbers[1])
    const rightNumberCount = rightListNumberCounts.get(rightNumber)
    rightList.push(rightNumber)
    rightListNumberCounts.set(
      rightNumber,
      rightNumberCount !== undefined ? rightNumberCount + 1 : 1,
    )
  })

  leftList.sort()
  rightList.sort()

  let distance = 0
  let similarity = 0
  for (let i = 0; i < leftList.length; i++) {
    distance += Math.abs(leftList[i] - rightList[i])

    const timesInRightList = rightListNumberCounts.get(leftList[i])
    if (timesInRightList !== undefined) {
      similarity += leftList[i] * timesInRightList
    }
  }

  return (
    <div>
      <h2>Day 1</h2>
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
      Distance: {distance}, Similarity: {similarity}
    </div>
  )
}
