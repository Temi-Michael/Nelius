import SectionOne from "../components/sections/SectionOne";
import Subscribe from "../components/sections/Subscribe";
import AboutDark from "../componentsDark/AboutDark";
import BlueprintDark from "../componentsDark/BlueprintDark";
import FaqDark from "../componentsDark/FaqDark";
import InfoDark from "../componentsDark/InfoDark";

export default function EventOwnersDark() {
  return (
    <div>
      <SectionOne />
      <AboutDark />
      <BlueprintDark />
      <InfoDark />
      <Subscribe />
      <FaqDark />
    </div>
  );
}
