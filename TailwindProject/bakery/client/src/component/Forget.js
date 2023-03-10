import {React, useState} from 'react';
import Axios from 'axios';



const Forget=()=>
{
    const [email,setEmail] =useState("");
    const [success,setSuccess]=useState("");

    const handleSubmit=(e)=>
    {
        e.preventDefault();
        Axios.post('http://localhost:5001/user/resetpassword',{
            email:email
        }).then((res)=>
        {
            setSuccess('Please check your email')
            
        })

    }

    return(
        <div className='flex flex-row h-screen justify-center items-center'>
            <div className='w-[50%] h-[40%] bg-base-200'>
                <h1 className='font-bold text-2xl text-center my-10 uppercase'>Forget Password</h1>
                <div className='flex flex-col h-[50%] items-center justify-center mx-10'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <input placeholder='Enter your email here' className='my-10 p-1 py-3 w-[70%] text-center' onChange={(event)=>
                {
                    setEmail(event.target.value);
                }}></input>
                <button className='btn btn-xl' onClick={handleSubmit}>Reset my Password</button>
                </div>
            </div>
            {success?<p className='success-class'>{success}</p>:null}
        </div>
    )
}

export default Forget;