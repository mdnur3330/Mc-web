import React from 'react';
import Container from './Container';
import TestimonialStats from './TestimonialStats';

const TestimonialBanner = () => {
    return (
        <section className='bg-secondary'>
            <Container>
                <div>
                    <h1 className='section-title py-10'>Real people, <br /> real growth</h1>
                </div>
                <TestimonialStats />
            </Container>
        </section>
    );
};

export default TestimonialBanner;