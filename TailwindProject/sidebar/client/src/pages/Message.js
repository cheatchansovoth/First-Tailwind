import React, { useState } from 'react'
import Sidebar from '../component/Sidebar';
import Navbar from '../component/Navbar'
import {motion} from 'framer-motion'
import axois from 'axios'
const Message=()=>
{
    const [name,setName]=useState('');
    const [contact,setContact]=useState('')
    const [message,setMessage]=useState('');
    const [success,setSuccess]=useState('');

   const handleSubmit=(e)=>
    {
        e.preventDefault();
        axois.post('http://167.99.64.201:5000/receiveEmail',{
            name:name,
            contact:contact,
            message:message,
        }).then((res)=>{setSuccess('Thank for leaving me an message!!')});
    }
    return (
        <React.Fragment>
         <Navbar/>
         <motion.div className='flex flex-row' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        <Sidebar/>
        <div className='flex flex-col min-h-screen items-center justify-center w-full'>
            <div className='bg-slate-600 rounded-xl w-[80%] sm:w-[30%]'>
                    <div className='m-10'>
                    <p className='text-2xl font-bold uppercase text-white text-center'>Leave me a message!!</p>
                    <form className='space-y-3 mt-3 flex flex-col items-center'>
                        <label className='text-xl font-bold'>Name</label>
                        <input className='rounded-xl w-[70%] lg:w-[50%] bg-slate-700 ' onChange={(e)=>
                        {
                            setName(e.target.value)
                        }}></input>
                        <label className='text-xl font-bold'>Contact</label>
                        <input className='rounded-xl w-[70%] lg:w-[50%] bg-slate-700 text-center placeholder:text-sm' placeholder='Email/Phone' onChange={(e)=>
                        {
                            setContact(e.target.value)
                        }}></input>
                        <textarea className="textarea bg-slate-700" placeholder="Message" onChange={(e)=>
                        {
                            setMessage(e.target.value)
                        }}></textarea>
                        <button className="btn btn-active bg-slate-700 text-white font-bold" onClick={handleSubmit}>Button</button>
                    </form>
                </div>
                {success?<div className="alert alert-success shadow-lg">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>{success}</span>
                    </div>
                </div>:null}
            </div>
            </div>
            </motion.div>
        </React.Fragment>
    )
}
export default Message;