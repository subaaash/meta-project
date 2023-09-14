import React from "react";
import { Link } from "react-router-dom";
import bannerImg from '../src/images/hero-img.jpg';

function Header () {
    return (
        <>
        <header className="header">
            <section>

                <div className="banner">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterranean restaurant, focused on
                    traditional recipes served with a modern twist.</p>
                    <Link to="/Booking"><button aria-label='On Click'>Reserve a Table</button></Link>
                    {/* <a href={"/Booking"}><button aria-label='On Click'>Reserve a Table</button></a> */}
                </div>

                <div className="banner-img">
                    <img src={bannerImg} alt="Dish at Little Lemon"/>
                </div>
            </section>

        </header>
        </>
    );
};


export default Header;