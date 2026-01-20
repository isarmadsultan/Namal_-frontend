import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CSDepartment = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const semestersData = [
        {
            semester: 1,
            totalTheory: 15,
            totalLab: 2,
            courses: [
                { code: "CSC-100", course: "Programming Fundamentals", theory: 3, lab: 1, prereq: "" },
                { code: "MTH-100", course: "Foundation Math 1 (For Pre-Medical Students)", theory: "3(NC)", lab: 0, prereq: "" },
                { code: "CSC-120", course: "Discrete Structure", theory: 3, lab: 0, prereq: "" },
                { code: "GED-161", course: "Application of ICT", theory: 2, lab: 1, prereq: "" },
                { code: "GED-101", course: "Functional English", theory: 3, lab: 0, prereq: "" },
                { code: "GED-111", course: "Islamic Studies or Ethics (for non-Muslims)", theory: 2, lab: 0, prereq: "" },
                { code: "GED-113", course: "Ideology and Constitution of Pakistan", theory: 2, lab: 0, prereq: "" }
            ]
        },
        {
            semester: 2,
            totalTheory: 14,
            totalLab: 3,
            courses: [
                { code: "MTH-120", course: "Calculus and Analytical Geometry - QR1", theory: 3, lab: 0, prereq: "" },
                { code: "MTH-101", course: "Foundation Math 2 (for Pre-Medical students)", theory: "2(NC)", lab: 0, prereq: "MTH-100" },
                { code: "CSC-101", course: "Object Oriented Programming", theory: 3, lab: 1, prereq: "CSC-100" },
                { code: "CS-140", course: "Digital Logic Design", theory: 3, lab: 1, prereq: "" },
                { code: "GED-201", course: "Expository Writing", theory: 3, lab: 0, prereq: "" },
                { code: "PHY-120", course: "Applied Physics (Natural Science)", theory: 2, lab: 1, prereq: "" }
            ]
        },
        {
            semester: 3,
            totalTheory: 14,
            totalLab: 2,
            courses: [
                { code: "MTH-123", course: "Linear Algebra", theory: 3, lab: 0, prereq: "" },
                { code: "MTH-226", course: "Multivariable Calculus", theory: 3, lab: 0, prereq: "MTH-120" },
                { code: "CSC-201", course: "Data Structures", theory: 3, lab: 1, prereq: "CSC-100" },
                { code: "CSC-331", course: "Software Engineering", theory: 3, lab: 0, prereq: "" },
                { code: "CSC-240", course: "Computer Organization and Assembly Language", theory: 2, lab: 1, prereq: "" },
                { code: "QUR-171", course: "Quranic Studies I", theory: "3(NC)", lab: 0, prereq: "" }
            ]
        },
        {
            semester: 4,
            totalTheory: 14,
            totalLab: 2,
            courses: [
                { code: "MTH-125", course: "Probability and Statistics", theory: 3, lab: 0, prereq: "" },
                { code: "CSC-271", course: "Database Systems", theory: 3, lab: 1, prereq: "CSC-101" },
                { code: "CSC-241", course: "Analysis of Algorithms", theory: 3, lab: 0, prereq: "" },
                { code: "CSC-340", course: "Theory of Automata", theory: 3, lab: 1, prereq: "" },
                { code: "CSC-242", course: "Computer Architecture", theory: 2, lab: 1, prereq: "CSC-240" },
                { code: "QUR-172", course: "Quranic Studies II", theory: "3 (NC)", lab: 0, prereq: "" }
            ]
        },
        {
            semester: 5,
            totalTheory: 13,
            totalLab: 3,
            courses: [
                { code: "CSC-251", course: "Computer Networks", theory: 2, lab: 1, prereq: "" },
                { code: "CSC-330", course: "Operating Systems", theory: 2, lab: 1, prereq: "" },
                { code: "CSC-252", course: "Information Security", theory: 3, lab: 0, prereq: "" },
                { code: "CSC-360", course: "Artificial Intelligence", theory: 2, lab: 1, prereq: "" },
                { code: "GED-151", course: "Entrepreneurship", theory: 2, lab: 0, prereq: "" },
                { code: "GED-122", course: "Professional Practices", theory: 2, lab: 0, prereq: "" }
            ]
        },
        {
            semester: 6,
            totalTheory: 15,
            totalLab: 2,
            courses: [
                { code: "CSC-321", course: "HCI and Graphics", theory: 2, lab: 1, prereq: "" },
                { code: "-", course: "Domain Elective 1", theory: 3, lab: 0, prereq: "" },
                { code: "CSC-372", course: "Advance Database Management System", theory: 3, lab: 0, prereq: "CSC-271" },
                { code: "CSC-320", course: "Compiler Construction", theory: 2, lab: 1, prereq: "" },
                { code: "-", course: "Domain Elective 2", theory: 3, lab: 0, prereq: "" },
                { code: "GED-136", course: "Iqbaliyat (Social Science group)", theory: 2, lab: 0, prereq: "" }
            ]
        },
        {
            semester: 7,
            totalTheory: 16,
            totalLab: 1,
            courses: [
                { code: "*", course: "Domain Elective 3", theory: 3, lab: 0, prereq: "" },
                { code: "*", course: "Domain Elective 4", theory: 3, lab: 0, prereq: "" },
                { code: "*", course: "Domain Elective 5", theory: 3, lab: 0, prereq: "" },
                { code: "CSC-498", course: "FYP-I", theory: 2, lab: 0, prereq: "" },
                { code: "CSC-440", course: "Parallel & Distributed Computing", theory: 2, lab: 1, prereq: "CSC-251" },
                { code: "MGT-101", course: "Introduction to Business and Management (Elec Supp)", theory: 3, lab: 0, prereq: "" }
            ]
        },
        {
            semester: 8,
            totalTheory: 15,
            totalLab: 0,
            courses: [
                { code: "**", course: "Domain Elective 6", theory: 3, lab: 0, prereq: "" },
                { code: "*", course: "Domain Elective 7", theory: 3, lab: 0, prereq: "" },
                { code: "GED-211", course: "Civics and Community Engagement", theory: 2, lab: 0, prereq: "" },
                { code: "GED-202", course: "Technical and Business Writing", theory: 3, lab: 0, prereq: "" },
                { code: "CSC-499", course: "FYP-2", theory: 4, lab: 0, prereq: "" }
            ]
        }
    ];

    const electivesData = [
        {
            category: "Artificial Intelligence",
            courses: [
                { code: "CSC-361", course: "Machine Learning", theory: 2, lab: 1, prereq: "CSC-360" },
                { code: "CSC-364", course: "Soft Computing", theory: 3, lab: 0, prereq: "" },
                { code: "CSC-363", course: "Computer Vision", theory: 2, lab: 1, prereq: "" },
                { code: "CSC-365", course: "Natural Language Processing", theory: 3, lab: 0, prereq: "" },
                { code: "CSC-461", course: "Deep Learning", theory: 2, lab: 1, prereq: "" },
                { code: "CSC-462", course: "Pattern Recognition", theory: 2, lab: 1, prereq: "" },
                { code: "CSC-463", course: "Intelligent Transportation System", theory: 3, lab: 0, prereq: "" },
                { code: "CSC-464", course: "Applications of Computational Intelligence in Games", theory: 2, lab: 1, prereq: "CSC-360" },
                { code: "CSC-367", course: "Bio-Medical Vision", theory: 2, lab: 1, prereq: "" },
                { code: "CSC-368", course: "AI for Agriculture", theory: 2, lab: 1, prereq: "CSC-360" },
                { code: "CSC-362", course: "Digital Image Processing", theory: 3, lab: 0, prereq: "" }
            ]
        },
        {
            category: "Data Science",
            courses: [
                { code: "CSC-273", course: "Data Mining and Warehousing", theory: 2, lab: 1, prereq: "" },
                { code: "CSC-471", course: "GIS Database and Programming", theory: 2, lab: 1, prereq: "CSC-130" },
                { code: "CSC-376", course: "Information Retrieval Techniques", theory: 3, lab: 0, prereq: "" },
                { code: "CSC-373", course: "NoSQL Databases", theory: 2, lab: 1, prereq: "" },
                { code: "CSC-472", course: "Contemporary Big-Data Technologies", theory: 3, lab: 0, prereq: "" },
                { code: "CSC-473", course: "Trends in Data Centric Computing", theory: 3, lab: 0, prereq: "" },
                { code: "CSC-372", course: "Advance Concepts in Databases", theory: 2, lab: 1, prereq: "" },
                { code: "CSC-374", course: "Data Diversity", theory: 3, lab: 0, prereq: "" },
                { code: "CSC-272", course: "Data Analysis and Visualization", theory: 2, lab: 1, prereq: "" },
                { code: "CSC-474", course: "Agri Informatics", theory: 3, lab: 0, prereq: "" },
                { code: "CSC-375", course: "Data Analytics for Agriculture", theory: 3, lab: 0, prereq: "AGR-170" }
            ]
        },
        {
            category: "Cyber Security",
            courses: [
                { code: "CSC-352", course: "Cyber Security", theory: 2, lab: 1, prereq: "" },
                { code: "CSC-356", course: "Cryptography", theory: 2, lab: 1, prereq: "" },
                { code: "CSC-453", course: "Cyber Governance", theory: 3, lab: 0, prereq: "" },
                { code: "CSC-454", course: "Digital Forensics", theory: 2, lab: 1, prereq: "" },
                { code: "CSC-455", course: "Information Risk and Security Management", theory: 2, lab: 1, prereq: "" },
                { code: "CSC-357", course: "Penetration Testing", theory: 2, lab: 1, prereq: "" },
                { code: "CSC-459", course: "Ethical Hacking", theory: 2, lab: 1, prereq: "" },
                { code: "CSC-458", course: "Engineering Secure Software", theory: 2, lab: 1, prereq: "" },
                { code: "CSC-358", course: "Wireless Sensor Network", theory: 2, lab: 1, prereq: "" },
                { code: "CSC-358", course: "IOT for Agriculture", theory: 3, lab: 0, prereq: "" }
            ]
        },
        {
            category: "Software Engineering",
            courses: [
                { code: "CSC-226", course: "Software Requirement Engineering", theory: 3, lab: 0, prereq: "CSC-225" },
                { code: "CSC-227", course: "Software Quality Assurance", theory: 3, lab: 0, prereq: "CSC-225" },
                { code: "CSC-321", course: "Software Project Management & Leadership", theory: 2, lab: 1, prereq: "" },
                { code: "CSC-322", course: "Software Design and Architecture", theory: 3, lab: 0, prereq: "CSC-225" },
                { code: "CSC-421", course: "Software Design Pattern", theory: 3, lab: 0, prereq: "" },
                { code: "CSC-323", course: "Formal Methods", theory: 3, lab: 0, prereq: "" },
                { code: "CSC-422", course: "Software Testing", theory: 2, lab: 1, prereq: "CSC-225" },
                { code: "CSC-423", course: "Software Reliability Engineering", theory: 2, lab: 1, prereq: "CSC-225" }
            ]
        },
        {
            category: "Smart Agricultural Technologies",
            courses: [
                { code: "AGR-170", course: "Basics of Agriculture", theory: 3, lab: 0, prereq: "" },
                { code: "MGT-3XX", course: "Commercialization of Agricultural Products", theory: 3, lab: 0, prereq: "" },
                { code: "AGR-3xx", course: "Introduction to Smart Farming", theory: 3, lab: 0, prereq: "" },
                { code: "MGT-3xx", course: "Agricultural Economics", theory: 3, lab: 0, prereq: "AGR-170" }
            ]
        },
        {
            category: "General Electives",
            courses: [
                { code: "CSC-330", course: "Web Application Development", theory: 2, lab: 1, prereq: "" },
                { code: "CSC-326", course: "Object Oriented Analysis and Design", theory: 3, lab: 0, prereq: "" },
                { code: "CSC-331", course: "Mobile Application Development", theory: 2, lab: 1, prereq: "CSC-130" },
                { code: "CSC-480", course: "Enterprise Application Development", theory: 2, lab: 1, prereq: "" },
                { code: "CSC-331", course: "Software Automation", theory: 3, lab: 0, prereq: "" },
                { code: "CSC-431", course: "Game Development", theory: 2, lab: 1, prereq: "" },
                { code: "CSC-422", course: "AR/VR Systems", theory: 2, lab: 1, prereq: "" },
                { code: "CSC-327", course: "Design Pattern", theory: 3, lab: 0, prereq: "" },
                { code: "CSC-328", course: "Multimedia Design and Development", theory: 2, lab: 1, prereq: "" },
                { code: "CSC-340", course: "Simulation and Modelling", theory: 2, lab: 1, prereq: "" },
                { code: "CSC-335", course: "UI/UX Development", theory: 2, lab: 1, prereq: "" }
            ]
        }
    ];

    const facultyData = [
        {
            name: "Dr. Malik M Ali Shahid",
            position: "ASSOCIATE PROFESSOR / HOD",
            department: "Department of Computer Science",
            education: "PhD (UTM, Malaysia)",
            image: "/images/CSDEPARTMENT/HOD.png"
        },
        {
            name: "Dr. Khawar Khurshid",
            position: "Professor",
            department: "Department of Computer Science",
            education: "PhD(MSU, USA)",
            image: "/images/CSDEPARTMENT/KHAWAR.png"
        },
        {
            name: "Dr. Mudassar Raza",
            position: "Professor",
            department: "Department of Computer Science",
            education: "PhD(USTC, China)",
            image: "/images/CSDEPARTMENT/MUDASSAR.png"
        },
        {
            name: "Dr. Shafiq Ur Rehman Khan",
            position: "Assistant Professor",
            department: "Department of Computer Science",
            education: "PhD(CUST, Pakistan)",
            image: "/images/CSDEPARTMENT/SHAFIQ.png"
        },
        {
            name: "Dr. Muzamil Ahmed",
            position: "Assistant Professor",
            department: "Department of Computer Science",
            education: "PhD(COMSATS, Pakistan)",
            image: "/images/CSDEPARTMENT/MUZAMIL.png"
        },
        {
            name: "MR. ADNAN BASHIR",
            position: "LECTURER",
            department: "Department of Computer Science",
            education: "MS (UOL, Pakistan)",
            image: "/images/CSDEPARTMENT/ADNANBASHIR.png"
        },
        {
            name: "Mr. Shahzad Arif",
            position: "LECTURER",
            department: "Department of Computer Science",
            education: "MS (UET Taxila, Pakistan)",
            image: "/images/CSDEPARTMENT/SHEHZAD.png"
        },
        {
            name: "Mr. Abdul Rafay",
            position: "Lecturer",
            department: "Department of Computer Science",
            education: "MS(FAST, Pakistan)",
            image: "/images/CSDEPARTMENT/RAFAY.png"
        },
        {
            name: "Mr. M. Ramzan Shahid",
            position: "Lecturer",
            department: "Department of Computer Science",
            education: "MS (GIKI, Pakistan)",
            image: "/images/CSDEPARTMENT/RAMZAN.png"
        },
        {
            name: "MS. Asiya Batool",
            position: "Lecturer",
            department: "Department of Computer Science",
            education: "MS (PIEAS, Islamabad)",
            image: "/images/CSDEPARTMENT/ASIYA.png"
        },
        {
            name: "Mr. Muhammad Bilal",
            position: "Lecturer",
            department: "Department of Computer Science",
            education: "MS (UOS, Pakistan)",
            image: "/images/CSDEPARTMENT/BILAL.png"
        },
        {
            name: "Ms. Sonia Safeer",
            position: "Lecturer",
            department: "Department of Computer Science",
            education: "MS (GIKI, Pakistan)",
            image: "/images/CSDEPARTMENT/SONIA.png"
        },
        {
            name: "Mr. Ammar Ahmad",
            position: "Lab Engineer",
            department: "Department of Computer Science",
            education: "Ph.D (HITEC, Taxila)",
            image: "/images/CSDEPARTMENT/AMMAR.jpeg"
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
                            <li className="pl-4 -ml-[2px] border-l-2 border-yellow-500">
                                <Link to="/departments/computer-science" className="text-yellow-500 font-bold">
                                    Department of Computer Science
                                </Link>
                            </li>
                            <li className="pl-4">
                                <Link to="/departments/bba" className="text-gray-500 hover:text-yellow-500 font-bold transition-colors">
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
                            <span className="text-gray-800">Department of Computer Science</span>
                        </div>
                    </div>

                    {/* Hero Section */}
                    <div className="px-8 py-8">
                        <div className="flex justify-center">
                            <div className="w-full max-w-5xl">
                                <img
                                    src="/images/CSDEPARTMENT/cs_banner.svg"
                                    alt="Computer Science Banner"
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
                                    Computer Science concentrates on the theoretical foundations of computation and computer technology. It incorporates ideas from many other disciplines, including mathematics, engineering, humanities, management sciences and graphical design and has a close affinity with electronic communications as illustrated by the Internet and World Wide Web.
                                </p>
                                <p className="text-[16px]">
                                    The aim of the program is to provide you with a sound grounding in the fundamentals of computer software development (programming) and the tools and applications that modern computer scientists use.
                                </p>
                            </div>
                        )}

                        {activeTab === 'vision' && (
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl">
                                <section className="mb-10">
                                    <h2 className="text-[30px] font-bold text-gray-900 mb-3 uppercase tracking-tight">Vision</h2>
                                    <p className="text-[16px]">
                                        To emerge as a center of excellence in Computing and technology through quality education and impactful research.
                                    </p>
                                </section>

                                <hr className="my-10 border-gray-300" />

                                <section>
                                    <h2 className="text-[30px] font-bold text-gray-900 mb-6 uppercase tracking-tight">Mission</h2>
                                    <p className="text-[16px] font-bold mb-4 uppercase tracking-wider text-xs">The department of Computer Science (CS) is committed to the following goals:</p>
                                    <ul className="list-disc list-outside ml-6 space-y-4 text-[16px] font-medium">
                                        <li>To provide quality education and research opportunities.</li>
                                        <li>To empower graduates to take on local and global societal challenges.</li>
                                        <li>To instill in them the ability to be lifelong learners, critical thinkers, effective communicators, and people with strong moral values.</li>
                                    </ul>
                                </section>
                            </div>
                        )}

                        {activeTab === 'peos' && (
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl">
                                <h2 className="text-[30px] font-bold text-gray-900 mb-6 uppercase tracking-tight underline cursor-default decoration-yellow-400 decoration-4 underline-offset-8">Program Objectives</h2>
                                <p className="text-[16px] text-gray-700 mb-8 font-medium">The aim of the program is to provide you with a sound grounding in the fundamentals of Computing. The objective of the program is to groom students in such a way that they can:</p>
                                <div className="space-y-6 mb-16">
                                    {[
                                        { id: "PO-1", text: "Inculcate computing knowledge, analytical skills and creativity to design optimal solutions." },
                                        { id: "PO-2", text: "Instill effective communication and interpersonal skills along with leadership qualities." },
                                        { id: "PO-3", text: "Foster moral and ethical values with a keen sense of societal responsibility and life-long commitment to learning." }
                                    ].map((po, i) => (
                                        <div key={i} className="flex gap-4 items-start">
                                            <span className="font-black text-gray-900 min-w-[80px] uppercase">{po.id}:</span>
                                            <p className="text-[16px] text-gray-700 font-medium leading-relaxed">{po.text}</p>
                                        </div>
                                    ))}
                                </div>

                                <h2 className="text-[30px] font-bold text-gray-900 mb-8 uppercase tracking-tight underline decoration-yellow-400 underline-offset-8 decoration-4">Graduate Attributes</h2>
                                <div className="space-y-6">
                                    {[
                                        { id: "GA-1", title: "Academic Education", text: "To prepare graduates as computing professionals." },
                                        { id: "GA-2", title: "Knowledge for Solving Computing Problems", text: "Apply knowledge of computing fundamentals, knowledge of a computing specialization, and mathematics, science, and domain knowledge appropriate for the computing specialization to the 16 abstraction and conceptualization of computing models from defined problems and requirements." },
                                        { id: "GA-3", title: "Problem Analysis", text: "Identify, formulate, research literature, and solve complex computing problems reaching substantiated conclusions using fundamental principles of mathematics, computing sciences, and relevant domain disciplines." },
                                        { id: "GA-4", title: "Design/ Development of Solutions", text: "Design and evaluate solutions for complex computing problems, and design and evaluate systems, components, or processes that meet specified needs with appropriate consideration for public health and safety, cultural, societal, and environmental considerations." },
                                        { id: "GA-5", title: "Modern Tool Usage", text: "Create, select, adapt and apply appropriate techniques, resources, and modern computing tools to complex computing activities, with an understanding of the limitations." },
                                        { id: "GA-6", title: "Individual and Teamwork", text: "Function effectively as an individual and as a member or leader in diverse teams and in multi-disciplinary settings" },
                                        { id: "GA-7", title: "Communication", text: "Communicate effectively with the computing community and with society at large about complex computing activities by being able to comprehend and write effective reports, design documentation, make effective presentations, and give and understand clear instructions" },
                                        { id: "GA-8", title: "Computing Professionalism and Society", text: "Understand and assess societal, health, safety, legal and cultural issues within local and global contexts, and the consequential responsibilities relevant to professional computing practice." },
                                        { id: "GA-9", title: "Ethics", text: "Understand and commit to professional ethics, responsibilities, and norms of professional computing practice." },
                                        { id: "GA-10", title: "Life-long Learning", text: "Recognize the need, and have the ability, to engage in independent learning for continual development as a computing professional" }
                                    ].map((ga, i) => (
                                        <div key={i} className="group border-b border-gray-200 pb-4">
                                            <h4 className="font-black text-gray-900 group-hover:text-yellow-500 transition-colors uppercase tracking-tight text-lg mb-1">{ga.id} - {ga.title}</h4>
                                            <p className="text-gray-600 font-medium leading-relaxed">{ga.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'scheme' && (
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <h2 className="text-[30px] font-bold text-gray-900 mb-2 uppercase tracking-tight">Scheme of Studies</h2>
                                <p className="text-2xl text-yellow-500 mb-10 font-black tracking-tight">Total Credit Hours = 133</p>

                                {semestersData.map((sem) => (
                                    <div key={sem.semester} className="mb-12 overflow-hidden rounded-xl border border-gray-300 shadow-sm">
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

                                <div className="mt-20 pt-16 border-t-8 border-yellow-400">
                                    <h2 className="text-[30px] font-bold text-gray-900 mb-12 tracking-tight uppercase">Elective Courses</h2>
                                    {electivesData.map((cat, idx) => (
                                        <div key={idx} className="mb-12 overflow-hidden rounded-2xl border border-gray-300 shadow-sm">
                                            <div className="bg-black text-white px-8 py-5 font-black text-2xl uppercase italic tracking-widest">
                                                {cat.category}
                                            </div>
                                            <table className="w-full">
                                                <thead className="bg-gray-700 text-white uppercase text-xs font-black">
                                                    <tr>
                                                        <th className="px-8 py-4 text-left border-r border-gray-600 w-32 uppercase tracking-widest">Code</th>
                                                        <th className="px-8 py-4 text-left border-r border-gray-600 uppercase tracking-widest">Course</th>
                                                        <th className="px-8 py-4 text-center border-r border-gray-600 w-32 uppercase tracking-widest">Credit Hours</th>
                                                        <th className="px-8 py-4 text-left uppercase tracking-widest">Pre-req</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {cat.courses.map((course, i) => (
                                                        <tr key={i} className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                                                            <td className="px-8 py-4 font-black text-gray-900 border-r border-gray-300">{course.code}</td>
                                                            <td className="px-8 py-4 text-gray-700 font-bold border-r border-gray-300">{course.course}</td>
                                                            <td className="px-8 py-4 text-center text-gray-900 font-black border-r border-gray-300">
                                                                {course.theory}{course.lab !== undefined ? `+${course.lab}` : ''}
                                                            </td>
                                                            <td className="px-8 py-4 text-gray-600 italic font-medium">{course.prereq || "—"}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    ))}
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

export default CSDepartment;
