import { Link } from "react-router";
import flogo from "../assets/fLogo.png"
import Container from './Container';
import { Facebook, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary py-16 text-white">
      <Container>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="space-y-4">
            <img src={flogo} alt="" />
            <div className="flex gap-4">
              <Link><Linkedin color="gray" size={30}/> </Link>
              <Link><Twitter color="gray" size={30}/> </Link>
              <Link><Facebook color="gray" size={30}/></Link>
            </div>
            <p className="text-secondary">
              © 2025 Masterclass. <br />
               All right reserved
            </p>
          </div>
          <div className="flex gap-16 my-5 md:my-0">
            <div className="md:text-xl">
              <h5 className="text-secondary">Training</h5>
              <ul className="space-y-5 mt-3">
                <li><Link>Incubator</Link> </li>
                <li><Link>Bootcamp</Link> </li>
                <li><Link>Workshop</Link> </li>
              </ul>
            </div>
            <div className="md:text-xl">
              <h5 className="text-secondary">Training</h5>
              <ul className="space-y-5 mt-3">
                <li><Link>Incubator</Link> </li>
                <li><Link>Bootcamp</Link> </li>
                <li><Link>Workshop</Link> </li>
                <li><Link>Bootcamp</Link> </li>
              </ul>
            </div>
            <div className="md:text-xl">
              <h5 className="text-secondary">Training</h5>
              <ul className="space-y-5 mt-3">
                <li><Link>Workshop</Link> </li>
                <li><Link>Incubator</Link> </li>
                <li><Link>Bootcamp</Link> </li>
                <li><Link>Workshop</Link> </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-6 mt-4">
          <h1 className="section-title py-6">Masterclass</h1>
          <p>BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-EXPERIMENT-BEYOND-BRILLIANT-</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;