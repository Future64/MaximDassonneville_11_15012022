import React, { useState } from "react"
import "../css/Carrousel.css"

const Carrousel = (props) => {
  const [pictures] = useState(props.photos)
  let [currentPictureIndex, setCurrentPictureIndex] = useState(0)

  const getSRC = () => { //Fonction qui retourne l'index de la photo en cours
    return pictures[currentPictureIndex]
  }

  const previous = () => { // Fonction qui décrémente le tableau 
    const index =
      currentPictureIndex === 0 ? pictures.length - 1 : currentPictureIndex - 1

    setCurrentPictureIndex((currentPictureIndex = index))
  }

  const next = () => { // Fonction qui incrémente le tableau
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
                className={pictures.length >= 2 ? "button-left" : "buttonNone"} // Cache le boutton guauche quand il n'y a qu'une seule photo à afficher
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button
                onClick={next}
                className={pictures.length >= 2 ? "button-right" : "buttonNone"} // Cache le boutton droit quand il n'y a qu'une seule photo à afficher
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
            <span className={pictures.length >= 2 ? "compteurPhoto": "compteurPhoto displayNone"} // Cache le compteur quand il n'y a qu'une seule photo à afficher
            > 
              {`${currentPictureIndex + 1}/${pictures.length}`} 
            </span> 
          </div> 
        </div>
      </div>
    </div>
  )
}

export default Carrousel
