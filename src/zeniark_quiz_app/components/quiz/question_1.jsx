import React, { useState } from "react";
import "./quiz.css";
import image_1 from '../../../images/question_1.png';
import { Link } from "react-router-dom";

const Question_1 = () => {
    const [userAnswer, setUserAnswer] = useState("");

    const handleAnswer = (answer) => {
        setUserAnswer(answer);
    }

    return (
        <div className="container">
            <>
                <div className="container-header">
                    <div className="logo-container">
                        <h2 className="category">Question 1</h2>
                    </div>
                </div>
                <hr />
                <h4 className="question">What color will the text of the Important Message be? Why?</h4>
                <div className="logo-container">
                    <img src={image_1} className="logo" alt="logo" />
                </div>
                <hr />
                <div className="button-answer">
                    <button className="blue_button" onClick={() => handleAnswer("Blue")}><span>Blue</span></button>
                    <div className="space"></div>
                    <button className="orange_button" onClick={() => handleAnswer("Orange")}><span>Orange</span></button>
                    <div className="space"></div>
                    <button className="green_button" onClick={() => handleAnswer("Green")}><span>Green</span></button>
                    <div className="space"></div>
                    <button className="purple_button" onClick={() => handleAnswer("Purple")}><span>Purple</span></button>
                </div>
            </>
            {userAnswer !== "" && (
                <>
                    {userAnswer === "Blue" ? (
                        <>
                            <div>
                                <p className="user_correct">You answered {userAnswer} and it is correct!</p>
                            </div>
                            <button className="next_question">
                                <Link to="/quiz_2" className="next_question_text">NEXT</Link>
                            </button>
                        </>
                    ) : (
                        <>
                            <p className="user_incorrect">You answered {userAnswer} and it is incorrect!</p>
                        </>
                    )}
                </>
            )}


        </div>
    )
}

export default Question_1;