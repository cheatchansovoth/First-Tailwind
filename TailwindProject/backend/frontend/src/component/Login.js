import React, { useContext } from 'react'
import { FcGoogle,FcPrivacy,FcInternal} from "react-icons/fc"
import { RiLoginCircleLine } from "react-icons/ri";
import { UserContext } from './UserContext';

const Login=()=>
{
  const msg=useContext(UserContext);
    return(
        <div className='items-center flex justify-center h-screen '>
        <div className='bg-slate-700 w-96'>
        <form>
        <h1 className='text-center text-3xl uppercase font-bold mt-5 flex justify-center items-center'><FcInternal/>Login</h1>
        <div className='flex flex-col mt-5'>
          <h1 className='mx-10'>Username:</h1>
          <input type='text' className='my-3 uppercase text-indigo-100 bg-gray-500 mx-10 rounded-2xl h-8'></input>
          <h1 className='mx-10 '>Password:</h1>
          <input type='password' className=' uppercase text-indigo-100 bg-gray-500 mx-10 rounded-2xl mt-5 h-8'></input>
          <div className='mx-10 mt-5 flex'>
          <input type='checkbox' className='checkbox'></input>
          <label className='px-3'>Remember me</label>
          </div>
          <button class="h-8 px-10 m-2 mx-16 mt-5 text-xl text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800 flex items-center justify-center"><RiLoginCircleLine/>Login</button>
          <h1 className='text-center m-3'>{msg}</h1>
        <button class="h-8 px-10 mx-16 my-3 mb-12 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800 items-center justify-center flex mb-5"><FcGoogle/>Login with Google</button>
        </div>
        </form>
        </div>
      </div>
    )
}
export default Login;