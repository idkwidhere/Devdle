import React from 'react'

export default function DevdleRow( { guess, cGuess } ) {

    if(guess) {
        return (
            <div className="text-center flex justify-center">
                {guess.map((letter, i) => (
                    <div className={`  block w-[60px] h-[60px] border-2 border-gray-700 m-1 text-center leading-[60px] uppercase text-[2.5em] font-bold
                    ${letter.color === "green" ? ' animate-reveal-correct border-[#19b319]' : null} ${letter.color === "yellow" ? ' border-[#fccf03] animate-reveal-close': null}
                    ${letter.color === "grey" ? 'animate-reveal-wrong' : null}   `
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
            <div className={ ` text-center flex justify-center `}>
                {letters.map((letter, i) => (
                    <div key={i} className={`block w-[60px] h-[60px] border-2 border-gray-700 m-1 text-center leading-[60px] uppercase text-[2.5em] font-bold animate-bounce`}>{letter}</div>
                ))}
                {[...Array(5 - letters.length)].map((_, i)=>(
                    <div key={i} className='block w-[60px] h-[60px] border-2 border-gray-700 m-1 text-center leading-[60px] uppercase text-[2.5em] font-bold'></div>
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
