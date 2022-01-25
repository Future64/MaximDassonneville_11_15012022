import React, { Component } from "react"
import ReactDom from "react-dom"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import "../css/Logement.css"
import Header from "../Components/Header"
import DropdownSmall from "../Components/DropdownSmall"
import Carrousel from "../Components/Carrousel"
import Tag from "../Components/Tag"

class Logement extends Component {
  state = {
    photos: this.props.data.pictures,
    description: this.props.data.description,
    equipments: this.props.data.equipments,
    title: this.props.data.title,
    location: this.props.data.location,
    name: this.props.data.host.name,
    photoOwner: this.props.data.host.picture,
    tags: this.props.data.tags,
    stars: false,
  }

  handleStars = () => {
    this.setState({ stars: !this.state.stars })
  }

  render() {
    return (
      <div className="Logement">
        <Header />
        <section className="section-Carrousel">
          <Carrousel photos={this.state.photos} />
        </section>
        <section className="section-Details">
          <div className="container-Details-first">
            <h1 className="title-Logement">{this.state.title}</h1>
            <p className="location">{this.state.location}</p>
            <div className="tag-Group">
              {this.state.tags.map((tag) => {
                return (
                  <Tag
                    name={tag}
                    key={`${this.props.data.id.toString()}-tag`}
                  />
                )
              })}
            </div>
          </div>
          <div className="container-Details-second">
            <div className="zone-Owner">
              <p className="name-Owner">{this.state.name}</p>
              <div
                className="photo-Owner"
                style={{ backgroundImage: `url(${this.state.photoOwner})` }}
              ></div>
            </div>
            <div className="container-Stars">
              <i
                className={
                  this.state.openBody ? "fas fa-star" : "fas fa-star star-color"
                }
              ></i>
              <i
                className={
                  this.state.openBody ? "fas fa-star" : "fas fa-star star-color"
                }
              ></i>
              <i
                className={
                  this.state.openBody ? "fas fa-star" : "fas fa-star star-color"
                }
              ></i>
              <i
                className={
                  this.state.openBody ? "fas fa-star" : "fas fa-star star-color"
                }
              ></i>
              <i
                className={
                  this.state.openBody ? "fas fa-star" : "fas fa-star star-color"
                }
              ></i>
            </div>
          </div>
          <div className="dropSmall-container">
            <DropdownSmall
              title="Description"
              content={this.state.description}
            />
            <DropdownSmall
              title="Équipements"
              content={this.state.equipments}
            />
          </div>
        </section>
      </div>
    )
  }
}

export default Logement
