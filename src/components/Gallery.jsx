import "../css/Gallery.css"
import { Link } from "react-router-dom"
import Thumb from "./Thumb"


const Gallery = (props) => {
  return (
    <>
      <div className="Gallery">
        {props.data.map((item) => {
          const path = `/logement/${item.id}`

          return (
            <Link to={path} key={`${item.title}-${item.host.name}`}>
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
    </>
  )
}

export default Gallery
