import React from "react"

export default function Die(props){

   
    return(

        <div className={props.held ? "main-squre-held" : "main-squre" } onClick={props.holdDiceF}>
            <h3 className="main-number">{props.value}</h3>
        </div>
    )
}