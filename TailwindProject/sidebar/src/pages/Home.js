import React from 'react'
import {Link} from 'react-router-dom'
import { BsGithub,BsFacebook,BsTwitter,BsLinkedin} from "react-icons/bs";
import Sidebar from '../component/Sidebar';
import Navbar from '../component/Navbar'
const Home=()=>
{
    return (
        <React.Fragment>
         <Navbar/>
        <div className='flex flex-row'>
        <Sidebar/>
            <div className='block md:flex flex-row min-h-screen items-center justify-center w-full space-x-10'>
                <div className='w-[50%] md:w-[20%] mt-[20%] mb-[10%]  m-auto md:m-0'>
                    <img src='https://image.myanimelist.net/ui/5LYzTBVoS196gvYvw3zjwN5p39xs4htYQq66k48pqOc' className='rounded-full border-2 border-gray-500 shadow-lg'></img>
                </div>
                <div className='space-x-2 space-y-3'>
                        <p className='font-bold text-5xl font-mono'>Hi THERE,</p>
                        <p className='font-bold text-3xl font-mono'>I'M Ken</p>
                        <p className='font-mono text-xl'>A graduate software development major, passinoate about</p>
                        <p className='font-mono text-xl'>creating interactive applications and experiences on</p>
                        <p className='font-mono text-xl'>the web</p>
                    <div className='flex flex-row space-x-5 mt-3'>
                    <a href='https://github.com/cheatchansovoth'><p className='text-4xl hover:text-gray-400'><BsGithub/></p></a>
                    <a href='https://www.facebook.com/wwwwwk3n'><p className='text-4xl hover:text-gray-400'><BsFacebook/></p></a>
                    <a href=''><p className='text-4xl hover:text-gray-400'><BsTwitter/></p></a>
                    <a href='https://www.linkedin.com/in/chansovoth-cheat-b98abb17a/'><p className='text-4xl hover:text-gray-400'><BsLinkedin/></p></a>
                    </div>
                </div>
                
            </div>
         </div>
        </React.Fragment>
    )
}

export default Home;