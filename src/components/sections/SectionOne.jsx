import Button from "../../assets/Button";
// import CarouselPage from "../Carousel";
import LargeImages from "../LargeImages";

export default function SectionOne() {
    return (
        <div>
            <div className="sectionOne" id="sectionOne">
                <div className="circleBackground"></div>
                <div className="sectionOneFrame">
                    <div className="sectionOneHeadText">
                        <p className="headText">Get <span className="textOne">Funded</span> ,Get <span className="textOne">Public</span></p>
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
