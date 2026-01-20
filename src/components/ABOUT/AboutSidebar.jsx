import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const AboutSidebar = () => {
    const location = useLocation();

    const menuItems = [
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
    ];

    return (
        <aside className="w-72 flex-shrink-0 font-['Open_Sans']" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            <nav>
                <ul className="space-y-4">
                    {menuItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <li key={item.name}>
                                <Link
                                    to={item.path}
                                    className={`${isActive
                                            ? "text-yellow-500 font-bold"
                                            : "text-[#8c8c8c] font-medium hover:text-yellow-500"
                                        } text-[15px] transition-colors block`}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </aside>
    );
};

export default AboutSidebar;
