'use client';

import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-black text-gray-300 py-10 px-6 md:px-12 lg:px-20">
            <div className="container mx-auto grid grid-cols-2 gap-8">

                <div>
                    <div className="flex items-center gap-3">
                        <Image
                            src="/Images/wolf.png"
                            alt="Paul Smith"
                            width={40}
                            height={40}
                            className="rounded-full h-14 w-14"
                        />
                        <span className="text-white text-lg font-semibold">Manish Sharna</span>
                    </div>
                    <p className="text-gray-400 mt-2">Product designer crafting <br /> clean & modern designs</p>
                    <p className="mt-2">info@example.com</p>
                </div>

                <div className="flex space-x-4 justify-end gap-8 text-gray-500">
                    <div className="flex flex-col space-y-2">
                        <a href="#" className="hover:text-white hover:underline">Portfolio</a>
                        <a href="#" className="hover:text-white hover:underline">About</a>
                        <a href="#" className="hover:text-white hover:underline">Contact me</a>
                        <a href="#" className="hover:text-white hover:underline">Book a call</a>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <a href="#" className="hover:text-white hover:underline">Twitter</a>
                        <a href="#" className="hover:text-white hover:underline">Instagram</a>
                        <a href="#" className="hover:text-white hover:underline">LinkedIn</a>
                        <a href="#" className="hover:text-white hover:underline">Behance</a>
                    </div>
                </div>


            </div>


            <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between text-sm">
                <p>&copy; 2024 Proxio Template</p>
                <p>
                    Template created by <span className="text-white">Manish</span> &bull; Built in <span className="text-white">Framer</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
