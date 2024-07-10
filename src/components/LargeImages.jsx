import React from 'react';
import CarouselOne from "../assets/img/carousel/pic 1carousel.png";
import CarouselTwo from "../assets/img/carousel/pic 2carousel.png";
import CarouselThree from "../assets/img/carousel/pic 3carousel.png";

const LargeImages = () => {
    return (
        <div style={styles.imageGrid}>
            <img src={ CarouselOne } alt="Large images" style={styles.image} />
            <img src={ CarouselTwo } alt="Large images" style={styles.image} />
            <img src={ CarouselThree } alt="Large images" style={styles.image} />
        </div>
    );
};

const styles = {
    imageGrid: {
        display: 'grid',
        gridTemplateColumns: '1fr 2fr 1fr', // 1fr for the first and third columns, 1.5fr for the second column
        gap: '10px', // Adjust the gap between images as needed
        marginTop : '30px',
    },
    image: {
        width: '100%',
        height: 'auto',
        display: 'block',
    },
};

export default LargeImages;
