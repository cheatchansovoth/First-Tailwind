import {React, useEffect, useState} from 'react'
import Carousel from 'react-multi-carousel';
import Axios from 'axios';
const Card=()=>
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
      const [foods,setFoods]=useState([]);

      useEffect(()=>
      {
        Axios.get("http://localhost:5001/product/").then((response)=>
        {
            setFoods(response.data);
        }).catch((err)=>
        {
            console.log(err);
        })
      },[])
    return (
        <div>
            <Carousel responsive={responsive}>
                {foods.map((food)=>
                {
                    return(
                        <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={`/images/${food.image}`} alt={food.Foodname} className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{food.Foodname}<span className="badge badge-secondary">${food.Price}</span></h2>
                            <p>{food.Description}</p>
                            <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                        </div>

                    )
                })}
        </Carousel>
        </div>
    )
}
export default Card;