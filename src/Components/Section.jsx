import "../css/section.css"
import IMG from "../asset/IMG.png"

const Section = () => {
  const sectionText = "Chez vous, partout et ailleurs"
  return (
    <div className="Section">
      <div className="SectionFilter"> </div>
      <div
        className="phot-container"
        style={{ backgroundImage: `url(${IMG})` }}
      ></div>
      <h1 className="SectionTxt"> {sectionText} </h1>
    </div>
  )
}

export default Section
