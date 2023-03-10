import React from 'react'
import {useFormik} from 'formik';
import Axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { basicSchema } from './validation/validation';
const Register=()=>
{
    let navigate=useNavigate();
    const Formik=useFormik({
        initialValues:
        {
          name:"",
          email:"",
          password:"",
          confirm:""
        },validationSchema:basicSchema,
        onSubmit:(values)=>
        {
              Axios.post('http://localhost:5001/user/register',{
                name:values.name,
                email:values.email,
                password:values.password
            }).then(res=>navigate('/login')
              ).catch(err=>{console.log(err);
            })
        }
      });

    return(
        <div className='items-center flex justify-center h-screen '>
            <div className='h-3/5 flex'>
                <div className='bg-[#30373C] h-full w-70'>
                    <h1 className='uppercase font-bold p-10 text-2xl text-white'>Information</h1>
                    <div className='mx-5'>
                        <p className='font-bold text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                        <p className='font-bold text-white'>industry. Lorem Ipsum has been the industry's standard dummy</p>
                        <p className='font-bold text-white'>text ever since the 1500s, when an unknown printer took a galley</p>
                        <p className='font-bold text-white'>of type and scrambled it to make a type specimen book. It has</p>
                        <p className='font-bold text-white'>survived not only five centuries, but also the leap into electronic</p>
                        <p className='font-bold text-white'>survived not only five centuries, but also the leap into electronic</p>
                        <button class="h-10 px-10 m-2 mx-28 mt-10  text-indigo-100 transition-colors duration-150 bg-indigo-700  focus:shadow-outline hover:bg-indigo-800 flex items-center justify-center ">Have An Account</button>
                    </div>
                </div>
                <div className='bg-[#1E2B2E] h-full w-96'>
                    <h1 className='uppercase font-bold p-10 text-[35px] text-white'>Register Form</h1>
                    <form onSubmit={Formik.handleSubmit}>
                        <div className='flex items-center justify-center'>
                            <div className='text-center'>
                            <p className='text-sm font-bold mr-12 text-white'>FirstName</p>
                            <input type='text' className='w-[150px] mx-2 bg-[#D9D9D9] h-8 mt-2' name='name' value={Formik.values.firstname} onChange={Formik.handleChange}></input>
                            </div>
                            <div className='text-center'>
                            <p className='text-sm font-bold mr-12 text-white'>LastName</p>
                            <input type='text' className='w-[150px] mx-2 bg-[#D9D9D9] h-8 mt-2' name='lastname' value={Formik.values.lastname} onChange={Formik.handleChange}></input>
                            </div>
                        </div>
                        <div className='my-10'>
                        <p className='mx-10 text-white'>Email</p>
                        <div className='flex flex-col items-center'>
                            <input type='email' className=' bg-[#D9D9D9] w-[320px] h-8' name='email' value={Formik.values.email}  onChange={Formik.handleChange}></input>
                        </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='text-center'>
                            <p className='text-sm font-bold mr-12 text-white'>Password</p>
                            <input type='password' className='w-[150px] mx-2 bg-[#D9D9D9] h-8 mt-2' name='password' value={Formik.values.password} onChange={Formik.handleChange}></input>
                            </div>
                            <div className='text-center'>
                            <p className='text-sm font-bold mr-8 text-white'>Confirm Password</p>
                            <input type='password' className='w-[150px] mx-2 bg-[#D9D9D9] h-8 mt-2' name='confirm' value={Formik.values.confirm} onChange={Formik.handleChange}></input>
                            </div>
                        </div>
                        <div className='mx-5 my-2 flex items-center justify-center'>
                        <input type='checkbox'></input>
                        <label className='text-white'>I do accept the Terms and Conditions</label>
                        </div>
                        <button class="h-8 w-36 p-5 mx-8 my-8 text-indigo-100 transition-colors duration-150 bg-indigo-700  focus:shadow-outline hover:bg-indigo-800 flex items-center justify-center" type="submit">Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Register;