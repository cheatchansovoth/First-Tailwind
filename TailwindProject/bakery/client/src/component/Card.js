import {React} from 'react'
import Carousel from 'react-multi-carousel';

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
    return (
        <div>
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
    )
}
export default Card;