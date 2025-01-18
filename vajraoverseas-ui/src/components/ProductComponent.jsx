import React from "react";

const ProductComponent = () => {
    return(
        <>
        <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-sm"><div className="card" >
                            <img src="src/assets/Products01.png" className="card-img-top" alt="..." height="400px" />              
                        </div></div>
                    </div><br />
                            <img src="src/assets/Product_KabuliChana.png" className="card-img-top" alt="..." style={{width:"200px", height:"200px"}} />
                            <h5 className="card-title">Product-1 Kabuli Channa Image</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                            <img src="src/assets/Product_Sundried01.png" alt="..." style={{width:"200px", height:"150px", padding: 0, position: 'absolute', top: "this.props.top", left: "this.props.left"}} />
                            <h5 className="card-title">Product-2 Tomato and Mango Image</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className="row">
                            
                        {/* <div className="col-sm"><div className="card" >
                            <img src="src/assets/Product_KabuliChana.png" className="card-img-top" alt="..." style={{width:"100%", height:"400px"}} />
                            <h5 className="card-title">Product-1 Kabuli Channa Image</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div></div>
                        <div className="col-sm"><div className="card" >
                            <img src="src/assets/Product_Sundried02.jpg" className="card-img-top" alt="..." style={{width:"100%", height:"400px"}} />
                            <h5 className="card-title">Product-2 Tomato and Mango Image</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div></div>
                        <div className="col-sm"><div className="card" >
                            <img src="src/assets/Product_DryFruits.png" className="card-img-top" alt="..." style={{width:"100%", height:"400px"}} />
                            <h5 className="card-title">Product-3 D-Oiled Cakes image</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div></div>
                        <div className="col-sm"><div className="card" >
                            <img src="src/assets/Product_DryFruits.png" className="card-img-top" alt="..." style={{width:"100%", height:"400px"}} />
                            <h5 className="card-title">Product-4 DryFruits Image</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div></div> */}
                    </div>
                </div>
            </React.Fragment>
        
        </>
    )
}
export default ProductComponent