import React from 'react';
import { ChevronDown } from 'lucide-react';

const NamalHomepage = () => {
  const newsItems = [
    {
      date: { month: "DEC", day: "31" },
      title: "Students Secure Top Positions at ROBO FIESTA 8.0",
      image: "/images/img4.webp"
    },
    {
      date: { month: "DEC", day: "26" },
      title: "Bridging Classroom and Industry: Inspiring PCB Design Session",
      image: "/images/img5.webp"
    },
    {
      date: { month: "DEC", day: "24" },
      title: "Alumni Talk Series: From Graduation to Design Verification Engineer",
      image: "/images/img6.webp"
    },
    {
      date: { month: "DEC", day: "23" },
      title: "Building Better Learning through Purposeful Teaching & Assessment",
      image: "/images/img7.webp"
    }
  ];

  const eventsData = [
    {
      date: { month: "DEC", day: "12" },
      title: "Namal University Hosts 4th Agribusiness Forum 2025 on Next-Gen Sustainable Agriculture",
      image: "/images/event1.jpg"
    },
    {
      date: { month: "DEC", day: "08" },
      title: "Codex 3.0: A National Tech Competition at Namal University",
      image: "/images/event2.jpg"
    },
    {
      date: { month: "DEC", day: "04" },
      title: "3rd Convocation of Namal University: Honoring Dreams, Achievements & a Bright Future",
      image: "/images/event3.jpg"
    },
    {
      date: { month: "SEP", day: "26" },
      title: "First Interaction for Class of 2029",
      image: "/images/event4.jpg"
    }
  ];

  return (
    <div className="bg-namal-offwhite">
      {/* Hero Section */}
      <div className="relative h-96 bg-gray-300">
        <img
          src="/images/namal.webp"
          alt="Namal University Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
      </div>

      {/* Explore Namal Section */}
      <div className="bg-yellow-400 py-4 text-center">
        <button className="flex items-center justify-center gap-2 mx-auto text-white text-2xl font-bold">
          Explore Namal
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>

      {/* Three Pillars Section */}
      <div className="grid grid-cols-3">
        {/* People - Social */}
        <div className="relative h-[550px] bg-pink-400 overflow-hidden group">
          <img
            src="/images/img1.jpg"
            alt="People"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 p-12 flex flex-col justify-between">
            <div>
              <h2 className="text-5xl font-bold text-white mb-2">PEOPLE</h2>
              <p className="text-xl text-white font-semibold">Social</p>
            </div>
            <p className="text-white leading-relaxed">
              Social impact is one of the key values at Namal. Students uphold the spirit of giving back to society through various programs of community service, such as blood drives and providing local kids free-of-cost tuition on campus.
            </p>
          </div>
        </div>

        {/* Planet - Environmental */}
        <div className="relative h-[550px] bg-yellow-500 overflow-hidden group">
          <img
            src="/images/img2.jpg"
            alt="Planet"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 p-12 flex flex-col justify-between">
            <div>
              <h2 className="text-5xl font-bold text-white mb-2">PLANET</h2>
              <p className="text-xl text-white font-semibold">Environmental</p>
            </div>
            <p className="text-white leading-relaxed">
              Our goal is to become a leading practitioner of environmental sustainability and instilling this value amongst our students. We do so by ensuring the use of renewable energy resources and recycling waste.
            </p>
          </div>
        </div>

        {/* Profit - Economic */}
        <div className="relative h-[550px] bg-teal-500 overflow-hidden group">
          <img
            src="/images/img3.jpg"
            alt="Profit"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 p-12 flex flex-col justify-between">
            <div>
              <h2 className="text-5xl font-bold text-white mb-2">PROFIT</h2>
              <p className="text-xl text-white font-semibold">Economic</p>
            </div>
            <p className="text-white leading-relaxed">
              Our students are trained to practically utilize the knowledge acquired during their studies as well as entrepreneurial skills to eventually gain the skills needed to run their own successful business.
            </p>
          </div>
        </div>
      </div>

      {/* News Section */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">NEWS</h2>
          <p className="text-2xl text-center text-gray-600 mb-12">Latest From Namal</p>

          <div className="grid grid-cols-4 gap-6">
            {newsItems.map((news, idx) => (
              <div key={idx} className="bg-white rounded-sm shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group flex flex-col h-full">
                <div className="relative">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlapping Date Block from Image 2 */}
                  <div className="absolute bottom-4 left-4 bg-[#333333] text-white px-3 py-2 shadow-2xl z-10 text-center min-w-[75px] border-b-2 border-yellow-500">
                    <div className="text-[28px] font-bold leading-none">{news.date.day}</div>
                    <div className="text-[12px] font-bold uppercase tracking-widest">{news.date.month}</div>
                    <div className="text-[12px] font-bold opacity-90">2025</div>
                  </div>
                </div>
                <div className="p-6 pt-10 flex-1 flex flex-col justify-start">
                  <div className="text-namal-yellow font-bold text-lg mb-2">News</div>
                  <h3 className="text-[20px] font-bold text-gray-900 leading-[1.3] group-hover:text-yellow-600 transition-colors">
                    {news.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* More News Button */}
      <div className="py-8 bg-gray-50 text-center">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 px-12 text-lg transition-colors">
          More News
        </button>
      </div>

      {/* Events Section */}
      <div className="py-16 px-4 bg-gray-800 text-white">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">EVENTS</h2>
          <p className="text-2xl text-center text-gray-300 mb-12">What's Happening at Namal?</p>

          <div className="grid grid-cols-4 gap-6 mb-8">
            {eventsData.map((event, idx) => (
              <div key={idx} className="bg-white rounded-sm shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group flex flex-col h-full">
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlapping Date Block from Image 2 */}
                  <div className="absolute bottom-4 left-4 bg-[#333333] text-white px-3 py-2 shadow-2xl z-10 text-center min-w-[75px] border-b-2 border-yellow-500">
                    <div className="text-[28px] font-bold leading-none">{event.date.day}</div>
                    <div className="text-[12px] font-bold uppercase tracking-widest">{event.date.month}</div>
                    <div className="text-[12px] font-bold opacity-90">2025</div>
                  </div>
                </div>
                <div className="p-6 pt-10 flex-1 flex flex-col justify-start">
                  <div className="text-namal-yellow font-bold text-lg mb-2">
                    {idx === 1 ? 'Workshop' : 'Event'}
                  </div>
                  <h3 className="text-[20px] font-bold text-gray-900 leading-[1.3] group-hover:text-yellow-600 transition-colors">
                    {event.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 px-12 text-lg transition-colors">
              More Events
            </button>
          </div>
        </div>
      </div>

      {/* Academics Section */}
      <div className="py-16 px-4 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">ACADEMICS</h2>
          <p className="text-2xl text-center text-gray-600 mb-12">Programmes at Namal</p>

          <div className="grid grid-cols-4 gap-6">
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/images/ac1.jpg"
                  alt="Electrical Engineering"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-center mt-4 text-gray-800">
                B.S. Electrical Engineering
              </h3>
            </div>

            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/images/ac2.jpg"
                  alt="Computer Science"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-center mt-4 text-gray-800">
                B.S. Computer Science
              </h3>
            </div>

            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/images/ac3.jpg"
                  alt="Business Administration"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-center mt-4 text-gray-800">
                Business Administration
              </h3>
            </div>

            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/images/ac4.jpg"
                  alt="Mathematics"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-center mt-4 text-gray-800">
                B.S. Mathematics
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Admissions Section with Video */}
      <div className="relative bg-black text-white">
        <div className="grid grid-cols-2">
          {/* Left Side - Stats */}
          <div className="p-16 flex flex-col justify-center">
            <h2 className="text-6xl font-bold mb-2 tracking-tight">ADMISSIONS</h2>
            <p className="text-xl mb-12 text-gray-300">What Makes Namal A Great Choice?</p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="text-yellow-400 text-5xl">🎓</div>
                <div>
                  <p className="text-4xl font-bold text-yellow-400">90%+</p>
                  <p className="text-base text-gray-300">Students on Scholarship</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-yellow-400 text-5xl">📊</div>
                <div>
                  <p className="text-4xl font-bold text-yellow-400">1:12</p>
                  <p className="text-base text-gray-300">Teacher To Students Ratio</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-yellow-400 text-5xl">⚖️</div>
                <div>
                  <p className="text-4xl font-bold text-yellow-400">70+ Districts</p>
                  <p className="text-base text-gray-300">Students Diversity</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-yellow-400 text-5xl">💼</div>
                <div>
                  <p className="text-4xl font-bold text-yellow-400">90%+</p>
                  <p className="text-base text-gray-300">Graduate Employment Rate</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Video */}
          <div className="relative h-full min-h-[600px]">
            <video
              src="/images/vd1.mp4"
              controls
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
            >
              <source src="/images/vd1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute top-8 left-8 text-left">
              <p className="text-yellow-400 text-3xl font-bold tracking-wide">Campus Jobs</p>
              <p className="text-white text-xl font-semibold">Work-study Program</p>
            </div>
          </div>
        </div>
      </div>

      {/* Research Section */}
      <div className="bg-gray-700 text-white py-16 text-center">
        <h2 className="text-5xl font-bold mb-4">RESEARCH</h2>
        <p className="text-2xl mb-8">Diversity, Community, Sustainability, Excellence...</p>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 px-12 text-lg transition-colors">
          More About Research
        </button>
      </div>
    </div>
  );
};

export default NamalHomepage;