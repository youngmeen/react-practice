import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import About from './pages/About.js';
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>        
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
