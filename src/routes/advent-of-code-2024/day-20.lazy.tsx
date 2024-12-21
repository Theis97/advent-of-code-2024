import { createLazyFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createLazyFileRoute('/advent-of-code-2024/day-20')({
  component: DayTwenty,
})

function DayTwenty() {
  const [input, setInput] = useState('')

  const inputLines = input.trim().split('\n')
  console.log(inputLines)

  return (
    <div>
      <h2>Day 20</h2>
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
      Coming Soon...
    </div>
  )
}
