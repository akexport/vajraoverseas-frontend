import React, { useState } from 'react';
import ProductComponent from './ProductComponent';
import ShowPopup from './ShowPopup';

const SunDriedPopupComponent = () => {

    const [showPopup, setShowPopup] = useState(false);

    const closePopup = () => {
        return setShowPopup(false)
    }

    const handleCloseButton = (
        <button onClick={closePopup}>Close It</button>
    );
    const popupModel = (
        <ShowPopup closePopup={closePopup} handleCloseButton={handleCloseButton}>
            <h5 className="card-title">Our Premium Sun-Dried Products</h5>
            <h5 className="card-title">Pahadi Badi (Sun-Dried Lentil Nuggets)</h5>
            Made from <b>squash vegetables and lentil paste</b>.
            Rich in <b>protein and fiber</b>.
            Adds a <b>hearty texture and nutrition</b> to curries and stir-fries.
            Traditionally dried to enhance taste and shelf life.
            <br /><h5 className="card-title">Sun-Dried Tomatoes</h5>
            Intensely flavorful with a <b>rich umami taste</b>.
            Packed with <b>antioxidants, lycopene, and Vitamin C</b>.
            Ideal for <b>soups, pasta, sauces, and Mediterranean dishes</b>.
            Naturally dried for long-lasting freshness.
            <br /><h5 className="card-title">Sun-Dried Apples</h5>
            Sourced from <b>high-altitude orchards</b>.
            Naturally sweet, chewy, and rich in <b>dietary fiber</b>.
            Perfect for <b>snacking, baking, and cereals</b>.
            No added sugar or preservatives.
            <br /><h5 className="card-title">Sun-Dried Spinach (Palak)</h5>
            Retains <b>iron, calcium, and essential nutrients</b>.
            Convenient for adding to <b>soups, gravies, and parathas</b>.
            Lightweight and easy to store for year-round use.
            <br /><h5 className="card-title">Sun-Dried Apricots (Khubani)</h5>
            Naturally sweet with a <b>tangy flavor</b>.
            High in <b>Vitamin A, potassium, and antioxidants</b>.
            Great for <b>snacking, desserts, and energy-boosting meals</b>.

            <br />At <b>Vajra Overseas,</b> we take pride in offering <b>100% natural, chemical-free sun-dried products,</b>
            preserving their authentic taste and health benefits. <b>Experience the richness of traditional sun-drying methods and bring home the flavors of nature!</b>
        </ShowPopup>
    )
    return (
        <>
            {/* <button onClick={() => setShowPopup(true)}>Open Model</button> */}
            {/* <a className='nav-link text-secondary'>click here </a> */}
            <a href="#SunDried" onClick={() => setShowPopup(true)}>More detail...</a>
            {showPopup && popupModel}
        </>
    );
};

export default SunDriedPopupComponent;