import React, { useEffect, useState } from 'react'
import useDevdle from '../hooks/useDevdle'
import DevdleGrid from './DevdleGrid'
import OSKeyboard from './OSKeyboard'
import WinLose from './WinLose'

export default function Devdle({ dailyWord }){

    const { cGuess, handleKeys, guesses, correct, turn, keyStatus } = useDevdle(dailyWord)
    const [showWinLose, setShowWinLose] = useState(false)

    useEffect(() => {
        window.addEventListener('keyup', handleKeys)

        if(correct){ //set after win stuff here

            window.removeEventListener('keyup', handleKeys)
        }

        if(turn > 5){ // set lose stuff here
            window.removeEventListener('keyup', handleKeys)
        }

        return () => window.removeEventListener('keyup', handleKeys)
    }, [handleKeys, correct, turn])



    return(
        <div>
            <DevdleGrid cGuess={cGuess} guesses={guesses} turn={turn}/>
            <OSKeyboard keyStatus={keyStatus} />
            {showWinLose && <WinLose correct={correct}  turn={turn} dailyWord={dailyWord}/>}
            {/* <div>{cGuess}</div> */}
            
        </div>
        
    )
}