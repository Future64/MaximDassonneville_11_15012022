import React from "react"
import ReactDom from "react-dom"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import "../css/Home.css"
import DATA from "../DATA"
import Header from "../Components/Header"
import Section from "../Components/Section"
import Gallery from "../Components/Gallery"
import Footer from "../Components/Footer"

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <Section />
      <Gallery data={DATA} />
      {/* <Footer/> */}
    </div>
  )
}

export default Home
