import React, { Component } from "react"
import "../css/carrousel.css"

export default class Carrousel extends Component {
  state = {
    pictures: [],
    currentPictureIndex: 0,
  }

  componentDidMount() {
    this.setState({
      pictures: this.props.photos,
    })
  }

  getSRC = () => {
    return this.state.pictures[this.state.currentPictureIndex]
  }

  previous = () => {
    const index =
      this.state.currentPictureIndex === 0
        ? this.state.pictures.length - 1
        : this.state.currentPictureIndex - 1

    this.setState({ currentPictureIndex: index })
  }

  next = () => {
    const index =
      this.state.currentPictureIndex === this.state.pictures.length - 1
        ? 0
        : this.state.currentPictureIndex + 1

    this.setState({ currentPictureIndex: index })
  }

  createIMG = () => {
    return (
      <img
        src={this.getSRC()}
        alt="img"
        className="photo-Carrousel"
        key={`img-${this.getSRC()}`}
      />
    )
  }

  render() {
    return (
      <div>
        <div className="SectionCarrousel">
          <div className="phot-containerCarrousel">{this.createIMG()}</div>
          <div className="arrow-Container">
            <button onClick={this.previous} className="button-left">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button onClick={this.next} className="button-right">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    )
  }
}
