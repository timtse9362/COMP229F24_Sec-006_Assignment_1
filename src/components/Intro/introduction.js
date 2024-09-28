/*
    File name: introduction.js
    Student name: Kin Chuen Tse
    Student ID: 301371464
    Date: Sept 26, 2024
*/

import React from 'react';
import './introduction.css';
import {Link} from 'react-scroll';

//Main Content Section
const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <p className='welcome'>Welcome to my Portfolio</p>
                <p>I am a skilled IT Technician with experience in Datacenter field.</p>
                <p>My mission is to create a better world through IT.</p>
                <Link activeclass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className="aboutLink">Link to About Me</Link>
            </div>


        </section>
    )
}

export default Intro;