import React from 'react'

export default function DevdleRow( { guess, cGuess } ) {

    if(guess) {
        return (
            <div className="text-center flex justify-center">
                {guess.map((letter, i) => (
                    <div className={`  block w-[60px] h-[60px] border-2 border-gray-700 m-1 text-center leading-[60px] uppercase text-[2.5em] font-bold
                    ${letter.color === "green" ? 'border-green-500 bg-green-500' : null} ${letter.color === "yellow" ? 'bg-yellow-300': null}
                    ${letter.color === "grey" ? 'bg-gray-500' : null}`
                }
                    key={i}>
                        {letter.key}
                    </div>
                ))}
            </div>
        )
    }


    if(cGuess){
        let letters = cGuess.split('')
        return(
            <div className={ `${cGuess===true ? 'text-center flex justify-center' : null} `}>
                {letters.map((letter, i) => (
                    <div key={i} className={``}>{letter}</div>
                ))}
                {[...Array(5-letters.length)].map((v, i)=>(
                    <div key={i}></div>
                ))}
            </div>
        )
    }

  return (
    <div className="text-center flex justify-center">
        <div className='block w-[60px] h-[60px] border-2 border-gray-700 m-1 text-center leading-[60px] uppercase text-[2.5em] font-bold'></div>
        <div className='block w-[60px] h-[60px] border-2 border-gray-700 m-1 text-center leading-[60px] uppercase text-[2.5em] font-bold'></div>
        <div className='block w-[60px] h-[60px] border-2 border-gray-700 m-1 text-center leading-[60px] uppercase text-[2.5em] font-bold'></div>
        <div className='block w-[60px] h-[60px] border-2 border-gray-700 m-1 text-center leading-[60px] uppercase text-[2.5em] font-bold'></div>
        <div className='block w-[60px] h-[60px] border-2 border-gray-700 m-1 text-center leading-[60px] uppercase text-[2.5em] font-bold'></div>

    </div>
  )
}
