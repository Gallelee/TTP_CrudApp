import logo from './logo.svg';
import './App.css';
import React, {Router,Routes,Route} from "react-router-dom"
import Home from './components/Home'
import All_Campuses from './components/All_Campuses'


function App() {
  return (
    <div className="App">
        
      <All_Campuses />
    </div>
  );
}

export default App;
