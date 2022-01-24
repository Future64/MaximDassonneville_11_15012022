import React, { Component } from "react"
import "../css/DropdownSmall.css"

export default class DropdownSmall extends Component {
  state = { openBody: false }

  handleBodyDropdown = () => {
    this.setState({ openBody: !this.state.openBody })
  }

  // handleContentEquipments = () => {
  //   const equipements = this.props.content
  //   equipements.foreach((elt) => {
  //     return <span>{elt}</span>
  //   })
  // }

  render() {
    const content = this.props.content
    console.log(this.props.content.toString())
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
          <p>{content}</p>
        </div>
      </div>
    )
  }
}
