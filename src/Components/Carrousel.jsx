import React, { useState } from "react"
import "../css/Carrousel.css"

const Carrousel = (props) => {
  const [pictures, setPictures] = useState(props.photos)
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
        </div>
        <div className="arrow-Container">
          <button onClick={previous} className="button-left">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button onClick={next} className="button-right">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Carrousel

// import React, { Component } from "react"
// import "../css/Carrousel.css"

// export default class Carrousel extends Component {
//   state = {
//     pictures: [],
//     currentPictureIndex: 0,
//   }

//   componentDidMount() {
//     this.setState({
//       pictures: this.props.photos,
//     })
//   }

//   getSRC = () => {
//     return this.state.pictures[this.state.currentPictureIndex]
//   }

//   previous = () => {
//     const index =
//       this.state.currentPictureIndex === 0
//         ? this.state.pictures.length - 1
//         : this.state.currentPictureIndex - 1

//     this.setState({ currentPictureIndex: index })
//   }

//   next = () => {
//     const index =
//       this.state.currentPictureIndex === this.state.pictures.length - 1
//         ? 0
//         : this.state.currentPictureIndex + 1

//     this.setState({ currentPictureIndex: index })
//   }

//   createIMG = () => {
//     return (
//       <img
//         src={this.getSRC()}
//         alt="img"
//         className="photo-Carrousel"
//         key={`img-${this.getSRC()}`}
//       />
//     )
//   }

//   render() {
//     return (
//       <div>
//         <div className="SectionCarrousel">
//           <div className="phot-containerCarrousel">{this.createIMG()}</div>
//           <div className="arrow-Container">
//             <button onClick={this.previous} className="button-left">
//               <i className="fas fa-chevron-left"></i>
//             </button>
//             <button onClick={this.next} className="button-right">
//               <i className="fas fa-chevron-right"></i>
//             </button>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }
