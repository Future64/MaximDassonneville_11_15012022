import React from "react"
import { useParams } from "react-router-dom"
import "../css/Logement.css"
import Header from "../components/Header"
import DropdownSmall from "../components/DropdownSmall"
import Carrousel from "../components/Carrousel"
import Tag from "../components/Tag"
import Stars from "../components/Stars"
// import Error from "../Pages/Error"

const Logement = (props) => {
  const params = useParams()
  const currentApt = props.data.filter((apt) => apt.id == params.id)

  //Eléments data
  const title = currentApt[0].title
  const pictures = currentApt[0].pictures
  const location = currentApt[0].location
  const hostName = currentApt[0].host.name
  const hostPicture = currentApt[0].host.picture
  const rating = currentApt[0].rating
  const description = currentApt[0].description
  const equipments = currentApt[0].equipments

  return (
    <div className="Logement">
      <Header />
      <section className="section-Carrousel">
        <Carrousel photos={pictures} />
      </section>
      <section className="section-Details">
        <div className="bloc-details">
          <div className="container-Details-first">
            <h1 className="title-Logement">{title}</h1>
            <p className="location">{location}</p>
            <div className="tag-Group">
              {currentApt[0].tags.map((tag) => {
                return <Tag tag={tag} data={hostName} key={`tag-${tag}`} />
              })}
            </div>
          </div>

          <div className="container-Details-second">
            <div className="zone-Owner">
              <p className="name-Owner">{hostName}</p>
              <div
                className="photo-Owner"
                style={{ backgroundImage: `url(${hostPicture})` }}
              ></div>
            </div>
            <div className="container-Stars">
              <Stars data={rating} />
            </div>
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
