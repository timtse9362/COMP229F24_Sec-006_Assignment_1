/*
    File name: about.js
    Student name: Kin Chuen Tse
    Student ID: 301371464
    Date: Sept 26, 2024
*/

import React from "react";
import './about.css';
import profilePic from "../../assets/profile_photo.JPG";
import resume from "../../assets/Resume.pdf";

//Main Content Section
const About = () => {
    return(
        <section id='about'>
            <p className="aboutTitle">About Me</p>
            <nav className="aboutContent">
                <div className="about-info">
                <img src={profilePic} alt="Profile Picture" class="profile-img" width="145" heigh="193"></img>
                    <h2>I am Kin Chuen Tse. You can also call me David.</h2>
                    <h2>I am a skilled IT Technician with experience in Datacenter field.</h2>
                    <h2>I have worked in the Datacenter field for more than 10 years.</h2>
                    <h2>I am mainly responsible for the following tasks: </h2>
                    <br></br>
                    <ul className="tasks">
                        <li>Server maintenance.</li>
                        <li>Link connection break fix and investigation</li>
                        <li>Daily datacenter operation such as DC walkthrough.</li>
                        <li>Resopnsible ad hoc project.</li>
                        <li>Receive standby call.</li>
                    </ul>
                    <br></br>
                    <h2>I am also experienced in C++ programming, DB design, web development and mobile app development.</h2>
                </div>
            </nav>
            <a href={resume} className="resumeLink">Download my resume</a>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </section>

    );
}

export default About