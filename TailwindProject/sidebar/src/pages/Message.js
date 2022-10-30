import React from 'react'
import Sidebar from '../component/Sidebar';
import Navbar from '../component/Navbar'
const Message=()=>
{
    return (
        <React.Fragment>
         <Navbar/>
        <div className='flex flex-row'>
        <Sidebar/>
        <div className='flex flex-col min-h-screen items-center justify-center w-full'>
            <div className='bg-slate-600 rounded-xl w-[80%] sm:w-[30%]'>
                    <div className='m-10'>
                    <p className='text-2xl font-bold uppercase text-white text-center'>Leave me a message!!</p>
                    <form className='space-y-3 mt-3 flex flex-col items-center'>
                        <label className='text-xl font-bold'>Name</label>
                        <input className='rounded-xl w-[70%] lg:w-[50%] bg-slate-700 '></input>
                        <label className='text-xl font-bold'>Contact</label>
                        <input className='rounded-xl w-[70%] lg:w-[50%] bg-slate-700 text-center placeholder:text-sm' placeholder='Email/Phone'></input>
                        <textarea className="textarea bg-slate-700" placeholder="Message"></textarea>
                        <button className="btn btn-active bg-slate-700 text-white font-bold">Button</button>
                    </form>
                    </div>
            </div>
            </div>
            </div>
        </React.Fragment>
    )
}
export default Message;