import One from "../assets/img/logo/one.svg"
import Two from "../assets/img/logo/two.svg"
import Three from "../assets/img/logo/three.svg"
import Four from "../assets/img/logo/four.svg"
import Five from "../assets/img/logo/five.svg"

export default function Blueprint() {

    const blueprints = {
        zero: "",
        one: "Original holders of Nelius nominates a group of events to be donated to.",
        two: "Token holders decides which sets of events to donate to at a given time.",
        three: "For every transaction made with Nelius, 1/10th of the transferred token is staked for contribution.",
        four: "All staked tokens would be donated to the address of selected addresses.",
        five: "Token holders can still donate to events of their choosing at any time provided event addresses.",
    }

    return (
        <div className="blueprint" id="blueprint">
            <p className="blueprintText">
                The <span className="textOne">Nelius</span> Blueprint
            </p>
            <div className="blueprintStage">
                <div className="stageCards">
                    <p>{blueprints.zero[1]}</p>
                </div>
                <div className="stageCard" style={{}}>
                    <p style={{}} className="cardText">{blueprints.one}</p>
                    <img src={One} alt="One" width={100} height={200} />
                </div>
                <div className="stageCard" style={{}}>
                    <p style={{}} className="cardText">{blueprints.two}</p>
                    <img src={Two} alt="One" width={100} height={200} />
                </div>
                <div className="stageCards">
                    <p>{blueprints.zero[1]}</p>
                </div>
                <div className="stageCards">
                    <p>{blueprints.zero[1]}</p>
                </div>
                <div className="stageCard" style={{}}>
                    <p style={{}} className="cardText">{blueprints.three}</p>
                    <img src={Three} alt="One" width={100} height={200} />
                </div>
                <div className="stageCard" style={{}}>
                    <p style={{}} className="cardText">{blueprints.four}</p>
                    <img src={Four} alt="One" width={100} height={200} />
                </div>
                <div className="stageCards">
                    <p>{blueprints.zero[1]}</p>
                </div>
                <div className="stageCards">
                    <p>{blueprints.zero[1]}</p>
                </div>
                <div className="stageCard" style={{}}>
                    <p style={{}} className="cardText">{blueprints.five}</p>
                    <img src={Five} alt="One" width={100} height={200} />
                </div>
            </div>
        </div>

    )
};
