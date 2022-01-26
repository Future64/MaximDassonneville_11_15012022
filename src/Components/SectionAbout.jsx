import "../css/sectionAbout.css"
import Kalen from "../asset/kalen.png"

const SectionAbout = () => {
  return (
    <div className="Section">
      <div className="SectionFilter"> </div>
      <div
        className="phot-container"
        style={{ backgroundImage: `url(${Kalen})` }}
      ></div>
    </div>
  )
}

export default SectionAbout
