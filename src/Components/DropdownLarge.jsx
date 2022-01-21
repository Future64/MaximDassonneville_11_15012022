import React from "react"
import ReactDom from "react-dom"
import "../css/DropdownLarge.css"

const DropdownLarge = (props) => {
  let title = "Fiabilité"
  return (
    <div className="dropdown-Container">
      <div className="dropdown-head">
        <h2 className="dropdown-title">{title}</h2>
        <span className="dropdown-arrow">
          <i class="fas fa-chevron-down"></i>
        </span>
      </div>
      <div className="dropdown-body">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum error
          qui distinctio a excepturi, sunt illo quam cumque dignissimos numquam
          minus odit iusto velit repellendus perspiciatis! Harum corrupti natus
          ducimus.
        </p>
      </div>
    </div>
  )
}

export default DropdownLarge
