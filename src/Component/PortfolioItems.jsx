
import { Link } from "react-router";
import shawarmaImg from "../assets/Portfolio.png"; 
import Container from "./Container";

const cards = new Array(6).fill(0).map((_, i) => ({
  id: i + 1,
  title: "Redesign a fintech dashboard",
  subtitle: "Increased task completion by 28% with clearer workflows",
  tag1: "Business",
  tag2: "Work",
  image: shawarmaImg,
}));

export default function PortfolioItems() {
  return (
    <Container>
      <section className="my-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cards.map((c) => (
          <Link to={"/portfolio-details"}> 
          <article
            key={c.id}
            className="overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
          >
            {/* Image Section */}
            <div className="h-64 overflow-hidden">
              <img
                src={c.image}
                alt={c.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="p-5 bg-secondary">
              <div className="flex items-center gap-3 text-sm text-secondary mb-2">
                <p>{c.tag1}</p>
                <span>{c.tag2}</span>
              </div>

              <h3 className="text-base font-semibold mb-1">
                {c.title}
              </h3>
              <p className="text-sm text-secondary">{c.subtitle}</p>
            </div>
          </article>
          </Link>
        ))}
      </div>
    </section>
    </Container>
    
  );
}

