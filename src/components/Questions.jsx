import { useContext, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import Question from "./Question";

const Questions = () => {

    const { questions } = useContext(GlobalContext);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const handleNextQuestion = () => {
        setTimeout(() => {
            setCurrentQuestion(count => count + 1);
        }, 1700)
    }

    return (
        <div className="mt-20 text-center">
            {questions.map((question, index) => (<Question key={index} handle={handleNextQuestion} current={currentQuestion} index={index} question={question} />))}
        </div>
    )
}

export default Questions;