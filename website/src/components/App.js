import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SecretPage from './SecretPage/SecretPage';
import MainPage from "./MainPage";

function App() {
    return (
        <Router>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/secrete-page" element={<SecretPage />} />
                </Routes>
        </Router>
    );
}

export default App;
