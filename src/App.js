import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import About from './pages/About.js';
import Home from './pages/Home'
import Counter from './pages/Counter'

function App() {
    return (
        <div className="App">
            <nav>
                <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/counter">Counter</Link>
            </nav>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/Counter' element={<Counter/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
