import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import Project from './Project';
import Footer from './Footer';

function MainPage() {
    return (
            <div className="px-[10%] bg-zinc-800">
                <Navbar />
                <About />
                <Education />
                <Experience />
                <Project />
                <Skills />
                <Footer />
            </div>
    );
}

export default MainPage;