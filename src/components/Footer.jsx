import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <div className="date">
                <p>© 2023 Nelius. All rights reserved</p>
            </div>
            <div className="footer-socials">
                <Link to='https://x.com/neliustoken' className="footer-items">Twitter</Link>
                <Link to='https://www.linkedin.com/company/nelius/' className="footer-items">LinkedIn</Link>
                <Link to='https://www.linkedin.com/company/nelius/' className="footer-items">GitHub</Link>
            </div>
            <div className="terms">
                <p>Privacy - Terms</p>
            </div>
        </footer>
    )
};
