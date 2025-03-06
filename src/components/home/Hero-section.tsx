import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function PortfolioHero() {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col">
            <div className="container mx-auto px-4 flex-1 flex flex-col items-center justify-center text-center">
                <div className="max-w-4xl mx-auto flex flex-col items-center">
                    <div className="bg-[#1a1a1a] rounded-full px-5 py-2 mb-8 inline-flex items-center">
                        <span>
                            Hello, I&apos;m Manish <span className="ml-1">👋</span>
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl  mb-10 leading-tight">
                        <span className="text-white">Product designer</span>{" "}
                        <span className="text-gray-500">crafting clean & modern designs</span>
                    </h1>

                    <Link
                        href="/"
                        className="flex items-center gap-2 border border-gray-700 rounded-full px-10 py-3 hover:bg-white hover:text-black transition-colors"
                    >
                        Email me <ArrowUpRight size={18} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

