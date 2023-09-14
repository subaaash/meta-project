import React from "react";
import review1 from "../src/images/review-1.jpg";
import review2 from "../src/images/review-2.jpg";
import review3 from "../src/images/review-3.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-regular-svg-icons";

const Testimonials = () => {
    return (
        <section className="testimonials-container">
                <h3>Testimonials</h3>
            <div className="testimonials">
                <div className="testimonial">
                    <h4>Rating: 5<FontAwesomeIcon icon={faStar} /></h4>
                    <img src={review1}></img>
                    <h4>Shay C.</h4>
                    <p>"Amazing as always."</p>
                </div>

                <div className="testimonial">
                    <h4>Rating: 5<FontAwesomeIcon icon={faStar} /></h4>
                    <img src={review2}></img>
                    <h4>Dave S.</h4>
                    <p>"My favorite go-to!"</p>
                </div>

                <div className="testimonial">
                    <h4>Rating: 5<FontAwesomeIcon icon={faStar} /></h4>
                    <img src={review3}></img>
                    <h4>Shelby M.</h4>
                    <p>"Cant wait to visit again!"</p>
                </div>

                <div className="testimonial">
                    <h4>Rating: 4<FontAwesomeIcon icon={faStar} /></h4>
                    <img src={review1}></img>
                    <h4>Daria H.</h4>
                    <p>"Great place, great taste."</p>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;