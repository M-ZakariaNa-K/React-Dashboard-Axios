import React, { useState } from "react";
import "./App.css";
import { Container } from "./components/index";
import { Sidebar, Footer, Header1, Main } from "./secctions/index";
import ErrorBoundary from './util/ErrorBoundary';

const App = () => {
    document.documentElement.style.overflow = 'hidden'; // Hide scrollbars

    const [isDarkMode, setIsDarkMode] = useState(false);
    const [activeItem, setActiveItem] = useState('Home'); // State for active sidebar item

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
        document.body.classList.toggle('dark', !isDarkMode); // Toggle dark class on body
    };

    return (
        <>
            <Sidebar 
                toggleDarkMode={toggleDarkMode} 
                isDarkMode={isDarkMode} 
                activeItem={activeItem} 
                setActiveItem={setActiveItem}
            />
            <Container>
                <ErrorBoundary>
                <Header1 
                toggleDarkMode={toggleDarkMode} 
                isDarkMode={isDarkMode} 
                setActiveItem={setActiveItem} // Pass setActiveItem here
            />                </ErrorBoundary>
                <Main activeItem={activeItem} />
            </Container>
            <Footer />
        </>
    );
};

export default App;
