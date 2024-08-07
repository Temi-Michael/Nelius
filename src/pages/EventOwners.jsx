import About from "../components/About";
import Blueprint from "../components/Blueprint";
import Faq from "../components/Faq";
import Info from "../components/Info";
import SectionOne from "../components/sections/SectionOne";
import Subscribe from "../components/sections/Subscribe";

export default function EventOwners() {
    return (
        <div>
            <SectionOne />
            <About />
            <Blueprint />
            <Info />
            <Subscribe />
            <Faq />
        </div>
    )
};
