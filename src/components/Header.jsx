import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ChevronDown, ChevronRight } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const isHomepage = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = {
        about: [
            { name: "Chairman's Message", path: "/about/chairman-message" },
            { name: "Rector's Message", path: "/about/rector-message" },
            { name: "Vision and Mission", path: "/about/vision-mission" },
            { name: "Core Values", path: "/about/core-values" },
            { name: "The Namal Story", path: "/about/the-namal-story" },
            { name: "Namal Knowledge City", path: "/about/namal-knowledge-city" },
            { name: "Board of Governors", path: "/about/board-of-governors" },
            { name: "Senior Management Team", path: "/about/senior-management-team" },
            { name: "HEC Recognition", path: "/about/hec-recognition" },
            { name: "Policies", path: "/about/policies" }
        ],
        departments: [
            {
                name: "Academic Departments",
                type: "category",
                children: [
                    { name: "Department of Electrical Engineering", path: "/departments/electrical-engineering" },
                    { name: "Department of Computer Science", path: "/departments/computer-science" },
                    { name: "Department of Business Studies", path: "/departments/bba" },
                    { name: "Department of Mathematics", path: "/departments/math" }
                ]
            },
            {
                name: "Administrative Departments",
                type: "category",
                children: [
                    { name: "Office of the Registrar", path: "/admin/registrar" },
                    { name: "Office of the CoE", path: "/admin/coe" },
                    { name: "Office of the Treasurer", path: "/admin/treasurer" }
                ]
            },
            { name: "Academic Calendar", path: "/academic-calendar" },
            { name: "Student Handbook", path: "/student-handbook" },
            { name: "ORIC", path: "/oric" },
            { name: "Quality Enhancement Cell", path: "/qec" },
            { name: "Placement Center", path: "/placement-center" }
        ],
        admissions: [
            { name: "Apply", path: "/admissions/apply" },
            { name: "Admission Criteria", path: "/admissions/criteria" },
            { name: "Entry Test Information", path: "/admissions/entry-test" },
            { name: "Upcoming Acceptable Entry Tests", path: "/admissions/upcoming-tests" },
            { name: "Scholarships", path: "/scholarships" },
            { name: "Fee Structure", path: "/fee-structure" },
            { name: "International Students", path: "/international-students" },
            { name: "FAQs", path: "/faqs" }
        ],
        lifeAtNamal: [
            { name: "Workshops and Seminars", path: "/life/workshops" },
            { name: "Green Namal", path: "/life/green-namal" },
            { name: "Facilities", path: "/life/facilities" },
            { name: "Student Societies", path: "/societies" },
            { name: "Open House", path: "/life/open-house" },
            { name: "AI for Software Engineering", path: "/life/ai-se" },
            { name: "Namal Wellness Centre", path: "/life/wellness" }
        ],
        rdCenters: [
            { name: "Centre for AI & Big Data", path: "/rd/ai-big-data" },
            { name: "Nisar Aziz AgriTech Center", path: "/rd/agritech" }
        ]
    };

    const isSolidHeader = !isHomepage || isScrolled;

    return (
        <header className="fixed w-full z-50">
            <div className={`transition-all duration-300 ${isSolidHeader
                ? 'bg-white shadow-md'
                : 'bg-gradient-to-b from-black/80 via-black/60 to-transparent'
                }`}>
                {/* Top Bar */}
                <div className={`py-1.5 px-6 font-['Open_Sans'] transition-all duration-300 ${isSolidHeader
                    ? 'bg-[#ffb32c] border-b border-[#ffb32c]'
                    : ''
                    }`}>
                    <div className="max-w-[1440px] mx-auto flex justify-between items-center">
                        <Link to="/" className="flex items-center gap-3 group">
                            <img
                                src="/images/logo.png"
                                alt="Namal Logo"
                                className="h-10 w-auto brightness-110"
                            />
                            <span className="text-[18px] font-extrabold tracking-wider text-white">NAMAL UNIVERSITY</span>
                        </Link>

                        <div className="flex items-center gap-3 text-[12px] font-semibold text-white">
                            <Link to="/academic-calendar" className={`transition-colors ${isSolidHeader ? 'hover:text-black' : 'hover:text-yellow-500'}`}>Academic Calendar</Link>
                            <span className="text-gray-400 opacity-50">|</span>
                            <Link to="/faculty" className={`transition-colors ${isSolidHeader ? 'hover:text-black' : 'hover:text-yellow-500'}`}>Faculty</Link>
                            <span className="text-gray-400 opacity-50">|</span>
                            <Link to="/oric" className={`transition-colors ${isSolidHeader ? 'hover:text-black' : 'hover:text-yellow-500'}`}>ORIC</Link>
                            <span className="text-gray-400 opacity-50">|</span>
                            <Link to="/gallery" className={`transition-colors ${isSolidHeader ? 'hover:text-black' : 'hover:text-yellow-500'}`}>Gallery</Link>
                            <span className="text-gray-400 opacity-50">|</span>
                            <Link to="/virtual-tour" className={`transition-colors ${isSolidHeader ? 'hover:text-black' : 'hover:text-yellow-500'}`}>Virtual Tour</Link>
                            <span className="text-gray-400 opacity-50">|</span>
                            <Link to="/qobe" className={`transition-colors ${isSolidHeader ? 'hover:text-black' : 'hover:text-yellow-500'}`}>QOBE</Link>
                            <span className="text-gray-400 opacity-50">|</span>
                            <Link to="/library" className={`transition-colors ${isSolidHeader ? 'hover:text-black' : 'hover:text-yellow-500'}`}>Library</Link>
                            <span className="text-gray-400 opacity-50">|</span>
                            <Link to="/phec" className={`transition-colors ${isSolidHeader ? 'hover:text-black' : 'hover:text-yellow-500'}`}>PHEC</Link>
                            <span className="text-gray-400 opacity-50">|</span>
                            <Link to="/careers" className={`transition-colors ${isSolidHeader ? 'hover:text-black' : 'hover:text-yellow-500'}`}>Careers</Link>
                            <span className="text-gray-400 opacity-50">|</span>
                            <Link to="/alumni" className={`transition-colors ${isSolidHeader ? 'hover:text-black' : 'hover:text-yellow-500'}`}>Alumni Portal</Link>
                            <span className="text-gray-400 opacity-50">|</span>
                            <Link to="/contact" className={`transition-colors ${isSolidHeader ? 'hover:text-black' : 'hover:text-yellow-500'}`}>Contact Us</Link>

                            <div className={`flex items-center gap-1.5 ml-4 cursor-pointer transition-colors ${isSolidHeader ? 'hover:text-black' : 'hover:text-yellow-500'}`}>
                                <Search className="w-3.5 h-3.5" />
                                <span>Search</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar - Main Navigation */}
                <div className={`px-6 py-4 font-['Open_Sans'] transition-all duration-300 ${isSolidHeader ? 'bg-[#f8f9fa]' : ''}`}>
                    <div className="max-w-[1440px] mx-auto flex justify-between items-center pl-12">
                        <nav className={`flex items-center gap-10 text-[17px] font-bold tracking-wide transition-colors duration-300 ${isSolidHeader ? 'text-black' : 'text-white'}`}>

                            {/* Dropdown Menu Component */}
                            <DropdownMenu
                                title="About"
                                items={navItems.about}
                                isSolid={isSolidHeader}
                            />

                            <DropdownMenu
                                title="Departments"
                                items={navItems.departments}
                                isSolid={isSolidHeader}
                                hasNested={true}
                            />

                            <DropdownMenu
                                title="Admissions"
                                items={navItems.admissions}
                                isSolid={isSolidHeader}
                            />

                            <DropdownMenu
                                title="Life At Namal"
                                items={navItems.lifeAtNamal}
                                isSolid={isSolidHeader}
                            />

                            <Link to="/news" className={`transition-colors ${isSolidHeader ? 'hover:text-[#ffb32c]' : 'hover:text-yellow-500'}`}>News</Link>

                            <DropdownMenu
                                title="R&D Centers"
                                items={navItems.rdCenters}
                                isSolid={isSolidHeader}
                            />

                            <Link to="/contribute" className={`transition-colors ${isSolidHeader ? 'hover:text-[#ffb32c]' : 'hover:text-yellow-500'}`}>Contribute</Link>
                        </nav>

                        {/* Admissions Button */}
                        <Link
                            to="/admissions"
                            className="bg-[#ffb32c] text-white px-8 py-3 rounded-full text-[15px] font-black tracking-wider hover:bg-[#ffa000] hover:scale-105 transition-all shadow-lg uppercase"
                        >
                            ADMISSIONS 2026
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

// Reusable Dropdown Menu with Flyout support
const DropdownMenu = ({ title, items, isSolid, hasNested = false }) => {
    return (
        <div className="relative group py-2">
            <div className={`flex items-center gap-1.5 cursor-pointer transition-all ${isSolid ? 'hover:text-[#ffb32c]' : 'hover:text-yellow-500'}`}>
                <span>{title}</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </div>
            {/* Main Dropdown Container */}
            <div className="absolute top-[100%] left-0 w-72 bg-white border border-gray-100 shadow-2xl rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[60]">
                <div className="flex flex-col py-2">
                    {items.map((item) => {
                        if (item.type === 'category') {
                            return (
                                <div key={item.name} className="relative group/sub">
                                    <div className="px-6 py-3 text-[14px] text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition-colors border-b border-gray-50 flex justify-between items-center cursor-pointer">
                                        <span className="font-semibold">{item.name}</span>
                                        <ChevronRight className="w-4 h-4" />
                                    </div>
                                    {/* Nested Flyout Container */}
                                    <div className="absolute top-0 left-full w-72 bg-white border border-gray-100 shadow-2xl opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 ml-[1px]">
                                        <div className="flex flex-col py-2">
                                            {item.children.map((child) => (
                                                <Link
                                                    key={child.name}
                                                    to={child.path}
                                                    className="px-6 py-3 text-[13px] text-gray-600 hover:bg-yellow-50 hover:text-yellow-600 transition-colors border-b border-gray-50 last:border-0"
                                                >
                                                    {child.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                        return (
                            <Link
                                key={item.name}
                                to={item.path}
                                className="px-6 py-3 text-[14px] text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition-colors border-b border-gray-50 last:border-0"
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Header;