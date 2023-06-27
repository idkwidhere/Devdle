import React, { useEffect } from 'react'
import useDevdle from '../hooks/useDevdle'
import DevdleGrid from './DevdleGrid'

export default function Devdle({ dailyWord }){

    const { cGuess, handleKeys, guesses, correct, turn } = useDevdle(dailyWord)

    useEffect(() => {
        window.addEventListener('keyup', handleKeys)

        return () => window.removeEventListener('keyup', handleKeys)
    }, [handleKeys])


    useEffect(() => {
        console.log(guesses, turn, correct);
    }, [guesses, turn, correct])


    return(
        <div>
            <DevdleGrid cGuess={cGuess} guesses={guesses} turn={turn}/>
            <div>{dailyWord}</div>
            <div>{cGuess}</div>
        </div>
        
    )
}