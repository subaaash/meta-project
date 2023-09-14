import React from "react";
import logo from '../src/images/logo-2.png';

const Footer = () => {
    return (
        <footer>
            <section>
                <div className="company-info">
                    <img src={logo} alt=''/>
                    <p>We are a family owned Mediterranean restaurant, focused
                        on traditional recipes served with a modern twist.</p>
                </div>

                <div>
                    <h3>Important Links</h3>
                    <ul>
                     <li><a href="/">Home</a></li>
                     <li><a href="/">About</a></li>
                     <li><a href="/">Menu</a></li>
                     <li><a href="/">Reservations</a></li>
                     <li><a href="/">Order Online</a></li>
                     <li><a href="/">Log In</a></li>
                    </ul>
                </div>

                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: <br/> 1412 S. Zest Lane, Chicago USA</li>
                        <li>Phone: <br/> 402.123.4567</li>
                        <li>Email: <br/> hello@littlelemon.com</li>
                    </ul>
                </div>

                <div>
                    <h3>Follow Us</h3>
                    <ul>
                        <li><a href="/">Facebook</a></li>
                        <li><a href="/">Instagram</a></li>
                        <li><a href="/">Twitter</a></li>
                    </ul>
                </div>

            </section>
        </footer>
    );
};


export default Footer;