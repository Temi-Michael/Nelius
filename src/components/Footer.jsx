import { Link } from "react-router-dom";
import { useContext } from "react";
import { ToggleContext } from './ToggleContext'

export default function Footer() {
    const { isToggled } = useContext(ToggleContext);
    const dark = {
        backgroundColor: '#0c0c3f',
        color: 'white',
    }

    const white = {
        color: 'white',
    }
    return (
        <footer style={!isToggled ? dark : {}}>
            <div className="date">
                <p>© 2023 Nelius. All rights reserved</p>
            </div>
            <div className="footer-socials">
                <Link to='https://x.com/neliustoken' className="footer-items" style={!isToggled ? white : {}} target="_blank">Twitter</Link>
                <Link to='https://www.linkedin.com/company/nelius/' className="footer-items" style={!isToggled ? white : {}} target="_blank">LinkedIn</Link>
                <Link to='https://github.com/Timi-G/Nelius' className="footer-items" style={!isToggled ? white : {}} target="_blank">GitHub</Link>
            </div>
            <div className="terms">
                <p>Privacy - Terms</p>
            </div>
        </footer>
    )
};
