import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Navigate } from "react-router-dom"
import "../css/Logement.css"
import Header from "../components/Header"
import Dropdown from "../components/Dropdown"
import Carrousel from "../components/Carrousel"
import Tag from "../components/Tag"
import Stars from "../components/Stars"
import Footer from "../components/Footer"



const Logement = (props) => {
  const params = useParams() 
  
  const [dataFetched, setDataFetched]  = useState()
  
  const [currentApt] = useState( 
    props.data.filter((apt) => apt.id === params.id) // Aappartement en cours 
    )
    
    
    useEffect( () => { // Attrape les datas pour les stocker dans "dataFetched"
      fetch("../AllData.json")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setDataFetched(data) 
      })
    }, [])
    

  let [ apt, setApt] = useState(currentApt[0]) // Valeur final diffusé à toute la page
  // console.log( props.data)

  
  if (currentApt.length === 0) { //Redirection vers la page Error si l'id de la page ne correspond pas
    return <Navigate replace to="/*" />;
  }
  
  //Eléments data
  const title = apt.title
  const pictures = apt.pictures
  const location = apt.location
  const hostName = apt.host.name
  const hostPicture = apt.host.picture
  const rating = apt.rating
  const description = apt.description
  const equipments = apt.equipments
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
              {currentApt[0].tags.map((tag) => { // Créer autant de tag qu'il y a de props à itérer
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
            <Dropdown title="Description" txt={description} />
          </div>
          <div className="box-drop box2">
            <Dropdown title="Équipements" txt={equipments} />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Logement
