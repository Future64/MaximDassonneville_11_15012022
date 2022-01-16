
import './Header.css'

const Header = () => {
    return ( 

        <div className = "Header" >
            <header className = "App-header" >
            <img src="https://user.oc-static.com/upload/2020/08/14/15974111893356_Screen%20Shot%202020-07-08%20at%2018.17.37%20%281%29.jpg" alt="Kasa" />
                <ul className='Nav-list'>
                    <li>
                        <a rel="stylesheet" href="#" >Accueil</a>
                    </li>
                    <li>
                        <a rel="stylesheet" href="#" >A propos</a>
                    </li>
                </ul>
            </header>
        </div>
    )
}

export default Header