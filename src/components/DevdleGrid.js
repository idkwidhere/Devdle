import React from 'react'
import DevdleRow from './DevdleRow'

export default function DevdleGrid({ cGuess, guesses, turn }) {
  return (
    <div>
        {guesses.map((g, i) => {
            return <DevdleRow key={i} guess={g} />
            })}
    </div>
  )
}
