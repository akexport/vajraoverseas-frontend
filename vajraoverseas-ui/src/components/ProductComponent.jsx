import React from "react";

const ProductComponent = () => {
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
                            <img src="src/assets/VajraHome3.png" className="card-img-top" alt="..." style={{width:"100px", height:"100px"}} />
                            <h5 className="card-title">Product-1 Kabuli Channa Image</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div></div>
                        <div className="col-sm"><div className="card" >
                            <img src="src/assets/VajraHome3.png" className="card-img-top" alt="..." style={{width:"100px", height:"100px"}} />
                            <h5 className="card-title">Product-2 Tomato and Mango Image</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div></div>
                        <div className="col-sm"><div className="card" >
                            <img src="src/assets/VajraHome3.png" className="card-img-top" alt="..." style={{width:"100px", height:"100px"}} />
                            <h5 className="card-title">Product-3 D-Oiled Cakes image</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div></div>
                        <div className="col-sm"><div className="card" >
                            <img src="src/assets/VajraHome3.png" className="card-img-top" alt="..." style={{width:"100px", height:"100px"}} />
                            <h5 className="card-title">Product-4 DryFruits Image</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div></div>
                    </div>
                </div>
            </React.Fragment>
        
        </>
    )
}
export default ProductComponent