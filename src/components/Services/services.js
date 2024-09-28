/*
    File name: services.js
    Student name: Kin Chuen Tse
    Student ID: 301371464
    Date: Sept 26, 2024
*/

import React from "react";
import './services.css';
import web from "../../assets/web.jpg";
import cplusplus from "../../assets/c++.png";
import db from "../../assets/database.png"
import mobile from "../../assets/mobile-app.png"

//Main Content Section
const Services = () => {
    return(
        <section id='services'>
            <h1>My Services</h1>
        
            <div class="service">
                <span class="icon"><img src={web}></img></span>
                <h2>Web Development</h2>
                <p>Creating responsive and user-friendly websites using modern technologies.</p>
            </div>

            <div class="service">
                <span class="icon"><img src={cplusplus} width={100} height={100}></img></span>
                <h2>C++ App Development</h2>
                <p>Building native and cross-platform applications for Windows and Linux.</p>
            </div>

            <div class="service">
                <span class="icon"><img src={db} width={100} height={100}></img></span>
                <h2>Database Design</h2>
                <p>Specfic in MS SQL and Oracle SQL</p>
            </div>

            <div class="service">
            <span class="icon"><img src={mobile} width={100} height={100}></img></span>
                <h2>Mobile App Development</h2>
                <p>Building applications for IOS and Android mobile platform.</p>
            </div>
        
        
        </section>
    );
}

export default Services;