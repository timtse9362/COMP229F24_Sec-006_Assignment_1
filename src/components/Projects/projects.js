/*
    File name: projects.js
    Student name: Kin Chuen Tse
    Student ID: 301371464
    Date: Sept 26, 2024
*/

import React from "react";
import './projects.css';
import project1 from "../../assets/project1.png"
import project2 from "../../assets/project2.png"
import project3 from "../../assets/project3.png"

//Main Content Section
const Projects = () => {
    return(
        <section id='projects'>
            <p className="projectsTitle">Three Projects below: </p>
            <nav className="projectsContent">
                <br/>
                <div className="project">
                    <h2>Project 1: </h2>
                    <img src={project1} alt="Project 1 Image"></img>
                    <p>This web application allows users to manage their personal finances by tracking income, expenses, and savings goals. 
                    Users can create an account, add their financial transactions, categorize them (e.g., groceries, entertainment, bills), 
                    and generate reports to visualize their spending habits. The app includes features like budget setting, alerts for upcoming bills, and tips for saving money. </p>
                </div>

                <br/>
                <div className="project">
                    <h2>Project 2:</h2>
                    <img src={project2} alt="Project 2 Image"></img>
                    <p>This project involves developing a smart home automation system that enables users to control their home appliances remotely through a mobile app. 
                        The system integrates with various IoT devices (e.g., lights, thermostats, security cameras) and allows users to create schedules, monitor energy usage, and receive notifications for unusual activities. 
                        The application utilizes a user-friendly interface and can be expanded to include voice control via smart assistants.</p>
                </div>

                <br/>
                <div className="project">
                    <h2>Project 3:</h2>
                    <img src={project3} alt="Project 3 Image"></img>
                    <p>This project involves developing a smart home automation system that enables users to control their home appliances remotely through a mobile app. The system integrates with various IoT devices (e.g., lights, thermostats, security cameras) and allows users to create schedules, monitor energy usage, and receive notifications for unusual activities. 
                        The application utilizes a user-friendly interface and can be expanded to include voice control via smart assistants.</p>
                </div>
            </nav>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </section>
    )
}

export default Projects;