import React from "react"
import { NavLink } from "react-router-dom"
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
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "activeLink" : "")} // Lien surligné dans la page en cours
              >
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "activeLink" : "")} // Lien surligné dans la page en cours
              >
                A propos
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
