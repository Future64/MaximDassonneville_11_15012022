import React from "react"
import ReactDOM from "react-dom"
import { Routes, Route } from "react-router-dom"
// import DATA from "./DATA"
import Home from "../Pages/Home"
import Error from "../Pages/Error"
import About from "../Pages/About"
import Logement from "../Pages/Logement"

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement" element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
