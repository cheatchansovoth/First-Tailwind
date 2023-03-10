import React, { useContext, useState } from 'react'
import { FcGoogle,FcPrivacy,FcInternal} from "react-icons/fc"
import { RiLoginCircleLine } from "react-icons/ri";
import Axios from 'axios';
import {Formik, useFormik} from 'formik';
import Forget from './Forget'
import { Link, useNavigate } from 'react-router-dom';

const Login=()=>
{
  const [errorMessage,setErrorMessage]=useState("");
  let navigate=useNavigate();
  const Formik=useFormik({
    initialValues:{
      email:"",
      password:""
    },onSubmit:(values)=>
    {
      Axios.post('http://localhost:5001/user/login',{
        email:values.email,
        password:values.password
      }).then(res=>
        {
          console.log(res.data);
          window.localStorage.setItem('token',JSON.stringify(res.data));
          window.location.reload();
          navigate("/")
        }).catch(err=>
          {
            setErrorMessage(err.response.data);
          })
    }
  })
    return(
        <div className='items-center flex justify-center h-screen '>
        <div className='bg-slate-700 w-96'>
        <form onSubmit={Formik.handleSubmit}>
        <h1 className='text-center text-3xl uppercase font-bold mt-5 flex justify-center items-center'><FcInternal/>Login</h1>
        <div className='flex flex-col mt-5'>
          <h1 className='mx-10'>Username:</h1>
          <input type='text' className='my-3  text-indigo-100 bg-gray-500 mx-10 rounded-2xl h-8' name='email' value={Formik.values.email} onChange={Formik.handleChange}></input>
          <h1 className='mx-10 '>Password:</h1>
          <input type='password' className='  text-indigo-100 bg-gray-500 mx-10 rounded-2xl mt-5 h-8' name='password' value={Formik.values.password} onChange={Formik.handleChange}></input>
          <Link to={Forget} className='text-blue-700 my-1 mx-10'>Forget Password ?</Link>
          <div className='mx-10 mt-5 flex'>
          <input type='checkbox' className='checkbox'></input>
          <label className='px-3'>Remember me</label>
          </div>
          <button class="h-8 px-10 m-2 mx-16 mt-5 text-xl text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800 flex items-center justify-center" type='submit'><RiLoginCircleLine/>Login</button>
          <h1 className='text-center m-3'></h1>
         <button class="h-8 px-10 mx-16 my-3 mb-12 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800 items-center justify-center flex mb-5"><FcGoogle/>Login with Google</button>
        </div>
        </form>
        </div>
      </div>
    )
}
export default Login;