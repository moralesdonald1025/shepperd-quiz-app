import React from "react";
import Question_1 from "./zeniark_quiz_app/components/quiz/question_1";
import Question_2 from "./zeniark_quiz_app/components/quiz/question_2";
import Home from "./zeniark_quiz_app/pages/home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Question_3 from "./zeniark_quiz_app/components/quiz/question_3";
import Question_4 from "./zeniark_quiz_app/components/quiz/question_4";

const App = () => {
  return (
    <Router basename="/shepperd-quiz-app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz_1" element={<Question_1 />} />
        <Route path="/quiz_2" element={<Question_2 />} />
        <Route path="/quiz_3" element={<Question_3 />} />
        <Route path="/quiz_4" element={<Question_4 />} />
      </Routes>
    </Router>
  )
}

export default App;
