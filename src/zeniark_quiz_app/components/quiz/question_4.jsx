import React, { useState } from "react";
import "./quiz.css";
import { data } from "../../../mock_data/data"
import image_4 from '../../../images/question_4.png';
import { Link } from "react-router-dom";

const Question_4 = () => {
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
                <h4 className="question">In this Typescript what values will the 3 print statements at the end of this code print for a b and c? Why?</h4>
                <div className="logo-container">
                    <img src={image_4} className="logo" alt="logo" />
                </div>
                <hr />
            </>
            <div>
                <p className="user_correct">The answers are: print(a) = 0, print(b) = [5, 2], and print(c) = C object d: 6.</p>
            </div>
            <button className="letsStart">
                <Link to="/" className="textStart">START AGAIN!</Link>
            </button>
        </div>
    )
}

export default Question_4;