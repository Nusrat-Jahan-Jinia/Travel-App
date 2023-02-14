import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Tools from './Tools';
import Slider from './Slider';
import Media from './Media';
import Social from './Social';
import {
  BrowserRouter as Router,
  Routes, // Switch has changed to Routes in V6
  Route
} from "react-router-dom";
import Explores from './Explors';


function App() {
  return (
    <>
      <Router>
        <Header />

        {/* Switch to routes */}
        <Routes>
          <Route path="/" element={<Tools />}/>
          <Route path="/explores" element={<Explores />}/>
          <Route path="/media" element={<Media />}/>
          <Route path="/social-media" element={<Social />}/>
        </Routes>

        <Slider/>

        <Footer/>
      </Router>
    </>
  );
}

export default App;
