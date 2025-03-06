import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
export default function Navbar() {
    return (
        <>
            <div className='bg-black'>
                <nav className="container   mx-auto  text-white px-4 py-6 flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="relative w-10 h-10 overflow-hidden rounded-full">
                            <Image
                                src="/Images/wolf.png?height=40&width=40"
                                alt="Paul Smith"
                                width={40}
                                height={40}
                                className="object-cover h-full w-full"
                            />
                        </div>
                        <span className="font-medium text-lg">Manish Sharma</span>
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/portfolio" className="hover:opacity-80 transition-opacity">
                            Portfolio
                        </Link>
                        <Link href="/about" className="hover:opacity-80 transition-opacity">
                            About
                        </Link>
                        <Link href="/contact" className="hover:opacity-80 transition-opacity">
                            Contact
                        </Link>
                        <Link href="/template" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
                            Get template <ArrowUpRight size={16} />
                        </Link>
                    </div>
                </nav>
            </div>
        </>
    );
}