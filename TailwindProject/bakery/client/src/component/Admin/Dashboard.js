import React from "react";
import Sidebar from "../Sidebar";
import View from "./View";
const Dashboard=()=>
{
//     const Underline='group text-sky-600 transition duration-300'
//     const UnderlineAnimation='block w-0 group-hover:w-20 transition-all duration-500 h-0.5 bg-sky-600'
    return(
        <React.Fragment>
            <div className='flex min-w-full'>
                <div className=''>
                        <Sidebar />
                 </div>
                <div className="flex justify-center w-[90%]">                      
                        <View/>                            
                </div>
            </div>
        </React.Fragment>
    )
}

export default Dashboard;