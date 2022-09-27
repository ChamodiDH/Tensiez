import logo from './logo.svg'
import React from 'react'
import Die from './Die'
import { nanoid } from 'nanoid'


export default function App() {




//Initialize the states for number array

const [numbers, setNumbers] = React.useState(allNewDice())


//function to return the random number array
function allNewDice(){
  const numberArray = []
  for(let i = 0; i<10; i++){
   numberArray.push(
    
    {
      value:(Math.floor((Math.random() * 6) + 1)),
      isHeld:true,
      id: nanoid()
    }
    )
  }
  return numberArray
}



  const die = numbers.map(number =>{
    return(
    <Die key ={number.id} value = {number.value} held={number.isHeld}/>
    )
  })

//Roll-dice function

function rollDice(){
  setNumbers(allNewDice())
}


console.log(allNewDice())
  return (
    <div>
      <div className="rectangle-white">
        <h1 className="main-header">Tenzies</h1>
        <p className="main-desc">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="main-squres-10">
          <div className="main-5-squres">
            {die}
          </div>

        </div>

        <div className="main-btn-roll" onClick={rollDice}>
          <h2>Roll</h2>
        </div>


      </div>

    </div>


  )
}


