import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from './GlobalContext';
import { useNavigate } from 'react-router-dom';

const Question = ({ handle, current, index, question }) => {

    const { inCorrectAnswers, correctAnswer, setNumberOfCorrectAnswers } = useContext(GlobalContext);
    const navigate = useNavigate();
    const [randomAnswers, setRandomAnswers] = useState([])

    useEffect(() => {
        if (current >= 6) {
            setTimeout(() => {
                navigate('/again');
            }, 700)
        }
    }, [current])

    useEffect(() => {
        // Random Answers
        const answersLength = inCorrectAnswers[index].length + 1;
        let numCorrect;
        let random = [];

        if (answersLength === 4) {

            numCorrect = Math.floor(((Math.random() * 10) % 4));
            random[numCorrect] = correctAnswer[index];

            let j = 0;
            for (let i = 0; i < 4; i++) {
                if (i !== numCorrect) {
                    random[i] = inCorrectAnswers[index][j];
                    j++;
                }
            }
            setRandomAnswers(random)

        } else { // True False

            numCorrect = Math.floor(((Math.random() * 10) % 2));
            random[numCorrect] = correctAnswer[index];

            let j = 0;
            for (let i = 0; i < 2; i++) {
                if (i !== numCorrect) {
                    random[i] = inCorrectAnswers[index][j];
                    j++;
                }
            }
            setRandomAnswers(random)
        }
    }, [question])

    const checkAnswer = (selectedButton) => {        
        // Stop All Buttons
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(btn => {
            btn.classList.add('stop');
        });

        // True Answer
        if (selectedButton.value === correctAnswer[index]) {
            setNumberOfCorrectAnswers(
                c => c + 1
            )
            selectedButton.classList.add('green');
        } else { // False Answer

            selectedButton.classList.add('red');

            buttons.forEach(btn => {
                if (btn.value === correctAnswer[index]) {
                    btn.classList.add('green');
                }
            });
        }

        // Next Question
        handle();
    }

    if (current === index) {
        return (
            <div className='flex flex-col text-white text-center text-2xl mt-20 sm:text-3xl'>
                {question}
                <div className="grid grid-cols-2 gap-2 mt-40">
                    {randomAnswers.map((answer, i) => <button key={i} onClick={(e) => checkAnswer(e.target)} value={answer} className='btn bg-sky-800 p-5 hover:opacity-80'>{answer}</button>)}
                </div>
            </div>
        )
    }
}

export default Question;