import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-700 text-white py-12">
            <div className="container mx-auto px-8">
                <div className="flex gap-12">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <img
                            src="/images/logo.png"
                            alt="Namal University Logo"
                            className="w-40 h-40 object-contain"
                        />
                    </div>

                    {/* Content Columns */}
                    <div className="flex-1 grid grid-cols-3 gap-12">
                        {/* Visiting Namal */}
                        <div>
                            <h3 className="text-xl font-bold mb-4 tracking-wide uppercase">VISITING NAMAL</h3>
                            <div className="space-y-4 text-gray-300 text-sm font-medium">
                                <p className="flex items-start gap-3">
                                    <span className="text-lg">📍</span>
                                    <span>30 km Talagang Road, Mianwali, 42250, Pakistan</span>
                                </p>
                                <p className="flex items-start gap-3">
                                    <span className="text-lg">📞</span>
                                    <span>+92(0)459-236995 Ext. 101</span>
                                </p>
                                <p className="flex items-start gap-3">
                                    <span className="text-lg">✉️</span>
                                    <span>info@namal.edu.pk</span>
                                </p>
                                <p className="flex items-start gap-3">
                                    <span className="text-lg">🌐</span>
                                    <span>Namal Knowledge City</span>
                                </p>
                            </div>
                        </div>

                        {/* Important Links */}
                        <div>
                            <h3 className="text-xl font-bold mb-4 tracking-wide uppercase">IMPORTANT LINKS</h3>
                            <ul className="space-y-3 text-gray-300 text-sm font-medium">
                                <li><a href="#" className="hover:text-yellow-400 transition-colors">Tenders</a></li>
                                <li><a href="#" className="hover:text-yellow-400 transition-colors">Academic Calendar</a></li>
                                <li><a href="#" className="hover:text-yellow-400 transition-colors">Contribute</a></li>
                                <li><a href="#" className="hover:text-yellow-400 transition-colors">Student HandBook</a></li>
                                <li><a href="#" className="hover:text-yellow-400 transition-colors">Guidelines for International Students</a></li>
                                <li><a href="#" className="hover:text-yellow-400 transition-colors">Sexual Harassment Committee</a></li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div>
                            <h3 className="text-xl font-bold mb-4 tracking-wide uppercase">RESOURCES</h3>
                            <ul className="space-y-3 text-gray-300 text-sm font-medium">
                                <li><a href="#" className="hover:text-yellow-400 transition-colors">Virtual Tour</a></li>
                                <li><a href="#" className="hover:text-yellow-400 transition-colors">QOBE</a></li>
                                <li><a href="#" className="hover:text-yellow-400 transition-colors">Library</a></li>
                                <li><a href="#" className="hover:text-yellow-400 transition-colors">Facilities</a></li>
                                <li><a href="#" className="hover:text-yellow-400 transition-colors">Careers</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Social Media Icons */}
                <div className="flex justify-center gap-6 mt-16 pt-8 border-t border-gray-600">
                    <a href="#" className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all hover:scale-110">
                        <span className="text-xl text-white font-bold">f</span>
                    </a>
                    <a href="#" className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-all hover:scale-110">
                        <span className="text-xl">🐦</span>
                    </a>
                    <a href="#" className="w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-full flex items-center justify-center hover:opacity-80 transition-all hover:scale-110">
                        <span className="text-xl">📷</span>
                    </a>
                    <a href="#" className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-all hover:scale-110">
                        <span className="text-xl">✉️</span>
                    </a>
                    <a href="#" className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-all hover:scale-110">
                        <span className="text-xl">💬</span>
                    </a>
                    <a href="#" className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-all hover:scale-110">
                        <span className="text-xl text-white">▶️</span>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
