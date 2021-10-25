import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../../../images/banner/image3.jpg';
import image2 from '../../../images/banner/image2.jpg';
import image3 from '../../../images/banner/image1.jpg';

const Banner = () => {
    return (
        <div>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-10"
                        src={image1}
                        alt="First slide"
                    />
                    <Carousel.Caption>

                        <p>“Communities and countries and ultimately the world <br />
                            are only as strong as the health of their women.” – Michelle Obama</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-10"
                        src={image2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>

                        <p>“And I believe that the best buy in public<br /> health today must be a combination of regular physical <br />exercise and a healthy diet.” – Julie Bishop</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-10"
                        src={image3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>

                        <p>“At the end of the day, your health is your <br />responsibility.” – Jillian Michaels</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;