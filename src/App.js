import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Matches from './pages/Matches';
import Players from './pages/Players';
import AddMatchData from './pages/AddMatchData';
import AddPlayer  from './pages/AddPlayer';

 


function App() { 
  return (
    
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Players/>} />
          
          
          <Route path = "/add-match-data" element ={<AddMatchData />}/>
          <Route path = "/add-player" element ={<AddPlayer />}/>     
         
        </Routes>
      </Router>
       
  );
}

export default App;
