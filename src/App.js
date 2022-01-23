
import './App.css';
import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Students from './components/Students';
import ShowCampuses from './components/ShowCampus'
import All_Campuses from './components/All_Campuses'
import Navbar from './components/Navbar'
import EditCampus from './components/EditCampus'
import EditSingleStudent from './components/EditSingleStudent';
import AddStudentForm from './components/AddStudentForm';
import ShowStudent from './components/ShowStudent';
import AddCampusForm from './components/AddCampusForm'

function App() {
  return (
    <div className="App">
      
      <Router>

        <Navbar/>

        <Routes>
          <Route path="/" element={<All_Campuses />} />
          <Route path="/Students" element={<Students/>}/> 
          <Route path="/Campus/:campusID" element={<ShowCampuses/>}/>
          <Route path="/EditCampus" element={<EditCampus />}/>
          <Route path="/EditStudent" element={<EditSingleStudent/>}/>
          <Route path="/AddStudent" element={<AddStudentForm/>}/>
          <Route path="/Students/:studentId" element={<ShowStudent/>}/>
          <Route path="/AddCampus" element={<AddCampusForm/>}/>
        </Routes>

        

      </Router>

    </div>
  );
}

export default App;
