import "../css/Thumb.css"

const Thumb = (props) => {
  return (
      <div className="Thumb" style={{ backgroundImage: `url(${props.cover})` }}>
        <div className="Thumb-filter">
          <span className="thumb-title"> {props.title} </span>
        </div>
      </div>
  )
}

export default Thumb
