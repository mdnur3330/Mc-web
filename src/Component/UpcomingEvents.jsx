
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  CalendarDays,
  UsersRound,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

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
    <section className="py-14 relative">
      <div className="container mx-auto px-4 relative">
        <h2 className="section-title text-center mb-10">
          Upcoming Events
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
                <div className="bg-white  overflow-hidden transition-all duration-500">
                  <div className="relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-32 object-cover"
                    />
                    <span className="absolute bottom-3 left-3 bg-secondary font-medium text-sm px-3 py-1 rounded shadow backdrop-blur-sm">
                      👥 {event.seats} seats available
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-semibold uppercase bg-secondary px-3 py-2 rounded">
                        {event.type}
                      </span>
                      <p className="text-xl">
                          {event.category.length > 15
                            ? event.category.slice(0, 15) + "..."
                            : event.category}
                          </p>

                    </div>

                    <h3 className="text-lg font-semibold mt-3">
                      {event.title}
                    </h3>
                    <p className="text-secondary text-sm mt-2 leading-relaxed">
                      {event.desc.length > 90 ? event.desc.slice(0,90)+ "...":event.desc}
                    </p>

                    <div className="flex items-center justify-between text-secondary text-sm mt-4 border-t-3 border-gray-300 pt-3">
                      <div className="flex items-center gap-2">
                        <CalendarDays
                          size={18}
                          className="text-secondary"
                          strokeWidth={1.8}
                        />
                        <span>{event.date}</span>
                      </div>

                      <div className="mt-4 text-right">
                      <p className="text-secondary line-through">
                        {event.oldPrice}
                      </p>
                      <p className="text-lg font-semibold">
                        {event.price}
                      </p>
                    </div>

                      <div className="flex items-center gap-2">
                        <UsersRound
                          size={18}
                          className="text-secondary"
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

          {/* Navigation Arrows (outside) */}
          <button className="custom-prev absolute -left-6 md:-left-10 top-1/2 -translate-y-1/2 bg-white border border-blue-500 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full p-3 shadow-lg transition-all duration-300 z-10">
            <ChevronLeft size={22} />
          </button>
          <button className="custom-next absolute -right-6 md:-right-10 top-1/2 -translate-y-1/2 bg-white border border-blue-500 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full p-3 shadow-lg transition-all duration-300 z-10">
            <ChevronRight size={22} />
          </button>

          {/* ✅ Custom Pagination outside box */}
          <div className="custom-pagination mt-6 flex justify-center gap-2"></div>
        </div>
      </div>

      {/* ✅ Extra Pagination Style */}
      <style jsx>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background-color: #d1d5db; /* gray-300 */
          opacity: 1;
          transition: all 0.3s ease;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background-color: #2563eb; /* blue-600 */
          transform: scale(1.3);
        }
      `}</style>
    </section>
  );
}
