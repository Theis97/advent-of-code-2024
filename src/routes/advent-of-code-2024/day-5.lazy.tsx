import { createLazyFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createLazyFileRoute('/advent-of-code-2024/day-5')({
  component: DayFive,
})

function DayFive() {
  const [input, setInput] = useState('')

  const splitInput = input.trim().split('\n\n')

  const rawRules = splitInput.length > 1 ? splitInput[0].split('\n') : []
  const updates = splitInput.length > 1 ? splitInput[1].split('\n') : []

  // Maps each page to a list of all the numbers that must be after it
  // if they appear in the same update
  const rules = new Map<number, Set<number>>()

  for (const rule of rawRules) {
    const pages = rule.split('|')
    const leftPage = parseInt(pages[0])
    const rightPage = parseInt(pages[1])
    const existingRules = rules.get(leftPage)
    if (existingRules === undefined) {
      rules.set(leftPage, new Set([rightPage]))
    } else {
      existingRules.add(rightPage)
    }
  }

  let correctlyOrderedSum = 0
  updates.forEach((update) => {
    const pages = update.split(',').map((value) => parseInt(value))

    let seenPages: number[] = []
    let isCorrectOrder = true
    for (let page of pages) {
      // Check if this page violates the rules
      // i.e. one of the pages we already saw earlier in the list is supposed to come after this page
      const followingPageRules = rules.get(page)
      if (
        followingPageRules &&
        seenPages.some((previousPage) => followingPageRules.has(previousPage))
      ) {
        isCorrectOrder = false
        break
      }

      seenPages.push(page)
    }

    if (isCorrectOrder) {
      correctlyOrderedSum += pages[Math.floor(pages.length / 2)]
    }
  })

  return (
    <div>
      <h2>Day 5</h2>
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
      Part One Answer: {correctlyOrderedSum}; Part Two Answer: Coming soon...
    </div>
  )
}
