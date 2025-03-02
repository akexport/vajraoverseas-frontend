import React, {useEffect} from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./Carousel.css";


export function ProductListCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true}, [Autoplay()]);
  const images = ["../src/assets/NutritionFacts01.jpg","../src/assets/NutritionFacts01.jpg","../src/assets/NutritionFacts01.jpg",
    "../src/assets/NutritionFacts01.jpg","../src/assets/NutritionFacts01.jpg"
  ];
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {images.map((src, index) => (
          <div className="product__slide" key={index}>
            <img src={src} className="embla__image" alt={'Slide ${index+1}'}></img>

          </div>
        ))}
      </div>
    </div>
   
  );
};
