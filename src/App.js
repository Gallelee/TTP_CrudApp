
import './App.css';
import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import All_Campuses from './components/All_Campuses'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<All_Campuses />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
