import React from 'react'

export default function WinLose({correct, turn, dailyWord}) {


  return (
    <div className='bg-slate-300 bg-opacity-60 fixed w-screen h-screen top-0 left-0'>
        {correct && (
            <div className='mt-[20vh] max-w-[480px] bg-slate-300 p-[40px] border-4 rounded-[10px] m-auto shadow-lg'>
                
                <p className='text-green-600 font-bold text-[2vw] uppercase '>{dailyWord}</p>
                <h1>You did it!</h1>
                <p>You got the answer in {turn} guesses!</p>
            </div>
        )}
        {!correct && (
            <div className='mt-[20vh] max-w-[480px] bg-slate-300 p-[40px] border-4 rounded-[10px] m-auto shadow-lg'>
                
                <p className='text-green-600 font-bold text-[2vw] uppercase '>{dailyWord}</p>
                <h1>You suck!</h1>
                <p>Try again tomorrow!</p>
        </div>
        )}
    </div>
  )
}
