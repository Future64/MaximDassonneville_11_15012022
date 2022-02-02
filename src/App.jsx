import React from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import dataAbout from "./data/DataAbout"
import Home from "./Pages/Home"
import Error from "./Pages/Error"
import About from "./Pages/About"
import Logement from "./Pages/Logement"

/**
 * Import des datas venant du fichier AllData.json
 */
let DATA = []
fetch(" http://localhost:3000/AllData.json ", {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
})
  .then((response) => {
    return response.json()
  })
  .then((JSONDATA) => {
    DATA = JSONDATA
  })

/**
 * Fonction App
 */
const App = () => {
  const path = "/logement/:id"
  useLocation()

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home data={DATA} />} />
        <Route path="/about" element={<About data={dataAbout} />} />
        <Route path={path} element={<Logement data={DATA} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
