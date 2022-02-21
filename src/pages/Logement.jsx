import {React, useState, useEffect} from "react"
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "../css/Logement.css";
import Header from "../components/Header";
import Dropdown from "../components/Dropdown";
import Carrousel from "../components/Carrousel";
import Tag from "../components/Tag";
import Stars from "../components/Stars";
import Footer from "../components/Footer";
import data from "../AllData.json"

const Logement = (props) => {
  const params = useParams();
  // let [currentApt] = useState(
  //   props.data.filter((apt) => apt.id === params.id) // Aappartement en cours
  // );

  // let title = "";
  // let pictures = [];
  // let location = "";
  // let hostName = "";
  // let hostPicture = '';
  // let rating = 0;
  // let description = "";
  // let equipments = [];
  // let tags = []
  const [apt, setApt] = useState({
    tags:[],
    pictures: [],
  })
  // useEffect(() => {
  //   fetch("http://localhost:3000/public/AllData.json")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
        const foundApt = data.find((apt) => apt.id == params.id);
        if(!foundApt){
          return <Navigate replace to="/*" />
        }

        setApt(foundApt)
      //Eléments data
      
        //  title = apt.title;
        //  pictures = apt.pictures;
        //  location = apt.location;
        //  hostName = apt.host.name;
        //  hostPicture = apt.host.picture;
        //  rating = apt.rating;
        //  description = apt.description;
        //  equipments = apt.equipments;
        //  tags = apt.tags
  //     });
  // }, []);

  // let [apt, setApt] = useState(currentApt[0]); // Valeur final diffusé à toute la page

  // return <Navigate replace to="/*" />
  // if (currentApt.length === 0) {
  //   //Redirection vers la page Error si l'id de la page ne correspond pas
  //   return <Navigate replace to="/*" />;
  // }

  //Eléments data

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
                return <Tag tag={tag} data={apt.hostName} key={`tag-${tag}`} />;
              })}
            </div>
          </div>

          <div className="container-Details-second">
            <div className="zone-Owner">
              <p className="name-Owner">{apt.hostName}</p>
              <div
                className="photo-Owner"
                style={{ backgroundImage: `url(${apt.hostPicture})` }}
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
  );
};
export default Logement;
