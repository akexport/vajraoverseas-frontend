import React, {useEffect} from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./Carousel.css";


export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true}, [Autoplay()]);
  const images = ["../src/assets/VAJRAOVERSEASWEB01.jpg","../src/assets/VajraHome1.png","../src/assets/Pump1.jpeg","../src/assets/VajraHome3.png",
    "../src/assets/VajraHome4.png","../src/assets/VajraHome5.png"
  ];
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {images.map((src, index) => (
          <div className="embla__slide" key={index}>
            <img src={src} className="embla__image" alt={'Slide ${index+1}'}></img>

          </div>
        ))}
      </div>
    </div>
  );
};


// import React, { useRef } from 'react'
// import useEmblaCarousel from 'embla-carousel-react'
// import Autoplay from 'embla-carousel-autoplay'
// import { useAutoplay } from './EmblaCarouselAutoplay'
// import { useAutoplayProgress } from './EmblaCarouselAutoplayProgress'
// import {
//   NextButton,
//   PrevButton,
//   usePrevNextButtons
// } from './EmblaCarouselArrowButtons'

// const EmblaCarousel = (props) => {
//   const { slides, options } = props
//   const progressNode = useRef(null)
//   const [emblaRef, emblaApi] = useEmblaCarousel(options, [
//     Autoplay({ playOnInit: false, delay: 3000 })
//   ])

//   const {
//     prevBtnDisabled,
//     nextBtnDisabled,
//     onPrevButtonClick,
//     onNextButtonClick
//   } = usePrevNextButtons(emblaApi)

//   const { autoplayIsPlaying, toggleAutoplay, onAutoplayButtonClick } =
//     useAutoplay(emblaApi)

//   const { showAutoplayProgress } = useAutoplayProgress(emblaApi, progressNode)

//   return (
//     <div className="embla">
//       <div className="embla__viewport" ref={emblaRef}>
//         <div className="embla__container">
//           {slides.map((index) => (
//             <div className="embla__slide" key={index}>
//               <div className="embla__slide__number">
//                 <span>{index + 1}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="embla__controls">
//         <div className="embla__buttons">
//           <PrevButton
//             onClick={() => onAutoplayButtonClick(onPrevButtonClick)}
//             disabled={prevBtnDisabled}
//           />
//           <NextButton
//             onClick={() => onAutoplayButtonClick(onNextButtonClick)}
//             disabled={nextBtnDisabled}
//           />
//         </div>

//         <div
//           className={`embla__progress`.concat(
//             showAutoplayProgress ? '' : ' embla__progress--hidden'
//           )}
//         >
//           <div className="embla__progress__bar" ref={progressNode} />
//         </div>

//         <button className="embla__play" onClick={toggleAutoplay} type="button">
//           {autoplayIsPlaying ? 'Stop' : 'Start'}
//         </button>
//       </div>
//     </div>
//   )
// }

// export default EmblaCarousel






