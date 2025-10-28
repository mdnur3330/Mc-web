import Programs from '../Component/Programs';
import TestimonialBanner from '../Component/TestimonialBanner';
import TestimonialCallToAction from '../Component/TestimonialCallToAction';
import TextTestimonial from '../Component/TextTestimonial';
import VedioTestimonial from '../Component/VedioTestimonial';

const Testimonial = () => {
    return (
        <div>
            <TestimonialBanner />
            <TextTestimonial />
            <VedioTestimonial />
            <Programs />
            <TestimonialCallToAction />
        </div>
    );
};

export default Testimonial;