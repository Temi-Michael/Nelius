export default function Dots(props) {

    const styles = {
        dots : {
            backgroundColor : props.color,
            width : '10px',
            height : '10px',
            borderRadius : '50%',
        }
    }

    return (
        <div style={{display : 'flex', justifyContent : 'center',}}>
            <div style={styles.dots}></div>
        </div>
    )
};


