import {react,useContext,useEffect,useState} from 'react'
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { UserContext } from './useContext';
const Navbars=()=>
{
  const storeData=JSON.parse(localStorage.getItem('token'));
  const [getItem,SetGetItem]=useContext(UserContext);
  const [userItem,setUserItem]=useState([]);

  useEffect(()=>
  {
      setUserItem(storeData)
      
  },[userItem])
  let totalPrice=storeData.reduce((a,v) =>  a = a + v.Price , 0 );
    return(
<div className="navbar bg-base-100">
  <div className="flex-1 lg:mx-10">
    <a className="btn btn-ghost normal-case text-xl font-bold" href='/'> IMAGINE Bakery</a>
    <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>Home</a></li>
      <li><a>About</a></li>
      <li><a>Contact</a></li>
      </ul>
    </div>
  </div>
  <div className="navbar hidden lg:flex mx-60">
    <ul className="menu menu-horizontal">
      <li><a className='font-bold text-xs uppercase '>Home</a></li>
      <li><a className='font-bold text-xs uppercase '>ABOUT</a></li>
      <li><a className='font-bold text-xs uppercase '>Contact</a></li>
    </ul>
  </div>
  </div>
  <div className="flex-none lg:mx-10">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">{getItem}</span>
        </div>
      </label>
      <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">You have {getItem}</span>
          <div>
          {storeData.map((product,key)=>
                          {
                              return (
                                  <div key={key}>
                                      <tr>
                                      <td><b>{product.Foodname} ${product.Price} </b></td>
                                      </tr>
                                  </div>
                              )
                          })}
          </div>
          <span className="text-info">Subtotal: ${totalPrice}</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>


    <div>
    {storeData?<div>
      <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
      </div>
    </div>:<Link to='/Login' className='text-2xl'><BsFillPersonFill/></Link>}
    </div>
  </div>
</div>
    )
}
export default Navbars;