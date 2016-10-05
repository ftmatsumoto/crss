import React from 'react';
import { Carousel } from 'react-bootstrap';

import img1 from '../asset/carousel1.jpg';
import img2 from '../asset/carousel2.jpg';
import img3 from '../asset/carousel3.jpg';
import img4 from '../asset/carousel4.jpg';

const images = [img1, img2, img3, img4];
const carouselInstance = (props) => (
  <Carousel>
    {images.map((item, id) => {
      return <Carousel.Item key={id}><img className="carousel-img" src={item}/></Carousel.Item>
    })}
  </Carousel>
);

export default carouselInstance;
