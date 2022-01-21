import React from "react"
import "../css/About.css"
import Header from "../Components/Header"
import SectionAbout from "../Components/SectionAbout"
import DropdownLarge from "../Components/DropdownLarge"
// import DATA from "../DATA"

const About = (props) => {
  const dataAbout = [
    {
      title: "Fiabilité",
      bodyText:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    },
    {
      title: "Respect",
      bodyText:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      title: "Service",
      bodyText:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      title: "Sécurité",
      bodyText:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ]

  return (
    <div className="About">
      <Header />
      <SectionAbout />
      <div className="dropdown-items">
        {dataAbout.map((item) => {
          console.log(item.title)
          return (
            <DropdownLarge
              title={item.title}
              txt={item.bodyText}
              key={item.title}
            />
          )
        })}
      </div>
    </div>
  )
}

export default About
