import React from "react"
import './style.css'

export default function Main(){

    return(
        <div>
            
            <div class="rectangle-white">
                <h1 class="main-header">Tenzies</h1>
                <p class="main-desc">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                <div class="main-squres-10">
                    <div class="main-5-squres">
                        <div class="main-squre">
                            <h3 class="main-number">1</h3>
                        </div>
                        <div class="main-squre">
                            <h3 class="main-number">2</h3>
                        </div>
                        <div class="main-squre">
                            <h3 class="main-number">3</h3>
                        </div>
                        <div class="main-squre">
                            <h3 class="main-number">4</h3>
                        </div>
                        <div class="main-squre">
                            <h3 class="main-number">5</h3>
                        </div>

                    </div>
                    <div class="main-5-squres">
                        <div class="main-squre">
                            <h3 class="main-number">6</h3>
                        </div>
                        <div class="main-squre">
                            <h3 class="main-number">7</h3>
                        </div>
                        <div class="main-squre">
                            <h3 class="main-number">8</h3>
                        </div>
                        <div class="main-squre">
                            <h3 class="main-number">9</h3>
                        </div>
                        <div class="main-squre">
                            <h3 class="main-number">10</h3>
                        </div>

                    </div>

                </div>
                <div class="main-btn-roll">
                    <h2>Roll</h2>
                </div>
            </div>


        </div>

    )

}