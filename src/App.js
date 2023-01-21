import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import About from './pages/About.js';
import Home from './pages/Home'
import Counter from './pages/Counter'
import Input from "./pages/Input";
import Input2 from "./pages/Input2";
import List from "./pages/List";

function App() {
    return (
        <div className="App">
            <nav>
                <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/counter">Counter</Link> | <Link
                to="/input">Input</Link> | <Link to="/Input2">Input2</Link> | <Link to="/List">List</Link>
            </nav>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/Counter' element={<Counter/>}></Route>
                <Route path='/Input' element={<Input/>}></Route>
                <Route path='/Input2' element={<Input2/>}></Route>
                <Route path='/List' element={<List/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
