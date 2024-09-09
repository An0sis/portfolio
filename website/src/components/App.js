import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SecretPage from './SecretPage/SecretPage';
import MainPage from "./MainPage";

function App() {
    return (
        <Router>
                <Routes>
                    <Route exact path="/" element={<MainPage />} />
                    <Route exact path="/secrete-page" element={<SecretPage />} />
                    <Route element={<MainPage />} />
                </Routes>
        </Router>
    );
}

export default App;
