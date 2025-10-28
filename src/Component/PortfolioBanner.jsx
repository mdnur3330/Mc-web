import React from 'react';
import Container from './Container';
import Button from './Button';

const PortfolioBanner = () => {
    return (
        <Container>
            <div className='flex flex-col md:flex-row  justify-between items-end my-12'>
                <div>
                    <h1 className='section-title my-5'>What we’ve built <br /> with our <br /> community</h1>
                    <p>Outcome-focused work from workshops, bootcamps and our incubator. Explore results, process and impacts.</p>
                </div>
                <Button
                label='Start a project'
                className='btn-secondary'
                />
            </div>
        </Container>
    );
};

export default PortfolioBanner;