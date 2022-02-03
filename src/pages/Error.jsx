import React from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import "../css/Error.css"

const Error = () => {
  return (
    <div className="Error">
      <Header />
      <div className="Container-msgError">
        <p className="err">404</p>
        <p className="excuse">Oups! La page que vous demandez n'existe pas.</p>
        <span className="link-home">
          <Link to="/">Retourner sur la page d'accueil</Link>
        </span>
      </div>
    </div>
  )
}

export default Error
