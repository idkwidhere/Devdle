import { useEffect, useState } from "react";
import Devdle from "./components/Devdle";

function App() {

  const [dailyWord, setDailyWord] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/dailywords')
    .then(res => res.json())
    .then(json => {
      // random int between 0 and end of list
      const randomWord = json[Math.floor(Math.random()*json.length)]
      setDailyWord(randomWord.word)
    })
  }, [setDailyWord])



  return (
    <div className="App text-center">
      <h1 className="text-[1.2em] p-[20px] font-veranda m-0 mb-[30px] border-b-2 border-b-red-600 bg-[#333]">Devdle</h1>
      {dailyWord && <Devdle dailyWord={dailyWord}/>}
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