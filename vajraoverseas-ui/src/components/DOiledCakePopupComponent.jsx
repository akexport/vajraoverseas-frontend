import React, { useState } from 'react';
import ProductComponent from './ProductComponent';
import ShowPopup from './ShowPopup';

const DOiledCakePopupComponent = () => {

    const [showPopup, setShowPopup] = useState(false);

    const closePopup = () => {
        return setShowPopup(false)
    }

    const handleCloseButton = (
        <button onClick={closePopup}>Close It</button>
    );
    const popupModel = (
        <ShowPopup closePopup={closePopup} handleCloseButton={handleCloseButton}>
            <h5 className="card-title">Types of De-Oiled Cakes We Offer</h5>
            <h5 className="card-title">Soybean De-Oiled Cake (Soy DOC)</h5>
            High in <b>protein (45–50%)</b> and amino acids.
            Ideal for <b>poultry, cattle, and aquaculture feed</b>.
            Promotes <b>better digestion and livestock growth</b>.
            <br /><h5 className="card-title">Groundnut De-Oiled Cake</h5>
            Rich in <b>protein, fiber, and minerals</b>.
            Excellent source of energy for <b>dairy cattle and poultry</b>.
            Helps in improving <b>milk production in cows</b>.
            <br /><h5 className="card-title">Mustard De-Oiled Cake (Sarso Khal)</h5>
            Contains <b>natural sulfur compounds</b> that enhance digestion.
            Used as <b>organic fertilizer</b> for soil enrichment.
            Popular in <b>livestock feed for improved health</b>.
            <br /><h5 className="card-title">Cottonseed De-Oiled Cake</h5>
            Packed with <b>protein, fiber, and essential nutrients</b>.
            Widely used in <b>cattle feed and dairy farming</b>.
            Enhances <b>milk yield and animal growth</b>.
            <br /><h5 className="card-title">Sunflower De-Oiled Cake</h5>
            High in <b>digestible protein and amino acids</b>.
            Suitable for <b>poultry, pigs, and livestock</b>.
            Improves <b>immune health and overall productivity</b>.
            <br /><h5 className="card-title">Packaging & Wholesale Options</h5>
            Available in 50 kg, 100 kg, and bulk tonnage packaging.
            Custom packaging options for wholesale buyers and distributors.
            Hygienically processed and packed for extended shelf life.
            <br /><h5 className="card-title">Regional Sourcing & Quality Assurance</h5>
            Our de-oiled cakes are sourced from the finest oilseed-producing regions across India, ensuring premium quality and high nutritional value. We follow strict quality control measures to provide pure, chemical-free, and highly digestible feed and organic fertilizer solutions.
            Bulk supply available for dairy farms, poultry farms, and organic farming.
            Competitive pricing for wholesalers and exporters.
            100% natural, residue-free, and eco-friendly products.
            <br /> For bulk inquiries, custom orders, or export partnerships, contact us today and experience the superior quality of premium-grade de-oiled cakes!
        </ShowPopup>
    )
    return (
        <>
            {/* <button onClick={() => setShowPopup(true)}>Open Model</button> */}
            {/* <a className='nav-link text-secondary'>click here </a> */}
            <a href="#D-OiledCake" onClick={() => setShowPopup(true)}>More detail...</a>
            {showPopup && popupModel}
        </>
    );
};

export default DOiledCakePopupComponent;