import React from 'react';
import { Link } from 'react-router-dom';
import AboutSidebar from './AboutSidebar';

const VisionMission = () => {
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
                            <span className="text-[#666] font-bold">Vision And Mission</span>
                        </div>
                    </div>

                    <main>
                        <h2 className="text-[35px] font-bold text-gray-800 mb-8 tracking-tight font-['Open_Sans']">Vision & Mission</h2>

                        <div className="max-w-4xl text-justify">
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-[18px] font-bold text-gray-900 mb-6 leading-relaxed">
                                        To become a center of academic excellence for national uplift and development through:
                                    </h3>
                                    <ul className="list-disc list-outside ml-6 space-y-2 text-[17px] text-gray-700 leading-relaxed">
                                        <li className="pl-2">Educating bright youth who have Namal values and will contribute to organizations and community.</li>
                                        <li className="pl-2">Finding innovative solutions to rural challenges by highly trained academics.</li>
                                    </ul>
                                </div>

                                <p className="text-[17px] text-gray-700 leading-relaxed">
                                    Namal University, which is a part of the envisioned Namal Knowledge City, is designed to integrate education with employability to enable talented youth become economically useful and socially robust citizens of Pakistan. The objective is to equip students with necessary academic knowledge and requisite professional skills by establishing a collaborative framework of public as well as private partnerships. Namal Education Foundation and Namal University is working on developing strategic links with both academic institutions and industry to foster a culture of collaboration between industry and the academia. The idea is to celebrate the interaction of creative, technical and entrepreneurial talent on a common platform to nurture a culture of research and innovation. Through the collaboration of university researchers and companies it is hoped that important milestones may be achieved in response to the specific needs of industry.
                                </p>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default VisionMission;
