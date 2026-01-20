import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ElectricalDepartment = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const semestersData = [
        {
            semester: 1,
            totalTheory: 15,
            totalLab: 3,
            courses: [
                { code: "MTH-121", course: "Calculus I", theory: 3, lab: 0, prereq: "" },
                { code: "GED-101", course: "Functional English", theory: 3, lab: 0, prereq: "" },
                { code: "GED-122", course: "Great Books: Our and the World's", theory: 2, lab: 0, prereq: "" },
                { code: "GED-161", course: "Applications of Information and Communication Technologies (ICT)", theory: 2, lab: 1, prereq: "" },
                { code: "GED-162", course: "Quantitative & Computational Reasoning I", theory: 2, lab: 1, prereq: "" },
                { code: "EEN-111", course: "Basic Circuit Analysis & Design", theory: 3, lab: 1, prereq: "" }
            ]
        },
        {
            semester: 2,
            totalTheory: 13,
            totalLab: 4,
            courses: [
                { code: "GED-141", course: "Applied Physics", theory: 2, lab: 1, prereq: "" },
                { code: "GED-163", course: "Quantitative & Computational Reasoning II", theory: 2, lab: 1, prereq: "GED-162" },
                { code: "GED-201", course: "Expository Writing", theory: 3, lab: 0, prereq: "" },
                { code: "EEN-112", course: "Electrical Network Analysis & Design", theory: 3, lab: 1, prereq: "EEN-111" },
                { code: "EEN-113", course: "Engineering Workshop", theory: 0, lab: 1, prereq: "" },
                { code: "MTH-222", course: "Differential Equations", theory: 3, lab: 0, prereq: "" }
            ]
        },
        {
            semester: 3,
            totalTheory: 14,
            totalLab: 4,
            courses: [
                { code: "EEN-215", course: "Engineering Drawing", theory: 0, lab: 1, prereq: "" },
                { code: "EEN-214", course: "Electronic Devices & Circuits", theory: 3, lab: 1, prereq: "EEN-112" },
                { code: "MTH-321", course: "Complex Variables & Transforms", theory: 3, lab: 0, prereq: "MTH-121" },
                { code: "EEN-221", course: "Electric Machines", theory: 3, lab: 1, prereq: "" },
                { code: "CSC-101", course: "Object Oriented Programming", theory: 3, lab: 1, prereq: "GED-163" },
                { code: "GED-211", course: "Civics and Community Engagement", theory: 2, lab: 0, prereq: "" }
            ]
        },
        {
            semester: 4,
            totalTheory: 15,
            totalLab: 3,
            courses: [
                { code: "EEN-216", course: "Digital Logic Design", theory: 3, lab: 1, prereq: "" },
                { code: "EEN-217", course: "Signal & Systems", theory: 3, lab: 1, prereq: "MTH-321" },
                { code: "EEN-218", course: "Probability Methods in Engineering", theory: 3, lab: 0, prereq: "" },
                { code: "EEN-222", course: "Introduction to Power Engineering", theory: 3, lab: 1, prereq: "" },
                { code: "*Math Elective*", course: "", theory: 3, lab: 0, prereq: "" }
            ]
        },
        {
            semester: 5,
            totalTheory: 14,
            totalLab: 4,
            courses: [
                { code: "CSC-200", course: "Data Structures & Algorithms", theory: 2, lab: 1, prereq: "" },
                { code: "EEN-319", course: "Electromagnetic Theory", theory: 3, lab: 0, prereq: "" },
                { code: "EEN-323", course: "Control Systems", theory: 3, lab: 1, prereq: "" },
                { code: "EEN-324", course: "Digital Signal Processing", theory: 3, lab: 1, prereq: "EEN-217" },
                { code: "EEN-325", course: "Microprocessor Based Embedded Systems", theory: 3, lab: 1, prereq: "EEN-216" }
            ]
        },
        {
            semester: 6,
            totalTheory: 14,
            totalLab: 4,
            courses: [
                { code: "EEN-326", course: "Communication Systems", theory: 3, lab: 1, prereq: "EEN-217" },
                { code: "EEN-331", course: "Machine Learning", theory: 2, lab: 1, prereq: "" },
                { code: "**Elective – I", course: "", theory: 3, lab: 1, prereq: "" },
                { code: "EEN-327", course: "Power Electronics", theory: 3, lab: 1, prereq: "EEN-214" },
                { code: "MGT-418", course: "Project Management", theory: 2, lab: 0, prereq: "" },
                { code: "EEN-301", course: "Occupational Health and Safety", theory: 1, lab: 0, prereq: "" }
            ]
        },
        {
            semester: 7,
            totalTheory: 10,
            totalLab: 5,
            courses: [
                { code: "GED-251", course: "Entrepreneurship", theory: 2, lab: 0, prereq: "" },
                { code: "GED-136", course: "Iqbaliyat", theory: 2, lab: 0, prereq: "" },
                { code: "QUR-171", course: "Quranic Studies I", theory: "NC", lab: 0, prereq: "" },
                { code: "**Elective – II", course: "", theory: 3, lab: 1, prereq: "" },
                { code: "**Elective – III", course: "", theory: 3, lab: 1, prereq: "" },
                { code: "EEN-498", course: "Final Year Project – I", theory: 0, lab: 3, prereq: "" }
            ]
        },
        {
            semester: 8,
            totalTheory: 10,
            totalLab: 4,
            courses: [
                { code: "GED-113", course: "Ideology and Constitution of Pakistan", theory: 2, lab: 0, prereq: "" },
                { code: "GED-11X", course: "Islamic Studies or Ethics", theory: 2, lab: 0, prereq: "" },
                { code: "QUR-172", course: "Quranic Studies II", theory: "NC", lab: 0, prereq: "" },
                { code: "**Elective – IV", course: "", theory: 3, lab: 1, prereq: "" },
                { code: "**Elective – V", course: "", theory: 3, lab: 0, prereq: "" },
                { code: "EEN-499", course: "Final Year Project – II", theory: 0, lab: 3, prereq: "" }
            ]
        }
    ];

    const electivesData = [
        {
            category: "Artificial Intelligence and Machine Learning",
            courses: [
                { code: "EEN-450", course: "Artificial Intelligence (AI)", theory: 3, lab: 1, prereq: "" },
                { code: "EEN-451", course: "Database Engineering", theory: 3, lab: 1, prereq: "" },
                { code: "EEN-452", course: "Digital Image Processing (DIP)", theory: 3, lab: 1, prereq: "" },
                { code: "EEN-453", course: "Introduction to Cryptography", theory: 3, lab: 0, prereq: "" },
                { code: "EEN-454", course: "Introduction to Coding Theory", theory: 3, lab: 0, prereq: "" },
                { code: "EEN-455", course: "Deep Learning for Image Analysis and Classification", theory: 3, lab: 1, prereq: "" },
                { code: "EEN-456", course: "Real-Time Machine Learning", theory: 3, lab: 1, prereq: "" }
            ]
        },
        {
            category: "Emerging Hardware Technologies",
            courses: [
                { code: "EEN-460", course: "Internet of Things (IOT)", theory: 3, lab: 1, prereq: "EEN-325" },
                { code: "EEN-461", course: "Emerging Technologies in Wireless Communication", theory: 3, lab: 0, prereq: "EEN-326" },
                { code: "EEN-462", course: "Digital Control Systems", theory: 3, lab: 0, prereq: "EEN-323" },
                { code: "EEN-463", course: "Introduction to Mechatronics", theory: 3, lab: 1, prereq: "EEN-325" },
                { code: "EEN-464", course: "Introduction to Nano-engineering", theory: 3, lab: 0, prereq: "" },
                { code: "EEN-465", course: "Energy Device Characterization", theory: 3, lab: 0, prereq: "" },
                { code: "EEN-466", course: "Parallel and Distributed Systems", theory: 3, lab: 1, prereq: "" },
                { code: "EEN-467", course: "Virtual and Augmented Reality", theory: 3, lab: 1, prereq: "" },
                { code: "EEN-468", course: "Robotics and game design", theory: 3, lab: 1, prereq: "" },
                { code: "EEN-469", course: "Instrumentation and Measurements", theory: 3, lab: 1, prereq: "" }
            ]
        },
        {
            category: "Communication and Networks",
            courses: [
                { code: "EEN-470", course: "Wireless Communication", theory: 3, lab: 0, prereq: "EEN-326" },
                { code: "EEN-471", course: "Data Communication", theory: 3, lab: 1, prereq: "" },
                { code: "EEN-472", course: "Operating Systems", theory: 3, lab: 1, prereq: "" },
                { code: "EEN-473", course: "Network Security", theory: 3, lab: 0, prereq: "" },
                { code: "EEN-474", course: "Computer Architecture", theory: 3, lab: 1, prereq: "" },
                { code: "EEN-475", course: "Antenna Theory and Design", theory: 3, lab: 0, prereq: "" },
                { code: "EEN-476", course: "Computer Communication Networks", theory: 3, lab: 1, prereq: "" },
                { code: "EEN-477", course: "Cloud Computing", theory: 3, lab: 1, prereq: "" }
            ]
        },
        {
            category: "Power (Systems) Engineering",
            courses: [
                { code: "EEN-480", course: "Renewable Energy Systems", theory: 3, lab: 0, prereq: "EEN-222" },
                { code: "EEN-481", course: "Fundamentals of High Voltage Engineering", theory: 3, lab: 0, prereq: "EEN-222" },
                { code: "EEN-482", course: "Power System Analysis", theory: 3, lab: 0, prereq: "EEN-222" },
                { code: "EEN-483", course: "Power System Protection", theory: 3, lab: 0, prereq: "EEN-222" },
                { code: "EEN-484", course: "Smart Grid System", theory: 3, lab: 0, prereq: "EEN-372" },
                { code: "EEN-485", course: "Power System Operation and Control", theory: 3, lab: 0, prereq: "EEN-222" }
            ]
        },
        {
            category: "Integrated Circuits and Electronics",
            courses: [
                { code: "EEN-490", course: "VLSI Design", theory: 3, lab: 1, prereq: "EEN-214" },
                { code: "EEN-491", course: "Integrated Circuit Design", theory: 3, lab: 1, prereq: "EEN-216" },
                { code: "EEN-492", course: "Digital System Design", theory: 3, lab: 1, prereq: "" },
                { code: "EEN-493", course: "Industrial Electronics", theory: 3, lab: 0, prereq: "" },
                { code: "EEN-494", course: "Introduction to Non-linear Control", theory: 3, lab: 0, prereq: "EEN-323" },
                { code: "EEN-495", course: "Microwave Engineering", theory: 3, lab: 1, prereq: "EEN-319" },
                { code: "EEN-496", course: "Secure Processor-based Systems", theory: 3, lab: 1, prereq: "" }
            ]
        }
    ];

    const facultyData = [
        {
            name: "DR. SAMI UD DIN",
            position: "ASSOCIATE PROFESSOR/HOD",
            department: "Department of Electrical Engineering",
            education: "PhD(CUST, Pakistan)",
            image: "/images/ee_departments/eefaculty/sami.png"
        },
        {
            name: "DR. SAJJAD UR REHMAN",
            position: "PROFESSOR",
            department: "Department of Electrical Engineering",
            education: "PhD(KSU, Saudi Arabia)",
            image: "/images/ee_departments/eefaculty/sajjad.png"
        },
        {
            name: "DR. TASSADAQ HUSSAIN",
            position: "PROFESSOR",
            department: "Department of Electrical Engineering",
            education: "PhD (BarcelonaTech, Spain)",
            image: "/images/ee_departments/eefaculty/tassadaq.png"
        },
        {
            name: "DR. WAHAB ALI SHAH",
            position: "ASSISTANT PROFESSOR",
            department: "Department of Electrical Engineering",
            education: "On Leave",
            image: "/images/ee_departments/eefaculty/wahab.png"
        },
        {
            name: "DR. AHMED SALIM",
            position: "ASSISTANT PROFESSOR",
            department: "Department of Electrical Engineering",
            education: "PhD(CAU, Korea)",
            image: "/images/ee_departments/eefaculty/ahmadsalim.png"
        },
        {
            name: "DR. NAUREEN SHAUKAT",
            position: "ASSISTANT PROFESSOR",
            department: "Department of Electrical Engineering",
            education: "PhD( COMSATS, Pakistan)",
            image: "/images/ee_departments/eefaculty/naureen.png"
        },
        {
            name: "DR. M. FARRUKH QURESHI",
            position: "ASSISTANT PROFESSOR",
            department: "Department of Electrical Engineering",
            education: "PhD(RIPHAH, Pakistan)",
            image: "/images/ee_departments/eefaculty/farukh.png"
        },
        {
            name: "MS. ZULAIKHA KIRAN",
            position: "SENIOR LECTURER",
            department: "Department of Electrical Engineering",
            education: "MS (The University of Manchester, UK)",
            image: "/images/ee_departments/eefaculty/zulaikha.png"
        },
        {
            name: "MR. ZAFAR ULLAH",
            position: "LECTURER",
            department: "Department of Electrical Engineering",
            education: "MS(Tampere University, Finland)",
            image: "/images/ee_departments/eefaculty/zafar.png"
        },
        {
            name: "MR. JUNAID ASHRAF",
            position: "LECTURER",
            department: "Department of Electrical Engineering",
            education: "MS(ITU, Pakistan)",
            image: "/images/ee_departments/eefaculty/junaid.png"
        },
        {
            name: "MS. FARKHANDA AZIZ",
            position: "LECTURER",
            department: "Department of Electrical Engineering",
            education: "MS(NUST, Pakistan)",
            image: "/images/ee_departments/eefaculty/farkhanda.jpg"
        },
        {
            name: "MS. TANZEELA NOUREEN",
            position: "LECTURER",
            department: "Department of Electrical Engineering",
            education: "MS(Comsats, Pakistan)",
            image: "/images/ee_departments/eefaculty/tanzeela.png"
        },
        {
            name: "MR. MUHAMMAD IMTIAZ UL HASSAN",
            position: "LAB ENGINEER",
            department: "Department of Electrical Engineering",
            education: "MS(UET, Pakistan)",
            image: "/images/ee_departments/eefaculty/imtiaz.png"
        },
        {
            name: "MR. MAJID ALI",
            position: "LAB ENGINEER",
            department: "Department of Electrical Engineering",
            education: "BS(NAMAL, Pakistan)",
            image: "/images/ee_departments/eefaculty/majid.png"
        },
        {
            name: "MS. SANA PERVEEN",
            position: "LAB ENGINEER",
            department: "Department of Electrical Engineering",
            education: "BS(UET, Pakistan)",
            image: "/images/ee_departments/eefaculty/sana.png"
        },
        {
            name: "MS. ALIZA",
            position: "LAB ENGINEER",
            department: "Department of Electrical Engineering",
            education: "MS(KHA...)",
            image: "/images/ee_departments/eefaculty/aliza.png"
        }
    ];

    const eventsData = [
        {
            date: { day: "31", month: "DEC", year: "2025" },
            type: "News",
            title: "Students Secure Top Positions at ROBO FIESTA 8.0",
            image: "/images/ee_departments/eeimage1.webp"
        },
        {
            date: { day: "30", month: "DEC", year: "2025" },
            type: "Workshop",
            title: "International Guest Lecture Enhances OOP Learning",
            image: "/images/ee_departments/eeimage2.webp"
        },
        {
            date: { day: "24", month: "DEC", year: "2025" },
            type: "News",
            title: "Alumni Talk Series: From Graduation to Design Verification Engineer",
            image: "/images/ee_departments/eeimage3.webp"
        },
        {
            date: { day: "09", month: "DEC", year: "2025" },
            type: "News",
            title: "Namal University FYP Among Finalists at PICS 2025",
            image: "/images/ee_departments/eeimage4.webp"
        },
        {
            date: { day: "29", month: "NOV", year: "2025" },
            type: "News",
            title: "Fiteligence: Real-Time AI-Driven Workout Assistant - Top Rated FYP 2025",
            image: "/images/ee_departments/eeimage5.webp"
        },
        {
            date: { day: "26", month: "NOV", year: "2025" },
            type: "News",
            title: "Expert Talk on Synthetic Medical Data Using AI at Namal University",
            image: "/images/ee_departments/eeimage6.jpg"
        },
        {
            date: { day: "27", month: "OCT", year: "2025" },
            type: "News",
            title: "Namal University Hosts Industrial Advisory Board Meeting to Strengthen Academia-Industry",
            image: "/images/ee_departments/eeimage7.jpg"
        },
        {
            date: { day: "24", month: "OCT", year: "2025" },
            type: "News",
            title: "Alumni Talk Series | Power System Protection by Mr. Zaafran Ullah",
            image: "/images/ee_departments/eeimage8.jpg"
        },
        {
            date: { day: "27", month: "MAY", year: "2025" },
            type: "News",
            title: "Smart Hydroponics: IoT & ML-Driven Sustainable Farming | Best FYP of the Year (2025)",
            image: "/images/ee_departments/eeimage9.webp"
        }
    ];

    return (
        <div className="min-h-screen bg-namal-offwhite">
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
                            <li className="pl-4 -ml-[2px] border-l-2 border-yellow-500">
                                <Link to="/departments/electrical-engineering" className="text-yellow-500 font-bold">
                                    Department of Electrical Engineering
                                </Link>
                            </li>
                            <li className="pl-4">
                                <Link to="/departments/computer-science" className="text-gray-500 hover:text-yellow-500 font-bold transition-colors">
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
                            <span className="text-gray-800">Department of Electrical Engineering</span>
                        </div>
                    </div>

                    {/* Hero Section */}
                    <div className="px-8 py-8">
                        <div className="flex justify-center">
                            <div className="w-full max-w-5xl">
                                <img
                                    src="/images/ee_departments/ee_banner.svg"
                                    alt="Electrical Engineering Banner"
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
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 font-sans">
                                <h2 className="text-[30px] font-bold text-gray-900 mb-6 uppercase tracking-tight">Overview</h2>
                                <div className="max-w-5xl mb-16">
                                    <p className="text-[16px] mb-4 text-justify">
                                        The Department of Electrical Engineering was established to produce quality engineers with the acquired skill set to meet the market demand while offering an undergraduate program of BS in Electrical Engineering. The department has highly qualified faculty with industrial and academic experience and is equipped with state-of-the-art laboratories. The department has a vibrant research environment in which our students are fully immersed.
                                    </p>
                                    <p className="text-lg">
                                        Graduates from the electrical engineering department have solid intellectual foundation for which we offer a broad-based curriculum from which includes Power Systems, Artificial Intelligence, Machine Learning, Integrated Circuits, and Internet of Things (IoT), Renewable Energy Systems, among others.
                                    </p>
                                </div>

                                <div className="mt-20">
                                    <h2 className="text-4xl font-black text-gray-900 mb-4 uppercase tracking-tighter">
                                        Events and Insights
                                    </h2>
                                    <p className="text-lg text-gray-600 mb-12 max-w-4xl font-medium">
                                        The Electrical Engineering Department at Namal University Mianwali is committed to provide excellence in education, research, innovation, embedding technical expertise and critical thinking among students.
                                    </p>

                                    {/* Events Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {eventsData.map((event, idx) => (
                                            <div key={idx} className="bg-white group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border-b border-gray-100 hover:border-transparent">
                                                <div className="relative aspect-[4/3] w-full overflow-hidden">
                                                    <img
                                                        src={event.image}
                                                        alt={event.title}
                                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                    />
                                                    <div className="absolute bottom-0 left-0 bg-[#222] text-white px-4 py-2 text-center min-w-[70px]">
                                                        <div className="text-2xl font-black leading-none tracking-tighter">{event.date.day}</div>
                                                        <div className="text-[10px] font-bold uppercase tracking-widest leading-tight">{event.date.month}</div>
                                                        <div className="text-[10px] font-bold uppercase tracking-widest leading-tight">{event.date.year}</div>
                                                    </div>
                                                </div>
                                                <div className="p-6 pt-6 flex flex-col flex-grow bg-white">
                                                    <span className="text-yellow-500 font-bold text-sm uppercase tracking-wider mb-3 block">{event.type}</span>
                                                    <h3 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-yellow-500 transition-colors line-clamp-3">
                                                        {event.title}
                                                    </h3>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Pagination */}
                                    <div className="flex justify-end items-center mt-12">
                                        <div className="flex items-center bg-white shadow-sm border border-gray-100">
                                            <button className="w-10 h-10 flex items-center justify-center bg-[#333] text-white text-sm font-medium transition-colors">1</button>
                                            <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 text-sm font-medium transition-colors">2</button>
                                            <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 text-sm font-medium transition-colors">3</button>
                                            <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 text-sm font-medium transition-colors">{'>'}</button>
                                            <button className="px-3 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 text-sm font-medium transition-colors border-l border-gray-100">Last ›</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'vision' && (
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl font-sans">
                                <section className="mb-10">
                                    <h2 className="text-[30px] font-bold text-gray-900 mb-3 uppercase tracking-tight">Vision</h2>
                                    <p className="text-[16px]">
                                        The Electrical Engineering Department aims to become a center of excellence in teaching and application-oriented research.
                                    </p>
                                </section>

                                <hr className="my-10 border-gray-300" />

                                <section>
                                    <h2 className="text-[30px] font-bold text-gray-900 mb-6 uppercase tracking-tight">Mission</h2>
                                    <div className="space-y-6">
                                        <p className="text-lg font-medium border-l-4 border-yellow-400 pl-6">
                                            To produce technically competent graduates, excellent communicators, self-accountable, respectful to others, passionate readers, willing to take on challenges, and trustworthy.
                                        </p>
                                        <p className="text-lg font-medium border-l-4 border-gray-300 pl-6">
                                            Further, the department is committed to carry out application-oriented research in technology towards socio-economic development of the rural areas of Pakistan.
                                        </p>
                                    </div>
                                </section>
                            </div>
                        )}

                        {activeTab === 'peos' && (
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl">
                                <h2 className="text-3xl font-extrabold text-gray-900 mb-8 uppercase tracking-tight underline decoration-yellow-400 decoration-4 underline-offset-8">Program Educational Objectives</h2>
                                <div className="space-y-6 mb-16">
                                    {[
                                        { id: "PEO-1", text: "Achieve high standards of excellence in both academia and industry through knowledge, exploration, design, and analysis using innovative tools." },
                                        { id: "PEO-2", text: "Actively tackling issues of environment, society and moral principles as an electrical engineer." },
                                        { id: "PEO-3", text: "Take on leadership position in organization through effective management, teamwork, communication and continuous learning." }
                                    ].map((peo, i) => (
                                        <div key={i} className="flex gap-4 items-start">
                                            <span className="font-bold text-gray-900 min-w-[80px] uppercase text-[16px]">{peo.id}:</span>
                                            <p className="text-[16px] text-gray-700 font-medium leading-relaxed">{peo.text}</p>
                                        </div>
                                    ))}
                                </div>

                                <hr className="my-12 border-gray-200" />

                                <h2 className="text-[30px] font-bold text-gray-900 mb-8 uppercase tracking-tight underline decoration-yellow-400 underline-offset-8 decoration-4 font-sans">Program Learning Outcomes</h2>
                                <div className="grid gap-6">
                                    {[
                                        { id: "PLO-1", title: "Engineering Knowledge", text: "Apply knowledge of mathematics, science, engineering fundamentals and an engineering specialization to the solution of complex engineering problems." },
                                        { id: "PLO-2", title: "Problem Analysis", text: "Identify, formulate, research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences and engineering sciences." },
                                        { id: "PLO-3", title: "Design/Development of Solutions", text: "Design solutions for complex engineering problems and design systems, components or processes that meet specified needs with appropriate consideration for public health and safety, cultural, societal, and environmental considerations." },
                                        { id: "PLO-4", title: "Investigation", text: "Investigate complex engineering problems in a methodical way including literature survey, design and conduct of experiments, analysis and interpretation of experimental data, and synthesis of information to derive valid conclusions." },
                                        { id: "PLO-5", title: "Modern Tool Usage", text: "Create, select and apply appropriate techniques, resources, and modern engineering and IT tools, including prediction and modeling, to complex engineering activities, with an understanding of the limitations." },
                                        { id: "PLO-6", title: "The Engineer and Society", text: "Apply reasoning informed by contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to professional engineering practice and solution to complex engineering problems." },
                                        { id: "PLO-7", title: "Environment and Sustainability", text: "Understand the impact of professional engineering solutions in societal and environmental contexts and demonstrate knowledge of and need for sustainable development." },
                                        { id: "PLO-8", title: "Ethics", text: "Apply ethical principles and commit to professional ethics and responsibilities and norms of engineering practice." }
                                    ].map((plo, i) => (
                                        <div key={i} className="group border-b border-gray-200 pb-4">
                                            <h4 className="font-black text-gray-900 group-hover:text-yellow-500 transition-colors uppercase tracking-tight text-lg mb-1">{plo.id} - {plo.title}</h4>
                                            <p className="text-gray-600 font-medium leading-relaxed">{plo.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'scheme' && (
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 font-sans">
                                <h2 className="text-[30px] font-bold text-gray-900 mb-2 uppercase tracking-tighter">Scheme of Studies</h2>
                                <p className="text-[20px] text-yellow-500 mb-10 font-bold tracking-tight">Total Credit Hours = 136</p>

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

                                <p className="text-gray-500 italic font-medium mb-16">
                                    Note: The courses can be shifted among the semesters according to the availability of resources/facilities.
                                </p>

                                <div className="mt-20 pt-16 border-t-8 border-yellow-400 font-sans">
                                    <h2 className="text-[30px] font-bold text-gray-900 mb-12 tracking-tighter uppercase">Elective Courses</h2>
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
                                                        <th className="px-8 py-4 text-center border-r border-gray-600 w-24 uppercase tracking-widest">Theory</th>
                                                        <th className="px-8 py-4 text-center border-r border-gray-600 w-24 uppercase tracking-widest">Lab</th>
                                                        <th className="px-8 py-4 text-left uppercase tracking-widest">Pre-req</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {cat.courses.map((course, i) => (
                                                        <tr key={i} className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                                                            <td className="px-8 py-4 font-black text-gray-900 border-r border-gray-300">{course.code}</td>
                                                            <td className="px-8 py-4 text-gray-700 font-bold border-r border-gray-300">{course.course}</td>
                                                            <td className="px-8 py-4 text-center text-gray-900 font-black border-r border-gray-300">{course.theory}</td>
                                                            <td className="px-8 py-4 text-center text-gray-900 font-black border-r border-gray-300">{course.lab}</td>
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
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 font-sans">
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

export default ElectricalDepartment;
