import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const ContactSection = () => {
    return (
        <section className="relative w-full h-screen">

            <div className="absolute inset-0 z-[-10] bg-black">
                <Image
                    src="/Images/contact.png"
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    priority
                    className="opacity-25"
                    style={{
                        WebkitMaskImage:
                            "linear-gradient(to bottom, transparent 0%, black 50%, black 90%, transparent 100%)",
                        maskImage:
                            "linear-gradient(to bottom, transparent 0%, black 50%, black 90%, transparent 100%)",
                    }}
                />
            </div>


            <div className="flex flex-col items-center space-y-10 justify-center h-full text-center px-4">
                <span className="px-4 py-2 mt-32 text-sm font-medium text-white bg-stone-950 rounded-full backdrop-blur-md">
                    Contact
                </span>
                <h2 className="text-6xl font-normal text-gray-500">
                    Let&apos;s Get in <span className="text-white">Touch</span>
                </h2>
                <p className="text-gray-500 mt-2">Let’s connect and start with your project ASAP.</p>

                <button className="mt-6 px-6 py-3 bg-transparent border border-gray-400 rounded-full text-lg font-medium flex text-white items-center mx-auto hover:bg-white hover:text-black transition-colors">
                    Book a call <ArrowUpRight size={18} className="ml-2" />
                </button>

                <p className="mt-4 text-gray-400">
                    Or email <a href="#" className="hover:underline text-white">info@example.com</a>
                </p>
            </div>
        </section>
    );
};

export default ContactSection;
