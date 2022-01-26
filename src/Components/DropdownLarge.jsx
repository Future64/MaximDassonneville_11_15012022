import React, { Component } from "react"
import "../css/dropdownLarge.css"

export default class DropdownLarge extends Component {
  state = { openBody: false }

  handleBodyDropdown = () => {
    this.setState({ openBody: !this.state.openBody })
  }

  render() {
    return (
      <div className="dropdown-Container">
        <div className="dropdown-head">
          <h2 className="dropdown-title">{this.props.title}</h2>
          <button onClick={this.handleBodyDropdown} className="dropdown-arrow">
            <i
              className={
                this.state.openBody
                  ? "fas fa-chevron-down up"
                  : "fas fa-chevron-down down"
              }
            ></i>
          </button>
        </div>
        <div
          className={
            this.state.openBody
              ? "dropdown-body openBody"
              : "dropdown-body closeBody"
          }
        >
          <p>{this.props.txt}</p>
        </div>
      </div>
    )
  }
}

// const DropdownLarge = (props) => {
//   return (
//     <div className="dropdown-Container">
//       <div className="dropdown-head">
//         <h2 className="dropdown-title">{props.title}</h2>
//         <button onClick="" className="dropdown-arrow">
//           <i className="fas fa-chevron-down"></i>
//         </button>
//       </div>
//       <div className="dropdown-body">
//         <p>{props.txt}</p>
//       </div>
//     </div>
//   )
// }

// export default DropdownLarge
