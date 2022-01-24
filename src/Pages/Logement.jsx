import React from "react"
import ReactDom from "react-dom"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import "../css/Logement.css"
import Header from "../Components/Header"
import DropdownSmall from "../Components/DropdownSmall"
import Carrousel from "../Components/Carrousel"
import Tag from "../Components/Tag"

const Logement = (props) => {
  let photos = props.data.pictures
  // const dtt = props.description
  const description = props.data.description
  const equipments = props.data.equipments
  const title = props.data.title
  const location = props.data.location
  const name = props.data.host.name
  const photoOwner = props.data.host.picture
  const tags = props.data.tags

  console.log(props.data)
  return (
    <div className="Logement">
      <Header />
      <section className="section-Carrousel">
        <Carrousel photos={photos} />
      </section>
      <section className="section-Details">
        <div className="container-Details-first">
          <h1 className="title-Logement">{title}</h1>
          <p className="location">{location}</p>
          <div className="tag-Group">
            {tags.map((tag) => {
              return <Tag name={tag} key={`${props.data.id.toString()}-tag`} />
            })}
          </div>
        </div>
        <div className="container-Details-second">
          <div className="zone-Owner">
            <p className="name-Owner">{name}</p>
            <div
              className="photo-Owner"
              style={{ backgroundImage: `url(${photoOwner})` }}
            ></div>
          </div>
          <div className="container-Stars">
            <i className="fas fa-star star-color"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
        </div>
        <div className="dropSmall-container">
          <DropdownSmall title="Description" content={description} />
          <DropdownSmall title="Équipements" content={equipments} />
        </div>
      </section>
    </div>
  )
}

export default Logement
