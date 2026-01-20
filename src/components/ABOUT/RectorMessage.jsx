import React from 'react';
import { Link } from 'react-router-dom';
import AboutSidebar from './AboutSidebar';

const RectorMessage = () => {
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
                            <span className="text-[#666] font-bold">Rector's Message</span>
                        </div>
                    </div>

                    <main>
                        <h2 className="text-[35px] font-bold text-gray-800 mb-8 tracking-tight font-['Open_Sans']">Rector's Message</h2>

                        <div className="flex gap-16 items-start">
                            {/* Left Content - Text */}
                            <div className="flex-1 text-justify">
                                <div className="space-y-6 text-gray-700 leading-relaxed text-[17px]">
                                    <p>Welcome to the Namal University!</p>
                                    <p>
                                        Namal University, part of the envisioned Namal Knowledge City, is designed to integrate education with employability to enable talented youth to become economically useful and socially robust citizens of Pakistan. Namal University sits on a total of 1,000 acres in Pakistan’s Salt Range in an area comprising of hills and crags overlooking Namal Lake. This area has a high level of biodiversity and is home to several wildlife sanctuaries. The scenic beauty of Namal University is spellbinding.
                                    </p>

                                    <p>
                                        Namal is home to a well-knitted and vibrant community of students, faculty, and staff. A strong value system, based on merit, integrity, tolerance, excellence, commitment & social responsibility is integrated to become a center of excellence. Our student body is diverse with respect to gender, region, socio-economic and educational background. Our faculty is a group of dedicated scholars and teachers whose research expands the boundaries of our knowledge and imagination, and whose teachings prepare students for wide-ranging careers and lifelong learning. Namal University is working on developing strategic links with both academic institutions and industry to foster a culture of collaboration between industry and academia. Namal University offers four undergraduate programs i.e. Electrical Engineering, Computer Science, Mathematics and Bachelors in Business Administration. We believe in sustainability and acquiring excellence in each department is our goal.
                                    </p>

                                    <p>
                                        I thank you for considering the possibility of becoming a part of the Namal family and wish you the best in your endeavors to achieve your dreams.
                                    </p>
                                </div>
                            </div>

                            {/* Right Content - Profile Card */}
                            <div className="w-[340px] flex-shrink-0">
                                <div className="bg-[#f8f9fa] p-8 rounded-[48px] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-gray-200 flex flex-col items-center">
                                    <div className="w-full rounded-[36px] overflow-hidden mb-8 shadow-md bg-gray-100 aspect-[4/5]">
                                        <img
                                            src="/images/ABOUTPAGE/rector.jpg"
                                            alt="Prof. Dr. Muhammad Najam-ul-Islam"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <div className="text-center w-full flex flex-col items-center justify-center">
                                        <h3 className="text-[20px] font-bold text-gray-900 leading-tight mb-1">Prof. Dr. Muhammad Najam-ul-Islam</h3>
                                        <p className="text-gray-500 font-medium text-[16px] mb-1">Rector</p>
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

export default RectorMessage;
