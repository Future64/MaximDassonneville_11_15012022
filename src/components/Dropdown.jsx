import React, { useState } from "react"
import "../css/dropdown.css"

const Dropdown = (props) => {
  let [openBody, UseOpenBody] = useState(false)

  
  const handleBodyDropdown = () => { //Fonction qui fait changer le state de oppenBody
    openBody === false
      ? UseOpenBody((openBody = true))
      : UseOpenBody((openBody = false))
  }

  return (
    <div
      className={`dropdown-Container ${
        props.bool === true ? "classWidth" : "" // Ajout de la classe "classWidth" si il recoit les props
      }`}
    >
      <div className="dropdown-head">
        <h2 className="dropdown-title">{props.title}</h2>
        <button onClick={handleBodyDropdown} className="dropdownMain-arrow">
          <i
            className={
              openBody ? "fas fa-chevron-down up" : "fas fa-chevron-down down" //changement de classe en fonction du state openBody
            }
          ></i>
        </button>
      </div>
      <div
        className={
          openBody ? "dropdown-body openBody" : "dropdown-body closeBody" //changement de classe en fonction du state openBody
        }
      >
        {Array.isArray(props.txt) === false ? ( // gestion du contenu des dropdowns en fonction de si c'est un tableau ou pas
          <p>{props.txt}</p>
        ) : (
          <ul>
            {props.txt.map((item) => {
              return <li key={`${props.title} -${item}`}>{item}</li>
            })}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Dropdown
