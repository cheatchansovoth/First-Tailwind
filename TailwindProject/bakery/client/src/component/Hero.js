import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { MdBakeryDining } from "react-icons/md";
import { HiBuildingStorefront } from "react-icons/hi2";
import { FaShuttleVan } from "react-icons/fa";
const Hero=()=>
{
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

    return(
        <React.Fragment>
            <div className="hero min-h-[50%] bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://cdn.discordapp.com/attachments/1081462796081963048/1081752482742546503/KennyK_a_picture_for_a_bakeryrealistic_8acd838b-8978-42b7-b4b6-c0e5c11ed888.png" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-5xl font-bold">Welcome </h1>
                <p className="py-6">The bakery shop is filled with the aroma of freshly baked bread and pastries,<br/> and the display cases are filled with a mouth-watering assortment of cakes and cookies.</p>
                <button className="btn btn-outlin">Call us now</button>
                </div>
            </div>
            </div>
                <div className="hero min-h-[50%] bg-base-300">
                    <div>
                        <h1 className="text-5xl text-center my-6">YOUR FRENCH BAKERY ONLINE</h1>
                        <p className="text-center my-3">Paneton offers a range of fresh, frozen and par-baked breads and pastry products directly to our customers via online shopping, </p>
                        <p className="text-center mb-3">click and collect from Farmhouse Lane, St Johns, Auckland and to our stockists nationwide, from Rarotonga to Christchurch. </p>
                    </div>
                  </div>
                <div className="flex flex-col justify-center items-center md:flex-row bg-base-200">
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
             <h1 className="text-center text-[35px] uppercase font-bold underline">Our Products</h1>
             <div className="mx-[10%] sm:w-[70%] sm:mx-[15%]">
                <Carousel responsive={responsive}>
                <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://cdn.discordapp.com/attachments/1081462796081963048/1081787512202211369/KennyK_a_bread_1e48485a-361c-4df4-af0c-ad93f4448f83.png" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Jumbo Bread <span className="badge badge-secondary">$3</span></h2>
                    <p>Freshly baked bread has a comforting aroma that fills the air and makes mouths water. </p>
                    <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://media.discordapp.net/attachments/1081462796081963048/1081794177488146432/KennyK_a_muffin_0dc7b94f-bbd5-4824-b596-cfd1834e5d02.png?width=570&height=570" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Muffin <span className="badge badge-secondary">$3</span></h2>
                    <p>A warm muffin, with its soft crumbly texture and bursting flavor, is a delightful breakfast treat.</p>
                    <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://media.discordapp.net/attachments/1081462796081963048/1081794207729061958/KennyK_ginger_bread_11b18d28-5934-4426-8d6f-2f1a48d547f9.png?width=570&height=570" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Ginger Bread <span className="badge badge-secondary">$3</span></h2>
                    <p>Gingerbread, with its rich and spicy taste, is a beloved holiday treat that brings warmth and nostalgia to many.</p>
                    <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://media.discordapp.net/attachments/1081462796081963048/1081794217430499398/KennyK_cookie_dd366db3-de32-4c8a-bdd9-76a7882fedc3.png?width=570&height=570" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Cookie <span className="badge badge-secondary">$3</span></h2>
                    <p>There's nothing quite like the simple pleasure of biting into a warm, freshly baked cookie with a soft and gooey center.</p>
                    <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
                </div>
        </Carousel>
        </div>
    </React.Fragment>
    )
}
export default Hero;