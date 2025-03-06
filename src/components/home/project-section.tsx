"use client";
import React, { useState } from "react";
import Link from "next/link";


const projectsData = [
    {
        id: 1,
        slug: "logoipsum-mobile-app",
        name: "Logoipsum Mobile App",
        year: "2024",
        logo: "/Images/project1.svg",
        colorLogo: "/Images/project1.svg",
        backgroundImage: "/Images/project01.jpg",
        description: "An intuitive, mobile-friendly design for an iPhone app focused on enhancing user productivity.",
        duration: "2 months",
        platform: "Skype",
        category: "Web Design",
        features: [
            "Streamlined task management",
            "Gesture-based interactions",
            "Seamless communication and scheduling tools",
            "Optimized for performance and ease of use",
            "Framer integration",
        ],
    },
    {
        id: 2,
        slug: "logo-landing-page",
        name: "Logo Landing Page",
        year: "2023",
        logo: "/Images/project2.svg",
        colorLogo: "/Images/project2.svg",
        backgroundImage: "/Images/project02.jpg",
        description: "A visually stunning landing page designed to capture user attention with sleek animations.",
        duration: "1.5 months",
        platform: "Zoom",
        category: "UI/UX Design",
        features: ["Responsive layout", "SEO optimization", "Interactive animations", "High conversion rate"],
    },
    {
        id: 3,
        name: "Logo Ipsum Website Project",
        slug: "logo-ipsum-website-project",
        year: "2024",
        logo: "/Images/project3.svg",
        colorLogo: "/Images/project3.svg",
        backgroundImage: "/Images/project03.jpg",
        description: "A comprehensive website redesign focusing on improved user experience and modern aesthetics.",
        duration: "3 months",
        platform: "Microsoft Teams",
        category: "Web Development",
        features: ["Responsive design", "CMS integration", "Performance optimization", "Modern UI elements"],
    },
    {
        id: 4,
        name: "Logoipsum Watch App",
        slug: "logoipsum-watch-app",
        year: "2024",
        logo: "/Images/project4.svg",
        colorLogo: "/Images/project4.svg",
        backgroundImage: "/Images/project04.jpg",
        description: "A smartwatch application designed for quick interactions and health tracking features.",
        duration: "2.5 months",
        platform: "Google Meet",
        category: "Mobile Development",
        features: ["Health monitoring", "Notification management", "Activity tracking", "Battery optimization"],
    },
];

const ProjectSection = () => {
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);

    return (
        <section className="py-16 bg-black">
            <div className="container mx-auto px-4">
                <div className="flex justify-center">
                    <button className="bg-stone-800 border border-gray-400 px-4 items-center text-center justify-center py-2 rounded-full text-sm text-white font-medium mb-4">
                        Portfolio
                    </button>
                </div>

                <h2 className="text-6xl font-normal text-center text-white mb-8">
                    <span className="text-gray-500">My Latest</span> Projects
                </h2>

                <div className="grid md:grid-cols-2 gap-8 p-4">
                    {projectsData.map((project) => (
                        <Link key={project.id} href={`/project/${project.slug}`} className="cursor-pointer">
                            <div className="flex flex-col items-center">
                                <div
                                    className="relative overflow-hidden h-96 w-full border border-gray-100 rounded-lg group transition-all duration-500"
                                    onMouseEnter={() => setHoveredProject(project.id)}
                                    onMouseLeave={() => setHoveredProject(null)}
                                >
                                    {/* Background */}
                                    <div
                                        className={`absolute inset-0 bg-stone-950 transition-all duration-500 ${hoveredProject === project.id ? "opacity-0" : "opacity-100"
                                            }`}
                                    />

                                    <div
                                        className={`absolute inset-0 bg-cover bg-center transition-all duration-500 ${hoveredProject === project.id ? "opacity-100" : "opacity-0"
                                            }`}
                                        style={{
                                            backgroundImage: `url(${project.backgroundImage})`,
                                            filter: "blur(5px)"
                                        }}
                                    />

                                    {/* Logo */}
                                    <div className="relative z-10 flex items-center justify-center h-full w-full">
                                        <img
                                            src={hoveredProject === project.id ? project.colorLogo : project.logo}
                                            alt={`${project.name} logo`}
                                            className={`max-w-[150px] max-h-[100px] transition-all duration-500 ${hoveredProject === project.id ? "grayscale-0" : "grayscale"
                                                }`}
                                        />
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div className="mt-4 flex text-left text-white self-start w-full">
                                    <h3 className="text-xl font-semibold">{project.name}</h3>
                                    <p className="text-sm opacity-80 ml-2 mt-1">{project.year}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;