import { useState } from "react"
import Button from "../../assets/Button"

export default function Subscribe() {
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className="subscribe">
            <p className="subscribeHead">
                Ready To Get <span className="textOne">Funded</span>?
            </p>
            <p className="subscribeText">Enter your email for early access. Our team wil get in touch for personal branding.</p>
            <form action="" method="">
                <div>
                    <input type="email" className="emailInput" id="emailInput" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} onClick={handleSubmit} />
                    <Button button="Subscribe" />
                </div>
            </form>
        </div>
    )
};
