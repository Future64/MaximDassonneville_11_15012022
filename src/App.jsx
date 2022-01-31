import React from "react"
import ReactDOM from "react-dom"
import { Routes, Route, useParams, useLocation } from "react-router-dom"
import DATA from "./data/DATA"
import dataAbout from "./data/DataAbout"
import Home from "./Pages/Home"
import Error from "./Pages/Error"
import About from "./Pages/About"
import Logement from "./Pages/Logement"

const App = () => {
  const params = useParams()
  const location = useLocation()
  const path = "/logement/:id"
  console.log(location.pathname)

  // let getData = () => {
  //   DATA.map((item) => {
  //     console.log(item)
  //     if (path === location.pathname) {
  //       return item
  //     }
  //   })
  // }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home data={DATA} />} />
        <Route path="/about" element={<About data={dataAbout} />} />
        <Route path={path} element={<Logement data={DATA[13]} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
