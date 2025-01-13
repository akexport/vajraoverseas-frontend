import React from "react";

const ServiceComponent = () => {
    return(
        <>
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-sm"><div className="card" >
                        <img src="src/assets/VajraHome3.png" className="card-img-top" alt="..." height="300px" />              
                    </div></div>
                </div><br />
                <div className="row">
                    <div className="col-sm"><div className="card" >
                        <img src="src/assets/NutritionFacts01.jpg" className="card-img-top" alt="..." style={{width:"100%", height:"300px"}} />
                        <h5 className="card-title">Transportation And Logistics</h5>
                        <p className="card-text">We can help businesses with the transportation of their products or 
                            services to other countries. They can arrange for shipping, handle customs clearance, and ensure that 
                            the products or services are delivered on time and in good condition.</p>
                    </div></div>
                    <div className="col-sm"><div className="card" >
                        <img src="src/assets/NutritionFacts01.jpg" className="card-img-top" alt="..." style={{width:"100%", height:"300px"}} />
                        <h5 className="card-title">Trade Finance</h5>
                        <p className="card-text">We can offer businesses access to trade finance solutions, such as 
                            letters of credit, export credit insurance, and factoring.</p>
                    </div></div>
                    <div className="col-sm"><div className="card" >
                        <img src="src/assets/NutritionFacts01.jpg" className="card-img-top" alt="..." style={{width:"100%", height:"300px"}} />
                        <h5 className="card-title">Streamlining Logistics and Documentation</h5>
                        <p className="card-text">We have the expertise and knowledge to navigate the complex 
                            regulations and requirements that come with exporting goods or services. They can help businesses 
                            save time and money by streamlining the logistics and documentation processes.</p>
                    </div></div>
                    
                </div>
            </div>
        </React.Fragment>
        
        </>
    )
}
export default ServiceComponent 