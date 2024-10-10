import React from "react";
import Header from "./components/Header";
import Summary from "./components/Summary";
import ExperienceEducation from "./components/ExperienceEducation";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Interests from "./components/Interests";
import References from "./components/References";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import ContactForm from "./components/ContactForm"; // Import the new component
import "./index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Summary />
      <ExperienceEducation />
      <Skills />
      <Projects />
      <Banner />
      <Interests />
      <ContactForm /> {/* Add ContactForm here */}
      <References />
      <Footer />
    </div>
  );
}

export default App;
