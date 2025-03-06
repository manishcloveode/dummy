import React from 'react';

const CareerSection: React.FC = () => {
    return (
        <section className="container mx-auto bg-black text-white py-16 px-8">
            <button className="bg-stone-800 border border-gray-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Career
            </button>
            <h2 className="text-5xl font-normal tracking-tight mb-12 text-start opacity-90"> <span className='text-gray-500'>And This Is</span> My Career</h2>

            <div className="container mx-auto space-y-8 ">

                <div className="flex items-start justify-between items-center border-b border-gray-500 pb-8">
                    <div className="w-1/3 text-white font-medium text-lg">Freelance Product <span className='text-gray-400 text-sm font-normal ml-2'>2022-Now </span></div>
                    <div className="w-2/4">

                        <p className="text-gray-300 leading-relaxed">
                            Now I design user-centric products that align with client visions. As a freelance product designer, I collaborate with startups and established companies, crafting solutions that elevate user experiences and increase engagement across both digital and physical interfaces.
                        </p>
                    </div>
                </div>

                {/* Product Designer at Spotify */}
                <div className="flex items-start justify-between items-center border-b border-gray-500 pb-8">
                    <div className="w-1/3 text-white font-medium text-lg">Product Designer at Spotify <span className='text-gray-400 text-sm font-normal ml-2'>2020-2022 </span></div>
                    <div className="w-2/4">
                        <p className="text-gray-300 leading-relaxed">
                            At Spotify, I helped shape innovative features for millions of users globally. My focus was on creating seamless music discovery experiences, enhancing user interfaces, and optimizing cross-platform navigation, which led to an improved product flow and increased user satisfaction.
                        </p>
                    </div>
                </div>

                {/* Freelance Architect */}
                <div className="flex items-start justify-between items-center border-b border-gray-500 pb-8">
                    <div className="w-1/3 text-white font-medium text-lg">Freelance Product Designer
                        <span className='text-gray-400 text-sm font-normal ml-2'>2022-Now </span></div>
                    <div className="w-2/4">
                        <p className="text-gray-300 leading-relaxed">
                            As a freelance architect, I worked on a range of residential and commercial projects, balancing form and function. I collaborated with clients and contractors to transform concepts into reality, ensuring each design was both aesthetically pleasing and structurally sound.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareerSection;