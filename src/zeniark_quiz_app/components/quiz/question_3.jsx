import React, { useState } from "react";
import "./quiz.css";
import image_3 from '../../../images/question_3.png';
import { Link } from "react-router-dom";

const Question_3 = () => {
    const [userAnswer, setUserAnswer] = useState("");

    const handleAnswer = (answer) => {
        setUserAnswer(answer);
    }

    return (
        <div className="container">
            <>
                <div className="container-header">
                    <div className="logo-container">
                        <h2 className="category">Question 3</h2>
                    </div>
                </div>
                <hr />
                <h4 className="question">In this Javascript, what does newFunction() log to the console? Why?</h4>
                <div className="logo-container">
                    <img src={image_3} className="logo" alt="logo" />
                </div>
                <hr />
                <div className="">
                    <ul>
                    <li className="" onClick={() => handleAnswer("A. undefined")}><span>A. undefined.</span></li>
                    <div className="space"></div>
                    <li className="" onClick={() => handleAnswer("B. An error message about outerVar not being accessible")}><span>B. An error message about outerVar not being accessible.</span></li>
                    <div className="space"></div>
                    <li className="" onClick={() => handleAnswer("C. The string 'I am from the outer scope!'")}><span>C. The string 'I am from the outer scope!'.</span></li>
                    <div className=""></div>
                    <li className="" onClick={() => handleAnswer("D. Nothing, the inner function does not have access to outerVar")}><span>D. Nothing, the inner function does not have access to outerVar.</span></li>
                    </ul>
                </div>
                
            </>
            {userAnswer !== "" && (
                <> {userAnswer === "C. The string 'I am from the outer scope!'" ? (<><div>
                    <p className="user_correct">You answered {userAnswer} and it is correct!</p>
                </div>
                <button className="next_question">
                    <Link to="/quiz_4" className="next_question_text">NEXT</Link>
                </button>
                </>) : (<>
                <p className="user_incorrect">You answered {userAnswer} and it is incorrect!
                </p></>)}</>
           
            )}
        </div>
    )
}

export default Question_3;