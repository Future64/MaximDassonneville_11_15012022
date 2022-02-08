import React, { useState } from "react"
import "../css/Carrousel.css"

const Carrousel = (props) => {
  const [pictures] = useState(props.photos)
  let [currentPictureIndex, setCurrentPictureIndex] = useState(0)

  const getSRC = () => {
    return pictures[currentPictureIndex]
  }

  const previous = () => {
    const index =
      currentPictureIndex === 0 ? pictures.length - 1 : currentPictureIndex - 1

    setCurrentPictureIndex((currentPictureIndex = index))
  }

  const next = () => {
    const index =
      currentPictureIndex === pictures.length - 1 ? 0 : currentPictureIndex + 1

    setCurrentPictureIndex((currentPictureIndex = index))
  }

  return (
    <div>
      <div className="SectionCarrousel">
        <div className="phot-containerCarrousel">
          {
            <img
              src={getSRC()}
              alt="img"
              className="photo-Carrousel"
              key={`img-${getSRC()}`}
            />
          }
          <div className="arrow-Container">
            <div className="ContainerButton">
              <button
                onClick={previous}
                className={pictures.length >= 2 ? "button-left" : "buttonNone"}
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button
                onClick={next}
                className={pictures.length >= 2 ? "button-right" : "buttonNone"}
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
            <span className={pictures.length >= 2 ? "compteurPhoto": "compteurPhoto displayNone"}> 
              {`${currentPictureIndex + 1}/${pictures.length}`}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carrousel
