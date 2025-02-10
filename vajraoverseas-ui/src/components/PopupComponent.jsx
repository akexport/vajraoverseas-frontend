import React, { useState } from 'react';
import ProductComponent from './ProductComponent';
import ShowPopup from './ShowPopup';

const PopupComponent = () => {

    const [showPopup, setShowPopup] = useState(false);

    const closePopup = () => {
        return setShowPopup(false)
    }
    
    const handleCloseButton = (
        <button onClick={closePopup}>Close It</button>
    );
    const popupModel = (
        <ShowPopup closePopup={closePopup} handleCloseButton={handleCloseButton}>
            <h5 className="card-title">Types of Chickpeas Available in India</h5>
            India is one of the largest producers of chickpeas, offering multiple varieties known for their unique characteristics and nutritional benefits:
            <div className="row">
                <div className="col-sm"><div className="card" >
                    <div className="card-body">        
                        <h6 className="card-title">Kabuli Chana (White Chickpeas)</h6>
                        Large, round, and creamy-white in color.
                        Rich in protein and fiber.
                        Mild taste and smooth texture.
                        Ideal for salads, curries, hummus, and snacks.  
                    </div>
                </div></div>
                <div className="col-sm"><div className="card" >
                    <div className="card-body">
                        <h6 className="card-title">Desi Chana (Brown Chickpeas)</h6>
                        Smaller in size with a rough coat.
                        Higher fiber content than Kabuli Chana.
                        Stronger, nuttier flavor.
                        Often used in traditional Indian dishes like Chana Masala and Chana Chaat. 
                    </div>
                </div></div>
                <div className="col-sm"><div className="card" >
                    <div className="card-body">
                        <h6 className="card-title">Green Chickpeas (Hara Chana)</h6>
                        Fresh, unripe chickpeas with a sweet and earthy taste.
                        Rich in antioxidants and essential vitamins.
                        Can be eaten raw, roasted, or cooked in various dishes.
                    </div>
                </div></div>
                <div className="col-sm"><div className="card" >
                    <div className="card-body">
                        <h6 className="card-title">Black Chickpeas (Kala Chana)</h6>
                        Dark brown to black in color with a firmer texture.
                        Excellent source of plant-based protein.
                        Commonly used in curries, soups, and sprouts for a protein-packed meal.
                    </div>
                </div></div>
            </div>

            <div className="row">                
                <div className="col-sm"><div className="card" >
                    <div className="card-body">
                        <h6 className="card-title">Why Choose Nafed Kabuli Chana?</h6>
                        At <b>Nafed,</b> we take pride in offering <b>100% pure and natural Kabuli Chana,</b> sourced from 
                        the best farms across India. Our chickpeas are <b>carefully selected, hygienically processed, and free 
                        from artificial additives,</b> ensuring superior quality and taste.
                        Rich in Protein & Essential Nutrients.
                        Pure, Natural & Chemical-Free.
                        Supports Heart Health & Weight Management.
                        Perfect for Indian & International Cuisines.
                    </div>
                </div></div>
            </div>
            Add Nafed Kabuli Chana to your daily diet and enjoy the goodness of nature in every bite.
        </ShowPopup>
    )
    return (
        <>
            <button onClick={() => setShowPopup(true)}>Open Model</button>
            {/* <a className='nav-link text-secondary'>click here </a> */}
            {showPopup && popupModel}
        </>
    );
};

export default PopupComponent;