import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [questions, setQuestions] = useState([]);
    const [correctAnswer, setCorrectAnswer] = useState([]);
    const [inCorrectAnswers, setInCorrectAnswers] = useState([]);
    const [again, setAgain] = useState(0);
    const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] = useState(0);

    const HtmlToText = (str) => {
        const parser = new DOMParser();
        const parsedHtml = parser.parseFromString(str, "text/html");
        const plainText = parsedHtml.documentElement.textContent;
        return plainText;
    }

    useEffect(() => {
        const getFetch = async () => {
            try {
                const res = await fetch('https://opentdb.com/api.php?amount=6&difficulty=medium');
                const data = await res.json();

                // Set Questions
                setQuestions(
                    data.results.map((result) => HtmlToText(result.question))
                )

                // Set Correct Answers
                setCorrectAnswer(
                    data.results.map(result => HtmlToText(result.correct_answer))
                )

                // Set Incorrect Answers
                setInCorrectAnswers(
                    data.results.map(result => result.incorrect_answers)
                )

            } catch (err) {
                console.log(err);
            }
        }

        // Call Function
        getFetch();

        setNumberOfCorrectAnswers(0);
    }, [again])

    return (
        <GlobalContext.Provider value={{ 
                                        questions, 
                                        correctAnswer, 
                                        inCorrectAnswers, 
                                        numberOfCorrectAnswers, 
                                        setAgain,
                                        setNumberOfCorrectAnswers, 
                                        }}>
            {children}
        </GlobalContext.Provider>
    );
}