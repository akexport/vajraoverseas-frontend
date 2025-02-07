import React from 'react'
import Slider from './Slider';
// import VideoLooper from 'react-video-looper'
function HomeComponent() {
    return (
        <>
            <React.Fragment>
                <div className="container">
                    {/* <video width="1200" height="350" loop>
                            <source src="./VOHdHomepageIntro.mp4" type="video/mp4"/>
                            </video> */}
                    <Slider />
                    <br />
                    <br />
                    <div className="row">
                        <div className="col-sm"><div className="card" >
                            <div className="card-body">
                                <h4 className="card-title">Kabuli Channa</h4>
                                <h5 className="card-title">Nutrition facts</h5>
                                364 Calories - 100 grams
                                <table className='table table-striped table-bordered'>
                                    <thead>
                                        <tr>
                                            <th> Nutrient</th><th> Amount(g)</th><th> DV(%)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td> Total Fat</td><td> 6 g</td><td> 9%</td></tr>
                                        <tr><td> Cholesterol</td><td> 0 mg</td><td> 0%</td></tr>
                                        <tr><td> Sodium</td><td>24 mg</td><td> 1%</td></tr>
                                        <tr><td> Potassium</td><td>	875 mg</td><td>	25%</td></tr>
                                        <tr><td> Total Carbohydrate</td><td> 61 g</td><td> 20%</td></tr>
                                        <tr><td> Protein</td><td> 19 g</td><td>	38%</td></tr>
                                    </tbody>
                                </table>
                                <p>Percent Daily Values are based on a 2,000 calorie diet.
                                    Your daily values may be higher or lower depending on your calorie needs.</p>
                                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div></div>
                        <div className="col-sm">
                            <div className="card" >
                                {/* <div className="card-body"> */}
                                <img src="src/assets/NutritionFacts01.jpg" className="card-img-top" alt="..." height="490px" />
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                    <br /><br />
                    <div className="row">
                        <div className="col-sm"><div className="card" >
                            <div className="card-body">
                                {/* <h5 className="card-title bg-primary text-white">Fascinating Facts About Kabuli Channa</h5> */}
                                <img src="src/assets/HomepageFascinatinFacts.jpg" className="card-img-top" alt="..." style={{ width: "600px", height: "510px" }} />
                            </div>
                        </div></div>    
                        <div className="col-sm"><div className="card" >
                            <div className="card-body">        
                                <h5 className="card-title">Fascinating Facts About Kabuli Channa</h5>
                                <p className="card-text">
                                    <b>1. Nutritional Powerhouse:</b> Kabuli channa is a rich source of protein, dietary fiber, vitamins, and minerals such as iron, magnesium, and zinc.
                                    Its high protein content makes it a perfect dietary choice for vegetarians and vegans, promoting overall health and well-being.<br />
                                    <b>2. Cultural Significance:</b> A staple ingredient of Indian, Middle Eastern, and Mediterranean cuisines, Kabuli channa is deeply rooted in cultural and religious traditions.
                                    It is commonly prepared during festivals, celebrations, and special occasions, adding both nutrition and heritage to every meal.<br />
                                    <b>3. Storage and Preparation:</b> Dried Kabuli channa has a long shelf life when stored in a cool, dry place. To enhance digestibility and reduce cooking time,
                                    it should be soaked in water for several hours or overnight, ensuring a soft and creamy texture when cooked.<br />
                                    <b>4. Environmental Impact:</b> Chickpeas are an eco-friendly crop that naturally enriches soil health by fixing nitrogen,
                                    reducing the need for chemical fertilizers. Additionally, they have a significantly lower water footprint than many animal-based protein sources, making them a sustainable choice for a greener planet.<br />
                                    <b>5. Economic Importance:</b> As a valuable cash crop, Kabuli channa plays a crucial role in global food security and supports the livelihoods of farmers worldwide.
                                    Its demand in international markets continues to grow, reinforcing its economic importance in agricultural trade.<br />
                                </p>
                            </div>
                        </div></div>
                    </div>
                    <br />
                    <br />
                    <div className="row">
                        <div className="col-sm"><div className="card" >
                            <div className="card-body">
                                <h5 className="card-title">Vajra Overseas – Pioneering Global Trade with Power and Precision</h5>
                                <p className="card-text">
                                Founded in <b>27th Feb 2023, Vajra Overseas</b> stands as a formidable force in international exports, 
                                setting new benchmarks in quality, efficiency, and global connectivity. <br /><br />At the helm of this 
                                ambitious enterprise are two trailblazing leaders, <b>Mr. Amol Khanorkar, Director of International 
                                Sales,</b> and <b>Mr. Shashank Gajbhiye, Director of Logistics and Supply Chain Management</b> - driving the 
                                company with innovation, expertise, and an unyielding commitment to excellence.<br /><br />
                                With unmatched industry acumen and a forward-thinking approach, we specialize in optimizing global 
                                trade, ensuring seamless supply chain operations, and delivering top-tier products to international 
                                markets. <br /><br />Our strategic vision, cutting-edge logistics, and unwavering professionalism position <b>Vajra 
                                Overseas</b> as a trusted powerhouse in the ever-evolving world of global commerce.
                                At <b>Vajra Overseas</b>, we don’t just export - we revolutionize international trade with precision, passion, 
                                and performance. <br /><b>Step into a world of limitless opportunities-your gateway to global success starts here!</b>
                                </p>
                            </div>
                        </div></div>
                        <div className="col-sm"><div className="card" >
                            <div className="card-body">
                                <img src="src/assets/HomepagePowerPricision.jpg" className="card-img-top" alt="..." style={{ width: "600px", height: "510px" }} />
                            </div>
                        </div></div>
                    </div>
                    <br /><br />
                    <div className="row">
                        <div className="col-sm"><div className="card" >
                            <div className="card-body">
                                <h5 className="card-title">Directors</h5>
                                <p className="card-text">
                                    <table className='table table-striped table-bordered'>
                                        <thead>
                                            <tr>
                                                <th> Name</th><th> Designation</th><th> Appointment Date</th><th> Contacts</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr><td> Amol Khanorkar</td><td> Director of International Sales</td><td> 27th-Feb-2023 </td><td> +91-9004070609 </td></tr>
                                            <tr><td> Shashank Gajbhiye</td><td> Director of Logistics and Supply Chain Management</td><td> 27th-Feb-2023 </td><td> +91-9373142052 </td></tr>
                                        </tbody>
                                    </table>
                                </p>
                            </div>
                        </div></div>                      
                    </div>
                </div>
            </React.Fragment>
        </>
    )
}

export default HomeComponent;