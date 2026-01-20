import React from 'react';
import { Link } from 'react-router-dom';
import AboutSidebar from './AboutSidebar';

const ChairmanMessage = () => {
    return (
        <div className="min-h-screen bg-[#f8f9fa] font-sans">
            <div className="max-w-[1400px] mx-auto pt-16 px-12 pb-24 flex gap-12">
                {/* Left Sidebar Column */}
                <aside className="w-72 flex-shrink-0">
                    <div className="border-b-[1px] border-gray-200 pb-2 mb-8">
                        <h1 className="text-[30px] font-bold text-[#707070] tracking-tight font-['Open_Sans'] uppercase">ABOUT</h1>
                    </div>
                    <AboutSidebar />
                </aside>

                {/* Main Content Column */}
                <div className="flex-1">
                    {/* Breadcrumbs Header */}
                    <div className="border-b-[1px] border-gray-200 pb-2 mb-8">
                        <div className="flex items-center gap-2 text-[15px] font-medium font-['Open_Sans']">
                            <Link to="/" className="text-gray-400 hover:text-yellow-500 transition-colors">Home</Link>
                            <span className="text-gray-300 text-[12px]">›</span>
                            <Link to="/about" className="text-gray-400 hover:text-yellow-500 transition-colors">About</Link>
                            <span className="text-gray-300 text-[12px]">›</span>
                            <span className="text-[#666] font-bold">Chairman's Message</span>
                        </div>
                    </div>

                    <main>
                        <h2 className="text-[35px] font-bold text-gray-800 mb-8 tracking-tight font-['Open_Sans']">Chairman's Message</h2>

                        <div className="flex gap-16 items-start">
                            {/* Left Content - Text */}
                            <div className="flex-1 text-justify">
                                <div className="space-y-6 text-gray-700 leading-relaxed text-[17px]">
                                    <p>
                                        If we are to have a balanced society, people must be provided with equal opportunities to grow and prosper in life. Availability of quality higher education creates such opportunities. If we make higher education available and affordable for our talented youth, it will lay the foundation for a vibrant and growing society enabling us to stand amongst the leading nations. Namal University Mianwali is exactly that kind of equal opportunity for the marginalized rural youth. I am under no illusion that it is a huge challenge to set up a center of excellence in such a remote location. It will require huge amount of funds to make it a university of international standards.
                                    </p>

                                    <p>
                                        I want to see more than half of the students in the university coming from less privileged backgrounds benefiting through scholarships, who, in our present elitist education system, cannot dream of having access to high quality education. With a diverse student body, majority of them being supported through financial assistance, increasing number of PhD faculty members and encouraging response from the employers of our graduates, Namal University is moving rapidly towards our vision of becoming a centre of academic excellence in the region for rural development. Success of this Namal University is the first milestone in our eventual goal of creating the largest Knowledge City of Pakistan in Namal.
                                    </p>

                                    <p>
                                        The establishment of Namal Knowledge City brings the vision of a sustainable Pakistan one step closer. Under the multidisciplinary Namal Knowledge City, students will become tomorrow's leaders.
                                    </p>
                                </div>
                            </div>

                            {/* Right Content - Profile Card */}
                            <div className="w-[340px] flex-shrink-0">
                                <div className="bg-[#f8f9fa] p-8 rounded-[48px] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-gray-200 flex flex-col items-center">
                                    <div className="w-full rounded-[36px] overflow-hidden mb-8 shadow-md bg-gray-100 aspect-[4/5]">
                                        <img
                                            src="/images/ABOUTPAGE/Chaiman.jpg"
                                            alt="Imran Khan"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <div className="text-center w-full flex flex-col items-center justify-center">
                                        <h3 className="text-[20px] font-bold text-gray-900 mb-1">Imran Khan</h3>
                                        <p className="text-gray-500 font-medium text-[16px] mb-1">Chairman</p>
                                        <p className="text-gray-800 font-medium text-[16px]">Namal University, Mianwali</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default ChairmanMessage;