import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route } from "react-router-dom"
import DATA from "./DATA"
import "./css/index.css"
import Home from "./Pages/Home"
import Error from "./Pages/Error"
import About from "./Pages/About"
import Logement from "./Pages/Logement"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Home data={DATA} />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
