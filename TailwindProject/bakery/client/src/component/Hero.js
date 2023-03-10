import React from "react";

import 'react-multi-carousel/lib/styles.css';
import { MdBakeryDining } from "react-icons/md";
import { HiBuildingStorefront } from "react-icons/hi2";
import { FaShuttleVan } from "react-icons/fa";
import Card from "./Card"
const Hero=()=>
{
    return(
        <React.Fragment>
            <div className="hero min-h-[50%] bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://cdn.discordapp.com/attachments/1081462796081963048/1081752482742546503/KennyK_a_picture_for_a_bakeryrealistic_8acd838b-8978-42b7-b4b6-c0e5c11ed888.png" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-5xl font-bold">Welcome </h1>
                <p className="py-6">The bakery shop is filled with the aroma of freshly baked bread and pastries,<br/> and the display cases are filled with a mouth-watering assortment of cakes and cookies.</p>
                <button className="btn btn-outline">Call us now</button>
                </div>
            </div>
            </div>
                        <div className="hero">
                            <div>
                                <h1 className="text-5xl text-center my-6">YOUR FRENCH BAKERY ONLINE</h1>
                                <p className="text-center my-3">Paneton offers a range of fresh, frozen and par-baked breads and pastry products directly to our customers via online shopping, </p>
                                <p className="text-center mb-3">click and collect from Farmhouse Lane, St Johns, Auckland and to our stockists nationwide, from Rarotonga to Christchurch. </p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center md:flex-row">
                                    <div className="mx-10 ">
                                    <MdBakeryDining className="text-[120px] mx-20"/>
                                    <h1 className="text-center text-3xl font-bold my-3">Fresh every time</h1>
                                    <p className="text-center">	We've done all the hard work, you can enjoy<br/> the taste and smell of.</p>
                                    </div>
                                    <div className="mx-10">
                                    <HiBuildingStorefront className="text-[120px]  mx-20"/>
                                    <h1 className="text-center text-3xl font-bold my-3">Authentic</h1>
                                    <p className="text-center">	We've done all the hard work, you can enjoy<br/> the taste and smell of the French </p>
                                    </div>
                                    <div className="mx-10" >
                                    <FaShuttleVan className="text-[120px]  mx-20"/>
                                    <h1 className="text-center text-3xl font-bold my-3">Convenient</h1>
                                    <p className="text-center">	We've done all the hard work, you can enjoy<br/> the taste and smell of </p>
                                    </div>
                        </div>
                    <div>
                    <div className="w-[100%] flex flex-col items-center my-10">
                    <h1 className="text-center text-[35px] uppercase font-bold underline">Our Products</h1>
                        <div className="w-[50%]">
                        <Card/>
                        </div>
                    </div>
                    </div>
    </React.Fragment>
    )
}
export default Hero;