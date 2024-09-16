import { useState, useEffect } from "react"
import Submit from "../../assets/Submit";
import { useContext } from "react";
import { ToggleContext } from '../ToggleContext'

export default function Subscribe() {
    const { isToggled } = useContext(ToggleContext);
    const [email, setEmail] = useState('')
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const dark = {
        backgroundColor: '#0c0c3f',
        color: 'white',
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className="subscribe" style={!isToggled ? dark : {}}>
            <p className="subscribeHead">
                Ready To Get <span className="textOne">Funded</span>?
            </p>
            {isMobile ? (
                <p className="subscribeText">Enter your email for early access. Our team will get in touch for personal branding.</p>
            ) : (
                <p className="subscribeText">Enter your email for early access. Our team <br /> will get in touch for personal branding.</p>
            )}
            <form action="" method="" className="form">
                <div className="inputContainer">
                    <input type="email" className="emailInput" id="emailInput" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} onClick={handleSubmit} />
                    <Submit button="Subscribe" />
                </div>
            </form>
        </div>
    )
};
