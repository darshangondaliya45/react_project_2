import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {

    // for noraml counter
    const [counter, setCounter] = useState(0);


    const [score, setScore] = useState(0);



    return (
        <>
            <div className="main">
                {/*Score counter*/}
                <div className="couter-main-box">
                    <h2>Normal Counter</h2>
                    <div className="counter-box">
                        <button className="dicre-btn" onClick={() => setCounter(counter > 0 ? counter - 1 : counter)}>-</button>
                        <span className="display">{counter}</span>
                        <button className="incre-btn" onClick={() => setCounter(counter + 1)}>+</button>
                    </div>
                    <button className="reset" onClick={() => { setCounter(0) }}><i class="fa-solid fa-repeat"></i></button>
                    <div className="function-box">
                        <button className="function-btn" onClick={() => counter > 4 ? setCounter(counter - 5) : setCounter(counter)}>-5</button>
                        <button className="function-btn" onClick={() => setCounter(counter + 5)}>+5</button>
                        <button className="function-btn" onClick={() => counter > 9 ? setCounter(counter - 10) : setCounter(counter)}>-10</button>
                        <button className="function-btn" onClick={() => setCounter(counter + 10)}>+10</button>
                    </div>
                </div>
                {/*Score counter*/}
                <div className="couter-main-box box2">
                    <h2>Score Counter</h2>
                    <div className="counter-box">
                        <button className="dicre-btn" onClick={() => score > 0 ? setScore(score - 1) : setScore(score)}>-</button>
                        <span className="display">{score}</span>
                        <button className="incre-btn" onClick={() => setScore(score + 1)}>+</button>
                    </div>
                    <button className="reset" onClick={() => { setScore(0) }}><i class="fa-solid fa-repeat"></i></button>
                    <div className="function-box">
                        <button className="function-btn" onClick={() => score > 99 ? setScore(score - 100) : setScore(score)}>-100</button>
                        <button className="function-btn" onClick={() => setScore(score + 100)}>+100</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter
