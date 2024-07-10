import { useState, useEffect } from "react"
import Button from "../../assets/Button"

export default function Subscribe() {
    const [email, setEmail] = useState('')
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

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
        <div className="subscribe">
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
                    <Button button="Subscribe" />
                </div>
            </form>
        </div>
    )
};
