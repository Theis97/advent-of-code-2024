import { createLazyFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createLazyFileRoute('/advent-of-code-2024/day-10')({
  component: DayTen,
})

function DayTen() {
  const [input, setInput] = useState('')

  const cleanInput = input.trim()

  return (
    <div>
      <h2>Day 10</h2>
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
