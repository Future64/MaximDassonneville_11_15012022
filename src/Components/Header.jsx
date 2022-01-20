import React from "react"
import { Link } from "react-router-dom"
import "../css/Header.css"

const Header = () => {
  return (
    <div className="Header">
      <header className="App-header">
        <img
          src="https://user.oc-static.com/upload/2020/08/14/15974111893356_Screen%20Shot%202020-07-08%20at%2018.17.37%20%281%29.jpg"
          alt="Kasa"
        />
        <nav>
          <ul className="Nav-list">
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/about">A propos</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
