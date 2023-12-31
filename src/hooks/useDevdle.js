import { useState } from "react"

const useDevdle = (dailyWord) => {

    const [turn, setTurn] = useState(0)
    const [cGuess, setCGuess] = useState('')
    const [guesses, setGuesses] = useState([...Array(6)])
    const [previous, setPrevious] = useState([])
    const [correct, setCorrect] = useState(false)
    const [keyStatus, setKeyStatus] = useState({})
    
    
    // format the guess into array
    
    const frmtGuess = () => {
        // console.log("Formatting your guess: ", cGuess);

        let dailyWordArray = [...dailyWord]
        let frmtdGuess = [...cGuess].map((letter) => {
            return {key: letter, color: 'grey'}
        })

        //find greens
        frmtdGuess.forEach((letter, i) => {
            if(dailyWordArray[i] === letter.key){
                frmtdGuess[i].color = 'green'
                dailyWordArray[i] = null
            }
        })

        // find yellows
        frmtdGuess.forEach((letter, i) => {
            if(dailyWordArray.includes(letter.key) && letter.color !== 'green'){
                frmtdGuess[i].color = 'yellow'
                dailyWordArray[dailyWordArray.indexOf(letter.key)] = null
            }

        })


        return frmtdGuess
    }

    //add new guess to the state
    //evaluate guess
    //turn ++
    const pushGuess = (frmtdGuess) => {
       if(cGuess === dailyWord){
        setCorrect(true)
        // console.log("You win maybe!");
       }

       setGuesses((pGuesses) => {
        let nGuesses = [...pGuesses]
        nGuesses[turn] = frmtdGuess
        return nGuesses
       })
       setPrevious((prevPrev) => {
        return [...prevPrev, cGuess]
       })
       setTurn((prevTurn) => {
        return prevTurn + 1
       })

       // update keyboard
       setKeyStatus((prevKeyStatus) => {
        let newKeys = {...prevKeyStatus}
        // console.log(newKeys)
        frmtdGuess.forEach((l) => {
            const currentColor = newKeys[l.key]
            // console.log(currentColor)

            if(l.color === 'green'){
                newKeys[l.key] = 'green'
                return
            }
            if(l.color === 'yellow' && currentColor !== "green"){
                newKeys[l.key] = 'yellow'
                return
            }
            if(l.color === 'grey' && currentColor !== 'green' && currentColor !== 'yellow'){
                newKeys[l.key] = 'grey'
                return
            }
            return newKeys
        })

       })


       setCGuess('')
    }

    //get enter
    //handle keyboard
    const handleKeys = ({key}) => {
        
        // remove char with backspace
        if(key === 'Backspace'){
            setCGuess((prev) => {
                return prev.slice(0, -1)
            })
        }

        // handle enter button
        if(key === 'Enter'){

            if(turn > 5){
                console.log('You lost!');
                return
            }

            if(previous.includes(cGuess)){
                // console.log("You already tried that!")
                return
            }

            if(cGuess.length !== 5){
                // console.log("Can't.");
                return
            }

            const frmtd = frmtGuess()
            console.log(frmtd);
            pushGuess(frmtd)

        }

        if(/^[A-Za-z]$/.test(key)) {
            if(cGuess.length <5){
                setCGuess((prev) => {
                    return prev + key
                })
            }
           
        }
        
    }

    return {turn, cGuess, guesses, previous, correct, keyStatus, handleKeys}

}

export default useDevdle