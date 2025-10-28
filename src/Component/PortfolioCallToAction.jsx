import Container from './Container';
import Button from './Button';

const PortfolioCallToAction = () => {
    return (
        <Container>
            <div className='text-center py-12'>
                <h2 className='section-title my-4'>Interested in similiar <br /> project?</h2>
                <Button
                label='Contact us'
                className='btn-secondary'
                />
            </div>
        </Container>
    );
};

export default PortfolioCallToAction;