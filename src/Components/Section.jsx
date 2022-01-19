import "../css/Section.css"
import IMG from "../Images/IMG.png"

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
