import React from 'react'
import Sidebar from '../component/Sidebar';
import Home from '../pages/Home';
import About from '../pages/About';
import {BrowserRouter as Router, Route, Routes,Link,useNavigate, useLocation} from 'react-router-dom';
import Message from '../pages/Message';

import {AnimatePresence} from 'framer-motion'
const AnimateRoute=()=>
{
    const location =useLocation()
    return (
        <React.Fragment>
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/message' element={<Message/>}></Route>
                </Routes>
         </AnimatePresence>
        </React.Fragment>
    )
}
export default AnimateRoute;