/*
    File name: App.js
    Student name: Kin Chuen Tse
    Student ID: 301371464
    Date: Sept 26, 2024
*/

import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/introduction";
import About from "./components/About/about";
import Projects from "./components/Projects/projects";
import Services from "./components/Services/services"
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

//Main Content Section
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Projects/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
