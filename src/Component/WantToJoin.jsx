import React from 'react';
import Container from './Container';
import Button from './Button';
import MarqueeText from './MarqueeText';

const WantToJoin = () => {
    return (
        <Container>
            <section className='my-22 text-center space-y-9'>
                <h2 className='section-title '>WANT TO JOIN <br /> WITH US?</h2>
            <Button 
            label='View open positions'
            className='btn-secondary'
            />
            <div className='mt-12 border-t py-5'>
                <MarqueeText>
                    BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-
                </MarqueeText>
            </div>
            </section>
        </Container>
    );
};

export default WantToJoin;