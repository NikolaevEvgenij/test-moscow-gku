import React, { useState } from "react";
import { Carousel, Container } from "react-bootstrap";

import img1 from "../../assets/Carousel/img1.png";
import img2 from "../../assets/Carousel/img2.jpg";
import img3 from "../../assets/Carousel/img3.png";

const MyCarousel = () => {
   const [index, setIndex] = useState(0);

   const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
   };

   return (
      <Carousel
         activeIndex={index}
         onSelect={handleSelect}
         style={{
            width: "50%",
            margin: "0 auto",
            paddingTop: "54px",
         }}
      >
         <Carousel.Item>
            <img
               className='d-block w-100'
               src={img1}
               alt='img1'
            />
            <Carousel.Caption>
               <h3>Построй карьеру вместе с нами!</h3>
            </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
            <img
               className='d-block w-100'
               src={img2}
               alt='img1'
            />
            <Carousel.Caption>
               <h3>Большой выбор вакансий.</h3>
            </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
            <img
               className='d-block w-100'
               src={img3}
               alt='img1'
            />
            <Carousel.Caption>
               <h3>
                  Неограниченное количество возможностей для
                  развития
               </h3>
            </Carousel.Caption>
         </Carousel.Item>
      </Carousel>
   );
};

export default MyCarousel;
