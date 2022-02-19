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
  const [currentApt] = useState(
    props.data.filter((apt) => apt.id === params.id)
  )

  let [ find, setFind] = useState()
  let [dataFetched, setDataFetched]  = useState()

  useEffect( () => {
    fetch("../AllData.json")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setDataFetched(data) 
      })
    }, [])
    
    // console.log(dataFetched)
    // for(let i = 0; i < dataFetched.length; i++){
    //   console.log(dataFetched[i].id)
    //   // if(dataFetched[i].id === params.id){
    //   //   const findData = dataFetched[i].id
    //   //   setFind(findData)
    //   // }
    //   // let findData = dataFetched[i].id.find(id => id === params.id )
    //   // setFind(findData)
    // }
    
    // console.log(find);
  //Redirection vers la page Error si l'id de la page ne correspond pas
  if (currentApt.length === 0) {
    return <Navigate replace to="/*" />;
  }
  
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
