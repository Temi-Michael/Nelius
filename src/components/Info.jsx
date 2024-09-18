import { useState, useEffect, useContext } from "react";
import { ToggleContext } from './ToggleContext';

import Button from "../assets/Button";
import Dove from "../assets/img/logo/dove.svg"
import Criteria from "../assets/img/logo/criteria.svg"
import Plant from "../assets/img/logo/plant.svg"
import Interest from "../assets/img/logo/interest.svg"
import Wallet from "../assets/img/logo/wallet.svg"
import Spread from "../assets/img/logo/spread.svg"
import ToDo from "../assets/img/logo/to-do.svg"

export default function Info() {
    const { isToggled } = useContext(ToggleContext);
    const styles = {
        color : 'white',
        backgroundColor: '#0c0c3f'
    }

    return (
        <div className="info" id="info" style={!isToggled ? styles : {}}>
            <div className="infoOne">
                <p className="infoText">Gettin<span className="textOne">g Your Events</span> Noticed</p>
            </div>
            <div className="infoTwo">
                <div className="infoFlexOne">
                    <p className="infoText">Crite<span className="textOne">ria For Events Nomin</span>ation</p>
                </div>
                <div className="infoFlexTwo">
                    <Button button="Get Started" />
                </div>
            </div>
            <InfoImg />
        </div>
    )
};

const styles = {
    imageGrid: {
        display: 'grid',
        alignItems: 'center',
        gap: '20px',
        gridTemplateColumns: '1fr 1fr',
        marginTop: '20px',
        marginBottom: '20px',
    },
    imageGrid1: {
        display: 'grid',
        alignItems: 'center',
        gap: '20px',
        gridTemplateColumns: '1fr 1fr 1fr',
    },
    noGrid : {
        display : 'block',
        alignItems : 'center',
        gap : '20px',
    },
    image: {
        width: '100%',
        height: '100%',
    },
};

const InfoImg = () => {

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

    return (
        <div className="imageGrids">
            <div className="info_back">
                <img src={Criteria} alt="criteria_img" className="infoBack" />
                {isMobile ? (
                    <p className="info_backP">All yo<span className="textTwo">u need</span> to<br></br>nomi<span className="textTwo">nate you</span>r event</p>
                ) : (
                    <p className="info_backP">All yo<span className="textTwo">u need</span> to<br></br>nomi<span className="textTwo">nate yo</span>ur event</p>
                )}
            </div>
            <div style={!isMobile ? styles.imageGrid : styles.noGrid} className="imageGrid">
                <img src={Dove} alt="Large images" style={styles.image} />
                <img src={Plant} alt="Large images" style={styles.image} />
            </div>
            <div className="info_back">
                <img src={ToDo} alt="todo_img" className="infoBack" />
                {isMobile ? (
                    <p className="info_backP">Sim<span className="textTwo">ple actions for e</span>vent<br></br><span className="textTwo">owners / facilit</span>ators</p>) : (
                    <p className="info_backP">Sim<span className="textTwo">ple actions for e</span>vent<br></br><span className="textTwo">owners / facilit</span>ators</p>
                )}
            </div>
            <div style={!isMobile ? styles.imageGrid1 : styles.noGrid} className="imageGridOne">
                <img src={Interest} alt="Large images" style={styles.image} />
                <img src={Wallet} alt="Large images" style={styles.image} />
                <img src={Spread} alt="Large images" style={styles.image} />
            </div>
        </div>
    )
}
