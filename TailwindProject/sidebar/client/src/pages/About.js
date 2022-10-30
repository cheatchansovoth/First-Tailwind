import React from 'react'
import {Link} from 'react-router-dom'
import Sidebar from '../component/Sidebar';
import { IoLogoHtml5,IoLogoCss3,IoLogoReact} from "react-icons/io5";
import { BsFillBootstrapFill } from "react-icons/bs";
import { GrMysql } from "react-icons/gr";
import { SiMongodb ,SiNodedotjs} from "react-icons/si";
import Article from '../asset/Article.jpg'
import OrderFood from '../asset/OrderFood.jpg'
import Navbar from '../component/Navbar';
import {motion} from 'framer-motion'
const About=()=>
{
    return (
        <React.Fragment>
        <Navbar/>
        <motion.div className='flex flex-row' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        <Sidebar/>
        <div className='flex flex-col items-center lg:flex-row lg:flex min-h-max lg:items-start justify-center w-full space-x-10 my-auto'>
                <div className='flex flex-col'>
                    <div className='space-x-1 space-y-2'>
                        <p className='text-4xl uppercase font-bold font-sans'>Chansovoth Cheat</p>
                        <p className='font-semibold'>Software Development student</p>
                        <p>Age: 24</p>
                        <p>Address: Auckland Auckland Central NewZealand</p>
                        <p>Email: Cheatchansovoth@gmail.com</p>
                        <p>Phone: 0224277127</p>
                    </div>
                    <div className='mt-2'>
                        <p className='text-3xl font-bold uppercase'>Skill</p>
                        <p className='text-2xl font-bold mt-2 underline mb-2 uppercase'>FrontEnd</p>
                        <div className='grid grid-cols-3 '>
                            <div>
                                <p className='text-4xl font-bold underline my-2 text-red-500'><IoLogoHtml5/></p>
                                <div className="radial-progress text-red-500" style={{"--value":90}}>90%</div>
                            </div>
                            <div>
                                <p className='text-4xl font-bold underline my-2 text-blue-500'><IoLogoCss3/></p>
                                <div className="radial-progress text-blue-500" style={{"--value":80}}>80%</div>
                            </div>
                            <div>
                                <p className='text-3xl font-bold underline my-2 text-purple-600'><BsFillBootstrapFill/></p>
                                <div className="radial-progress text-purple-600" style={{"--value":80}}>80%</div>
                            </div>
                            <div>
                                <p className='text-4xl font-bold underline my-2 text-blue-400'><IoLogoReact/></p>
                                <div className="radial-progress text-blue-400" style={{"--value":60}}>60%</div>
                            </div>
                        </div>
                        <p className='text-2xl font-bold mt-5 mb-2 underline uppercase'>Backend</p>
                        <div className='grid grid-cols-3 '>
                            <div>
                                <p className='text-3xl font-bold underline my-2 text-blue-600'><GrMysql/></p>
                                <div className="radial-progress text-blue-600" style={{"--value":70}}>70%</div>
                            </div>
                            <div>
                                <p className='text-3xl font-bold underline my-2 text-green-500'><SiMongodb/></p>
                                <div className="radial-progress text-green-500" style={{"--value":50}}>50%</div>
                            </div>
                            <div>
                                <p className='text-3xl font-bold underline my-2 text-green-700'><SiNodedotjs/></p>
                                <div className="radial-progress text-green-700" style={{"--value":60}}>60%</div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='w-[50%] lg:w-[50%] mt-[20%] mb-[10%] lg:m-0'>
                    <p className='text-4xl font-bold font-sans text-center uppercase'>Project</p>
                    <div className='grid lg:grid-cols-2 my-[2%] place-items-center mt-[5%]'>
                        <div className="card w-[80%] lg:w-[60%] bg-base-100 shadow-xl ">
                            <figure><img src={Article} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title uppercase font-bold">Search Article</h2>
                                <li>Searching the article in our system</li>
                                <div className="card-actions justify-center">
                                <a href='http://128.199.126.239:5000/'>
                                <button className="btn btn-primary">Demo</button>
                                </a>
                                <a href='https://github.com/cheatchansovoth/CISE_Project'>
                                <button className="btn btn-primary">Code</button>
                                </a>
                                </div>
                            </div>
                        </div>
                        <div className="card w-[80%] lg:w-[60%] bg-base-100 shadow-xl ">
                            <figure><img src={OrderFood} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title uppercase font-bold">Online Ordering for Restaurant</h2>
                                <li>An online application for the restaurant which accept order online</li>
                                <div className="card-actions justify-center">
                                <a href='http://139.59.239.164:5000/'>
                                <button className="btn btn-primary">Demo</button>
                                </a>
                                <a href='https://github.com/cheatchansovoth/SuperRock'>
                                <button className="btn btn-primary">Code</button>
                                </a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
        </div>
        </motion.div>
 

        </React.Fragment>
    )
}
export default About;