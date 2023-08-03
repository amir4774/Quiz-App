import { useNavigate } from 'react-router-dom';
import quizLogo from '../../images/quiz 2.png';

const Home = () => {

    const navigate = useNavigate();

    const goToQuestions = () => {
        navigate('/questions');
    }

    return (
        <div className="container text-center text-white">
            <img src={quizLogo} alt="Quiz" className="mx-auto mt-20" />
            <p className="mt-48 text-4xl sm:text-5xl">Let's Play!</p>
            <button onClick={goToQuestions} className="mt-20 w-48 p-4 rounded bg-sky-700 text-3xl hover:opacity-90 active:bg-sky-800 sm:text-4xl sm:w-72">Play Now</button>
        </div>
    )
}

export default Home;