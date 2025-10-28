import React from 'react';
import Container from './Container';
import Button from './Button';
import { Link } from 'react-router';

const TestimonialCallToAction = () => {
    return (
        <Container>
            <div className='py-12 my-16 text-center border-y'>
                <h2 className='section-title'>Ready to become our next success story?</h2>
                <div className='flex gap-6 justify-center items-center my-5'>
                    <Button
                    label='View programs'
                    className='btn-secondary'
                    />
                    <Link className='px-3 py-1.5 border rounded-full font-bold hover:bg-black hover:text-white'>Enrol Now</Link>
                </div>
            </div>
        </Container>
    );
};

export default TestimonialCallToAction;