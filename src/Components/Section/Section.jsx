import './Section.css'
import IMG from '../../IMG.png'

const Section = () => {

    return ( 

        <div className = "Section" >
            <div className = "SectionFilter"></div>
            <div className='phot-container' style={{backgroundImage: `url(${IMG})`}}></div>
            <h1 className='SectionTxt'>Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Section