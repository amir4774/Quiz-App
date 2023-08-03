import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useEffect } from "react";
import { GlobalProvider } from "./components/GlobalContext";
import Home from "./components/Home";
import Questions from './components/Questions';
import PlayAgain from './components/PlayAgain';
import NotFound from './components/NotFound';


const App = () => {

    // Add background-color to body
    useEffect(() => {
        document.body.classList.add('bg-slate-800')
    }, [])

    return (
        <GlobalProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='questions' element={<Questions />} />
                    <Route path='again' element={<PlayAgain />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </GlobalProvider>
    )
}

export default App;