import React from "react"
import "../css/About.css"
import Kalen from "../asset/kalen.png"
import Header from "../components/Header"
import Section from "../components/Section"
import Dropdown from "../components/Dropdown"
import Footer from "../components/Footer"

const About = (props) => {
  const styleWidth = true
  return (
    <div className="About">
      <Header />
      <Section picture={Kalen} />
      <div className="dropdown-items">
        {props.data.map((item) => {
          return (
            <Dropdown
              title={item.title}
              txt={item.bodyText}
              key={item.title}
              bool={styleWidth}
            />
          )
        })}
      </div>
      <Footer />
    </div>
  )
}

export default About
