import React from 'react';


function Header({ currentPage, handlePageChange}) {
  return (
    <div className="sticky-top"> 
            <nav className="navbar navbar-expand-lg p-3 bg-light" >
                <div className="container-fluid" >
                    <h2 className="navbar-dark animate__animated animate__zoomIn" style={{ textAlign:"Center", fontFamily: "'Source Sans Pro', Helvetica, Arial, sans-serif", color:"#142526", backgroundColor: "#D0CDC0", borderRadius: "10px"}}>
                        Samuel Lee - Software Engineer
                    </h2>

                    <ul className="nav nav-pills mb-3 animate__animated animate__zoomIn" id="pills-tab" role="tablist" >
                        <li className="nav-item active" >
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
                        <li className="nav-item">
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
                        <li className="nav-item">
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
                        <li className="nav-item">
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


