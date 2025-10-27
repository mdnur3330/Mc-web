import React from 'react';
import Container from './Container';
import Button from './Button';

const CallToAction = () => {
    return (
        <section className='bg-tertiary py-20'>
            <Container>
                <div className='flex justify-between items-end'>
                    <h3 className='text-xl md:text-2xl font-bold'>START YOUR <br /> JOURNEY TODAY</h3>
                    <Button 
                    label='Explore program'
                    className='btn-secondary'
                    />
                </div>
            </Container>
        </section>
    );
};

export default CallToAction;