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
import "./index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Summary />
      <ExperienceEducation />
      <Skills />
      <Banner />
      <Projects />
      <Interests />
      <References />
      <Footer />
    </div>
  );
}

export default App;
