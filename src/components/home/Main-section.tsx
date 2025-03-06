"use client"
import { useRef, useEffect, useState } from "react"
import Image from "next/image"

export default function RotatingObjectSection() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const objectRef = useRef<HTMLDivElement>(null)
    const [scrollProgress, setScrollProgress] = useState(0)

    useEffect(() => {
        const section = sectionRef.current
        if (!section) return

        const handleScroll = () => {
            const rect = section.getBoundingClientRect()
            const windowHeight = window.innerHeight
            let progress = 0
            if (rect.top <= windowHeight && rect.bottom >= 0) {
                const totalDistance = windowHeight + rect.height
                const distanceTraveled = windowHeight - rect.top
                progress = Math.min(Math.max(distanceTraveled / totalDistance, 0), 1)
            } else if (rect.top > windowHeight) {
                progress = 0
            } else if (rect.bottom < 0) {
                progress = 1
            }
            setScrollProgress(progress)
        }

        handleScroll()
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])
    const rotationAngle = scrollProgress * 180
    return (
        <div
            ref={sectionRef}
            className="relative h-screen w-full flex items-center justify-center bg-black overflow-hidden"
        >
            <div
                ref={objectRef}
                className="transition-transform duration-800"
                style={{
                    transform: `rotate(${rotationAngle}deg)`,
                    transformOrigin: "center center",
                }}
            >
                <Image
                    src="/Images/rotate.png"
                    alt="3D Abstract Object"
                    width={500}
                    height={500}
                    className="w-[500px] h-auto"
                />
            </div>
        </div>
    )
}

