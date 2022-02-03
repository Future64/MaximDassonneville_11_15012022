import React, { useState } from "react"
import "../css/dropdown.css"

const Dropdown = (props) => {
  let [openBody, UseOpenBody] = useState(false)

  const handleBodyDropdown = () => {
    openBody === false
      ? UseOpenBody((openBody = true))
      : UseOpenBody((openBody = false))
  }

  return (
    <div
      className={`dropdown-Container ${
        props.bool === true ? "classWidth" : ""
      }`}
    >
      <div className="dropdown-head">
        <h2 className="dropdown-title">{props.title}</h2>
        <button onClick={handleBodyDropdown} className="dropdownMain-arrow">
          <i
            className={
              openBody ? "fas fa-chevron-down up" : "fas fa-chevron-down down"
            }
          ></i>
        </button>
      </div>
      <div
        className={
          openBody ? "dropdown-body openBody" : "dropdown-body closeBody"
        }
      >
        {props.style === undefined ? (
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
