import React from "react"
import "../css/About.css"
import Header from "../Components/Header"
import SectionAbout from "../Components/SectionAbout"
import DropdownLarge from "../Components/DropdownLarge"
// import DATA from "../DATA"

const About = (props) => {
  return (
    <div className="About">
      <Header />
      <div className="about-cont">
        <SectionAbout />
        <DropdownLarge data={props} />
      </div>
    </div>
  )
}

export default About
