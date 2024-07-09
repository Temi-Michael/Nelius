import Button from "../../assets/Button";

export default function SectionOne() {
    return (
        <div className="sectionOne" id="sectionOne">
            <div className="circleBackground"></div>
            <div className="sectionOneFrame">
                <div className="sectionOneHeadText">
                    <p>Get <span className="textOne">Funded</span> ,Get <span className="textTwo">Public</span></p>
                    <p>With Nelius</p>
                </div>
                <div className="sectionOneParagraph">
                    <p>With the introduction of Nelius, a donation token, your events can be funded when supported events are publicised.</p>
                </div>
                <div className="sectionOneButton">
                    <Button button='Get Started' />
                </div>
            </div>
        </div>
    )
};
