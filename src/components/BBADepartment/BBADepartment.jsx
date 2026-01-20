import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BBADepartment = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const semestersData = [
        {
            semester: 1,
            totalTheory: 15,
            totalLab: 1,
            courses: [
                { code: "GED-161", course: "Applications of Information and Communication Technologies (ICT)", theory: 2, lab: 1, prereq: "" },
                { code: "*", course: "Social Sciences I", theory: 2, lab: 0, prereq: "" },
                { code: "GED-101", course: "Functional English", theory: 3, lab: 0, prereq: "" },
                { code: "MGT-101", course: "Introduction to Business and Management", theory: 3, lab: 0, prereq: "" },
                { code: "*", course: "Arts & Humanities", theory: 2, lab: 0, prereq: "" },
                { code: "ECO-180", course: "Principles of Economics", theory: 3, lab: 0, prereq: "" }
            ]
        },
        {
            semester: 2,
            totalTheory: 17,
            totalLab: 0,
            courses: [
                { code: "GED-102", course: "Oral Communication", theory: 3, lab: 0, prereq: "" },
                { code: "*", course: "Civilization Course I", theory: 2, lab: 0, prereq: "" },
                { code: "GED-162", course: "Quantitative & Computational Reasoning I", theory: 2, lab: 1, prereq: "" },
                { code: "AGR-170", course: "Basics of Agriculture", theory: 3, lab: 0, prereq: "" },
                { code: "MKT-120", course: "Principles of Marketing", theory: 3, lab: 0, prereq: "" },
                { code: "ACC-140", course: "Financial Accounting I", theory: 3, lab: 0, prereq: "" }
            ]
        },
        {
            semester: 3,
            totalTheory: 15,
            totalLab: 1,
            courses: [
                { code: "GED-163", course: "Quantitative & Computational Reasoning II", theory: 2, lab: 1, prereq: "" },
                { code: "GED-201", course: "Expository Writing", theory: 3, lab: 0, prereq: "" },
                { code: "AGR-271", course: "Introduction to Agribusiness", theory: 3, lab: 0, prereq: "" },
                { code: "ACC-210", course: "Financial Accounting II", theory: 3, lab: 0, prereq: "" },
                { code: "*", course: "Civilization Course II", theory: 2, lab: 0, prereq: "" },
                { code: "*", course: "Social Sciences II", theory: 2, lab: 0, prereq: "" }
            ]
        },
        {
            semester: 4,
            totalTheory: 15,
            totalLab: 1,
            courses: [
                { code: "*", course: "Civilization Course III", theory: 2, lab: 0, prereq: "" },
                { code: "FIN-250", course: "Principles of Finance", theory: 3, lab: 0, prereq: "" },
                { code: "BAN-260", course: "Introduction to Data Analytics", theory: 3, lab: 0, prereq: "" },
                { code: "*", course: "Natural Sciences", theory: 2, lab: 1, prereq: "" },
                { code: "ACC-242", course: "Managerial Accounting", theory: 3, lab: 0, prereq: "" },
                { code: "GED-251", course: "Entrepreneurship", theory: 2, lab: "-", prereq: "" }
            ]
        },
        {
            semester: 5,
            totalTheory: 17,
            totalLab: 1,
            courses: [
                { code: "MGT-310", course: "Fundamentals of Operations", theory: 3, lab: 0, prereq: "" },
                { code: "MKT-321", course: "Consumer Behavior", theory: 3, lab: 0, prereq: "" },
                { code: "MGT-313", course: "Business Research Methods", theory: 3, lab: 0, prereq: "" },
                { code: "FIN-353", course: "Financial Management", theory: 3, lab: 0, prereq: "" },
                { code: "CSC-109", course: "Introduction to Programming", theory: 2, lab: 1, prereq: "" },
                { code: "MGT-497", course: "Internship", theory: 3, lab: 0, prereq: "" },
                { code: "QUR-171", course: "Quranic Studies I", theory: "NC", lab: "", prereq: "" }
            ]
        },
        {
            semester: 6,
            totalTheory: 15,
            totalLab: 0,
            courses: [
                { code: "FIN-354", course: "Financial Statement Analysis", theory: 3, lab: 0, prereq: "" },
                { code: "MGT-317", course: "Management Information System", theory: 3, lab: 0, prereq: "" },
                { code: "**", course: "Elective I", theory: 3, lab: 0, prereq: "" },
                { code: "***", course: "Specialization I", theory: 3, lab: 0, prereq: "" },
                { code: "MGT-312", course: "Organizational Behavior", theory: 3, lab: 0, prereq: "" },
                { code: "QUR-172", course: "Quranic Studies II", theory: "NC", lab: "", prereq: "" }
            ]
        },
        {
            semester: 7,
            totalTheory: 18,
            totalLab: "",
            courses: [
                { code: "MGT-414", course: "E-Commerce", theory: 3, lab: 0, prereq: "" },
                { code: "***", course: "Specialization II", theory: 3, lab: 0, prereq: "" },
                { code: "**", course: "Elective II", theory: 3, lab: 0, prereq: "" },
                { code: "MGT-418", course: "Project Management", theory: 3, lab: 0, prereq: "" },
                { code: "MGT-416", course: "Human Resource Management", theory: 3, lab: 0, prereq: "" },
                { code: "MGT-417", course: "Logistics & Supply Chain Management", theory: 3, lab: "", prereq: "" }
            ]
        },
        {
            semester: 8,
            totalTheory: 15,
            totalLab: 0,
            courses: [
                { code: "ERP-483", course: "Enterprise Resource Planning", theory: 3, lab: 0, prereq: "" },
                { code: "***", course: "Specialization III", theory: 3, lab: 0, prereq: "" },
                { code: "**", course: "Specialization IV", theory: 3, lab: 0, prereq: "" },
                { code: "**", course: "Specialization V", theory: 3, lab: 0, prereq: "" },
                { code: "MGT-499", course: "FYP", theory: 3, lab: 0, prereq: "" }
            ]
        }
    ];

    const plosData = [
        { sr: 1, title: "Domain specific knowledge" },
        { sr: 2, title: "Applications of Business Concepts" },
        { sr: 3, title: "Entrepreneurial Skills" },
        { sr: 4, title: "Technology & Data Driven Decisions" },
        { sr: 5, title: "Critical Thinking & Problem-Solving" },
        { sr: 6, title: "Communication Skills & Teamwork" },
        { sr: 7, title: "Leadership & Social Responsibility" }
    ];

    const electiveAgribusiness = [
        { code: "AGR-471", course: "Global Food Systems and Agriculture", theory: 3, lab: 0 },
        { code: "AGR-473", course: "Crop Production and Soil Sciences", theory: 3, lab: 0 },
        { code: "AGR-475", livestock: "Poultry and Dairy Management", theory: 3, lab: 0 },
        { code: "AGR-476", course: "Food Preservation and Food Security", theory: 3, lab: 0 },
        { code: "AGR-478", course: "Managing Agribusiness Knowledge and Skills", theory: 3, lab: 0 },
        { code: "AGR-479", course: "Horticulture", theory: 3, lab: 0 },
        { code: "AGR-470", course: "Agribusiness Value Chain", theory: 3, lab: 0 },
        { code: "AGR-472", course: "Agricultural Marketing", theory: 3, lab: 0 }
    ];

    const specializations = [
        {
            category: "Finance",
            courses: [
                { code: "FIN-457", course: "Investment & Portfolio Management", theory: 3, lab: 0 },
                { code: "FIN-450", course: "Financial Modelling & Analytics", theory: 3, lab: 0 },
                { code: "FIN-452", course: "Corporate Finance", theory: 3, lab: 0 },
                { code: "FIN-454", course: "Financial Risk Management", theory: 3, lab: 0 },
                { code: "FIN-455", course: "Credit Management", theory: 3, lab: 0 },
                { code: "FIN-456", course: "Islamic Banking and Finance", theory: 3, lab: 0 },
                { code: "FIN-458", course: "Valuation", theory: 3, lab: 0 }
            ]
        },
        {
            category: "Business Analytics",
            courses: [
                { code: "BAN-460", course: "Big Data Analytics", theory: 3, lab: 0 },
                { code: "BAN-463", course: "Optimization for Business Decisions", theory: 3, lab: 0 },
                { code: "BAN-465", course: "Data Mining & Machine Learning", theory: 3, lab: 0 },
                { code: "BAN-466", course: "Predictive Modelling & Analytics", theory: 3, lab: 0 },
                { code: "BAN-468", course: "Econometrics", theory: 3, lab: 0 },
                { code: "BAN-469", course: "Data Analysis with R", theory: 3, lab: 0 },
                { code: "BAN-462", course: "Database Management System", theory: 3, lab: 0 },
                { code: "BAN-464", course: "Cybersecurity and Ethics in Digital Era", theory: 3, lab: 0 }
            ]
        },
        {
            category: "Marketing",
            courses: [
                { code: "MKT-435", course: "Digital Marketing", theory: 3, lab: 0 },
                { code: "MKT-437", course: "Integrated Marketing Communication", theory: 3, lab: 0 },
                { code: "MKT-433", course: "Tourism & Hospitality Marketing", theory: 3, lab: 0 },
                { code: "MKT-434", course: "Strategic Brand Management", theory: 3, lab: 0 },
                { code: "MKT-431", course: "Data-Driven Marketing", theory: 3, lab: 0 },
                { code: "MKT-436", course: "Customer Relationship Management", theory: 3, lab: 0 },
                { code: "MKT-439", course: "International Marketing", theory: 3, lab: 0 },
                { code: "MKT-430", course: "Retail and Sales Management", theory: 3, lab: 0 }
            ]
        }
    ];

    const generalEducation = [
        {
            category: "Arts & Humanities",
            courses: [
                { code: "GED-122", course: "Great Books" },
                { code: "GED-121", course: "Introduction to Philosophy" },
                { code: "GED-123", course: "Chinese Language" },
                { code: "GED-124", course: "Arabic Language" },
                { code: "GED-125", course: "Persian Language" },
                { code: "GED-126", course: "French Language" },
                { code: "GED-127", course: "German Language" },
                { code: "GED-128", course: "Urdu Literature" }
            ]
        },
        {
            category: "Natural Sciences",
            courses: [
                { code: "GED-143", course: "Introduction to Environmental Science" },
                { code: "GED-141", course: "Applied Physics" },
                { code: "GED-241", course: "Computational Biology" },
                { code: "GED-144", course: "Introduction to Genetics" },
                { code: "GED-142", course: "Introduction to Biology" }
            ]
        },
        {
            category: "Social Sciences",
            courses: [
                { code: "GED-131", course: "Introduction to Psychology" },
                { code: "GED-136", course: "Iqbaliyat" },
                { code: "GED-132", course: "Introduction to Sociology" },
                { code: "GED-133", course: "Introduction to International Relations" },
                { code: "GED-231", course: "Governance Public Policy" },
                { code: "GED-134", course: "Introduction to Development Studies" },
                { code: "GED-135", course: "Introduction to Political Economy" }
            ]
        },
        {
            category: "Civilization Courses",
            courses: [
                { code: "GED-111", course: "Islamic Studies" },
                { code: "GED-112", course: "Ethics" },
                { code: "GED-113", course: "Ideology & Constitution of Pakistan" },
                { code: "GED-211", course: "Civics and Community Engagement" }
            ]
        }
    ];

    const prerequisites = [
        { pre: "Financial Accounting I", res: "Financial Accounting II" },
        { pre: "Financial Accounting I, Financial Accounting II, Managerial Accounting", res: "Principles of Finance" },
        { pre: "Principles of Finance", res: "Financial Management" },
        { pre: "Fundamentals of Operations", res: "Logistics and Supply Chain Management" },
        { pre: "Basics of Agriculture", res: "Introduction to Agribusiness" },
        { pre: "Introduction to Data Analytics", res: "Introduction to Programming" },
        { pre: "Principles of Marketing", res: "Consumer Behavior" }
    ];

    const facultyData = [
        {
            name: "Dr. Muhammad Ahmed",
            position: "Associate PROFESSOR / HOD",
            department: "Department of Business Studies",
            education: "PhD (IIUM, Malaysia)",
            image: "/images/bbadepartment/AHMED.png"
        },
        {
            name: "Dr. Muhammad Ashraf",
            position: "PROFESSOR",
            department: "Department of Business Studies",
            education: "PhD (KSU, USA)",
            image: "/images/bbadepartment/ASHRAF.png"
        },
        {
            name: "Dr. Umar Farooq",
            position: "Associate PROFESSOR",
            department: "Department of Business Studies",
            education: "PhD(COMSATS, Pakistan)",
            image: "/images/bbadepartment/UMAR.png"
        },
        {
            name: "Dr. Hashim Zameer",
            position: "Associate Professor",
            department: "Department of Business Studies",
            education: "PhD(NUAA, China)",
            image: "/images/bbadepartment/HASHIM.png"
        },
        {
            name: "Dr. Shoaib Irshad",
            position: "Assistant Professor",
            department: "Department of Business Studies",
            education: "PhD(IEU, Turkey)",
            image: "/images/bbadepartment/SHOAIB.png"
        },
        {
            name: "DR. Haris Bin Khalid",
            position: "Assistant PROFESSOR",
            department: "Department of Business Studies",
            education: "PhD(CUST, Pakistan)",
            image: "/images/bbadepartment/HARIS.png"
        },
        {
            name: "Dr. Faisal Rasheed",
            position: "Assistant Professor",
            department: "Department of Business Studies",
            education: "PhD(AMU, France)",
            image: "/images/bbadepartment/FAISAL.png"
        },
        {
            name: "Dr. Azhar Rasool",
            position: "Assistant Professor",
            department: "Department of Business Studies",
            education: "PhD(UAF, Faisalabad)",
            image: "/images/bbadepartment/AZHAR.png"
        },
        {
            name: "Dr. Hamza Wazir Khan",
            position: "Assistant Professor",
            department: "Department of Business Studies",
            education: "PhD(UMP, Malaysia)",
            image: "/images/bbadepartment/HAMZA.png"
        },
        {
            name: "MS. Zunera Batool",
            position: "LECTURER",
            department: "Department of Business Studies",
            education: "MS(MAJU, Pakistan)",
            image: "/images/bbadepartment/ZUNERA.png"
        }
    ];

    return (
        <div className="min-h-screen bg-namal-offwhite font-sans">
            <div className="flex">
                {/* Left Sidebar */}
                <aside className="w-80 min-h-screen p-8 border-r border-gray-200">
                    <div className="border-b-2 border-gray-200 mb-8 pb-2">
                        <h2 className="text-3xl font-black text-gray-700 uppercase tracking-tight">DEPARTMENTS</h2>
                    </div>

                    {/* Academic Departments */}
                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-gray-800 mb-6 tracking-tight">Academic Departments</h3>
                        <ul className="space-y-4 border-l-2 border-gray-200">
                            <li className="pl-4">
                                <Link to="/departments/electrical-engineering" className="text-gray-500 hover:text-yellow-500 font-bold transition-colors">
                                    Department of Electrical Engineering
                                </Link>
                            </li>
                            <li className="pl-4">
                                <Link to="/departments/computer-science" className="text-gray-500 hover:text-yellow-500 font-bold transition-colors">
                                    Department of Computer Science
                                </Link>
                            </li>
                            <li className="pl-4 -ml-[2px] border-l-2 border-yellow-500">
                                <Link to="/departments/bba" className="text-yellow-500 font-bold">
                                    Department of Business Studies
                                </Link>
                            </li>
                            <li className="pl-4">
                                <Link to="/departments/math" className="text-gray-500 hover:text-yellow-500 font-bold transition-colors">
                                    Department of Mathematics
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Administrative Departments */}
                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-gray-800 mb-6 tracking-tight">Administrative Departments</h3>
                        <ul className="space-y-4 border-l-2 border-gray-200 text-gray-500 font-bold">
                            <li className="pl-4">Office of the Registrar</li>
                            <li className="pl-4">Office of the CoE</li>
                            <li className="pl-4">Office of the Treasurer</li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4 text-gray-500 font-bold mt-12">
                        <a href="#" className="block hover:text-yellow-500 transition-colors">Academic Calendar</a>
                        <a href="#" className="block hover:text-yellow-500 transition-colors">Student Handbook</a>
                        <a href="#" className="block hover:text-yellow-500 transition-colors">ORIC</a>
                        <a href="#" className="block hover:text-yellow-500 transition-colors">Quality Enhancement Cell</a>
                        <a href="#" className="block hover:text-yellow-500 transition-colors">Placement Center</a>
                    </div>
                </aside>

                <main className="flex-1">
                    {/* Breadcrumb */}
                    <div className="px-8 py-6">
                        <div className="flex items-center gap-2 text-gray-400 font-bold text-sm">
                            <Link to="/" className="hover:text-yellow-500 transition-colors">Home</Link>
                            <span>›</span>
                            <span className="hover:text-yellow-500 cursor-pointer transition-colors">Departments</span>
                            <span>›</span>
                            <span className="text-gray-800">Department Of Business Studies</span>
                        </div>
                    </div>

                    {/* Hero Section */}
                    <div className="px-8 py-8">
                        <div className="flex justify-center">
                            <div className="w-full max-w-5xl">
                                <img
                                    src="/images/bbadepartment/bba_banner.svg"
                                    alt="Business Studies Banner"
                                    className="w-full h-auto object-contain opacity-100"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Tabs Navigation */}
                    <div className="border-t-[6px] border-yellow-500 bg-[#f9f9f9] shadow-sm">
                        <nav className="flex px-4">
                            {[
                                { id: 'overview', label: 'Overview' },
                                { id: 'vision', label: 'Vision and Mission' },
                                { id: 'peos', label: 'PEOs and PLOs' },
                                { id: 'scheme', label: 'Scheme of Studies' },
                                { id: 'faculty', label: 'Faculty' }
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`px-8 py-4 font-bold text-[18px] transition-all duration-300 ${activeTab === tab.id
                                        ? 'border-b-4 border-yellow-500 text-yellow-500 bg-white'
                                        : 'text-gray-800 hover:text-yellow-500'
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Content Sections */}
                    <div className="px-8 py-12">
                        {activeTab === 'overview' && (
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl">
                                <h2 className="text-[30px] font-bold text-gray-900 mb-6 uppercase tracking-tight">Overview</h2>
                                <p className="text-[16px] mb-4">
                                    BBA program in Namal Business School focuses on giving an international perspective on business concepts coupled with high transfer of learning and opportunity to acquire pragmatic knowledge of various businesses including agribusiness. The aim of the program is to provide students with knowledge, skills and attitude that will help them to resolve diverse business challenges in their professional life.
                                </p>
                                <p className="text-[16px] font-bold mb-4">The Namal BBA program develops its graduates in the domains:</p>
                                <ol className="list-decimal list-inside ml-4 space-y-2 mb-4 text-[16px] font-medium">
                                    <li>Agribusiness</li>
                                    <li>Business Analytics</li>
                                    <li>Marketing</li>
                                    <li>Finance</li>
                                </ol>
                                <p className="text-[16px]">
                                    The key focus of the program is on community development and rural uplift. We aspire to develop graduates who are innovative, socially responsible and can contribute to the development of their communities specifically and Pakistan generally.
                                </p>
                            </div>
                        )}

                        {activeTab === 'vision' && (
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl">
                                <section className="mb-10">
                                    <h2 className="text-[30px] font-bold text-gray-900 mb-3 uppercase tracking-tight">Vision</h2>
                                    <p className="text-[16px]">
                                        To be a center of excellence in business education that nurtures ideas and people to provide sustainable business solutions for society.
                                    </p>
                                </section>

                                <hr className="my-10 border-gray-300" />

                                <section className="mb-10">
                                    <h2 className="text-[30px] font-bold text-gray-900 mb-3 uppercase tracking-tight">Mission</h2>
                                    <p className="text-[16px]">
                                        To equip aspiring youth with cross-functional business knowledge, impactful research and Namal values through rigorous academic programs, experiential learning, and industry partnerships to drive positive change in the business landscape and society.
                                    </p>
                                </section>

                                <div className="mt-12">
                                    <h3 className="text-3xl font-black text-gray-900 mb-4">Programme Offered:</h3>
                                    <ul className="list-disc list-inside ml-6 text-xl font-bold text-gray-800">
                                        <li>Bachelor of Business Administration (BBA)</li>
                                    </ul>
                                </div>
                            </div>
                        )}

                        {activeTab === 'peos' && (
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <h2 className="text-[30px] font-bold text-gray-900 mb-8 uppercase tracking-tight underline decoration-yellow-400 decoration-4 underline-offset-8">Program Educational Objectives</h2>
                                <div className="space-y-6 mb-16 max-w-5xl">
                                    {[
                                        { id: "PEO-1", text: "Demonstrate proficiency in applying core business principles and leveraging data-driven decision-making to solve business problems effectively." },
                                        { id: "PEO-2", text: "Apply critical thinking, effective communication, and collaboration skills within diverse and inclusive teams." },
                                        { id: "PEO-3", text: "Exhibit ethical leadership practices and social responsibility for making meaningful contributions to businesses and society." }
                                    ].map((peo, i) => (
                                        <div key={i} className="flex gap-4 items-start">
                                            <span className="font-black text-gray-900 min-w-[80px]">{peo.id}:</span>
                                            <p className="text-[16px] text-gray-700 font-medium leading-relaxed">{peo.text}</p>
                                        </div>
                                    ))}
                                </div>

                                <h2 className="text-3xl font-black text-gray-900 mb-6 underline decoration-yellow-400 decoration-4">Program Learning Outcomes</h2>
                                <div className="mt-8 overflow-hidden rounded-xl border border-gray-300 shadow-sm">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="bg-gray-900 text-white">
                                                <th className="px-8 py-4 text-left border-r border-gray-700 w-32 font-black text-lg">Sr.No</th>
                                                <th className="px-8 py-4 text-left font-black text-lg">PLOs</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {plosData.map((plo) => (
                                                <tr key={plo.sr} className="border-b border-gray-300 hover:bg-yellow-50/30 transition-colors">
                                                    <td className="px-8 py-4 text-left font-bold text-gray-900 border-r border-gray-300 text-lg uppercase tracking-tight">PLO {plo.sr}</td>
                                                    <td className="px-8 py-4 text-gray-800 font-bold text-lg">{plo.title}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

                        {activeTab === 'scheme' && (
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <h2 className="text-[30px] font-bold text-gray-900 mb-2 uppercase tracking-tight">Scheme of Studies</h2>
                                <p className="text-2xl text-yellow-500 mb-10 font-black">Total Credit Hours = 131</p>

                                {semestersData.map((sem) => (
                                    <div key={sem.semester} className="mb-12 overflow-hidden rounded-lg border border-gray-300 shadow-sm">
                                        <div className="bg-gray-900 text-white px-8 py-4 font-black text-xl uppercase tracking-tighter">
                                            Semester {sem.semester}
                                        </div>
                                        <table className="w-full border-collapse">
                                            <thead>
                                                <tr className="bg-[#444444] text-white">
                                                    <th className="px-6 py-4 text-left border-r border-gray-600 w-32 uppercase text-xs font-black tracking-widest">Code</th>
                                                    <th className="px-6 py-4 text-left border-r border-gray-600 uppercase text-xs font-black tracking-widest">Course</th>
                                                    <th className="px-6 py-4 text-center border-r border-gray-600 w-24 uppercase text-xs font-black tracking-widest">Theory</th>
                                                    <th className="px-6 py-4 text-center border-r border-gray-600 w-24 uppercase text-xs font-black tracking-widest">Lab</th>
                                                    <th className="px-6 py-4 text-left w-40 uppercase text-xs font-black tracking-widest">Pre-req</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {sem.courses.map((course, i) => (
                                                    <tr key={i} className="border-b border-gray-300 hover:bg-gray-50/50 transition-colors">
                                                        <td className="px-6 py-4 font-black text-gray-900 border-r border-gray-300">{course.code}</td>
                                                        <td className="px-6 py-4 text-gray-700 font-bold border-r border-gray-300">{course.course}</td>
                                                        <td className="px-6 py-4 text-center text-gray-900 font-black border-r border-gray-300">{course.theory}</td>
                                                        <td className="px-6 py-4 text-center text-gray-900 font-black border-r border-gray-300">{course.lab}</td>
                                                        <td className="px-6 py-4 text-gray-600 italic font-medium">{course.prereq || "—"}</td>
                                                    </tr>
                                                ))}
                                                <tr className="bg-gray-100/50 font-black text-lg">
                                                    <td colSpan="2" className="px-6 py-4 text-right border-r border-gray-300 uppercase text-xs text-gray-500">Totals</td>
                                                    <td className="px-6 py-4 text-center text-gray-900 border-r border-gray-300">{sem.totalTheory}</td>
                                                    <td className="px-6 py-4 text-center text-gray-900 border-r border-gray-300">{sem.totalLab}</td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                ))}

                                {/* Specializations & Electives */}
                                <div className="mt-20 pt-16 border-t-8 border-yellow-400">
                                    <h2 className="text-[30px] font-bold text-gray-900 mb-12 tracking-tight uppercase">Specializations & Electives</h2>

                                    <div className="grid gap-16">
                                        {/* Agribusiness Electives */}
                                        <div className="overflow-hidden rounded-2xl border border-gray-300 shadow-sm">
                                            <div className="bg-yellow-500 text-white px-8 py-5 font-black text-2xl uppercase italic">Agri-Business Electives</div>
                                            <table className="w-full">
                                                <thead className="bg-gray-800 text-white uppercase text-xs font-black">
                                                    <tr>
                                                        <th className="px-8 py-4 text-left">Code</th>
                                                        <th className="px-8 py-4 text-left">Course</th>
                                                        <th className="px-8 py-4 text-center">Theory</th>
                                                        <th className="px-8 py-4 text-center">Lab</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="font-bold">
                                                    {electiveAgribusiness.map((item, idx) => (
                                                        <tr key={idx} className="border-b border-gray-200">
                                                            <td className="px-8 py-4 text-gray-900">{item.code}</td>
                                                            <td className="px-8 py-4 text-gray-700">{item.course || item.livestock}</td>
                                                            <td className="px-8 py-4 text-center text-gray-900">{item.theory}</td>
                                                            <td className="px-8 py-4 text-center text-gray-900">{item.lab}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>

                                        {/* Domain Specializations */}
                                        {specializations.map((spec, idx) => (
                                            <div key={idx} className="overflow-hidden rounded-2xl border border-gray-300 shadow-sm">
                                                <div className="bg-black text-white px-8 py-5 font-black text-2xl uppercase italic tracking-widest">{spec.category} Specialization</div>
                                                <table className="w-full">
                                                    <thead className="bg-gray-700 text-white uppercase text-xs font-black">
                                                        <tr>
                                                            <th className="px-8 py-4 text-left">Code</th>
                                                            <th className="px-8 py-4 text-left">Course</th>
                                                            <th className="px-8 py-4 text-center">T/L</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="font-bold">
                                                        {spec.courses.map((course, i) => (
                                                            <tr key={i} className="border-b border-gray-200">
                                                                <td className="px-8 py-4 text-gray-900">{course.code}</td>
                                                                <td className="px-8 py-4 text-gray-700">{course.course}</td>
                                                                <td className="px-8 py-4 text-center text-gray-900">{course.theory}+{course.lab}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        ))}

                                        {/* General Education */}
                                        <div className="grid grid-cols-2 gap-8">
                                            {generalEducation.map((gen, idx) => (
                                                <div key={idx} className="p-8 rounded-3xl border border-gray-300">
                                                    <h3 className="text-2xl font-black text-gray-900 mb-6 border-b-2 border-yellow-400 inline-block uppercase tracking-tight">{gen.category}</h3>
                                                    <ul className="space-y-3 font-bold text-gray-600">
                                                        {gen.courses.map((c, i) => (
                                                            <li key={i} className="flex justify-between items-center group">
                                                                <span className="text-gray-400 group-hover:text-yellow-500 transition-colors uppercase text-sm">{c.code}</span>
                                                                <span className="text-right group-hover:text-gray-900 transition-colors">{c.course}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Pre-requisities */}
                                        <div className="bg-gray-900 p-10 rounded-3xl text-white">
                                            <h3 className="text-3xl font-black mb-10 border-b border-gray-700 pb-4 uppercase tracking-widest text-yellow-500">Prerequisites</h3>
                                            <div className="grid gap-4">
                                                {prerequisites.map((p, idx) => (
                                                    <div key={idx} className="flex justify-between items-center p-4 rounded-xl border-b border-white/5">
                                                        <span className="text-gray-400 italic max-w-md">{p.pre}</span>
                                                        <div className="w-10 h-[2px] bg-yellow-500 mx-4 shrink-0"></div>
                                                        <span className="font-bold text-right text-lg">{p.res}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'faculty' && (
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <h2 className="text-[30px] font-bold text-gray-800 mb-16 uppercase tracking-tight border-l-8 border-yellow-400 pl-6">Department Faculty</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                    {facultyData.map((member, idx) => (
                                        <div key={idx} className="bg-white rounded-[32px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-4 pb-8 flex flex-col items-center text-center hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-2">
                                            <div className="w-full aspect-[3/4] rounded-[24px] overflow-hidden mb-5 bg-gradient-to-b from-[#021024] to-[#0f2a4a] relative shadow-inner">
                                                <img
                                                    src={member.image}
                                                    alt={member.name}
                                                    className="w-full h-full object-cover object-top opacity-100"
                                                />
                                            </div>
                                            <h3 className="text-[15px] font-black text-gray-900 uppercase tracking-tight mb-1">
                                                {member.name}
                                            </h3>
                                            <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-1">
                                                {member.position}
                                            </p>
                                            <p className="text-[11px] text-gray-400 font-medium mb-0.5 leading-tight px-2">
                                                {member.department}
                                            </p>
                                            <p className="text-[11px] text-gray-400 italic">
                                                {member.education}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default BBADepartment;
