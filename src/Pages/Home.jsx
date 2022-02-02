import React from "react"
import ReactDom from "react-dom"
import { Routes, Route } from "react-router-dom"
import "../css/Home.css"
import Header from "../components/Header"
import Section from "../components/Section"
import Gallery from "../components/Gallery"
import Footer from "../components/Footer"
import LogoHouse from "../asset/LogoHouse.png"

const Home = (props) => {
  // console.log(props.data)
  return (
    <div className="Home">
      <Header />
      <Section />
      <Gallery data={props.data} />
      <Footer img={LogoHouse} />
    </div>
  )
}

export default Home
