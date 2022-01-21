import "../css/Gallery.css"
import Logement from "../Pages/Logement"
import Thumb from "./Thumb"

const Gallery = (props) => {
  return (
    <div className="Gallery">
      {props.data.map((item) => {
        return <Thumb cover={item.cover} title={item.title} key={item.id} />
      })}
    </div>
  )
}

export default Gallery
