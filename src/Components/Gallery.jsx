import "../css/Gallery.css"
import Thumb from "./Thumb"

const Gallery = (props) => {
  return (
    <div className="Gallery">
      {props.data.map((item) => {
        return <Thumb cover={item.cover} title={item.title} />
      })}
    </div>
  )
}

export default Gallery
