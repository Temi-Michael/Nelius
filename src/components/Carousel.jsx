import React from 'react';
import CarouselOne from "../assets/img/carousel/pic 1carousel.png";
import CarouselTwo from "../assets/img/carousel/pic 2carousel.png";
import CarouselThree from "../assets/img/carousel/pic 3carousel.png";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselPage = () => {
    return (
        <Carousel className='carouselFrame' autoPlay infiniteLoop interval={3000} showStatus={false} showIndicators={false} >
            <div>
                <img src={CarouselOne} alt='Carousel Images' className='carouselCard' />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src={CarouselTwo} alt='Carousel Images' className='carouselCard' />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src={CarouselThree} alt='Carousel Images' className='carouselCard' />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    );
};

export default CarouselPage;
