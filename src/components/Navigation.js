import React, { useState } from 'react';
import Header from './Header';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './pages/Footer';


export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');
    const [transition, setTransition] = useState({
        Contact: false, Portfolio: false, Resume: false, About: true
    })

    const renderPage = () => {
        if (currentPage === 'Contact') {
            return <Contact transition={transition}/>;
        }
        if (currentPage === 'Portfolio') {
            return < Portfolio transition={transition}/>;
        }
        if (currentPage === 'Resume') {
            return < Resume transition={transition}/>;
        }
        return <About transition={transition}/>;
    };
    
    const handlePageChange = (page) => {
        const newTransition = {Contact: false, Portfolio: false, Resume: false, About: false, [page]: true}
        console.log(newTransition)
        setTransition(newTransition)
        setCurrentPage(page);
    }

    return (
        <div className="d-flex flex-column justify-content-between" style={{height:"100vh"}}>
            <div>
                <Header currentPage={currentPage} handlePageChange={handlePageChange} />
                {renderPage()}
            </div>
                < Footer />
        </div>
      );
}

