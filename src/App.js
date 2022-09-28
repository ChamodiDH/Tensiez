import logo from './logo.svg'
import React from 'react'
import Die from './Die'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'


export default function App() {




  //Initialize the states for number array

  const [numbers, setNumbers] = React.useState(allNewDice())

  const[tenzies, setTenzies] = React.useState(false)
  //generate new die

 
    
  function generateNewDie() {
    return {
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
    }
}

  //function to return the random number array
  function allNewDice() {
    const numberArray = []
    for (let i = 0; i < 10; i++) {
      numberArray.push(
          generateNewDie()
      )
    }
    return numberArray
  }


  function holdDice(id) {
    setNumbers(oldDice => oldDice.map(die => {
      return die.id === id ?
        { ...die, isHeld: !die.isHeld } :
        die
    }))
  }

  function rollDice() {
    if(!tenzies){
    setNumbers(oldDice => oldDice.map(die => {
        return die.isHeld ? 
            die :
            generateNewDie()
    }))

    }else{
      setTenzies(false)
      setNumbers(allNewDice())
    }
}

  const die = numbers.map(number => {
    return (
      <Die key={number.id} value={number.value} held={number.isHeld} holdDiceF={() => holdDice(number.id)} />
    )
  })

  React.useEffect(()=>{
    const allHeld = numbers.every(die => die.isHeld)
  const firstValue = numbers[0].value
  const allSameValue = numbers.every(die => die.value === firstValue)
  if (allHeld && allSameValue) {
    setTenzies(true)
      console.log("You won!")
  } },[numbers])

  


  // console.log(allNewDice())
  return (
    <div>
      {tenzies && <Confetti />}
      <div className="rectangle-white">
        <h1 className="main-header">Tenzies</h1>
        <p className="main-desc">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="main-squres-10">
          <div className="main-5-squres">
            {die}
          </div>
         

        </div>

        <div className="main-btn-roll" onClick={rollDice}>
          <h2>{tenzies ? "New Game" : "Roll"}</h2>
        </div>


      </div>

    </div>


  )
}


