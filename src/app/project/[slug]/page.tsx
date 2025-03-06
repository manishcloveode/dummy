"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Figma, Clock, User, Earth } from "lucide-react";
import ContactSection from "@/components/home/contact-section";


const projectsData = [
    {
        id: 1,
        slug: "logoipsum-mobile-app",
        name: "Logoipsum Mobile App",
        year: "2024",
        logo: "/Images/project1.svg",
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
        overview: "The iPhone project focuses on designing a sleek, user-friendly mobile application aimed at enhancing productivity. The app integrates Apple's native design guidelines while incorporating custom features for modern users.",
    },
    {
        id: 2,
        slug: "logo-landing-page",
        name: "Logo Landing Page",
        year: "2023",
        logo: "/Images/project2.svg",
        backgroundImage: "/Images/project02.jpg",
        description: "A visually stunning landing page designed to capture user attention with sleek animations.",
        duration: "1.5 months",
        platform: "Zoom",
        category: "UI/UX Design",
        features: ["Responsive layout", "SEO optimization", "Interactive animations", "High conversion rate"],
        overview: "This project delivers a responsive website that blends visual richness with a practical user experience. The goal is to maintain consistency and accessibility across devices, ensuring an engaging experience.",
    },
    {
        id: 3,
        slug: "logo-ipsum-website-project",
        name: "Logo Ipsum Website Project",
        year: "2024",
        logo: "/Images/project3.svg",
        backgroundImage: "/Images/project03.jpg",
        description: "A comprehensive website redesign focusing on improved user experience and modern aesthetics.",
        duration: "3 months",
        platform: "Microsoft Teams",
        category: "Web Development",
        features: ["Responsive design", "CMS integration", "Performance optimization", "Modern UI elements"],
        overview: "The website is a high-performance eCommerce platform, focusing on efficiency and user satisfaction.",
    },
    {
        id: 4,
        slug: "logoipsum-watch-app",
        name: "Logoipsum Watch App",
        year: "2024",
        logo: "/Images/project4.svg",
        backgroundImage: "/Images/project04.jpg",
        description: "A smartwatch application designed for quick interactions and health tracking features.",
        duration: "2.5 months",
        platform: "Google Meet",
        category: "Mobile Development",
        features: ["Health monitoring", "Notification management", "Activity tracking", "Battery optimization"],
        overview: "Design a compact, efficient Apple Watch interface that enhances productivity with quick, glanceable interactions and simple gestures..",
    },
];

export default function ProjectShowcase() {
    const { slug } = useParams();
    const project = projectsData.find((p) => p.slug === slug);

    if (!project) {
        return <div className="text-white text-center py-16">Project Not Found</div>;
    }

    return (
        <>
            <div className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center py-16 px-4">
                <div className="container mx-auto flex flex-col items-center">
                    <div className="bg-black border border-gray-700 rounded-full px-4 py-1 mb-6 text-sm">Project Detail</div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-center mb-8">{project.name}</h1>

                    <p className="text-center text-gray-400 max-w-2xl mb-10">{project.description}</p>

                    <div className="flex flex-wrap justify-center gap-3 mb-16">
                        <div className="bg-black border border-gray-800 rounded-md px-4 py-2 flex items-center gap-2 text-sm">
                            <Figma className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-400">{project.category}</span>
                        </div>
                        <div className="bg-black border border-gray-800 rounded-md px-4 py-2 flex items-center gap-2 text-sm">
                            <Clock className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-400">{project.duration}</span>
                        </div>
                        <div className="bg-black border border-gray-800 rounded-md px-4 py-2 flex items-center gap-2 text-sm">
                            <User className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-400">{project.platform}</span>
                        </div>
                        <div className="bg-black border border-gray-800 rounded-md px-4 py-2 flex items-center gap-2 text-sm">
                            <Earth className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-400">Visit Project</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl w-full">
                        <div className="rounded-lg overflow-hidden">
                            <Image src={project.backgroundImage} alt={project.name} width={400} height={400} className="w-full h-auto object-cover" />
                        </div>
                        <div className="rounded-lg border border-gray-800 overflow-hidden bg-stone-950 flex items-center justify-center p-8">
                            <div className="flex items-center">
                                <Image src={project.logo} alt={project.name} width={400} height={400} className="w-full h-auto object-cover" />
                            </div>
                        </div>
                        <div className="rounded-lg overflow-hidden">
                            <Image src={project.backgroundImage} alt={project.name} width={400} height={400} className="w-full h-auto object-cover" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full min-h-screen bg-black text-white py-16 px-4 flex justify-center">
                <div className="max-w-3xl w-full">
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">Overview:</h2>
                        <p>{project.overview}</p>
                    </section>
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">Key Features:</h2>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                            {project.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </section>

                    <blockquote className="border-l-4 border-gray-600 pl-4 italic mb-12 text-gray-400">
                        &ldquo;This project is a perfect example of modern UI/UX principles.&ldquo;
                    </blockquote>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Design Process:</h2>
                        <ol className="list-decimal pl-6 space-y-2 text-gray-300">
                            <li>User Research to define needs and pain points.</li>
                            <li>Wireframing to map out the user journey.</li>
                            <li>High-fidelity UI design using clean, minimalist aesthetics.</li>
                            <li>Prototyping and user testing to evaluate real-time interactions.</li>
                        </ol>
                    </section>
                </div>
            </div>

            <ContactSection />
        </>
    );
}