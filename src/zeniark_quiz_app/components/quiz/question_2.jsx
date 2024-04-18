import React, { useState } from "react";
import "./quiz.css";
import { Link } from "react-router-dom";

const Question_2 = () => {
    const [userAnswer, setUserAnswer] = useState("");

    const handleAnswer = (answer) => {
        setUserAnswer(answer);
    }

    return (
        <div className="container">
            <>
                <div className="container-header">
                    <div className="logo-container">
                        <h2 className="category">Question 2</h2>
                    </div>
                </div>
                <hr />
                <h4 className="question">Which of the following is true about the async/await syntax in JavaScript?</h4>
                <hr />
                <div className="">
                    <ul>
                        <li className="" onClick={() => handleAnswer("A. It makes JavaScript multi-threaded")}><span>A. It makes JavaScript multi-threaded.</span></li>
                        <div className="space"></div>
                        <li className="" onClick={() => handleAnswer("B. It can only be used inside a Web Worker")}><span>B. It can only be used inside a Web Worker.</span></li>
                        <div className="space"></div>
                        <li className="" onClick={() => handleAnswer("C. It is syntactic sugar over Promises, making asynchronous code easier to write and read")}><span>C. It is syntactic sugar over Promises, making asynchronous code easier to write and read.</span></li>
                        <div className=""></div>
                        <li className="" onClick={() => handleAnswer("D. It blocks the main thread until the asynchronous code is executed")}><span>D. It blocks the main thread until the asynchronous code is executed.</span></li>
                    </ul>
                </div>
            </>
            {userAnswer !== "" && (
                <>
                {userAnswer === "C. It is syntactic sugar over Promises, making asynchronous code easier to write and read" ? (<><div>
                <p className="user_correct">You answered {userAnswer} and it is correct!</p>
            </div>
                <button className="next_question">
                    <Link to="/quiz_3" className="next_question_text">NEXT</Link>
                </button>
            </>) : (<>
                <p className="user_incorrect">You answered {userAnswer} and it is incorrect!
                </p></>)}</>
            )}
            
        </div>
    )
}

export default Question_2;