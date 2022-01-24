import React, { Component } from "react"
import "../css/Carrousel.css"

export default class Carrousel extends Component {
  render() {
    let photo = this.props.photos[0]
    console.log(photo)
    return (
      <div>
        <div className="SectionCarrousel">
          <div className="SectionFilterCarrousel"> </div>
          <div
            className="phot-containerCarrousel"
            style={{ backgroundImage: `url(${photo})` }}
          ></div>
        </div>
      </div>
    )
  }
}
