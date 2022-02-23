import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import '../css/Logement.css'
import Header from '../components/Header'
import Dropdown from '../components/Dropdown'
import Carrousel from '../components/Carrousel'
import Tag from '../components/Tag'
import Stars from '../components/Stars'
import Footer from '../components/Footer'

const Logement = () => {
  const params = useParams()
  const [apt, setApt] = useState('')

  // Attrape les datas et les stores dans apt
  useEffect(() => {
    fetch('../AllData.json')
      .then((response) => response.json())
      .then((data) => {
        setApt(data.find((apt) => apt.id === params.id))
      })
  }, [])

  // Affiche la page d'erreur si apt n'a pas les datas
  if (apt === undefined) {
    return <Navigate to="/*" />
  }

  return (
    <div className="Logement">
      <Header />
      <section className="section-Carrousel">
        {apt && <Carrousel photos={apt.pictures} />}
      </section>
      <section className="section-Details">
        <div className="bloc-details">
          <div className="container-Details-first">
            {apt && <h1 className="title-Logement">{apt.title}</h1>}
            {apt && <p className="location">{apt.location}</p>}
            {apt && (
              <div className="tag-Group">
                {apt.tags.map((tag) => {
                  // Créer autant de tag qu'il y a de data à itérer
                  return <Tag tag={tag} data={apt.tags} key={`tag-${tag}`} />
                })}
              </div>
            )}
          </div>

          <div className="container-Details-second">
            <div className="zone-Owner">
              {apt && <p className="name-Owner">{apt.host.name}</p>}
              {apt && (
                <div
                  className="photo-Owner"
                  style={{
                    backgroundImage: `url(${apt.host.picture})`,
                  }}
                ></div>
              )}
            </div>
            <div className="container-Stars">
              {apt && <Stars data={apt.rating} />}
            </div>
          </div>
        </div>

        <div className="drop-container">
          <div className="box-drop box1">
            {apt && <Dropdown title="Description" txt={apt.description} />}
          </div>
          <div className="box-drop box2">
            {apt && <Dropdown title="Équipements" txt={apt.equipments} />}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Logement
