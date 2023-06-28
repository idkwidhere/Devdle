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
        
        let playerData = {
            "plays": 0,
            "dailyStreak": 0,
            "winStreak": 0,
            "wins": 0,
            "losses": 0,
            "time": 0

        }

        

        // console.log(checkData)
    
       if(JSON.parse(localStorage.getItem("playerData")).time !== 0){
        window.removeEventListener('keyup', handleKeys)
        setTimeout(() => setShowWinLose(true), 200)
       }

        if(correct){ //set after win stuff here
            

            window.removeEventListener('keyup', handleKeys)
            setTimeout(() => setShowWinLose(true), 1500)
            playerData.wins ++
            playerData.dailyStreak ++
            playerData.winStreak ++
            playerData.plays ++
            playerData.time = 1
            localStorage.setItem("playerData", JSON.stringify(playerData))
            
        }

        if(turn > 5){ // set lose stuff here
            
            window.removeEventListener('keyup', handleKeys)
            setTimeout(() => setShowWinLose(true), 1500)
            playerData.losses ++
            playerData.dailyStreak ++
            playerData.winStreak = 0
            playerData.plays ++
            playerData.time = 1
            localStorage.setItem("playerData", JSON.stringify(playerData))
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