import React, {useState} from 'react';
import './App.css';
import QuestionCard from "./components/QuestionCard";

const TOTAL_QUESTIONS = 10

function App() {
    const [loading, setLoading] = useState(false)
    const [questions, setQuestions] = useState([])
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true)
    const startQuiz = async () =>{

    }

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) =>{

    }

    const nextQuestion = () =>{

    }

    return (
        <div className="App">
            <h1>React Quiz</h1>
            <button className="start" onClick={startQuiz}>Start</button>
            <p className="score">Score:</p>
            <p>Loading Questions...</p>
            <QuestionCard questionsNr={number + 1} question={questions}/>
            <button className="next" onClick={nextQuestion}>Next Question</button>
        </div>
    );
}

export default App;
