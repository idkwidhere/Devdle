import React, { useEffect, useState } from 'react'

export default function OSKeyboard({ keyStatus }) {
  const [letters, setLetters] = useState(null)

  useEffect(() => {
    fetch('https://codemeaaron.com/wordslist.json/letters')
    .then(res => res.json())
    .then(json => {
        setLetters(json)
    })
    .catch(e => {console.log(e)})
  }, [])

//   console.log(letters)
    return (
    <div className={`inline-block max-w-[500px] m-[20px] `}>
        {letters && letters?.map((l) => {
            // const color = keyStatus[l.key]
            // console.log(color)

        return(
            <div key={l.key}
            className={`m-[5px] w-[40px] h-[50px] inline-block rounded-md bg-[#eee] leading-[50px] `}
            >
                 {l.key} 
            </div>
        )
    })}
    </div>
  )
}
