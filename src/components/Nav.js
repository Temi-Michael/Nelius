import Logo from '../assets/Little-Lemon-logos/Asset 7@4x.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegram, faInstagram, faXTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

export default function Nav(props) {
    return (
        <nav>
            <div className="logo">
                <img src={Logo} alt='logo' className="logo-img"/>
            </div>
            <div className="nav-list">
                <ul className="lists">
                    <li className="list-items"><button className='buttons'>{ props.home }</button></li>
                    <li className="list-items"><button className='buttons'>{ props.about }</button></li>
                </ul>
            </div>
            <div className="nav-socials">
                <ul className='social-items'>
                    <li>
                        <FontAwesomeIcon icon={faTelegram} size='lg' />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faInstagram} size='lg' />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faXTwitter} size='lg' />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faLinkedinIn} size='lg' />
                    </li>
                </ul>
            </div>
        </nav>
    )
};
