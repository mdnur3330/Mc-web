import Container from "./Container";

const ServiceBanner = () => {
    return (
        <section className='bg-secondary pt-8 pb-16'>
            <Container>
                <h1 className='section-title text-center my-5'>Choose your growth <br /> path.</h1>
                <p className='text-center font-bold'>
                    Whether you’re here to sharpen skills, launch a career, or build a business—our <br /> programs are designed to guide you every step of the way.
                </p>
            </Container>
        </section>
    );
};

export default ServiceBanner;