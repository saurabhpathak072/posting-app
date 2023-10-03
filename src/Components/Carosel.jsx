import { useState } from 'react';
import { Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

import './Carosel.css'

function Carosel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <Image
            className="d-block Carousel-image w-100"
src="/WebDeveloperBanner1.jpg"
            alt="Banner 1"
          />
        <Carousel.Caption>
            <div className='carosel_caption'>
            <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
       
            </div>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image
            className="d-block w-100 Carousel-image"
src="/WebDeveloperBanner2.jpg"
            alt="Banner 2"
          />
        <Carousel.Caption className='carosel_caption'>
            <div className='carosel_caption'>
            <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image
            className="d-block w-100 Carousel-image"
src="/WebDeveloperBanner3.jpg"
            alt="Banner 3"
          />
        <Carousel.Caption>
            <div className='carosel_caption'>
            <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
            </div>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carosel;