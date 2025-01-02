import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselSlider = () => {
  return (
    <Carousel>
        <section class="slider-area mb-100">
  <div class="owl-carousel owl-theme banner-slider">
    <div class="owl-slide d-flex align-items-center cover" style="background-image: url(src/assets/VajraHome1.png);">
      <div class="container">
        <div class="text-center text-white main-home-heading">
          <h1>Global Quality Food Exporter From India</h1>
          <h3 class="text-white">We export food including raw vegetables, fruits, spices & many more</h3>
        </div>
      </div>
    </div>


  </div>
  </section>
        {/* <div>
            <img src="../src/assets/VajraHome1.png" />
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img src="../src/assets/VajraHome2.jpg" />
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img src="../src/assets/VajraHome3.jpg" />
            <p className="legend">Legend 3</p>
        </div> */}
   </Carousel>
  );
};
export default CarouselSlider


// import { useState, useEffect } from 'react';
// import img1 from "../assets/VajraHome1.png"
// import img2 from "../assets/VajraHome2.jpg"
// import img3 from "../assets/VajraHome3.jpg"
// import img4 from "../assets/VajraHome4.jpg"
// import img5 from "../assets/VajraHome5.jpg"


// const Card = ({ key, text, icon, btnText, btnLink, btnIcon, headerImg, sendInteraction }) => {

// const openUrl = (url, label) => {
//   window.open(url, '_blank');
// }

// const headText = text.length > 30 ? text.substring(0, 30) + '...' : text;

// let headerSection = null;
// let marginClass;
// if (headerImg) {
// headerSection = <div style={{ backgroundImage: `url("${headerImg}")`, }} className="carousel-bg-img">
// <img src={icon} height="40px" className="carousel-logo-img" />
// </div>;
// marginClass = '30';
// } else {
// headerSection = <img src={icon} height="45px" className='mt-15' />;
// marginClass = '15';
// }


// return (
//   <li className="carousel-card carousel-li" key={key}>
//     {headerSection}
//     <div className={"carousel-card-text mt-" + marginClass}>
//       <p>{headText}</p>
//     </div>
//     <a className="carousel-card-outline" href='javascript:void(0)'
//      onClick={() => openUrl(btnLink, btnText)}>
//      {btnIcon &&
//       <span><img src={btnIcon} height="12px" /> &nbsp;{btnText}</span>
//       }
//      {!btnIcon &&
//       <span>{btnText}</span>
//      }
//     </a>
//   </li>
//  )
// }

// export function Carousel({ items, sendInteraction }) {
//   let cards = items.map((t, index) =>
//     <Card key={index} icon={t.icon} text={t.text}
//      headerImg= {t.headerImg}
//      btnText={t.btnText} btnLink={t.btnLink} btnIcon={t.btnIcon}
//      sendInteraction={sendInteraction} />
// );

// useEffect(() => {
// document.documentElement.style.setProperty('--num', items.length);
// }, [items])

// const [currentIndex, setCurrentIndex] = useState(0);

// const handleNextClick = () => {
//   setCurrentIndex((currentIndex + 1) % items.length);
// };

// const handlePrevClick = () => {
//   setCurrentIndex((currentIndex - 1 + items.length) % items.length);
// };

// const carouselStyle = {
//   transform: `translateX(-${currentIndex * 20}%)`,
// };

// return (
//   <div className="carouselwrapper module-wrapper">
//     <div className="ui">
//     <button onClick={handlePrevClick} className="carousel-button carousel-prev">
//       <span className="material-icons">&lsaquo;</span>
//     </button>
//     <button onClick={handleNextClick} className="carousel-button carousel-next">
//       <span className="material-icons">&#8250;</span>
//     </button>
//   </div>
//   <ul className="carousel" style={carouselStyle}>
//     {cards}
//    </ul>
//   </div>
// )}