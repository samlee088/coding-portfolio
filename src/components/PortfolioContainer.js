import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './pages/Footer';


export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Portfolio') {
            return < Portfolio />;
        }
        if (currentPage === 'Resume') {
            return < Resume />;
        }
        return <Contact />;
    };

    
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div class="d-flex flex-column justify-content-between" style={{height:"100vh"}}>
        <div>
          <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
          {renderPage()}
        </div>
          < Footer />
        </div>
      );
}

