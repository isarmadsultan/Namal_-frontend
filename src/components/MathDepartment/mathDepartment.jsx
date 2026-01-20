import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MathDepartment = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const semestersData = [
        {
            semester: 1,
            totalTheory: 15,
            totalLab: 1,
            courses: [
                { code: "MTH-121", course: "Calculus I", theory: 3, lab: 0, prereq: "" },
                { code: "MTH-124", course: "Probability and Statistics I", theory: 3, lab: 0, prereq: "" },
                { code: "ENG-110", course: "Functional English", theory: 3, lab: 0, prereq: "" },
                { code: "CS-100", course: "Quantitative and Computational Reasoning", theory: 3, lab: 1, prereq: "" },
                { code: "SS-102", course: "Islamic Studies and Ethics", theory: 3, lab: 0, prereq: "" },
                { code: "QS-110", course: "Quranic Studies I", theory: 0, lab: 0, prereq: "" }
            ]
        },
        {
            semester: 2,
            totalTheory: 17,
            totalLab: 1,
            courses: [
                { code: "MTH-126", course: "Calculus II", theory: 3, lab: 0, prereq: "MTH-121" },
                { code: "MTH-123", course: "Linear Algebra I", theory: 3, lab: 0, prereq: "" },
                { code: "SS-106", course: "Iqbaliyat", theory: 2, lab: 0, prereq: "" },
                { code: "ENG-111", course: "Technical Writing and Communication", theory: 3, lab: 0, prereq: "" },
                { code: "CS-129", course: "Introduction to Programming", theory: 3, lab: 1, prereq: "" },
                { code: "SS-103", course: "Pakistan Studies", theory: 3, lab: 0, prereq: "" },
                { code: "QS-120", course: "Quranic Studies II", theory: 0, lab: 0, prereq: "" }
            ]
        },
        {
            semester: 3,
            totalTheory: 17,
            totalLab: 1,
            courses: [
                { code: "MTH-225", course: "Calculus III", theory: 3, lab: 0, prereq: "MTH-121, 126" },
                { code: "MTH-422", course: "Discrete Mathematics", theory: 3, lab: 0, prereq: "" },
                { code: "MTH-221", course: "Ordinary Differential Equations", theory: 3, lab: 0, prereq: "MTH-121, 126" },
                { code: "GS-100", course: "Principles of Science", theory: 3, lab: 0, prereq: "" },
                { code: "PHY-121", course: "Physics I", theory: 3, lab: 1, prereq: "" },
                { code: "SS-104", course: "Great Books", theory: 2, lab: 0, prereq: "" },
                { code: "QS-230", course: "Quranic Studies III", theory: 0, lab: 0, prereq: "" }
            ]
        },
        {
            semester: 4,
            totalTheory: 15,
            totalLab: 1,
            courses: [
                { code: "MTH-231", course: "Real Analysis 1", theory: 3, lab: 0, prereq: "" },
                { code: "MTH-224", course: "Algebra-I (Group Theory)", theory: 3, lab: 0, prereq: "" },
                { code: "MTH-431", course: "Probability and Statistics II", theory: 3, lab: 0, prereq: "" },
                { code: "PHY-122", course: "Physics II", theory: 3, lab: 1, prereq: "" },
                { code: "ENG-112", course: "Creative Rhetoric and Writing", theory: 3, lab: 0, prereq: "" },
                { code: "QS-240", course: "Quranic Studies IV", theory: 0, lab: 0, prereq: "" }
            ]
        },
        {
            semester: 5,
            totalTheory: 15,
            totalLab: 0,
            courses: [
                { code: "MTH-331", course: "Real analysis II", theory: 3, lab: 0, prereq: "MTH-231" },
                { code: "MTH-232", course: "Numerical Methods", theory: 3, lab: 0, prereq: "" },
                { code: "ELE-1", course: "Elective 1", theory: 3, lab: 0, prereq: "" },
                { code: "MTH-323", course: "Affine and Euclidean Geometry", theory: 3, lab: 0, prereq: "" },
                { code: "ENG-113", course: "Oral Communication/Foreign Language", theory: 3, lab: 0, prereq: "" }
            ]
        },
        {
            semester: 6,
            totalTheory: 15,
            totalLab: 0,
            courses: [
                { code: "MTH-321", course: "Complex Variables", theory: 3, lab: 0, prereq: "MTH-121" },
                { code: "MTH-434", course: "Introduction to Linear Programming and Optimization", theory: 3, lab: 0, prereq: "" },
                { code: "ELE-2", course: "Elective II", theory: 3, lab: 0, prereq: "" },
                { code: "SS-101", course: "Introduction to Philosophy", theory: 3, lab: 0, prereq: "" },
                { code: "MTH-322", course: "Algebra II (Ring Theory)", theory: 3, lab: 0, prereq: "" }
            ]
        },
        {
            semester: 7,
            totalTheory: 15,
            totalLab: 0,
            courses: [
                { code: "MTH-421", course: "Topology", theory: 3, lab: 0, prereq: "" },
                { code: "SS-112", course: "Introduction to Psychology", theory: 3, lab: 0, prereq: "" },
                { code: "MTH-332", course: "Partial Differential Equations", theory: 3, lab: 0, prereq: "MTH-221" },
                { code: "ELE-3", course: "Elective III", theory: 3, lab: 0, prereq: "" },
                { code: "MTH-450", course: "Project 1", theory: 3, lab: 0, prereq: "" }
            ]
        },
        {
            semester: 8,
            totalTheory: 15,
            totalLab: 0,
            courses: [
                { code: "MGT/ECO", course: "Introduction to Accounting and Finance/ Economics", theory: 3, lab: 0, prereq: "" },
                { code: "MTH-334", course: "Functional Analysis", theory: 3, lab: 0, prereq: "" },
                { code: "MTH-333", course: "Differential Geometry", theory: 3, lab: 0, prereq: "" },
                { code: "ELE-4", course: "Elective IV", theory: 3, lab: 0, prereq: "" },
                { code: "MTH-451", course: "Project 2", theory: 3, lab: 0, prereq: "" }
            ]
        }
    ];

    const specializationData = [
        {
            category: "Data Science Specialization",
            courses: [
                { code: "CS-360", course: "Introduction to Data Science", credit: 3 },
                { code: "CS-230", course: "Data Structures and Algorithms", credit: 3 },
                { code: "MTH-313", course: "Linear Statistical Models", credit: 3 },
                { code: "CS-350", course: "Machine Learning", credit: 3 },
                { code: "CS-361", course: "Data Mining", credit: 3 },
                { code: "CS-354", course: "Computer Vision", credit: 3 },
                { code: "CS-359", course: "Time Series Analysis", credit: 3 },
                { code: "DAN-448", course: "Econometrics", credit: 3 },
                { code: "MTH-319", course: "Stochastic Processes", credit: 3 },
                { code: "MTH-320", course: "Numerical Linear Algebra", credit: 3 },
                { code: "MTH-324", course: "Mathematical Modelling", credit: 3 },
                { code: "MTH-325", course: "Image Processing", credit: 3 },
                { code: "CS-232", course: "Database Systems", credit: 3 },
                { code: "CS-310", course: "Data Analysis and Visualization", credit: 3 }
            ]
        },
        {
            category: "Pure Mathematics Specialization",
            courses: [
                { code: "MTH-328", course: "Linear Algebra II", credit: 3 },
                { code: "MTH-348", course: "Matrix Analysis", credit: 3 },
                { code: "MTH-349", course: "Graph Theory", credit: 3 },
                { code: "MTH-350", course: "Measure Theory", credit: 3 },
                { code: "MTH-351", course: "Lie Algebra", credit: 3 },
                { code: "MTH-352", course: "History of Mathematics", credit: 3 },
                { code: "MTH-353", course: "Algebraic Topology", credit: 3 },
                { code: "MTH-354", course: "Convex Analysis", credit: 3 },
                { code: "MTH-355", course: "Advanced Functional Analysis", credit: 3 },
                { code: "MTH-356", course: "Advanced Group Theory", credit: 3 }
            ]
        },
        {
            category: "Applied and Computational Mathematics Specialization",
            courses: [
                { code: "MTH-328", course: "Linear Algebra II", credit: 3 },
                { code: "MTH-329", course: "Exact Solutions of Dynamical System", credit: 3 },
                { code: "PHY-131", course: "Electricity and Magnetism", credit: 3 },
                { code: "PHY-301", course: "Introduction to Quantum Physics", credit: 3 },
                { code: "PHY-336", course: "Mathematical Physics", credit: 3 },
                { code: "PHY-337", course: "Statistical Physics", credit: 3 },
                { code: "PHY-338", course: "Computational Physics", credit: 3 },
                { code: "PHY-339", course: "Condensed Matter Physics I", credit: 3 },
                { code: "PHY-340", course: "Condensed Matter Physics II", credit: 3 },
                { code: "MTH-320", course: "Numerical Linear Algebra", credit: 3 },
                { code: "MTH-324", course: "Mathematical Modelling", credit: 3 },
                { code: "MTH-341", course: "Approximation Theory", credit: 3 },
                { code: "MTH-342", course: "Mathematical Biology", credit: 3 },
                { code: "MTH-343", course: "Dynamical Systems", credit: 3 },
                { code: "MTH-344", course: "Applications of Non-Linear Waves", credit: 3 },
                { code: "MTH-345", course: "Lie Symmetry Analysis", credit: 3 },
                { code: "MTH-346", course: "Solitary Wave Solutions", credit: 3 },
                { code: "MTH-347", course: "Theory of Ordinary Differential Equations", credit: 3 }
            ]
        }
    ];

    const facultyData = [
        {
            name: "Dr. Rashid Mahmood",
            position: "Professor / HoD",
            department: "Department of Mathematics",
            education: "PhD(Tu Dortmund, Germany)",
            image: "/images/mathdepartment/RASHID.png"
        },
        {
            name: "Dr. Muhammad Rafiq",
            position: "Professor",
            department: "Department of Mathematics",
            education: "PhD(UET, Pakistan)",
            image: "/images/mathdepartment/RAFIQ.png"
        },
        {
            name: "DR. ISRAR ALI KHAN",
            position: "Associate PROFESSOR",
            department: "Department of Mathematics",
            education: "PhD (SU, China)",
            image: "/images/mathdepartment/ISRAR.png"
        },
        {
            name: "Dr. Sami Ullah Khan",
            position: "Associate PROFESSOR",
            department: "Department of Mathematics",
            education: "PhD (IIUI, Pakistan)",
            image: "/images/mathdepartment/SAMI.png"
        },
        {
            name: "DR. ZIA UR REHMAN",
            position: "ASSISTANT PROFESSOR",
            department: "Department of Mathematics",
            education: "PhD (UTP, Malaysia)",
            image: "/images/mathdepartment/ZIA.png"
        },
        {
            name: "Dr. Awais Shaukat",
            position: "Assistant Professor",
            department: "Department of Mathematics",
            education: "PhD(GCU, Pakistan)",
            image: "/images/mathDepartment/awais.png"
        },
        {
            name: "Dr. Samia Bibi",
            position: "Assistant Professor",
            department: "Department of Mathematics",
            education: "PhD(USM, Malaysia)",
            image: "/images/mathdepartment/SAMIA.png"
        },
        {
            name: "MS. FAIQA ALI",
            position: "SENIOR LECTURER",
            department: "Department of Mathematics",
            education: "MS (COMSATS, Pakistan)",
            image: "/images/mathdepartment/FAIQA.png"
        },
        {
            name: "Ms. Tazeen Ayesha",
            position: "Lecturer",
            department: "Department of Mathematics",
            education: "MS(NUST, Pakistan)",
            image: "/images/mathdepartment/TAZEEN.png"
        },
        {
            name: "Ms. Asma Raza",
            position: "Lecturer",
            department: "Department of Mathematics",
            education: "MS(Comsats, Pakistan)",
            image: "/images/mathdepartment/ASMA.png"
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
                            <li className="pl-4">
                                <Link to="/departments/bba" className="text-gray-500 hover:text-yellow-500 font-bold transition-colors">
                                    Department of Business Studies
                                </Link>
                            </li>
                            <li className="pl-4 -ml-[2px] border-l-2 border-yellow-500">
                                <Link to="/departments/math" className="text-yellow-500 font-bold">
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
                            <span className="text-gray-800">Department of Mathematics</span>
                        </div>
                    </div>

                    {/* Hero Section */}
                    <div className="px-8 py-8">
                        <div className="flex justify-center">
                            <div className="w-full max-w-5xl">
                                <img
                                    src="/images/mathdepartment/math_banner.svg"
                                    alt="Mathematics Banner"
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
                                <p className="text-[16px]">
                                    BS Mathematics is a 4-year degree program accredited by Higher Education Commission (HEC). The overall purpose of this program is to serve as the foundation of advancements in the areas of mathematics and to introduce the students with the fundamentals of the core mathematics to prepare them for the emerging future of the mathematics area. However, we aim to set benchmark in producing the most efficient and proficient graduates.
                                </p>
                            </div>
                        )}

                        {activeTab === 'vision' && (
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl">
                                <section className="mb-10">
                                    <h2 className="text-[30px] font-bold text-gray-900 mb-3 uppercase tracking-tight">Vision</h2>
                                    <p className="text-[16px]">
                                        To provide an environment where students can learn analytical and quantitative reasoning skills and promote Mathematical thinking as a significant part of human thought.
                                    </p>
                                </section>

                                <hr className="my-10 border-gray-300" />

                                <section>
                                    <h2 className="text-[30px] font-bold text-gray-900 mb-6 uppercase tracking-tight">Mission</h2>
                                    <p className="text-[16px] text-gray-800 font-bold mb-4">The department of Mathematics is committed to the following goals:</p>
                                    <ul className="list-disc list-outside ml-6 space-y-4 text-[16px] text-gray-700 font-medium">
                                        <li>Develop skills and abilities to discuss and implement mathematical ideas effectively to solve practical problems.</li>
                                        <li>Impart the capacity to become an independent learner, critical thinker, and problem solver who can make effective contribution to the society.</li>
                                        <li>Provide an ideal environment for the continued growth of faculty members with the meaningful research.</li>
                                    </ul>
                                </section>
                            </div>
                        )}

                        {activeTab === 'peos' && (
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl">
                                <h2 className="text-[30px] font-bold text-gray-900 mb-6 uppercase tracking-tight underline decoration-yellow-400 decoration-4 underline-offset-8">Program Educational Objectives</h2>
                                <p className="text-[16px] text-gray-800 font-bold mb-4">Objectives of the BS (Math) programme are:</p>
                                <ul className="list-disc list-outside ml-6 space-y-4 text-[16px] text-gray-700 font-medium">
                                    <li>To develop the ability to its students to discuss mathematical ideas effectively and to use these skills to solve practical problems.</li>
                                    <li>To impart the capacity to become an independent learner, critical thinker and problem-solver.</li>
                                    <li>To provide an ideal environment for the continued growth of faculty members with meaningful research.</li>
                                </ul>
                            </div>
                        )}

                        {activeTab === 'scheme' && (
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <h2 className="text-[30px] font-bold text-gray-900 mb-2 uppercase tracking-tight">Scheme of Studies</h2>
                                <p className="text-2xl text-yellow-500 mb-10 font-black tracking-tight">Total Credit Hours = 128</p>

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

                                <div className="mt-20 pt-16 border-t-8 border-yellow-400">
                                    <h2 className="text-[30px] font-bold text-gray-900 mb-12 tracking-tight uppercase">Specializations</h2>
                                    {specializationData.map((spec, idx) => (
                                        <div key={idx} className="mb-12 overflow-hidden rounded-lg border border-gray-300 shadow-sm">
                                            <div className="bg-black text-white px-8 py-5 font-black text-2xl uppercase italic tracking-widest">
                                                {spec.category}
                                            </div>
                                            <table className="w-full">
                                                <thead className="bg-gray-700 text-white uppercase text-xs font-black">
                                                    <tr>
                                                        <th className="px-8 py-4 text-left border-r border-gray-600 w-32">Code</th>
                                                        <th className="px-8 py-4 text-left border-r border-gray-600">Major Course Title</th>
                                                        <th className="px-8 py-4 text-center w-32">Credit Hours</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {spec.courses.map((course, i) => (
                                                        <tr key={i} className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                                                            <td className="px-8 py-4 font-black text-gray-900 border-r border-gray-300">{course.code}</td>
                                                            <td className="px-8 py-4 text-gray-700 font-bold border-r border-gray-300">{course.course}</td>
                                                            <td className="px-8 py-4 text-center text-gray-900 font-black">{course.credit}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-12 p-10 border border-gray-300 italic text-gray-600 text-base leading-relaxed">
                                    <p className="font-black text-gray-900 uppercase tracking-widest mb-4 border-b border-gray-200 pb-2">Disclaimer:</p>
                                    The details of the program specification and information contained herein are subject to change in accordance with the policies, rules and regulations of the Namal Institute, Mianwali. Such changes will be notified to the enrolled students through email. Course offerings also depend on the availability of faculty of the subject area.
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

export default MathDepartment;
