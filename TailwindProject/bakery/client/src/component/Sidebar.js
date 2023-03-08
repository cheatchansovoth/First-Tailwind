import React from "react";
import {NavLink} from 'react-router-dom'
import { AiTwotoneHome } from "react-icons/ai";
import { BiFoodMenu } from "react-icons/bi";
import { MdPointOfSale ,MdRememberMe,MdHistory} from "react-icons/md";


const Sidebar=()=>
{
    const Underline='group text-sky-600 transition duration-300'
    const UnderlineAnimation='block w-0 group-hover:w-20 transition-all duration-500 h-0.5 bg-sky-600'

    return(
        <React.Fragment>
            <div className="">
                    <div className="space-y-10  my-36 mx-10">
                        <div>
                                <NavLink className={Underline}>
                                <h1 className=" flex items-center uppercase text-xs font-bold  cursor-pointer">
                                <AiTwotoneHome/>Dashboard
                                </h1>
                                <span className={UnderlineAnimation}></span>
                                </NavLink>
                        </div>
                        <div>
                                <NavLink className={Underline}> 
                                <h1 className="flex items-center uppercase text-xs font-bold  cursor-pointer">
                                <BiFoodMenu/>ViewOrder
                                </h1>
                                <span className={UnderlineAnimation}></span>
                                </NavLink>
                        </div>
                        <div>
                                <NavLink className={Underline}> 
                                <h1 className="flex items-center uppercase text-xs font-bold  cursor-pointer">
                                <MdPointOfSale/>Manage Sale
                                </h1>
                                <span className={UnderlineAnimation}></span>
                                </NavLink>
                        </div>
                        <div>
                                <NavLink className={Underline}> 
                                <h1 className="flex items-center uppercase text-xs font-bold  cursor-pointer">
                                <MdRememberMe/>Manage Member
                                </h1>
                                <span className={UnderlineAnimation}></span>
                                </NavLink>
                        </div>
                        <div>
                                <NavLink className={Underline}> 
                                <h1 className="flex items-center uppercase text-xs font-bold  cursor-pointer">
                                <MdHistory/>Order History
                                </h1>
                                <span className={UnderlineAnimation}></span>
                                </NavLink>
                        </div>

                     </div>
            </div>
        </React.Fragment>
    )
}

export default Sidebar;