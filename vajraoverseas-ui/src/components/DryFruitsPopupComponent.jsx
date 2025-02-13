import React, { useState } from 'react';
import ProductComponent from './ProductComponent';
import ShowPopup from './ShowPopup';

const DryFruitsPopupComponent = () => {

    const [showPopup, setShowPopup] = useState(false);

    const closePopup = () => {
        return setShowPopup(false)
    }

    const handleCloseButton = (
        <button onClick={closePopup}>Close It</button>
    );
    const popupModel = (
        <ShowPopup closePopup={closePopup} handleCloseButton={handleCloseButton}>
            <h6 className="card-title">Our Premium Dry Fruit Varieties</h6>
            <h6 className="card-title">Almonds (Badam)</h6>
            Rich in Vitamin E, protein, and healthy fats.
            Supports brain function, heart health, and weight management.
            Available in raw, roasted, and salted varieties.
            <h6 className="card-title">Cashew Nuts (Kaju)</h6>
            High in magnesium, zinc, and antioxidants.
            Promotes bone health, skin nourishment, and immunity.
            Perfect for snacking, cooking, and desserts.
            <h6 className="card-title">Pistachios (Pista)</h6>
            Loaded with fiber, protein, and healthy fats.
            Helps in cholesterol control and weight management.
            Available in shelled, unshelled, salted, and roasted options.
            <h6 className="card-title">Walnuts (Akhrot)</h6>
            A rich source of Omega-3 fatty acids for heart and brain health.
            Boosts memory, cognitive function, and overall well-being.
            Ideal for snacking, salads, and baking.
            <h6 className="card-title">Dates (Khajoor)</h6>
            Naturally sweet, packed with fiber, iron, and energy.
            Improves digestion, boosts energy, and strengthens bones.
            Available in premium Medjool, Ajwa, and Deglet Noor varieties.
            <h6 className="card-title">Packaging & Wholesale Options</h6>
            Available in 250g, 500g, 1kg, and bulk packaging.
            Custom packaging options for retailers, wholesalers, and bulk buyers.
            Hygienically processed and vacuum-sealed for maximum freshness and shelf life.
            <h6 className="card-title">Regional Sourcing & Quality Assurance</h6>
            We source our premium dry fruits from trusted farms across India and international markets, ensuring top-grade quality, freshness, and purity. Our products are handpicked, chemical-free, and naturally processed, making them the perfect addition to a healthy lifestyle.
            Bulk supply for retailers, wholesalers, and corporate gifting.
            100% natural, preservative-free, and premium-grade products.
            Competitive pricing with worldwide export options.
        </ShowPopup>
    )
    return (
        <>
            {/* <button onClick={() => setShowPopup(true)}>Open Model</button> */}
            {/* <a className='nav-link text-secondary'>click here </a> */}
            <a href="#DryFruits" onClick={() => setShowPopup(true)}>More detail...</a>
            {showPopup && popupModel}
        </>
    );
};

export default DryFruitsPopupComponent;