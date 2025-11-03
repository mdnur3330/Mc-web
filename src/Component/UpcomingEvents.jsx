import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CalendarDays, UsersRound, ChevronLeft, ChevronRight } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Freelancing for Beginners",
    category: "Freelancing Basics, How-to",
    type: "Bootcamp",
    desc: "Before spending hundreds of dollars, you need to know if you’re ready/capable.",
    date: "Nov 15-17",
    oldPrice: "Bdt 3,000",
    price: "Bdt 2,400",
    seats: 5,
    attendees: 20,
    image:
      "https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    title: "UpWork Income Strategy",
    category: "Upwork Strategy, Marketplace",
    type: "Bootcamp",
    desc: "You need to know how to spend on Upwork through connects and boosting.",
    date: "Nov 15-17",
    oldPrice: "Bdt 3,000",
    price: "Bdt 2,400",
    seats: 5,
    attendees: 20,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    title: "Join our Business Incubator",
    category: "Upwork Strategy, Marketplace",
    type: "Bootcamp",
    desc: "Incubator Program for Startups is a place where you develop your business strategies with experts.",
    date: "Nov 15-17",
    oldPrice: "Bdt 3,000",
    price: "Bdt 2,400",
    seats: 5,
    attendees: 20,
    image:
      "https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    title: "Join our Business Incubator",
    category: "Upwork Strategy, Marketplace",
    type: "Bootcamp",
    desc: "Incubator Program for Startups is a place where you develop your business strategies with experts.",
    date: "Nov 15-17",
    oldPrice: "Bdt 3,000",
    price: "Bdt 2,400",
    seats: 5,
    attendees: 20,
    image:
      "https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    title: "Join our Business Incubator",
    category: "Upwork Strategy, Marketplace",
    type: "Bootcamp",
    desc: "Incubator Program for Startups is a place where you develop your business strategies with experts.",
    date: "Nov 15-17",
    oldPrice: "Bdt 3,000",
    price: "Bdt 2,400",
    seats: 5,
    attendees: 20,
    image:
      "https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    title: "Join our Business Incubator",
    category: "Upwork Strategy, Marketplace",
    type: "Bootcamp",
    desc: "Incubator Program for Startups is a place where you develop your business strategies with experts.",
    date: "Nov 15-17",
    oldPrice: "Bdt 3,000",
    price: "Bdt 2,400",
    seats: 5,
    attendees: 20,
    image:
      "https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    title: "Startup Accelerator",
    category: "Growth, Mentorship",
    type: "Bootcamp",
    desc: "Learn from mentors, refine your pitch, and prepare to scale your startup.",
    date: "Dec 1-5",
    oldPrice: "Bdt 4,000",
    price: "Bdt 3,000",
    seats: 5,
    attendees: 30,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=60",
  },
];

export default function UpcomingEvents() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* subtle gradient background */}
      <div className="absolute inset-0"></div>

      <div className="container mx-auto px-6 relative">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-12 tracking-wide">
          Upcoming <span className="text-[#00C4CC]">Events</span>
        </h2>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={1500}
            spaceBetween={25}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {events.map((event) => (
              <SwiperSlide key={event.id}>
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:scale-[1.03] hover:shadow-[#00C4CC]/30">
                  <div className="relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-36 object-cover opacity-90"
                    />
                    <span className="absolute bottom-3 left-3 bg-[#00C4CC]/90 text-white font-medium text-xs px-3 py-1 rounded-full shadow-lg backdrop-blur-md">
                      👥 {event.seats} seats left
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs uppercase bg-[#00C4CC]/20 text-[#00C4CC] px-3 py-1 rounded-full font-semibold tracking-wide">
                        {event.type}
                      </span>
                      <p className="text-sm text-gray-300">
                        {event.category.length > 15
                          ? event.category.slice(0, 15) + "..."
                          : event.category}
                      </p>
                    </div>

                    <h3 className="text-lg font-semibold text-white">
                      {event.title}
                    </h3>
                    <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                      {event.desc.length > 90
                        ? event.desc.slice(0, 90) + "..."
                        : event.desc}
                    </p>

                    <div className="flex items-center justify-between text-gray-300 text-sm mt-5 border-t border-white/10 pt-3">
                      <div className="flex items-center gap-2">
                        <CalendarDays
                          size={18}
                          className="text-[#00C4CC]"
                          strokeWidth={1.8}
                        />
                        <span>{event.date}</span>
                      </div>

                      <div className="text-right">
                        <p className="text-gray-400 line-through text-xs">
                          {event.oldPrice}
                        </p>
                        <p className="text-[#00C4CC] text-lg font-semibold">
                          {event.price}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <UsersRound
                          size={18}
                          className="text-[#00C4CC]"
                          strokeWidth={1.8}
                        />
                        <span>{event.attendees}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="custom-prev absolute -left-6 md:-left-10 top-1/2 -translate-y-1/2 bg-white/10 border border-[#00C4CC]/30 text-[#00C4CC] hover:bg-[#00C4CC] hover:text-white rounded-full p-3 backdrop-blur-md shadow-lg transition-all duration-300 z-10">
            <ChevronLeft size={22} />
          </button>
          <button className="custom-next absolute -right-6 md:-right-10 top-1/2 -translate-y-1/2 bg-white/10 border border-[#00C4CC]/30 text-[#00C4CC] hover:bg-[#00C4CC] hover:text-white rounded-full p-3 backdrop-blur-md shadow-lg transition-all duration-300 z-10">
            <ChevronRight size={22} />
          </button>

          <div className="custom-pagination mt-6 flex justify-center gap-2"></div>
        </div>
      </div>

      <style jsx>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background-color: rgba(255, 255, 255, 0.3);
          opacity: 1;
          transition: all 0.3s ease;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background-color: #00c4cc;
          transform: scale(1.3);
        }
      `}</style>
    </section>
  );
}
