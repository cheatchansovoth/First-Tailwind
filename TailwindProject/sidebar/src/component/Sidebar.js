import React from 'react'
import { Link } from 'react-router-dom';
import { BsFillHouseFill,BsFillPersonFill,BsMailbox} from "react-icons/bs";

const Sidebar=()=>
{
    return (
        <React.Fragment>
        <div className='sidebar min-h-screen w-[10%] items-center justify-center lg:flex flex-col space-y-10 hidden border-2 shadow-2xl border-gray-800'>
        <Link to='/'><p className='text-2xl hover:text-3xl hover:text-gray-400'><BsFillHouseFill/></p></Link>
        <Link to='/about'><p className='text-2xl hover:text-3xl hover:text-gray-400'><BsFillPersonFill/></p></Link>
        <Link to='/message'><p className='text-2xl hover:text-3xl hover:text-gray-400'><BsMailbox/></p></Link>
        </div>
        </React.Fragment>
    )
}

export default Sidebar