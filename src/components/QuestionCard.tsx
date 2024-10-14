import React from 'react'

type Props = {
    question: string;
    answers: string[];
    callBack: any;
    userAnswer: any;
    questionsNr: number;
    totalQuestions: number;
}
const QuestionCard: React.FC<Props> = ({question, answers, callBack, userAnswer, questionsNr, totalQuestions}) => {
    return (
        <div>
            <p className="questionNumber"> Question: {questionsNr} / {totalQuestions}</p>
            <p dangerouslySetInnerHTML={{__html: question}}/>
            <div>
                {answers.map((answer) => (
                    <div>
                        <button disabled={userAnswer} onClick={callBack}>
                            <span dangerouslySetInnerHTML={{__html: answer}}/>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )

}
export default QuestionCard
