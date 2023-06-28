import React, { useEffect, useState } from 'react'

export default function OSKeyboard() {
  const [letters, setLetters] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/letters')
    .then(res => res.json())
    .then(json => {
        setLetters(json)
    })
  }, [])

    return (
    <div className={`w-max-[500px] m-[20px]`}>
        {letters && letters.map((l) => {
        return(
            <div key={l.key}
            className='m-[5px] w-[40px] h-[50px] inline-block rounded-md bg-[#eee] leading-[50px]'
            > {l.key} </div>
        )
    })}
    </div>
  )
}
