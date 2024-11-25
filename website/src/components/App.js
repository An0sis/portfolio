import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainPage from "./MainPage";
import TestPage from "./Test/TestPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<MainPage/>}/>
                <Route exact path="/test" element={<TestPage/>}/>
                <Route element={<MainPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;
