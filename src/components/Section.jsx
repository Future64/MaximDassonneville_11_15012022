import '../css/Section.css'

const Section = (props) => {
  return (
    <div className="Section">
      <div
        className="phot-container"
        style={{ backgroundImage: `url(${props.picture})` }}
      >
        <div className="SectionFilter"></div>
        {props.h1 === undefined ? ( // Affiche le texte dans la Home page
          ''
        ) : (
          <h1 className="SectionTxtHome"> {props.h1} </h1>
        )}
      </div>
    </div>
  )
}

export default Section
