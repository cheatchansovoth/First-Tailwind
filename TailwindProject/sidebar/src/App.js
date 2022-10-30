import logo from './logo.svg';
import './App.css';
import React from 'react'
import Sidebar from './component/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import {BrowserRouter as Router, Route, Routes,Link,useNavigate} from 'react-router-dom';
import Message from './pages/Message';

function App() {
  return (
      <React.Fragment>
        <Router>
        <Routes>
           <Route path='/' element={<Home/>}></Route>
           <Route path='/about' element={<About/>}></Route>
           <Route path='/message' element={<Message/>}></Route>
        </Routes>
        </Router>
      </React.Fragment>
  );
}

export default App;
