import '../Thumb/Thumb.css'
import DATA from '../../DATA'


const Thumb = () => {
    const bgImg = DATA[1].cover
    return ( 
        <>
            <div className = "Thumb" style={{backgroundImage: `url(${bgImg})`}}>
                <a href="thumb-link">
                    <div className='Thumb-filter' >
                        <span className='thumb-title'>{DATA[1].title}</span>
                    </div>
                </a>
            </div>
        </>
    )
}

export default Thumb