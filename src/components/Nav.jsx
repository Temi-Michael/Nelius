import Logo from '../assets/img/logo/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegram, faInstagram, faXTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import { useState } from 'react'


export default function Nav(props) {
    const [activeButton, setActiveButton] = useState(props.home);
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (event) => {
        setActiveButton(event.target.textContent);
    };

    const toggleHamburger = () => {
        setIsOpen(!isOpen);
    };

    const styles = {
        borderRadius: '20px',
        border: 'none',
        background: 'linear-gradient(180deg, rgb(233, 241, 243), rgb(233, 241, 243), rgb(233, 241, 243), rgb(94, 110, 234))',
    };

    function ToggleSwitch() {
        const [isToggled, setIsToggled] = useState(false);

        const toggleSwitch = () => {
            setIsToggled(!isToggled);
        };

        return (
            <label className="toggle-switch">
                <input type="checkbox" checked={isToggled} onChange={toggleSwitch} />
                <span className="slider"></span>
            </label>
        );
    }

    // const colorSwitch = {
    //     backgroundColor : 'black',
    //     color : 'white'
    // }

    return (
        <nav>
            <div className="logo">
                <img src={Logo} alt='logo' className="logo-img" />
            </div>
            <div className={`nav-list ${isOpen ? 'open' : ''}`}>
                <ul className="lists">
                    <li className="list-items"><button className='buttons' style={activeButton === props.home ? styles : {}}
                        onClick={handleClick}>{props.home}</button></li>
                    <li className="list-items"><button className='buttons' style={activeButton === props.about ? styles : {}}
                        onClick={handleClick}>{props.about}</button></li>
                    <li className='toggle-list'><ToggleSwitch /></li>
                </ul>
            </div>
            <div className="nav-socials">
                <ul className='social-items'>
                    <li>
                        <Link to='https://t.me/+AYM-0yp8od4yMGI0' target='_blank'><FontAwesomeIcon icon={faTelegram} size='lg' color='black' className='social-icon' /></Link>
                    </li>
                    <li>
                        <Link to='https://instagram.com/nelius_token' target='_blank'><FontAwesomeIcon icon={faInstagram} size='lg' color='black' className='social-icon' /></Link>
                    </li>
                    <li>
                        <Link to='https://x.com/neliustoken' target='_blank'><FontAwesomeIcon icon={faXTwitter} size='lg' color='black' className='social-icon' /></Link>
                    </li>
                    <li>
                        <Link to='https://www.linkedin.com/company/nelius/' target='_blank'><FontAwesomeIcon icon={faLinkedinIn} size='lg' color='black' className='social-icon' /></Link>
                    </li>
                </ul>
            </div>
            <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleHamburger}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </nav>
    )
};