import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { SideBar } from 'widgets/SideBar';
import { Suspense } from 'react';
import { Counter } from 'entities/Counter';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={`app ${theme}`}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <SideBar />
                    <Counter />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
