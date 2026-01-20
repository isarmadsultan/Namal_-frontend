import React, { useState } from 'react';

const EEVisionMission = () => {
    const [activeTab, setActiveTab] = useState('vision');

    return (
        <div className="min-h-screen bg-white">
            {/* Main Content Container */}
            <div className="flex">
                {/* Left Sidebar */}
                <aside className="w-80 bg-gray-100 min-h-screen p-8">
                    <h2 className="text-3xl font-bold text-gray-700 mb-8">DEPARTMENTS</h2>

                    {/* Academic Departments */}
                    <div className="mb-8">
                        <h3 className="text-lg font-bold text-gray-800 mb-4">Academic Departments</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-yellow-500 font-semibold hover:text-yellow-600">
                                    Department of Electrical Engineering
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-800">
                                    Department of Computer Science
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-800">
                                    Department of Business Studies
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-800">
                                    Department of Mathematics
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Administrative Departments */}
                    <div className="mb-8">
                        <h3 className="text-lg font-bold text-gray-800 mb-4">Administrative Departments</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-800">
                                    Office of the Registrar
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-800">
                                    Office of the CoE
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-800">
                                    Office of the Treasurer
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-800">
                                    Academic Calendar
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-800">
                                    Student Handbook
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-800">
                                    ORIC
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-800">
                                    Quality Enhancement Cell
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-800">
                                    Placement Center
                                </a>
                            </li>
                        </ul>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1">
                    {/* Breadcrumb */}
                    <div className="bg-gray-50 px-8 py-4 border-b">
                        <div className="flex items-center gap-2 text-gray-600">
                            <a href="#" className="hover:text-gray-800">Home</a>
                            <span>›</span>
                            <a href="#" className="hover:text-gray-800">Departments</a>
                            <span>›</span>
                            <span className="text-gray-800">Department Of Electrical Engineering</span>
                        </div>
                    </div>

                    {/* Hero Section */}
                    <div className="bg-white px-8 py-12">
                        <div className="flex items-center justify-between">
                            <div className="flex-1">
                                <h1 className="text-6xl font-bold text-yellow-400 leading-tight">
                                    DEPARTMENT<br />
                                    OF<br />
                                    ELECTRICAL<br />
                                    ENGINEERING
                                </h1>
                            </div>
                            <div className="flex-1 flex justify-end">
                                <img
                                    src="/api/placeholder/600/300"
                                    alt="Electrical Engineering Icons"
                                    className="w-full max-w-2xl"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Tabs Navigation */}
                    <div className="border-b border-gray-200">
                        <nav className="flex px-8">
                            <a href="#overview" className="px-6 py-4 font-semibold border-b-4 border-transparent text-gray-600 hover:text-gray-800">
                                Overview
                            </a>
                            <button
                                onClick={() => setActiveTab('vision')}
                                className="px-6 py-4 font-semibold border-b-4 border-yellow-400 text-yellow-500"
                            >
                                Vision and Mission
                            </button>
                            <a href="#peos" className="px-6 py-4 font-semibold border-b-4 border-transparent text-gray-600 hover:text-gray-800">
                                PEOs and PLOs
                            </a>
                            <a href="#scheme" className="px-6 py-4 font-semibold border-b-4 border-transparent text-gray-600 hover:text-gray-800">
                                Scheme of Studies
                            </a>
                            <a href="#faculty" className="px-6 py-4 font-semibold border-b-4 border-transparent text-gray-600 hover:text-gray-800">
                                Faculty
                            </a>
                        </nav>
                    </div>

                    {/* Vision Content */}
                    <div className="px-8 py-12">
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">Vision</h2>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            The Electrical Engineering Department aims to become a center of excellence in teaching and application-oriented research.
                        </p>
                    </div>

                    {/* Mission Content */}
                    <div className="px-8 pb-12">
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">Mission</h2>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            To provide quality education in Electrical Engineering through innovative teaching methodologies, state-of-the-art laboratories, and industry collaborations to produce competent engineers capable of solving real-world problems.
                        </p>
                    </div>
                </main>
            </div>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-12">
                <div className="container mx-auto px-8">
                    <div className="grid grid-cols-3 gap-12">
                        {/* Visiting Namal */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-20 h-20 bg-green-700 rounded-full flex items-center justify-center border-4 border-yellow-400">
                                    <span className="text-3xl font-bold">N</span>
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">VISITING NAMAL</h3>
                            <div className="space-y-3 text-gray-300 text-sm">
                                <p className="flex items-start gap-2">
                                    <span>📍</span>
                                    <span>30 km Talagang Road, Mianwali, 42250, Pakistan</span>
                                </p>
                                <p className="flex items-start gap-2">
                                    <span>📞</span>
                                    <span>+92(0)459-236995 Ext. 101</span>
                                </p>
                            </div>
                        </div>

                        {/* Important Links */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6">IMPORTANT LINKS</h3>
                            <ul className="space-y-3 text-gray-300 text-sm">
                                <li><a href="#" className="hover:text-yellow-400 transition-colors">Tenders</a></li>
                                <li><a href="#" className="hover:text-yellow-400 transition-colors">Academic Calendar</a></li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6">RESOURCES</h3>
                            <ul className="space-y-3 text-gray-300 text-sm">
                                <li><a href="#" className="hover:text-yellow-400 transition-colors">Virtual Tour</a></li>
                                <li><a href="#" className="hover:text-yellow-400 transition-colors">QOBE</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default EEVisionMission;