import React, { Component } from "react"
import "../css/Carrousel.css"

export default class Carrousel extends Component {
  state = { photos: this.props.photos }

  render() {
    return (
      <div>
        <div className="SectionCarrousel">
          <div className="phot-containerCarrousel">
            {this.state.photos.map((item) => {
              return <img src={item} alt="img" className="photo-Carrousel" />
            })}
          </div>
          <div className="arrow-Container">
            <button className="button-left">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="button-right">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    )
  }
}
