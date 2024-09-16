import Button from "../../assets/Button";
import { useContext } from "react";
import { ToggleContext } from '../ToggleContext';
// import CarouselPage from "../Carousel";
import LargeImages from "../LargeImages";

export default function SectionOne() {
    const { isToggled } = useContext(ToggleContext);

    const background = {
        backgroundColor: '#0c0c3f',
        color: 'white'
    }

    const text = {
        color: 'white',
        background: 'linear-gradient(-45deg, rgb(5, 20, 60), rgb(5, 20, 60), rgb(98, 146, 212), rgb(5, 20, 60), rgb(5, 20, 60))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
    };


    return (
        <div style={!isToggled ? background : {}}>
            <div className="sectionOne" id="sectionOne">
                <div className="circleBackground"></div>
                <div className="sectionOneFrame">
                    <div className="sectionOneHeadText">
                        <p className="headText">Get <span style={!isToggled ? text : {}} className="textOne">Funded</span> ,Get <span className="textOne">Public</span></p>
                        <p className="headText">With Nelius</p>
                    </div>
                    <div className="sectionOneParagraph">
                        <p className="headParagraph">With the introduction of Nelius, a donation token, your events can be funded when supported events are publicised.</p>
                    </div>
                    <div className="sectionOneButton">
                        <Button button='Get Started' />
                    </div>
                </div>
            </div>
            {/* <CarouselPage /> */}
            <LargeImages />
        </div>

    )
};
