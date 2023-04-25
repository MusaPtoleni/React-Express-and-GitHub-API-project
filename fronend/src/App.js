import React from 'react';
import './index.css';
import Footer from './components/Footer';
import Search from './components/Search';
import User from './components/User';
import { Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';



function App() {
  return (
    <div className="App">
      <Footer/>
      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/user" element={<User/>} />
      </Routes>
    </div>
  );
}

export default App;
