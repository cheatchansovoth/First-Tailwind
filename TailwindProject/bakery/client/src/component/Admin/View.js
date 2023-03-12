import React from 'react';
import {useEffect, useState,useContext} from 'react';
import Axios from 'axios';
import {useNavigate } from 'react-router-dom';
const View=()=>
{
    const [foods,setFoods]=useState([]);
    const __userinfo=JSON.parse(localStorage.getItem('__userInfo'));
    let navigate=useNavigate();
    useEffect(()=>
      {
        if (__userinfo === null || __userinfo === undefined)
        {
            navigate("/")
        }
        Axios.get("http://localhost:5001/product/").then((response)=>
        {
            setFoods(response.data);
        }).catch((err)=>
        {
            console.log(err);
        })
      },[])
    return(
        <React.Fragment>
            <div className='flex flex-col items-center w-[100%]'>
                <div className='flex items-center justify-between w-full my-10'>
                        <div>
                             <h1 className='font-bold text-xl uppercase my-3'>Product Records</h1>
                         </div>
                        <div>
                             <button className='btn btn-primary'>Add new product</button>
                        </div>
                </div>
                <div className='w-full'>
                <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>
                        <label>
                            <input type="checkbox" className="checkbox" />
                        </label>
                        </th>
                        <th>ProductName</th>
                        <th>Qauntity</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    {foods.map((food,key)=>
                {
                    return(
                        <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                            </th>
                            <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={`/images/${food.image}`} alt={food.Foodname} />
                                </div>
                                </div>
                                <div>
                                <div className="font-bold">{food.Foodname}</div>
                                </div>
                            </div>
                            </td>
                            <td>
                            1
                            <br/>
                            </td>
                            <td className='w-10'>{food.Description}</td>
                            <th>
                            <button className="btn btn-ghost btn-xs bg-red-500 my-3">Remove</button>
                            </th>
                        </tr>
                        </tbody>
                      
                    )
                })}
                </table>
                </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default View;