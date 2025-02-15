import React from "react";
import KabuliChannaPopupComponent from "./KabuliChannaPopupComponent";
import SunDriedPopupComponent from "./SunDriedPopupComponent";
import DOiledCakePopupComponent from "./DOiledCakePopupComponent";
import DryFruitsPopupComponent from "./DryFruitsPopupComponent";

const ProductComponent = () => {
    return (
        <>
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-sm"><div className="card" >
                            <img src="src/assets/Products01.png" className="card-img-top" alt="..." height="400px" />
                        </div></div>
                    </div><br />{/*row closed */}
                    <div className="row">
                        <div className="col-sm"><div className="card" >
                            <div className="card-body">
                            <img src="src/assets/Product_KabuliChana-02.png" class="rounded float-start" alt="..." style={{ width: "200px", height: "200px" }} />                         
                            <p class="rounded float-start">
                                <h4 className="card-title">Kabuli Chana – A Powerhouse of Nutrition</h4>
                                Kabuli Chana, also known as <b>Chickpeas, Chole Chana, or Garbanzo Beans,</b> is a nutrient-dense legume 
                                packed with <b>protein, folic acid (Vitamin B9), magnesium, and dietary fiber.</b> It is highly beneficial 
                                for <b>heart health, diabetes management, weight loss,</b> and overall well-being due to its <b>low glycemic index (GI).</b>
                                <KabuliChannaPopupComponent />                     
                            </p>
                            </div>
                        </div></div>
                        <div className="col-sm"><div className="card" >
                            <div className="card-body">
                                <div className="row">
                                <div className="col-sm">
                            <img src="src/assets/Product_Sundried01.png" class="rounded float-end" alt="..." style={{ width: "200px", height: "150px" }} />
                            </div>
                            <div className="col-sm">                        
                                For generations, sun-drying has been a trusted method of preserving fruits and vegetables, ensuring a year-round supply of essential nutrients. 
                            </div>
                            <h4 className="card-title">Sun-Dried Fruits & Vegetables – Preserving Nature’s Goodness</h4>
                            <p class="rounded float-end">
                            This traditional technique enhances flavors naturally, retaining the goodness of vitamins and minerals without the need for artificial preservatives.
                                One such speciality is <b>Pahadi Badi,</b> made from <b>grated squash vegetables and lentil paste,</b> 
                                carefully dried in <b>sun and shade.</b> These protein-rich nuggets are <b>mildly spiced or completely plain,</b> making them a perfect addition to a variety of dishes.
                                <SunDriedPopupComponent />     
                            </p>
                                </div>
                            </div>
                        </div></div>
                    </div>    {/*row closed */}
                    <div className="row">
                        <div className="col-sm"><div className="card" >
                            <div className="card-body">
                            <img src="src/assets/Product_DryFruits.png" class="rounded float-start" alt="..." style={{ width: "200px", height: "200px" }} />
                            <p class="rounded float-start">
                                <h4 className="card-title">De-Oiled Cakes - A Nutrient-Rich By-Product for Animal Feed & Fertilizer</h4>
                                <b>De-Oiled Cake (DOC)</b> is a valuable by-product obtained after extracting oil from various seeds through 
                                mechanical pressing. Typically, <b>250–350 g of oil is extracted from 1 kg of oilseeds,</b> leaving behind 
                                approximately <b>650 g of high-protein de-oiled cake</b> as residue. These seed cakes are widely used as 
                                <b>nutrient-rich animal feed, organic fertilizers, and in aquaculture</b> due to their high protein, fiber, and essential nutrient content.
                                <DOiledCakePopupComponent />
                            </p>
                            </div>
                        </div></div>
                        <div className="col-sm"><div className="card" >
                            <div className="card-body">
                            <img src="src/assets/Product_DryFruits.png" class="rounded float-end" alt="..." style={{ width: "200px", height: "200px" }} />

                            <p class="rounded float-end">
                                <h4 className="card-title">Premium Dry Fruits - A Nutrient-Rich Superfood for a Healthy Life </h4>
                                Dry fruits are nature’s powerhouse of <b>essential vitamins, minerals, proteins, and healthy fats,</b> 
                                making them a must-have in a balanced diet. Recommended by health professionals, a handful of dry fruits 
                                daily boosts <b>immunity, heart health, brain function, and energy levels.</b> Whether enjoyed as a snack, 
                                added to desserts, or blended into smoothies, dry fruits provide <b>countless health benefits</b> when consumed 
                                in moderation.
                                <DryFruitsPopupComponent />
                                
                            </p>
                            </div>
                        </div></div>
                    </div>{/*row closed */}

                </div>{/*container closed */}
            </React.Fragment>

        </>
    )
}
export default ProductComponent