import React from 'react'

function HomeComponent() {
    return (
        <>
            <React.Fragment>
                <h1 className='text-center text-danger text-capitalize my-5'> Welcome to Vajra Overseas</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-sm"><div class="card" >
                            <img src="https://picsum.photos/200/303" class="card-img-top" alt="..." height="200px" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div></div>
                        <div className="col-sm"><div class="card" >
                            <img src="https://picsum.photos/201/300" class="card-img-top" alt="..." height="200px" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div></div>
                        <div className="col-sm"><div class="card" >
                            <img src="https://picsum.photos/200/302" class="card-img-top" alt="..." height="200px" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div></div>
                    </div>
                </div>
            </React.Fragment>

        </>
    )
}

export default HomeComponent;