import React from 'react';


function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav class="navbar sticky-top navbar-expand-lg p-3 bg-light" >
        <div class="container-fluid">
        <h3 class="navbar-dark">Samuel Lee</h3>
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item active">
                    <a
                    href="#home"
                    id="pills-home-tab" 
                    data-toggle="pill"
                    role="tab"
                    aria-controls="pills-home"
                    onClick={() => handlePageChange('Home')}
                    className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                    >
                    Home
                    </a>
                </li>
                <li className="nav-item">
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
  );
}

export default NavTabs;


