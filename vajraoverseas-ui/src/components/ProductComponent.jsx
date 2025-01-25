import React from "react";

const ProductComponent = () => {
    return (
        <>
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-sm"><div className="card" >
                            <img src="src/assets/Products01.png" className="card-img-top" alt="..." height="400px" />
                        </div></div>
                    </div><br />
                    <div className="row">
                        <div>
                            <img src="src/assets/Product_KabuliChana.png" class="rounded float-start" alt="..." style={{ width: "200px", height: "200px" }} />
                            <p class="rounded float-start">
                                <h5 className="card-title bg-primary text-white">Kabuli Channa</h5>
                                Nutrients: Kabuli Chana rich in protein, Folic acid, Vitamin B9, Magnesium,
                                Good for heart, diabetics, weight loss and Low in GI (glycemic index) etc…
                                Rich in Test: Nafed Kabuli Chana test is pure and natural. Kabuli Chana is also known as chickpeas,
                                chole Chana and garbanzo.
                            </p>
                        </div>
                        <div>
                            <img src="src/assets/Product_Sundried01.png" class="rounded float-end" alt="..." style={{ width: "200px", height: "200px" }} />
                            <p class="rounded float-end">
                                <h5 className="card-title bg-primary text-white">Sun Dried Fruits and Vegitables</h5>
                                long before the advent of winter, preparations began almost on a
                                war-footing to cope with the days of snow, sleet and frost. Vegetable-based pahadi badi,
                                made from grated squash vegetables and the lentil paste used as binding, are dried in sun and shade.
                                These are very mildly spiced and not at all.
                            </p>
                        </div>
                        <div>
                            <img src="src/assets/Product_DryFruits.png" class="rounded float-start" alt="..." style={{ width: "200px", height: "200px" }} />
                            <p class="rounded float-start">
                                <h5 className="card-title bg-primary text-white">D-Oiled Cakes of Different Seeds</h5>
                                De-oiled cake is a by-product obtained after extracting oil from seeds
                                through mechanical pressing. About 250–350 g of oil is extracted through
                                mechanical pressing of 1 kg of oilseeds, and in the process of doing so;
                                approximately 650 g of de-oiled cake (seed cake) is obtained as residue
                            </p>
                        </div>
                        <div>
                            <img src="src/assets/Product_DryFruits.png" class="rounded float-end" alt="..." style={{ width: "200px", height: "200px" }} />

                            <p class="rounded float-end">
                                <h5 className="card-title bg-primary text-white">Varieties of DryFruits </h5>
                                Dry fruits are small, but they are high in minerals and proteins.
                                Every healthcare professional recommends including a handful of dry fruits in our diet to keep us
                                healthy and fit. Dry fruits come in a plethora of varieties, including raisins, cashew nuts,
                                almonds, pistachios, walnuts, dates, plums, and so on. Dry fruits are said to have a slew of
                                health benefits if consumed in moderation. We’ve compiled a list of dry fruits that add nutritional
                                value to your everyday food and provide you with multiple health benefits.
                            </p>
                        </div>
                    </div>

                </div>
            </React.Fragment>

        </>
    )
}
export default ProductComponent