import React from "react"
import "../css/About.css"
import Header from "../Components/Header"
import SectionAbout from "../Components/SectionAbout"
import DropdownLarge from "../Components/DropdownLarge"


const About = (props) => {
  return (
    <div className="About">
      <Header />
      <SectionAbout />
      <div className="dropdown-items">
        {props.data.map((item) => {
          console.log(item.title)
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
