import { useContext } from 'react'
import { GlobalContext } from './GlobalContext';
import { useNavigate } from 'react-router-dom'

const PlayAgain = () => {

    const { setAgain, numberOfCorrectAnswers } = useContext(GlobalContext);
    const navigate = useNavigate();

    // Questions
    const yesButton = () => {
        setTimeout(() => {
            setAgain(c => c + 1);
            navigate('/questions');
        }, 1000)
    }

    // Go Home
    const noButton = () => {
        setTimeout(() => {
            setAgain(c => c + 1);
            navigate('/');
        }, 1000)
    }

    return (
        <div className="container">
            <div className='text-white text-center text-4xl mt-20 sm:text-5xl'>
                <div className="flex justify-center">
                    <p className="mb-10 mr-10">Results:</p>
                    <p>{numberOfCorrectAnswers} / 6</p>
                </div>
                <div className='percent'>{Math.floor(numberOfCorrectAnswers / 6 * 100)} %</div>
            </div>
            <div className='text-center text-white mt-20 text-4xl sm:text-5xl'>
                Do you want to play again?
            </div>
            <div className="flex justify-center mt-24 text-white text-4xl">
                <button onClick={() => yesButton()} className='bg-green-500 mr-20 w-1/4 p-4 hover:opacity-80 active:bg-green-800 sm:p-5'>Yes</button>
                <button onClick={() => noButton()} className='bg-red-500 w-1/4 p-4 hover:opacity-80 active:bg-red-800 sm:p-5'>No</button>
            </div>
        </div>
    )
}

export default PlayAgain;