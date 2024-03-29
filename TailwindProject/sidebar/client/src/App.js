import logo from './logo.svg';
import './App.css';
import React from 'react'
import Sidebar from './component/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import {BrowserRouter as Router, Route, Routes,Link,useNavigate} from 'react-router-dom';
import Message from './pages/Message';
import AnimateRoute from './component/AnimateRoute';

function App() {
  return (
      <React.Fragment>
        <Router>
          <AnimateRoute/>
        </Router>
      </React.Fragment>
  );
}

export default App;
