import { useEffect, useState } from "react";
import Devdle from "./components/Devdle";

function App() {

  const [dailyWord, setDailyWord] = useState(null)

  useEffect(() => {
    fetch('https://codemeaaron.com/wordslist.json/dailywords')
    .then(res => res.json())
    .then(json => {
      // random int between 0 and end of list
      const randomWord = json[Math.floor(Math.random()*json.length)] //picks word for the session not day
      setDailyWord(randomWord.word)
    })
    .catch(e => {console.log(e)})
  }, [setDailyWord])

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

  return (
    <div className="App text-center">
      <h1 className="text-[5vh] p-[20px] font-semibold m-0 mb-[30px] border-b-2 border-b-cyan-500 "><span className="animate-pulse">_</span>Devdle</h1>
      {dailyWord && <Devdle dailyWord={dailyWord} />}
    </div>
  );
}

export default App;


/* 
data to track:
  --solution
    -- 5 letter string
  -- past guesses
    --array of past guesses
    --each past is array of letter objects
    --each object is a guess, letter a color green
  -- current guess
    -- string 'pisss'
  --keyboard letters
    -- array of letter objects
  -- number of turns
    -- integer 0 to 6

game:
  -- guesses
    -- player enters a letter and the square populates with that letter
    -- 

*/