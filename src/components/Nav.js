import Logo from '../assets/Little-Lemon-logos/Asset 7@4x.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegram, faInstagram, faXTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Nav(props) {
    const [activeButton, setActiveButton] = useState(props.home);

    const handleClick = (event) => {
        setActiveButton(event.target.textContent);
    };

    const styles = {
        padding: '10px',
        borderRadius: '20px',
        border: 'none',
        background: 'linear-gradient(180deg, rgb(233, 241, 243), rgb(233, 241, 243), rgb(233, 241, 243), rgb(94, 110, 234))',
    };



    return (
        <nav>
            <div className="logo">
                <img src={Logo} alt='logo' className="logo-img" />
            </div>
            <div className="nav-list">
                <ul className="lists">
                    <li className="list-items"><button className='buttons' style={activeButton === props.home ? styles : {}}
                        onClick={handleClick}>{props.home}</button></li>
                    <li className="list-items"><button className='buttons' style={activeButton === props.about ? styles : {}}
                        onClick={handleClick}>{props.about}</button></li>
                </ul>
            </div>
            <div className="nav-socials">
                <ul className='social-items'>
                    <li>
                        <Link to='https://t.me/+AYM-0yp8od4yMGI0' target='_blank'><FontAwesomeIcon icon={faTelegram} size='lg' color='black' /></Link>
                    </li>
                    <li>
                        <Link to='https://instagram.com/nelius_token' target='_blank'><FontAwesomeIcon icon={faInstagram} size='lg' color='black' /></Link>

                    </li>
                    <li>
                        <Link to='https://x.com/neliustoken' target='_blank'><FontAwesomeIcon icon={faXTwitter} size='lg' color='black' /></Link>

                    </li>
                    <li>
                        <Link to='https://www.linkedin.com/company/nelius/' target='_blank'><FontAwesomeIcon icon={faLinkedinIn} size='lg' color='black' /></Link>

                    </li>
                </ul>
            </div>
        </nav>
    )
};
