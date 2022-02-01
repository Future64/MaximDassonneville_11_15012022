import "../css/gallery.css"
import { Routes, Route, Link, useParams } from "react-router-dom"
import Logement from "../Pages/Logement"
import Thumb from "./Thumb"

const Gallery = (props) => {
  const params = useParams()
  console.log(params)
  return (
    <div className="Gallery">
      {props.data.map((item) => {
        const path = `/logement/${item.id}`

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
