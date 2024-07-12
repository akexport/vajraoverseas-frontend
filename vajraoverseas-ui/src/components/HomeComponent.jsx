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
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
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