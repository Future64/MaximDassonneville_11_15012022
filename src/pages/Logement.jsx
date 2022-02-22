import { React, useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "../css/Logement.css";
import Header from "../components/Header";
import Dropdown from "../components/Dropdown";
import Carrousel from "../components/Carrousel";
import Tag from "../components/Tag";
import Stars from "../components/Stars";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
// import data from "../AllData.json"

const Logement = (props) => {
  const params = useParams();
  const [apt, setApt] = useState()
  const[loading, setLoading] = useState(false)

  useEffect(() => {
    console.log("Avant tout")
    setLoading(true)
      fetch("../AllData.json")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setApt(data.find((apt) => apt.id === params.id))
          setLoading(false)

        })
        
      ,[apt, loading]
    })

    if(loading){
      return <Loader />
    }
    
    // console.log(useEffect)
    console.log(params.id)
    console.log(apt)
  // useEffect(() => {
  //   localStorage.setItem('apt', JSON.stringify(data))

  //   const foundApt = data.find((apt) => apt.id === params.id)
  //   if(!foundApt){
  //     return <Navigate replace to="/*" />
  //   }
  //   console.log(foundApt)
  //   setApt(foundApt)
  // },[])

  // console.log(apt)
  // if (!apt) {
  //   return <Navigate replace to="/*" />
  // }
  // if(!foundApt){
  //   return <Navigate replace to="/*" />
  // }

  return (
    <div className="Logement">
      <Header />
      <section className="section-Carrousel">
        <Carrousel photos={apt.pictures} />
      </section>
      <section className="section-Details">
        <div className="bloc-details">
          <div className="container-Details-first">
            <h1 className="title-Logement">{apt.title}</h1>
            <p className="location">{apt.location}</p>
            <div className="tag-Group">
              {apt.tags.map((tag) => {
                // Créer autant de tag qu'il y a de props à itérer
                return <Tag tag={tag} data={apt.tags} key={`tag-${tag}`} />;
              })}
            </div>
          </div>

          <div className="container-Details-second">
            <div className="zone-Owner">
              <p className="name-Owner">{apt.host.name}</p>
              <div
                className="photo-Owner"
                style={{ backgroundImage: `url(${apt.host.picture})` }}
              ></div>
            </div>
            <div className="container-Stars">
              <Stars data={apt.rating} />
            </div>
          </div>
        </div>

        <div className="drop-container">
          <div className="box-drop box1">
            <Dropdown title="Description" txt={apt.description} />
          </div>
          <div className="box-drop box2">
            <Dropdown title="Équipements" txt={apt.equipments} />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Logement
