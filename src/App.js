import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import About from './pages/About.js';
import Home from './pages/Home'
import Counter from './pages/Counter'
import Input from "./pages/Input";
import Input2 from "./pages/Input2";
import InputBootStrap from "./pages/InputBootStrap";
import List from "./pages/List";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function App() {
    return (
        <div className="App">
            <ToastContainer/>
            <Tabs
                defaultActiveKey="Home"
                className="mb-3">
                <Tab eventKey="Home" title="Home">
                    <Home/>
                </Tab>
                <Tab eventKey="About" title="About">
                    <About/>
                </Tab>
                <Tab eventKey="Counter" title="Counter">
                    <Counter/>
                </Tab>
                <Tab eventKey="Input" title="Input">
                    <Input/>
                </Tab>
                <Tab eventKey="Input2" title="Input2">
                    <Input2/>
                </Tab>
                <Tab eventKey="InputBootStrap" title="InputBootStrap">
                    <InputBootStrap/>
                </Tab>
                <Tab eventKey="List" title="List">
                    <List/>
                </Tab>
            </Tabs>
            {/*<nav>*/}
            {/*    <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/counter">Counter</Link> | <Link*/}
            {/*    to="/input">Input</Link> | <Link to="/Input2">Input2</Link> | <Link to="/List">List</Link>*/}
            {/*</nav>*/}
            <Routes>
                <Route path='/home' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/Counter' element={<Counter/>}></Route>
                <Route path='/Input' element={<Input/>}></Route>
                <Route path='/Input2' element={<Input2/>}></Route>
                <Route path='/InputBootStrap' element={<InputBootStrap/>}></Route>
                <Route path='/List' element={<List/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
