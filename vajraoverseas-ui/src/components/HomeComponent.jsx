import React from 'react'

function HomeComponent() {
    return (
        <>
            <React.Fragment>
                <h1 className='text-center text-danger text-capitalize my-5'> Welcome to Vajra Overseas</h1>
                <div className="container">
                <div className="row">
                        <div className="col-sm"><div className="card" >
                            <img src="./CheakPea1.jpg" className="card-img-top" alt="..." height="200px" />
                        </div></div>
                        <div className="col-sm"><div className="card" >
                            <div className="card-body">
                                <h5 className="card-title">About Company</h5>
                                <p className="card-text">
                                At Vajra Overseas, we pride ourselves on being one of the leading force in the world of international trade.
                                With a commitment to excellence, innovation, and reliability, we are establishing ourselves as a trusted 
                                partner for businesses seeking to expand their reach across global markets.
                                Our company specializes in providing comprehensive export solutions that cater to a food grains. 
                                We ensure that your products like Indian Organic food Chickpea commonly known as Kabuli Channa or Chole,
                                Indian spices and D-Oiled Cakes (D.O.C.) - Castor Meal are delivered safely, efficiently, and on time. 
                                Our experienced team navigates the complexities of international logistics and customs regulations, 
                                making the process seamless for our clients.

                                With a robust network of partners and agents worldwide, we offer unparalleled service and support, 
                                tailored to meet the unique needs of each business we work with. At Vajra Overseas, our goal is to 
                                empower your business to thrive in the global marketplace by delivering exceptional value and fostering 
                                long-term relationships built on trust and integrity.

                                Join us on a journey of growth and success as we help you unlock new opportunities and achieve your 
                                international trade objectives.
                                </p>
                            </div>
                        </div></div>
                </div><br /><br />
                    <div className="row">
                        <div className="col-sm"><div className="card" >
                            <img src="./CheakPea1.jpg" className="card-img-top" alt="..." height="200px" />
                            <div className="card-body">
                                <h5 className="card-title">Nutrition facts</h5>
                                
                                    364 Calories - 100 grams
                                    <table className='table table-striped table-bordered'>
                                        <thead>
                                            <tr>
                                                <th> Nutrient</th>
                                                <th> Amount(g)</th>
                                                <th> DV(%)</th>
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
                        <div className="col-sm"><div className="card" >
                            <img src="./CheakPea4.jpg" className="card-img-top" alt="..." height="200px" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div></div>
                        <div className="col-sm"><div className="card" >
                            <img src="./CheakPea5.jpg" className="card-img-top" alt="..." height="200px" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div></div>
                    </div>
                </div>
            </React.Fragment>

        </>
    )
}

export default HomeComponent;