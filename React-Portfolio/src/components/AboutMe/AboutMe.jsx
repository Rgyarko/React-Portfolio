import React from "react";
import Family from '../../../assets/family.jpg';
import Portrait from '../../../assets/portrait.png';
import './AboutMe.css'

function AboutMe() {
    return (
        <div className="about-me">
            <h2>About Me</h2>
            <h3>Welcome!</h3>
            <p>My name is Racheal Ameyaw. I transitioned from being a full-time Patient care assosicate to a full stack developer.
                 I completed a full stack development bootcamp at Ohio State University, which deepened my passion for programming and computers.
                  Throughout my life, I’ve always enjoyed the styling aspect of coding. This program has greatly expanded my knowledge in both front-end 
                  and back-end development, and I am eager to continue learning and growing in this field.
            </p>
            <img src= {Family} alt="My Image" className="my-image" />
            <img src= {Portrait} alt="My Image" className="my-image" />
            <p>The projects linked in my portfolio are those I created during my current bootcamp. 
                I love to focus on design and add a personal touch when I have the time. I view these projects as achievements and 
                as opportunities for future improvement with the new skills I learn. 
                I was fortunate to collaborate on  group projects with the  dedicated team of full stack developers. 
                We all share a passion for the apps we built and plan to continue enhancing them to realize our vision.
            </p>
        </div>
    )
}
    
    


export default AboutMe;