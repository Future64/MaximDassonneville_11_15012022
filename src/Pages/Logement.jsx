import React, { useState } from "react"
import { useParams, useNavigate, useLocation } from "react-router-dom"
import "../css/Logement.css"
import Header from "../components/Header"
import DropdownLarge from "../components/Dropdown"
import Carrousel from "../components/Carrousel"
import Tag from "../components/Tag"
import Stars from "../components/Stars"
import Footer from "../components/Footer"
// import Error from "../Pages/Error"

const Logement = (props) => {
  const params = useParams()
  let navigate = useNavigate()
  const loc = useLocation()

  const [currentApt, useCurrentApt] = useState(
    props.data.filter((apt) => apt.id == params.id)
  )
  // if (currentApt == undefined) {
  //   return navigate("http://localhost:3000/")
  // }
  // console.log(currentApt)

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

        <div className="drop-container">
          <div className="box-drop box1">
            <DropdownLarge title="Description" txt={description} />
          </div>
          <div className="box-drop box2">
            <DropdownLarge
              title="Équipements"
              txt={equipments}
              style={rating}
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Logement
