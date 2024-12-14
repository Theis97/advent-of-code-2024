import { createLazyFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createLazyFileRoute('/advent-of-code-2024/day-6')({
  component: DaySix,
})

enum Direction {
  Up,
  Right,
  Down,
  Left,
}

function DaySix() {
  const [input, setInput] = useState('')

  const inputLines = input.trim().split('\n')

  let map: string[][] = []
  let startRow = -1
  let startCol = -1
  for (let i = 0; i < inputLines.length; i++) {
    map.push([])
    for (let j = 0; j < inputLines[i].length; j++) {
      map[i].push(inputLines[i][j])
      if (inputLines[i][j] === '^') {
        startRow = i
        startCol = j
      }
    }
  }

  let tilesVisitedCount = 0
  let isFinished = false
  let currentRow = startRow
  let currentCol = startCol
  let direction: Direction = Direction.Up
  if (input !== '') {
    while (!isFinished) {
      if (map[currentRow][currentCol] !== 'X') {
        tilesVisitedCount++
      }
      map[currentRow][currentCol] = 'X'

      let moveDecided = false
      let nextRow = currentRow
      let nextCol = currentCol
      while (!moveDecided) {
        switch (direction) {
          case Direction.Up:
            nextRow--
            break
          case Direction.Right:
            nextCol++
            break
          case Direction.Down:
            nextRow++
            break
          case Direction.Left:
            nextCol--
            break
        }
        // if our next step is out of bounds, we're done!
        if (
          nextRow < 0 ||
          nextRow >= map.length ||
          nextCol < 0 ||
          nextCol >= map[currentRow].length
        ) {
          isFinished = true
          break
        }

        // If our next step is blocked, try turning right first
        if (map[nextRow][nextCol] === '#') {
          nextRow = currentRow
          nextCol = currentCol
          direction = (direction + 1) % 4
        } else {
          // The space we want to try moving to is open, so we can go ahead
          // and lock in our decision to move there
          moveDecided = true
        }
      }

      // Take the step
      currentRow = nextRow
      currentCol = nextCol
    }
  }

  return (
    <div>
      <h2>Day 6</h2>
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
      Spaces visited by guard: {tilesVisitedCount}
    </div>
  )
}
