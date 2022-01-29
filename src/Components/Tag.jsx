import React from "react"
import "../css/tag.css"

const Tag = (props) => {
  return (
    <>
      <div className="tag-container" key={`${props.tag}-${props.name}`}>
        <span className="tag-name">{props.tag}</span>
      </div>
    </>
  )
}

export default Tag
