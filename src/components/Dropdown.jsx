import React, { useState } from 'react'
import '../css/dropdown.css'

const Dropdown = (props) => {
  let [openBody, UseOpenBody] = useState(false)

  //Fonction qui gère l'ouverture/fermeture et up/down des dropdowns
  const handleBodyDropdown = () => {
    openBody === false
      ? UseOpenBody((openBody = true))
      : UseOpenBody((openBody = false))
  }

  return (
    <div
      className={`dropdown-Container ${
        props.bool === true ? 'classWidth' : '' // Redimentionnement des dropdowns de la page logement
      }`}
    >
      <div className="dropdown-head">
        <h2 className="dropdown-title">{props.title}</h2>
        <button onClick={handleBodyDropdown} className="dropdownMain-arrow">
          <i
            className={
              openBody ? 'fas fa-chevron-down up' : 'fas fa-chevron-down down' // up/down du chevron du dropdown
            }
          ></i>
        </button>
      </div>
      <div
        className={
          openBody ? 'dropdown-body openBody' : 'dropdown-body closeBody' // Ouverture/fermeture du corps du dropdown
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
