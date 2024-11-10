import React from 'react'

const HeaderComponent = () => {
  
  return (
    <div>
        <header>
            {/* <nav className='navbar navbar-dark bg-primary'>
                <a className='navbar-brand' href="#"><img className='img-responsive brand' src='./Logo.jpg' /></a>
            </nav> */}
            <nav className='navbar navbar-dark'>
            {/* <div className='px-3 py-2 bg-dark text-white'> */}
            {/* <div className='container d-flex flex-wrap justify-content-end'> */}
                {/* <form className='col-50 col-lg-auto mb-2 mb-lg-20 me-lg-auto'>
                  <input type="search" className='form-control' placeholder="Search..." aria-label="Search" />
                </form> */}
                <div className='container d-flex flex-wrap justify-content-left'>
                  <a href="/" className='nav-link text-secondary'>
                    <svg className='bi d-block mx-auto mb-1' width="24" height="24"><use xlinkHref="#logo"></use></svg>
                    <img className='logo' src='./VajraLogo2.png' />
                  </a>
                </div>
                <div className='container d-flex flex-wrap justify-content-end'>
                  <button type="button" className='btn btn-light text-dark me-2'>Login</button>
                  {/* <button type="button" className='btn btn-primary'>Sign-up</button> */}
                </div>
            {/* </div> */}
              <div className='container justify-content-end'>
                <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>
                  <ul className='nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small'>
                    <li>
                      <a href="/" className='nav-link text-dark'>
                        <svg className='bi d-block mx-auto mb-1' width="24" height="24"><use xlinkHref="#home"></use></svg>
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#" className='nav-link text-dark'>
                        <svg className='bi d-block mx-auto mb-1' width="24" height="24"><use xlinkHref="#grid"></use></svg>
                        Products
                      </a>
                    </li>
                    <li>
                      <a href="/customers" className='nav-link text-dark'>
                        <svg className='bi d-block mx-auto mb-1' width="24" height="24"><use xlinkHref="#people-circle"></use></svg>
                        Customers
                      </a>
                    </li>
                    <li>
                      <a href="/services" className='nav-link text-dark'>
                        <svg className='bi d-block mx-auto mb-1' width="24" height="24"><use xlinkHref="#speedometer2"></use></svg>
                        Services
                      </a>
                    </li>
                    <li>
                      <a href="/add-contact" className='nav-link text-dark'>
                        <svg className='bi d-block mx-auto mb-1' width="24" height="24"><use xlinkHref="#table"></use></svg>
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>  
            {/* </div> */}
            
        </header>
    </div>
  )
}

export default HeaderComponent