/*
    File name: contact.js
    Student name: Kin Chuen Tse
    Student ID: 301371464
    Date: Sept 26, 2024
*/

import React from "react";
import './contact.css';

//Main Content Section
const Contact = () => {
    return (
        <section id="contact">
            <br></br>
            <br></br>
            <br></br>

            <div id="contactContent">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">
                <p>Feel free to reach out to me for any inquiries or collaborations.
                I'm always excited to work on new projects and meet fellow developers.</p>
                <p>Email: ktse19@my.centennialcollege.ca</p>
                <p>Phone: (123) 456-7890</p>
                <p>Location: Toronto, Canada</p>
                </span>
                <form className="contactForm">
                    <input type="text" className="name" placeholder="Your Name" />
                    <input type="email" className="email" placeholder="Your Email" />
                    <textarea className="msg" name="message" rows="5" placeholder="Your Message" />
                    <button type="submit" value="Send" className="submitBtn">Submit</button>
                    <div className="links">
                        <img src="" alt="" className="link"></img>
                    </div>
                </form>
            </div>
        </section>
    )
}
export default Contact;