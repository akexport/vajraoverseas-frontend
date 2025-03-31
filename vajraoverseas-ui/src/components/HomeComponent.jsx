import React from 'react'
import Slider from './Slider';
import { EmblaCarousel } from './EmblaCarousel';
import { ProductListCarousel } from './ProductListCarousel';
// import VideoLooper from 'react-video-looper'
function HomeComponent() {
    return (
        <>
            <React.Fragment>
                <div className="row">
                    <EmblaCarousel />
                    
                </div>
                <p>Image Dimention - 1375 * 583 Home top slider images</p>
                <br />
                <div class="container">
                    <div class="paper-bg">
                        <div class="section-title-furits text-center mb-80">
                            <img src="src/assets/HomepageFascinatinFacts.jpg" style={{ width: "100px", height: "100px" }} />
                            <h5 class="section-title-furits">Vajra Overseas – Pioneering Global Trade with Power and Precision</h5>
                        </div>
                        <div className="row">
                            <div className="col-sm fruits-choose-content">
                                <p>
                                    Founded in <b>27th Feb 2023, Vajra Overseas</b> stands as a formidable force in international exports,
                                    setting new benchmarks in quality, efficiency, and global connectivity.
                                    {/* At the helm of this
                                    ambitious enterprise are two trailblazing leaders, <b>Mr. Amol Khanorkar, Director of International
                                        Sales,</b> and <b>Mr. Shashank Gajbhiye, Director of Logistics and Supply Chain Management</b> - driving the
                                    company with innovation, expertise, and an unyielding commitment to excellence. */}
                                    With unmatched industry acumen and a forward-thinking approach, we specialize in optimizing global
                                    trade, ensuring seamless supply chain operations, and delivering top-tier products to international
                                    markets.
                                    {/* Our strategic vision, cutting-edge logistics, and unwavering professionalism position <b>Vajra
                                        Overseas</b> as a trusted powerhouse in the ever-evolving world of global commerce. */}
                                    At <b>Vajra Overseas</b>, we don’t just export - we revolutionize international trade with precision, passion,
                                    and performance. <br /><b>Step into a world of limitless opportunities-your gateway to global success starts here!</b>
                                </p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <p>Image Dimention - 1140 * 307 bachground image</p>
                <br />
                <div class="container">
                    <div class="paper-blue-bg">
                        <div class="section-title-furits text-center mb-80">
                            <img src="src/assets/HomepageFascinatinFacts.jpg" style={{ width: "100px", height: "100px" }} />
                            <h5 class="section-title-furits">Export Most Experties Product</h5>
                        </div>
                        <div className="row">
                            <div className="col-sm">
                            <div className="card" ><div className="card-body"> 
                                <div class="fruits-choose-serial">
                                    <h3>01</h3>
                                </div>
                                <div class="fruits-choose-content">
                                    <h4>Quality in every drop:</h4>
                                    <p>
                                        In our opinion quality stands for the products which meets customer’s expectations and specifications. Our motto is that only best is good enough for customer’s application.
                                    </p>
                                </div>
                                </div></div>
                            </div>
                            <div className="col-sm fruits-choose-content">
                                <h4>02 Technical qualification:</h4>
                                <p>
                                    Our engineers and technical specialists are being kept aware of current developments. We keep our products up to date with latest technical standards.
                                </p>
                            </div>
                            <div className="col-sm fruits-choose-content">
                                <h4>03 Fast Shipping All Over The World:</h4>
                                <p>
                                    Along with quality products our manufacturing process is fast. In very short period of time we deliver quality products. Company having warehouses and authorized stockiest to deliver urgent supply in India.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div class="container">
                    <div className="row">                       
                        <ProductListCarousel />
                    </div>
                </div>
                <p>Image Dimention - 350 * 370 each image</p>
                <div class="container">
                    <div class="fruits-choose-area">
                        <div class="section-title-furits text-center mb-80">
                            <img class="lazyloaded" alt="leaf-heading" src="src/assets/HomepageFascinatinFacts.jpg" style={{ width: "100px", height: "100px" }} />
                            <h5 class="section-title-furits">{/*Fascinating Facts About Kabuli Channa*/}</h5>
                        </div>
                        <div className="row">
                            {/* <div className="fruits-choose-serial">
                                <h4>01</h4>
                            </div> */}
                            <div className="col-sm">
                                <div className="fruits-choose-serial">
                                    <h3>01</h3>
                                </div>
                                <div className="fruits-choose-content">
                                <h4>Nutritional Powerhouse:</h4>
                                <p>
                                    Kabuli channa is a rich source of protein, dietary fiber, vitamins, and minerals such as iron, magnesium, and zinc.
                                    Its high protein content makes it a perfect dietary choice for vegetarians and vegans, promoting overall health and well-being.<br />
                                </p>
                                </div>
                            </div>
                            <div className="col-sm fruits-choose-content">
                                <h4>02 Cultural Significance:</h4>
                                <p>
                                    A staple ingredient of Indian, Middle Eastern, and Mediterranean cuisines, Kabuli channa is deeply rooted in cultural and religious traditions.
                                    It is commonly prepared during festivals, celebrations, and special occasions, adding both nutrition and heritage to every meal.<br />
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm fruits-choose-content">
                                <h4>03 Storage and Preparation:</h4>
                                <p>
                                    Dried Kabuli channa has a long shelf life when stored in a cool, dry place. To enhance digestibility and reduce cooking time,
                                    it should be soaked in water for several hours or overnight, ensuring a soft and creamy texture when cooked.<br />
                                </p>
                            </div>
                            <div className="col-sm fruits-choose-content">
                                <h4>04 Environmental Impact:</h4>
                                <p>
                                    Chickpeas are an eco-friendly crop that naturally enriches soil health by fixing nitrogen,
                                    reducing the need for chemical fertilizers. Additionally, they have a significantly lower water footprint than many animal-based protein sources, making them a sustainable choice for a greener planet.<br />
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm fruits-choose-content">
                                <h4>05 Economic Importance:</h4>
                                <p>
                                    As a valuable cash crop, Kabuli channa plays a crucial role in global food security and supports the livelihoods of farmers worldwide.
                                    Its demand in international markets continues to grow, reinforcing its economic importance in agricultural trade.<br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div class="container">
                    <div className="table-choose-area">
                        <div className="fruits-choose-content">
                            <div class="section-title-furits text-center mb-80">
                                <img class="lazyloaded" alt="leaf-heading" src="src/assets/HomepageFascinatinFacts.jpg" style={{ width: "100px", height: "100px" }} />
                                <h4>Kabuli Channa</h4>
                                <h5>Nutrition facts</h5>
                                364 Calories - 100 grams
                            </div>
                        </div>
                        <table className="table table-striped table-bordered">
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
                    </div>
                </div><br />
                <div className="container">
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
                </div><br />

            </React.Fragment>
        </>
    )
}

export default HomeComponent;