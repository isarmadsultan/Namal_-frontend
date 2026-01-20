import React from 'react';
import { Link } from 'react-router-dom';
import AboutSidebar from './AboutSidebar';

const CoreValues = () => {
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
                            <span className="text-[#666] font-bold">Core Values</span>
                        </div>
                    </div>

                    <main>
                        <h2 className="text-[35px] font-bold text-gray-800 mb-8 tracking-tight font-['Open_Sans']">Core Values</h2>

                        {/* Hexagon Grid */}
                        <div className="max-w-5xl mx-auto py-12">
                            <div className="relative">
                                {/* Row 1 - 5 hexagons */}
                                <div className="flex justify-center mb-[-30px]">
                                    <div className="flex gap-4">
                                        <Hexagon text="Merit" dark={false} />
                                        <Hexagon text="Integrity" dark={false} />
                                        <Hexagon text="" dark={true} />
                                        <Hexagon text="Tolerance" dark={false} />
                                        <Hexagon text="Excellence" dark={false} />
                                    </div>
                                </div>

                                {/* Row 2 - 4 hexagons (offset) */}
                                <div className="flex justify-center ml-32">
                                    <div className="flex gap-4">
                                        <Hexagon text="" dark={true} />
                                        <Hexagon text="Commitment" dark={false} />
                                        <Hexagon text="Social Responsibility" dark={false} />
                                        <Hexagon text="" dark={true} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mission Statement */}
                        <div className="max-w-4xl mx-auto text-center mt-16">
                            <p className="text-2xl font-bold text-gray-800 leading-relaxed font-['Open_Sans']">
                                It is part of the University's mission to produce technically proficient individuals who are true demonstrators of these values.
                            </p>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

// Hexagon Component
const Hexagon = ({ text, dark }) => {
    return (
        <div className="relative w-40 h-44">
            <svg viewBox="0 0 100 110" className="w-full h-full">
                <polygon
                    points="50,5 90,30 90,75 50,100 10,75 10,30"
                    className={`${dark ? 'fill-gray-800' : 'fill-gray-300'} stroke-white stroke-2`}
                />
            </svg>
            {text && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className={`text-lg font-bold text-center px-4 ${dark ? 'text-white' : 'text-gray-800'} whitespace-pre-line font-['Open_Sans']`}>
                        {text}
                    </span>
                </div>
            )}
        </div>
    );
};

export default CoreValues;