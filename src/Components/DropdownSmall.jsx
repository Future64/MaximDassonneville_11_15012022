import React, { Component } from "react"
import "../css/DropdownSmall.css"

export default class DropdownSmall extends Component {
  state = { openBody: false }

  handleBodyDropdown = () => {
    this.setState({ openBody: !this.state.openBody })
  }

  render() {
    const content = this.props.content

    return (
      <div className="dropdownSmall-Container">
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
