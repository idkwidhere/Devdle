import React from 'react'

export default function DevdleRow( { guess } ) {

    if(guess) {
        return (
            <div className="text-center flex justify-center">
                {guess.map((letter, i) => (
                    <div className="block w-[60px] h-[60px] border-2 border-gray-700 m-1 text-center leading-[60px] uppercase text-[2.5em] font-bold"
                    key={i}>
                        {letter.key}
                    </div>
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
