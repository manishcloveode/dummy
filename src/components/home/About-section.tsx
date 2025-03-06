import Image from "next/image";

const AboutSection = () => {
    return (<>
        <div className="flex  justify-center bg-black text-white px-4 md:px-8 py-16">
            <p className="max-w-3xl mt-32 mb-12 mx-auto text-center text-3xl">
                Creating products that look amazing and convert well. <span className="text-gray-500"> This way both sides will be satisfied. Say no more to products that benefit only one site. With my design </span> <br /> skills you will scale to the moon!
            </p>

        </div>
        <div className="flex justify-center bg-black text-white px-4 md:px-8 py-16">
            <section className="flex flex-col md:flex-row items-center gap-20 containers mx-auto">

                <div className="rounded-2xl px-8   bg-stone-950 border border-gray-800">
                    <Image
                        src="/Images/aboutsection.png"
                        alt="Profile Picture"
                        width={400}
                        height={400}
                        className="rounded-xl"
                    />
                </div>

                {/* Right Side - Content */}
                <div className="max-w-lg text-center md:text-left">
                    <span className="px-4 py-1 rounded-full bg-gray-800 text-sm">About</span>
                    <h1 className="text-4xl font-light mt-4">
                        I am an Architect Turned Into a{" "}
                        <span className="font-semibold">Product Designer</span>
                    </h1>
                    <p className="text-gray-400 text-lg mt-4">
                        With a background in architecture, I now apply my expertise to product
                        design, blending aesthetics, functionality, and innovation. My goal is to
                        create modern, user-focused designs that bring your vision to life.
                    </p>

                    {/* Stats Section */}
                    <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mt-8 text-lg">
                        <div>
                            <p className="text-gray-400 text-lg">Years of experience</p>
                            <p className="text-white font-bold text-4xl">8+</p>

                        </div>
                        <div>
                            <p className="text-gray-400 text-lg">Clients</p>
                            <p className="text-white font-bold text-4xl">20+</p>

                        </div>
                        <div>
                            <p className="text-gray-400 text-lg">Projects Completed</p>
                            <p className="text-white font-bold text-4xl">40+</p>

                        </div>
                        <div>
                            <p className="text-gray-400 text-lg">Hours of Designing</p>
                            <p className="text-white font-bold text-4xl">10,000+</p>
                        </div>
                    </div>
                </div>

            </section>



        </div>
    </>
    );
};

export default AboutSection;
