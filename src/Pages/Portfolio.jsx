import React from 'react';
import PortfolioItems from '../Component/PortfolioItems';
import PortfolioBanner from '../Component/PortfolioBanner';
import Stats from '../Component/Stats';
import PortfolioDetails from '../Component/PortfolioDetails';

const Portfolio = () => {
    return (
        <div>
            <PortfolioBanner />
            <PortfolioItems />
            <Stats />
        </div>
    );
};

export default Portfolio;