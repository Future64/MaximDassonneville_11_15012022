import React from "react"
import "../css/Tag.css"

const Tag = (props) => {
  console.log(props.key)
  return (
    <>
      <div className="tag-container">
        <span className="tag-name">{props.name}</span>
      </div>
    </>
  )
}

export default Tag
