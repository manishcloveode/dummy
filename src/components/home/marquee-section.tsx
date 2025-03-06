import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const testimonials = [
    {
        name: "Maria T.",
        position: "Co-founder of NexGen Apps",
        body: "Working with Manish was a game changer! He quickly understood our vision and translated it into a sleek, user-friendly design. His attention to detail and creative approach truly made our project shine!",
        img: "/images/testimonial1.jpg",
    },
    {
        name: "Alex M.",
        position: "Marketing Director at TechFlow",
        body: "Manish's expertise in UX design completely revitalized our product interface. Our customers have noticed the difference, and we've seen a 40% increase in user engagement since the redesign.",
        img: "/images/testimonial2.jpg",
    },
    {
        name: "David R.",
        position: "Founder of Spark Digital",
        body: "Collaborating with Manish exceeded all our expectations. His innovative approach and technical skills delivered a product that perfectly aligned with our brand vision while enhancing functionality.",
        img: "/images/testimonial3.jpg",
    },
];



export function TestimonialsSection() {
    return (
        <div className=" container mx-auto flex  min-h-screen bg-black p-10">

            <div className="w-2/3 text-white pr-8 flex flex-col items-center justify-center items-start">
                <button className="bg-stone-800 border border-gray-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
                    Testimonials
                </button>

                <h2 className="text-5xl font-normal mb-6">
                    <span className='text-gray-500'>See what</span> others<br />
                    say <span className='text-gray-500'>about me</span>
                </h2>
                <p className="mt-4 text-lg text-gray-400">
                    I have helped many businesses make a killer design for their product. Wanna be the next?
                </p>
                <button className="mt-8 px-6 py-3 bg-transparent border border-gray-400 rounded-full text-lg font-medium flex text-white items-start hover:bg-white hover:text-black transition-colors">
                    Contact

                    <ArrowUpRight size={18} className="ml-2" />
                </button>

            </div>
            <div className="w-2/3 flex flex-col gap-6" style={{
                WebkitMaskImage:
                    "linear-gradient(to bottom, transparent 0%, black 50%, black 90%, transparent 100%)",
                maskImage:
                    "linear-gradient(to bottom, transparent 0%, black 50%, black 90%, transparent 100%)",
            }}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-stone-950 rounded-lg border border-gray-800 p-6">
                        <p className="text-gray-300 mb-6">{testimonial.body}</p>
                        <div className="flex items-center">
                            <img
                                className="w-12 h-12 rounded-full mr-4"
                                src={testimonial.img}
                                alt={`${testimonial.name}'s profile`}
                            />
                            <div>
                                <h4 className="text-white font-medium">{testimonial.name}</h4>
                                <p className="text-gray-400">{testimonial.position}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TestimonialsSection;