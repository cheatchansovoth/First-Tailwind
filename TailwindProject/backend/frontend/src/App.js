import logo from './logo.svg';
import Login from './component/Login';
import {BrowserRouter as Router, Route, Routes,Link} from 'react-router-dom';
import Register from './component/Register'
import './App.css';
import { UserContext } from './component/UserContext';


const user='ds'
function App() {
  return (
    <div className="App">
      <Router>
        <UserContext.Provider value={user}>
      <Routes>
        <Route path="/" exact element={<Register/>}></Route>
        <Route path="/login" exact element={<Login/>}></Route>
        </Routes>
        </UserContext.Provider>
        </Router> 

    </div>
  );
}

export default App;
