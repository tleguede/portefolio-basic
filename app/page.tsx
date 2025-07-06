'use client';

import { useState, useEffect } from 'react';

export default function Page() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [currentProject, setCurrentProject] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading
        setTimeout(() => {
            setIsLoading(false);
            setIsVisible(true);
        }, 1500);
    }, []);

    const projects = [
        {
            name: 'E-Commerce Platform',
            description: 'Full-stack marketplace with real-time chat and payment integration',
            stack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            image: '🛒',
        },
        {
            name: 'Task Management App',
            description: 'Collaborative project management tool with drag-and-drop interface',
            stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
            image: '📋',
        },
        {
            name: 'AI Dashboard',
            description:
                'Analytics dashboard with machine learning insights and data visualization',
            stack: ['React', 'Python', 'TensorFlow', 'D3.js'],
            image: '🤖',
        },
    ];

    const skills = [
        { name: 'React', level: 95, category: 'Frontend' },
        { name: 'Node.js', level: 90, category: 'Backend' },
        { name: 'TypeScript', level: 85, category: 'Language' },
        { name: 'MongoDB', level: 80, category: 'Database' },
        { name: 'AWS', level: 75, category: 'Cloud' },
        { name: 'Docker', level: 70, category: 'DevOps' },
    ];

    const experiences = [
        {
            role: 'Senior Full-Stack Developer',
            company: 'TechCorp',
            duration: '2022 - Present',
            description: 'Lead development of scalable web applications serving 100k+ users',
        },
        {
            role: 'Frontend Developer',
            company: 'StartupXYZ',
            duration: '2020 - 2022',
            description: 'Built responsive React applications and improved performance by 40%',
        },
        {
            role: 'Junior Developer',
            company: 'WebAgency',
            duration: '2019 - 2020',
            description: 'Developed custom websites and learned modern development practices',
        },
    ];

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-white text-xl">Loading Portfolio...</p>
                </div>
            </div>
        );
    }

    return (
        <div
            className={`min-h-screen transition-all duration-500 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
        >
            {/* Navigation */}
            <nav
                className={`fixed top-0 w-full z-50 transition-all duration-300 ${isDarkMode ? 'bg-gray-900/90' : 'bg-white/90'} backdrop-blur-md border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}
            >
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Thibaut
                    </div>
                    <div className="hidden md:flex space-x-8">
                        {['About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
                            <button
                                key={item}
                                className={`hover:text-blue-600 transition-colors ${activeSection === item.toLowerCase() ? 'text-blue-600' : ''}`}
                                onClick={() => setActiveSection(item.toLowerCase())}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                    <button
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                        {isDarkMode ? '☀️' : '🌙'}
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                <div className="absolute inset-0">
                    {[...Array(50)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 2}s`,
                            }}
                        ></div>
                    ))}
                </div>
                <div
                    className={`text-center z-10 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                >
                    <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Hi, I'm Thibaut
                    </h1>
                    <p className="text-2xl md:text-3xl mb-4 font-light">Fullstack Developer</p>
                    <p className="text-xl mb-8 max-w-2xl mx-auto opacity-80">
                        I build modern, scalable apps for real-world impact
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                            See My Work
                        </button>
                        <button
                            className={`px-8 py-4 border-2 ${isDarkMode ? 'border-white hover:bg-white hover:text-gray-900' : 'border-gray-900 hover:bg-gray-900 hover:text-white'} rounded-full transition-all duration-300`}
                        >
                            Download CV
                        </button>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="transform transition-all duration-700 hover:scale-105">
                            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-8xl">
                                👨‍💻
                            </div>
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                About Me
                            </h2>
                            <p className="text-lg mb-6 opacity-80">
                                Passionate full-stack developer with 5+ years of experience building
                                scalable web applications. I love turning complex problems into
                                simple, beautiful solutions.
                            </p>
                            <p className="text-lg mb-8 opacity-80">
                                My approach combines technical excellence with user-centered design,
                                ensuring every project delivers both functionality and exceptional
                                user experience.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS'].map(
                                    (tech) => (
                                        <span
                                            key={tech}
                                            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                                        >
                                            {tech}
                                        </span>
                                    ),
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Featured Projects
                    </h2>
                    <div className="relative">
                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentProject * 100}%)` }}
                            >
                                {projects.map((project, index) => (
                                    <div key={index} className="w-full flex-shrink-0 px-4">
                                        <div
                                            className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-xl p-8 hover:shadow-2xl transform hover:scale-105 transition-all duration-300`}
                                        >
                                            <div className="text-6xl mb-6 text-center">
                                                {project.image}
                                            </div>
                                            <h3 className="text-2xl font-bold mb-4">
                                                {project.name}
                                            </h3>
                                            <p className="text-lg mb-6 opacity-80">
                                                {project.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {project.stack.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className={`px-3 py-1 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-full text-sm`}
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="flex gap-4">
                                                <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-all duration-300">
                                                    Live Demo
                                                </button>
                                                <button
                                                    className={`px-6 py-2 border ${isDarkMode ? 'border-gray-600' : 'border-gray-300'} rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300`}
                                                >
                                                    GitHub
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-center mt-8 space-x-2">
                            {projects.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                        currentProject === index ? 'bg-blue-600' : 'bg-gray-300'
                                    }`}
                                    onClick={() => setCurrentProject(index)}
                                ></button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Skills & Expertise
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {skills.map((skill, index) => (
                            <div
                                key={skill.name}
                                className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                                    <span className="text-sm opacity-60">{skill.category}</span>
                                </div>
                                <div
                                    className={`w-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-3 mb-2`}
                                >
                                    <div
                                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                                <p className="text-sm opacity-60">{skill.level}% proficiency</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Experience
                    </h2>
                    <div className="relative">
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative flex items-start mb-12">
                                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                                <div className="ml-16">
                                    <div
                                        className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
                                    >
                                        <h3 className="text-xl font-bold mb-2">{exp.role}</h3>
                                        <p className="text-blue-600 font-semibold mb-2">
                                            {exp.company}
                                        </p>
                                        <p className="text-sm opacity-60 mb-4">{exp.duration}</p>
                                        <p className="opacity-80">{exp.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Let's Work Together
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                            <p className="text-lg mb-8 opacity-80">
                                Ready to bring your ideas to life? Let's discuss your next project
                                and create something amazing together.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4">
                                    <span className="text-2xl">📧</span>
                                    <span>thibaut@example.com</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <span className="text-2xl">💼</span>
                                    <span>LinkedIn: /in/thibaut-dev</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <span className="text-2xl">🐙</span>
                                    <span>GitHub: /thibaut-dev</span>
                                </div>
                            </div>
                        </div>
                        <form className="space-y-6">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className={`w-full p-4 rounded-xl border ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-300'} focus:border-blue-600 focus:outline-none transition-colors`}
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className={`w-full p-4 rounded-xl border ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-300'} focus:border-blue-600 focus:outline-none transition-colors`}
                                />
                            </div>
                            <div>
                                <textarea
                                    rows="5"
                                    placeholder="Your Message"
                                    className={`w-full p-4 rounded-xl border ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-300'} focus:border-blue-600 focus:outline-none transition-colors resize-none`}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer
                className={`py-12 border-t ${isDarkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-white'}`}
            >
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <p className="mb-4 opacity-60">Built with Next.js & Tailwind CSS</p>
                    <p className="opacity-60">© 2025 Thibaut. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
