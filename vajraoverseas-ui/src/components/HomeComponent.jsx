import React from 'react'
import Slider from './Slider';
// import VideoLooper from 'react-video-looper'
function HomeComponent() {
    return (
        <>
            <React.Fragment>
                {/* <h1 className='text-center text-danger text-capitalize my-5'> Welcome to Vajra Overseas</h1> */}
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            {/* <div className="card" > */}
                            
                            {/* <img src="./HomeSlide3.jpg" className="card-img-top" alt="..." height="350px" /> */}
                            {/* <video width="1200" height="350" loop>
                            <source src="./VOHdHomepageIntro.mp4" type="video/mp4"/>
                            </video> */}
                            <Slider />
                            {/* </div> */}
                        </div>
                    </div><br /><br /><br /><br /><br /><br /><br /><br />
                    <div className="row">
                        <div className="col-sm"><div className="card" >
                            {/* <div className="card-body"> */}
                                <h4 className="card-title" >Kabuli Channa</h4>
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
                            {/* </div> */}
                        </div></div>
                        <div className="col-sm"><div className="card" >
                            {/* <img src="./CheakPea4.jpg" className="card-img-top" alt="..." height="200px" /> */}
                            {/* <div className="card-body"> */}
                                <h5 className="card-title">Interesting Facts</h5>
                                <p className="card-text">
                                <b>1. Nutritional Powerhouse:</b> Kabuli channa is a rich source of protein, dietary fiber, vitamins, and minerals such as iron, magnesium, and zinc. It is an excellent food for vegetarians and vegans due to its high protein content.<br />
                                <b>2. Cultural Significance:</b> In India and the Middle East, Kabuli channa is not only a staple food but also holds cultural and religious significance. It is often prepared during festivals and special occasions.<br />
                                <b>3. Storage and Preparation:</b> Dried Kabuli channa can be stored for an extended period in a cool, dry place. Before cooking, they should be soaked in water for several hours or overnight to reduce cooking time and improve digestibility.<br />
                                <b>4. Environmental Impact:</b> Chickpeas are a sustainable crop as they improve soil health by fixing nitrogen, reducing the need for synthetic fertilizers. They also have a relatively low water footprint compared to other protein sources like meat.<br />
                                <b>5. Economic Importance:</b> Kabuli channa is an important cash crop in many countries, contributing to the livelihoods of farmers and playing a crucial role in food security.<br />
                                </p>
                                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                            {/* </div> */}
                        </div></div>
                        {/* <div className="col-sm"><div className="card" >
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div></div> */}
                    </div>
                    <div className="row">
                        <div className="col-sm"><div className="card" >
                            {/* <img src="./CheakPea5.jpg" className="card-img-top" alt="..." height="200px" /> */}
                            <div className="card-body">
                                <h5 className="card-title">Directors</h5>
                                <p className="card-text">
                                <table className='table table-striped table-bordered'>
                                        <thead>
                                            <tr>
                                                <th> Name</th><th> Designation</th><th> Appointment Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr><td> Amol Khanorkar</td><td> Director</td><td> - </td></tr>
                                            <tr><td> Shashank Gajbhiye</td><td> Director</td><td> - </td></tr>
                                        </tbody>
                                    </table>
                                </p>
                                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div></div>
                        <div className="col-sm"><div className="card" >
                            {/* <img src="./CheakPea5.jpg" className="card-img-top" alt="..." height="200px" /> */}
                            <div className="card-body">
                                <h5 className="card-title">Contacts</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div></div>
                    </div>
                </div>
            </React.Fragment>

        </>
    )
}

export default HomeComponent;