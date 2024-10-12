import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageLazy} from "./pages/AboutPage/aboutPage.async";
import {MainPageLazy} from "./pages/MainPage/mainPage.async";
import {Suspense} from "react";
import {useTheme} from "./theme/useTheme";
const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={`app ${theme}`} >
            <button onClick={toggleTheme}>Toggle theme</button>
            <Link  to='/'>Main</Link>
            <Link  to='/about'>About</Link>
            <Suspense fallback={'Loading...'}>
                <Routes>
                    <Route path='/about' element={<AboutPageLazy/> } />
                    <Route path='/' element={<MainPageLazy/>} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default App