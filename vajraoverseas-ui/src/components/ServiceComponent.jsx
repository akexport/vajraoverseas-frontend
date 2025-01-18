import React from "react";

const ServiceComponent = () => {
    return(
        <>
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-sm"><div className="card" >
                        <img src="src/assets/Services01.png" className="card-img-top" alt="..." height="400px" />              
                    </div></div>
                </div><br />
                <div className="row">
                        <div>
                            <img src="src/assets/Transportation01.jpg" class="rounded float-start" alt="..." style={{width:"200px", height:"150px"}} />
                            <p class="rounded float-start"> 
                                <h5>Transportation And Logistics</h5>
                                We can help businesses with the transportation of their products or 
                                services to other countries. They can arrange for shipping, handle customs clearance, and ensure that 
                                the products or services are delivered on time and in good condition.
                            </p>
                        </div>
                        <div>
                            <img src="src/assets/TradandFinance01.jpg" class="rounded float-end" alt="..." style={{width:"200px", height:"150px"}} />
                            
                            <p class="rounded float-end">
                                <h5>Trade and Finance</h5>
                                We can offer businesses access to trade finance solutions, such as letters of credit, 
                                export credit insurance, and factoring. Trade finance is the term used to describe the tools, 
                                techniques, and instruments that facilitate trade and protect both buyers and sellers from 
                                trade-related risks. The purpose of trade finance is to make it easier for businesses to transact 
                                with each other. It also helps to reduce the risks involved in global trade, for both buyers and sellers.
                            </p>
                        </div>
                        <div>
                            <img src="src/assets/LogisticandDocumention01.jpg" class="rounded float-start" alt="..." style={{width:"200px", height:"150px"}} />
                            <p class="rounded float-start">
                                <h5>Streamlining Logistics and Documentation</h5>
                                We have the expertise and knowledge to navigate the complex 
                                regulations and requirements that come with exporting goods or services. They can help businesses 
                                save time and money by streamlining the logistics and documentation processes.
                            </p>
                        </div>
                    </div>
                {/* <div className="row">
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
                    
                </div> */}
            </div>
        </React.Fragment>
        
        </>
    )
}
export default ServiceComponent 