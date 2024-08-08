import Button from "../assets/Button";
import Dove from "../assets/img/logo/dove.svg"
import Plant from "../assets/img/logo/plant.svg"
import Interest from "../assets/img/logo/interest.svg"
import Wallet from "../assets/img/logo/wallet.svg"
import Spread from "../assets/img/logo/spread.svg"

export default function InfoDark() {
    return (
        <div className="info">
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
        marginTop : '20px',
        marginBottom : '20px',
    },
    imageGrid1: {
        display: 'grid',
        alignItems: 'center',
        gap: '20px',
        gridTemplateColumns: '1fr 1fr 1fr',
    },
    image: {
        width: '100%',
        height: '100%',
    },
};

const InfoImg = () => {
    return (
        <div className="imageGrids">
            <div style={styles.imageGrid} className="imageGrid">
                <img src={Dove} alt="Large images" style={styles.image} />
                <img src={Plant} alt="Large images" style={styles.image} />
            </div>
            <div style={styles.imageGrid1} className="imageGridOne">
                <img src={Interest} alt="Large images" style={styles.image} />
                <img src={Wallet} alt="Large images" style={styles.image} />
                <img src={Spread} alt="Large images" style={styles.image} />
            </div>
        </div>
    )
}
