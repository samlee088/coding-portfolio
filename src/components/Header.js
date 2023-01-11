import React from 'react';

// className=" xyz-nested"
function Header({ currentPage, handlePageChange }) {
  return (
    <div
    xyz="fade small stagger ease-out-back duration-30"
    > 
    
            <nav class="navbar sticky-top navbar-expand-lg p-3 bg-light" >
                <div class="container-fluid" >
                    <h2 class="navbar-dark" className=" xyz-nested" style={{ textAlign:"Center", fontFamily: "'Source Sans Pro', Helvetica, Arial, sans-serif;", color:"#4b2e83", backgroundColor: "#b7a57a", borderRadius: "10px"}}>
                        Samuel Lee - Software Engineer
                    </h2>

                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist" >
                        <li className="nav-item active xyz-nested" >
                            <a
                            href="#about"
                            id="pills-home-tab" 
                            data-toggle="pill"
                            role="tab"
                            aria-controls="pills-home"
                            onClick={() => handlePageChange('About')}
                            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                            >
                            About
                            </a>
                        </li>
                        <li className="nav-item xyz-nested">
                            <a
                            href="#portfolio"
                            id="pills-home-tab" 
                            data-toggle="pill"
                            role="tab"
                            aria-controls="pills-home"
                            onClick={() => handlePageChange('Portfolio')}
                            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                            >
                            Portfolio
                            </a>
                        </li>
                        <li className="nav-item xyz-nested">
                            <a
                            href="#resume"
                            id="pills-home-tab" 
                            data-toggle="pill"
                            role="tab"
                            aria-controls="pills-home"
                            onClick={() => handlePageChange('Resume')}
                            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                            >
                            Resume
                            </a>
                        </li>
                        <li className="nav-item xyz-nested">
                            <a
                            href="#contact"
                            id="pills-home-tab" 
                            data-toggle="pill"
                            role="tab"
                            aria-controls="pills-home"
                            onClick={() => handlePageChange('Contact')}
                            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                            >
                            Contact
                            </a>
                        </li>
                    </ul>
                </div>   
            </nav>  
    </div>
    
    
  );
}

export default Header;


