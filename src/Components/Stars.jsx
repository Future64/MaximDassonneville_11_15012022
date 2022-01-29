import React from "react"
import "../css/stars.css"

const Stars = (props) => {
  const renderStars = () => {
    const ratingMax = 5
    const ratingCurrent = props.data
    let ratingCollection = []

    for (let i = 0; i < ratingMax; i++) {
      ratingCollection.push(
        <i
          className={
            i < ratingCurrent ? "fas fa-star star-color" : "fas fa-star"
          }
          key={`star-${[i]}`}
        ></i>
      )
    }
    return ratingCollection
  }
  return <div className="Stars">{renderStars()}</div>
}

export default Stars
