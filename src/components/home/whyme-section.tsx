"use client";


import { ArrowUpRight, Clock, MessageCircle, Search } from "lucide-react";

const WhyMeSection = () => {


    const cards = [
        {
            icon: <Clock size={24} className="text-white" />,
            title: "Efficient Workflow",
            description:
                "Streamlined design process for rapid delivery, meeting tight deadlines without compromising quality or detail.",
        },
        {
            icon: <MessageCircle size={24} className="text-white" />,
            title: "Collaborative Process",
            description:
                "I work closely with you, integrating your feedback to create designs that exceed your expectations.",
        },
        {
            icon: <Search size={24} className="text-white" />,
            title: "Attention to Detail",
            description:
                "Meticulous attention to every element, ensuring a polished and cohesive final product that impresses.",
        },
    ];

    return (
        <section className="bg-black text-white py-16 text-center">
            <div className="container mx-auto px-6">

                <button className="bg-stone-800 border border-gray-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
                    Why me?
                </button>


                <h2 className="text-5xl">
                    I&apos;ll help <span className="text-gray-400">your project</span>{" "}
                    <span className="text-white">shine</span>
                </h2>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 h-80 justify-start">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-stone-950 p-6 rounded-xl border border-gray-800 text-left"
                        >
                            <div className="bg-stone-950 border border-gray-800 p-3 rounded-lg inline-block">
                                {card.icon}
                            </div>
                            <h3 className="text-xl font-semibold mt-4">{card.title}</h3>
                            <p className="text-gray-400 mt-2">{card.description}</p>
                        </div>
                    ))}
                </div>
                <button className="mt-6 px-6 py-3 bg-stone-800  border border-gray-400 rounded-full text-lg font-medium flex items-center mx-auto ">
                    Contact <ArrowUpRight size={18} className="ml-2" />
                </button>
            </div>
        </section>
    );
};

export default WhyMeSection;
