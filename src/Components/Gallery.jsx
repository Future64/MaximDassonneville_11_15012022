import "../css/gallery.css"
import { Routes, Route, Link } from "react-router-dom"
import Logement from "../Pages/Logement"
import Thumb from "./Thumb"

const Gallery = (props) => {
  return (
    <div className="Gallery">
      {props.data.map((item) => {
        const path = "/logement"

        return (
          <Link to={path}>
            <Thumb
              cover={item.cover}
              title={item.title}
              key={`${item.id}-${item.host.name}`}
              data={item}
              id={item.id}
            />
          </Link>
        )
      })}
    </div>
  )
}

export default Gallery
