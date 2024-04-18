import React from "react";
import "../components/quiz/quiz.css";
import "./home.css";
import logo from '../../images/zeniark_logo.jpg'; // Import the logo image
import { Link } from "react-router-dom";

const Home = () => {

    return (
        <div className="container">
            <h2 className="welcome_title">Welcome to the Support Shepperd</h2>
            <p className="presented">You will be presented with 4 questions.</p>
            <div className="canYouScore">
                <p>Can you score 4/4?</p>
            </div>
            <button className="letsStart">
                <Link to="/quiz_1" className="textStart">LET’S START!</Link>
            </button>
        </div>

    )
}

export default Home;