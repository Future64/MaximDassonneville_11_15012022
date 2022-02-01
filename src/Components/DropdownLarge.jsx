import React, { useState } from "react"
import "../css/dropdownLarge.css"

const DropdownLarge = (props) => {
  let [openBody, UseOpenBody] = useState(false)

  const handleBodyDropdown = () => {
    openBody === false
      ? UseOpenBody((openBody = true))
      : UseOpenBody((openBody = false))
  }

  return (
    <div className="dropdown-Container">
      <div className="dropdown-head">
        <h2 className="dropdown-title">{props.title}</h2>
        <button onClick={handleBodyDropdown} className="dropdown-arrow">
          <i
            className={
              openBody ? "fas fa-chevron-down up" : "fas fa-chevron-down down"
            }
          ></i>
        </button>
      </div>
      <div
        className={
          openBody ? "dropdown-body openBody" : "dropdown-body closeBody"
        }
      >
        <p>{props.txt}</p>
      </div>
    </div>
  )
}

export default DropdownLarge

// export default class DropdownLarge extends Component {
//   state = { openBody: false }

//   handleBodyDropdown = () => {
//     this.setState({ openBody: !this.state.openBody })
//   }

//   render() {
//     return (
//       <div className="dropdown-Container">
//         <div className="dropdown-head">
//           <h2 className="dropdown-title">{this.props.title}</h2>
//           <button onClick={this.handleBodyDropdown} className="dropdown-arrow">
//             <i
//               className={
//                 this.state.openBody
//                   ? "fas fa-chevron-down up"
//                   : "fas fa-chevron-down down"
//               }
//             ></i>
//           </button>
//         </div>
//         <div
//           className={
//             this.state.openBody
//               ? "dropdown-body openBody"
//               : "dropdown-body closeBody"
//           }
//         >
//           <p>{this.props.txt}</p>
//         </div>
//       </div>
//     )
//   }
// }
