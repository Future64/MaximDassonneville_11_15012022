import "../css/Footer.css"

const Footer = (props) => {
  return (
    <>
      <div className="Footer">
        <div className="Logo">
          <span>K</span>
          <img src={props.img} alt="A" className="LogoHouse"></img>
          <span>sa</span>
        </div>
        <p className="c">© 2020 Kasa. All rights reserved</p>
      </div>
    </>
  )
}

export default Footer
