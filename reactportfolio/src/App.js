import React from 'react';
import AboutMe from './components/aboutMe';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';
import Header from './components/header';
import navBar from './components/navBar';
import './App.css';

function App() {
    return (
        <div className="App">
            <navBar />
            <Header />
            <AboutMe />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;