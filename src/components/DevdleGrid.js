import React from 'react'
import DevdleRow from './DevdleRow'

export default function DevdleGrid({ cGuess, guesses, turn }) {
  return (
    <div>
        {guesses.map((g, i) => {
          if(turn === i){
            return <DevdleRow key={i} cGuess={cGuess} />
          }
            return <DevdleRow key={i} guess={g} />
            })}
    </div>
  )
}
