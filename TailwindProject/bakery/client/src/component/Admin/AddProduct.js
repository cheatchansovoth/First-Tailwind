import {React,useState} from 'react'
import Sidebar from "../Sidebar";

import Axios from 'axios';
const AddProduct=()=>
{
    const [Foodname,SetFoodname]=useState("");
    const [Price,SetPrice]=useState("");
    const [Description,SetDescription]=useState("");
    const [image,setimage]=useState("");
    const [error,setError]=useState("")

    const onHandle=(e)=>
    {
      const formData=new FormData();
  
      formData.append("Foodname",Foodname)
      formData.append("Price",Price)
      formData.append("Description",Description)
      formData.append("image",image)
      e.preventDefault();
      Axios.post("http://localhost:5001/storeiamge",formData)
      setError('Item has been submited');}
    return(
        <div>
            <div className='flex min-w-full'>
                <div className=''>
                        <Sidebar />
                 </div>
                <div className="flex justify-center w-[90%]"> 
                        <div className='w-full flex flex-col items-center'>                     
                                <h1 className='uppercase font-bold text-2xl'>Add New Product</h1>
                                <div className='w-[70%] my-[5%]'>
                                <form onSubmit={onHandle} encType='multipart/form-data'>  
                                    <div className='flex flex-col w-[70%] lg:w-[30%]'>
                                        <label>FoodName</label>
                                        <input type='text' onChange={(event)=>
                                        {
                                            SetFoodname(event.target.value)
                                        }}></input>
                                        <label>Price</label>
                                        <input type='text' onChange={(event)=>
                                        {
                                            SetPrice(event.target.value)
                                        }}></input>
                                        <label>Description</label>
                                        <input type='text' onChange={(event)=>
                                        {
                                            SetDescription(event.target.value)
                                        }}></input>
                                        <label>Picture</label>
                                        <input type='file' onChange={(event)=>
                                        {
                                            setimage(event.target.files[0])
                                        }}></input>
                                        <button className='btn my-3' type='submit'>Submit</button>
                                    </div>
                                </form>
                                </div>          
                        </div>               
                </div>
            </div>
        </div>
    )
}

export default AddProduct;