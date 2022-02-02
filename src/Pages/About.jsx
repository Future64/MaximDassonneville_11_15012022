import React from "react"
import "../css/about.css"
import Header from "../components/Header"
import SectionAbout from "../components/SectionAbout"
import DropdownLarge from "../components/DropdownLarge"

const About = (props) => {
  return (
    <div className="About">
      <Header />
      <SectionAbout />
      <div className="dropdown-items">
        {props.data.map((item) => {
          return (
            <DropdownLarge
              title={item.title}
              txt={item.bodyText}
              key={item.title}
            />
          )
        })}
      </div>
    </div>
  )
}

export default About
