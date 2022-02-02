import "../css/section.css"
import IMG from "../asset/IMG.png"

const Section = () => {
  const sectionText = "Chez vous, partout et ailleurs"
  return (
    <div className="Section">
      <div
        className="phot-container"
        style={{ backgroundImage: `url(${IMG})` }}
      >
        <div className="SectionFilter"></div>
        <h1 className="SectionTxtHome"> {sectionText} </h1>
      </div>
    </div>
  )
}

export default Section
