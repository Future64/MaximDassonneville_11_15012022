import React from "react"
import ReactDom from "react-dom"
import { Routes, Route } from "react-router-dom"
import "../css/Home.css"
import Header from "../Components/Header"
import Section from "../Components/Section"
import Gallery from "../Components/Gallery"
import Footer from "../Components/Footer"
import LogoHouse from "../Images/LogoHouse.png"

const Home = (props) => {
  // console.log(props.data)
  return (
    <div className="Home">
      <Header />
      <Section />
      <Gallery data={props.data} />
      {/* <Footer img={LogoHouse} /> */}
    </div>
  )
}

export default Home
