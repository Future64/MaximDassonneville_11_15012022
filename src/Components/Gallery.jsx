import "../css/Gallery.css"
import { Link } from "react-router-dom"
import Logement from "../Pages/Logement"
import Thumb from "./Thumb"

const Gallery = (props) => {
  return (
    <div className="Gallery">
      {props.data.map((item) => {
        return (
          <Link to="/logement">
            <Thumb cover={item.cover} title={item.title} key={item.id} />
          </Link>
        )
      })}
    </div>
  )
}

export default Gallery
