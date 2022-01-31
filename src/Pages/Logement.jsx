import React from "react"
import { useParams } from "react-router-dom"
import "../css/Logement.css"
import Header from "../components/Header"
import DropdownSmall from "../components/DropdownSmall"
import Carrousel from "../components/Carrousel"
import Tag from "../components/Tag"
import Stars from "../components/Stars"
import Error from "../Pages/Error"

const Logement = (props) => {
  const params = useParams()
  console.log(params)
  return (
    <div className="Logement">
      <Header />
      <section className="section-Carrousel">
        <Carrousel photos={props.data.pictures} />
      </section>
      <section className="section-Details">
        <div className="container-Details-first">
          <h1 className="title-Logement">{props.data.title}</h1>
          <p className="location">{props.data.location}</p>
          <div className="tag-Group">
            {props.data.tags.map((tag) => {
              return (
                <Tag tag={tag} data={props.data.host.name} key={`tag-${tag}`} />
              )
            })}
          </div>
        </div>

        <div className="container-Details-second">
          <div className="zone-Owner">
            <p className="name-Owner">{props.data.host.name}</p>
            <div
              className="photo-Owner"
              style={{ backgroundImage: `url(${props.data.host.picture})` }}
            ></div>
          </div>
          <div className="container-Stars">
            <Stars data={props.data.rating} />
          </div>
        </div>

        <div className="dropSmall-container">
          <DropdownSmall title="Description" content={props.data.description} />
          <DropdownSmall title="Équipements" content={props.data.equipments} />
        </div>
      </section>
    </div>
  )
}

export default Logement

// import React, { Component } from "react"
// import ReactDom from "react-dom"
// import { BrowserRouter as Router, Route, Link } from "react-router-dom"
// import "../css/Logement.css"
// import Header from "../components/Header"
// import DropdownSmall from "../components/DropdownSmall"
// import Carrousel from "../components/Carrousel"
// import Tag from "../components/Tag"
// import Stars from "../components/Stars"
// import Error from "../Pages/Error"

// class Logement extends Component {
//   state = {
//     photos: this.props.data.pictures,
//     description: this.props.data.description,
//     equipments: this.props.data.equipments,
//     title: this.props.data.title,
//     location: this.props.data.location,
//     name: this.props.data.host.name,
//     photoOwner: this.props.data.host.picture,
//     tags: this.props.data.tags,
//     stars: false,
//     count: 0,
//   }

//   getApartment = () => {
//     const apartment = this.props.data.filter(
//       (apt) => apt.id === this.props.match.params.id
//     )

//     return apartment[0]
//   }

//   handleStars = () => {
//     this.setState({ stars: !this.state.stars })
//   }

//   render() {
//     return (
//       <div className="Logement">
//         <Header />
//         <section className="section-Carrousel">
//           <Carrousel photos={this.state.photos} />
//         </section>
//         <section className="section-Details">
//           <div className="container-Details-first">
//             <h1 className="title-Logement">{this.state.title}</h1>
//             <p className="location">{this.state.location}</p>
//             <div className="tag-Group">
//               {this.state.tags.map((tag) => {
//                 return (
//                   <Tag
//                     tag={tag}
//                     data={this.props.data.host.name}
//                     key={`tag-${tag}`}
//                   />
//                 )
//               })}
//             </div>
//           </div>
//           <div className="container-Details-second">
//             <div className="zone-Owner">
//               <p className="name-Owner">{this.state.name}</p>
//               <div
//                 className="photo-Owner"
//                 style={{ backgroundImage: `url(${this.state.photoOwner})` }}
//               ></div>
//             </div>
//             <div className="container-Stars">
//               <Stars data={this.props.data.rating} />
//             </div>
//           </div>
//           <div className="dropSmall-container">
//             <DropdownSmall
//               title="Description"
//               content={this.state.description}
//             />
//             <DropdownSmall
//               title="Équipements"
//               content={this.state.equipments}
//             />
//           </div>
//         </section>
//       </div>
//     )
//   }
// }

// export default Logement
