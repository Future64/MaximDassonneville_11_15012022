import React from "react"
import ReactDom from "react-dom"
import "../css/DropdownLarge.css"

const DropdownLarge = (props) => {
  return (
    <div className="dropdown-Container">
      <div className="dropdown-head">
        <h2 className="dropdown-title">{props.title}</h2>
        <span className="dropdown-arrow">
          <i className="fas fa-chevron-down"></i>
        </span>
      </div>
      <div className="dropdown-body">
        <p>{props.txt}</p>
      </div>
    </div>
  )
}

export default DropdownLarge
