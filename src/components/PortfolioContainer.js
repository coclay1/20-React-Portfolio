import React, { useState } from "react";
import Navigation from './Navigation'
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
import Footer from './Footer'
import Header from './Header'

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About')
    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />
        }
        // if (currentPage === 'Contact') {
        //     return <Contact />
        // }
        if (currentPage === 'Portfolio') {
            return <Portfolio />
        }
        if (currentPage === 'Resume') {
            return <Resume />
        }
    };
    const handlePageChange = (page) => setCurrentPage(page)

    return (
        <div>
            <Header >
            </Header>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}

            <Footer />
        </div>
    )
}