import "../css/Footer.css"
import logo from "../asset/LogoHouse.png"

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="Logo">
          <span>K</span>
          <img src={logo} alt="A" className="LogoHouse"></img>
          <span>sa</span>
        </div>
        <p className="c">© 2020 Kasa. All rights reserved</p>
      </div>
    </>
  )
}

export default Footer
