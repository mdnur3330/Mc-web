import Container from "./Container";
import logo from "../assets/plaseHolder.png";
import Button from "./Button";

const Contact = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row gap-7 mb-24">
        <div className="space-y-6 flex-1">
          {/* Contact Form */}
          <div>
            <h2 className="section-title my-5">Get in touch</h2>
            <p>
              Want more info from our Admissions team or interested in <br /> applying
              for a course? Let’s chat.
            </p>
          </div>
          <form className="space-y-4 md:w-5/6">
            <div className="border border-gray-300">
              <input
                type="text"
                placeholder="Full Name"
                className="outline-none p-3 w-full"
              />
            </div>
            <div className="border border-gray-300">
              <input
                type="email"
                placeholder="Email"
                className="outline-none p-3 w-full"
              />
            </div>
            <div className="border border-gray-300">
              <input
                type="number"
                placeholder="Phone"
                className="outline-none p-3 w-full"
              />
            </div>
            <div className="border border-gray-300">
              <select className="outline-none p-3 w-full">
                <option value="">Subject</option>
                <option value="admissions">Admissions</option>
                <option value="courses">Courses</option>
                <option value="support">Support</option>
              </select>
            </div>
            <div>
              <input type="checkbox" className="mr-2" />
              <span>
                By submitting this form, you agree to receive <br />
                <b>Terms & Condition, Privacy policy</b>
              </span>
            </div>
            <div>
              <Button label="Submit"
            className="w-full block text-center btn-secondary"
            />
            </div>
          </form>
        </div>
        {/* Image */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={logo}
            alt="Contact illustration"
            className="w-full h-full"
          />
        </div>
      </div>
    </Container>
  );
};

export default Contact;
