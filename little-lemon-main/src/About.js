import React from "react";
import aboutImg1 from "../src/images/about-1.jpg";
import aboutImg2 from "../src/images/about-2.jpg";



const About = () => {
    return (
        <section className="about-container">
            <div className="about">
                <div className="about-copy">
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>Nestled in the heart of Chicago, Little Lemon brings you an exquisite fusion of taste and ambiance that's sure to tantalize your senses.

                We strive to provide a seamless service, we understand the importance of convenience in today's fast-paced world, and are committed to making your dining journey as smooth as possible. 

                Our friendly staff looks forward to welcoming you to Little Lemon for an unforgettable culinary experience.</p>
                </div>
            <div className="about-images">
                <div className="aboutimg1">
                    <img src={aboutImg1}/>
                </div>
                <div className="aboutimg2">
                    <img src={aboutImg2}/>
                </div>
            </div>
            </div>
        </section>
    );
};

export default About;