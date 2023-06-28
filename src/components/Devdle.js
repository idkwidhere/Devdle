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

        let defPlayerData = {
            "plays": 0,
            "dailyStreak": 0,
            "winStreak": 0,
            "wins": 0,
            "losses": 0,
            "time": 0
      
        }
      
        var preFlight = JSON.parse(localStorage.getItem("playerData"))
        if(!preFlight){
          localStorage.setItem("playerData", JSON.stringify(defPlayerData))
        }

        let playerData = preFlight

        // console.log(checkData)
       if(playerData.time === 1){
        window.removeEventListener('keyup', handleKeys)
        setTimeout(() => setShowWinLose(true), 200)
       }

        if(correct){ //set after win stuff here
            

            
            playerData.wins ++ 
            playerData.dailyStreak ++ 
            playerData.winStreak ++
            playerData.plays ++
            playerData.time = 1
            localStorage.setItem("playerData", JSON.stringify(playerData))
            window.removeEventListener('keyup', handleKeys)
            setTimeout(() => setShowWinLose(true), 1500)
            return
        }
        console.log(turn)

        if(turn > 5){ // set lose stuff here
            
            
            playerData.losses += 1
            playerData.dailyStreak += 1
            playerData.winStreak = 0
            playerData.plays += 1
            playerData.time = 1
            localStorage.setItem("playerData", JSON.stringify(playerData))
            window.removeEventListener('keyup', handleKeys)
            setTimeout(() => setShowWinLose(true), 1500)
            return
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