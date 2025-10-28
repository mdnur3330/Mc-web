import logo from '../assets/Portfolio.png'
import Container from './Container';
import PortfolioCallToAction from './PortfolioCallToAction';
const PortfolioDetails = () => {
  return (
    <Container>
        <div className="my-12 grid grid-cols-1 lg:grid-cols-4 gap-7">
      {/* Main Content */}
      <div className="lg:col-span-3 space-y-12">
        {/* Header */}
        <div className="space-y-6">
          <img
            src={logo}
            alt="Project banner"
            className="w-full shadow-md"
          />
          <div>
            <p className="text-sm text-gray-500 mb-2">Portfolio — Work</p>
            <h1 className="text-3xl font-semibold text-gray-900">
              Redesign a fintech dashboard
            </h1>
          </div>
        </div>

        {/* Overview */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-900">Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            Altsuit partnered with MaisonClass Agency to achieve vibrant, sharper
            positioning, and build a digital design system for a modern fintech
            platform. Blending discovery workshops, sharp design direction, and
            results-driven experience.
          </p>
        </div>

        {/* Objectives */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-900">Objectives</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "UI Design",
              "UX Design",
              "Brand Identity",
              "Design System",
              "Prototyping",
            ].map((item) => (
              <span
                key={item}
                className="bg-gray-100 px-4 py-1 rounded-full text-sm text-gray-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Approach */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-900">Approach</h2>
          <p className="text-gray-700 leading-relaxed">
            Altsuit collaborated with MaisonClass Agency to enhance alignment,
            sharpen positioning, and build a scalable design system. The process
            involved iterative discovery workshops, stakeholder interviews, and
            design explorations across multiple experiments.
          </p>

          {/* Workshops */}
          <div className="space-y-3">
            {[1, 2, 3, 4].map((week) => (
              <div
                key={week}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition"
              >
                <h3 className="font-semibold text-gray-800">
                  Week {week}: Discovery Workshop
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Outcome: Direction clarity, prototyping, and 2 FGD interviews.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Artifact Section */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Artifact</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-gray-200 h-48 rounded-lg flex items-center justify-center text-gray-500"
              >
                Image {i}
              </div>
            ))}
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-900">Results</h2>
          <div className="flex gap-2 md:gap-4">
            {[
              { label: "Results", value: "7/10" },
              { label: "Conversion lift", value: "24%" },
              { label: "NPS score", value: "83" },
            ].map((item) => (
              <div
                key={item.label}
                className="p-6 text-center shadow-sm"
              >
                <h3 className="text-2xl font-bold text-gray-900">
                  {item.value}
                </h3>
                <p className="text-sm text-gray-500 mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <aside className="space-y-8 bg-secondary p-5">
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-900 text-lg">Company</h3>
          <p className="text-gray-700 text-sm">MaisonClass</p>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-gray-900 text-lg">Industry</h3>
          <p className="text-gray-700 text-sm">Fintech</p>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-gray-900 text-lg">Speed</h3>
          <p className="text-gray-700 text-sm">8 Weeks</p>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-gray-900 text-lg">Trend</h3>
          <p className="text-gray-700 text-sm">Neubrutalism</p>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-gray-900 text-lg">Team</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>Vivian Chow</li>
            <li>Sam Lee</li>
            <li>James Park</li>
            <li>Emma Chen</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-gray-900 text-lg">Deliverables</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>Design System</li>
            <li>Prototyping</li>
            <li>Stakeholder alignment</li>
          </ul>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <p className="text-gray-500 text-sm">
            Interested in similar fintech redesign projects?  
            <a href="#" className="text-blue-600 hover:underline">
              Get in touch →
            </a>
          </p>
        </div>
      </aside>
    </div>
    <PortfolioCallToAction />
    </Container>
    
  );
};

export default PortfolioDetails;
