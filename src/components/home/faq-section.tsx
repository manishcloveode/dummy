import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion";

export default function FAQSection() {
    return (
        <div className="bg-black text-white m flex flex-col items-center justify-center p-4">
            <button className=" mt-32 bg-stone-800 border border-gray-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
                FAQ
            </button>
            <h1 className="text-6xl  mb-8 text-center"><span className='text-gray-500'>Frequently Asked </span>Questions</h1>
            <div className="w-full max-w-[500px] space-y-4">
                <Accordion type="single" collapsible className="w-full space-y-4">
                    <AccordionItem
                        value="item-1"
                        className="bg-[#1A1A1A] rounded-lg border "
                    >
                        <AccordionTrigger className="px-4 py-4 hover:no-underline text-left text-base font-normal">
                            How do you ensure that your designs meet user needs and business goals?
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 text-gray-300">
                            I prioritize user research and testing throughout the design process. By creating user personas, conducting usability tests, and gathering feedback, I make sure my designs solve real problems. I also stay in close communication with stakeholders to ensure the design aligns with the business objectives.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-2"
                        className="bg-[#1A1A1A] rounded-lg border"
                    >
                        <AccordionTrigger className="px-4 py-4   hover:no-underline text-left text-base font-normal">
                            Do you offer freelance or contract design services?
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 text-gray-300">
                            Yes, I offer flexible design services for freelance and contract work. I can adapt to your project needs and timeline, providing high-quality design solutions tailored to your specific requirements.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-3"
                        className="bg-[#1A1A1A] rounded-lg border"
                    >
                        <AccordionTrigger className="px-4 py-4 hover:no-underline text-left text-base font-normal">
                            Can you walk me through a specific project in your portfolio?
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 text-gray-300">
                            I&apos;d be happy to discuss my previous projects in detail. Each project has its unique challenges and solutions, and I can provide insights into my design process, the problems we solved, and the impact of the final design.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-4"
                        className="bg-[#1A1A1A] rounded-lg border"
                    >
                        <AccordionTrigger className="px-4 py-4 hover:no-underline text-left text-base font-normal">
                            What tools and software do you use for your design work?
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 text-gray-300">
                            I&apos;m proficient in industry-standard design tools such as Figma, Sketch, Adobe XD, and Photoshop. I also use prototyping tools like InVision and collaborate using tools like Miro for design workshops and brainstorming.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-5"
                        className="bg-[#1A1A1A] rounded-lg border"
                    >
                        <AccordionTrigger className="px-4 py-4 hover:no-underline text-left text-base font-normal">
                            What is your design process, and how do you approach new projects?
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 text-gray-300">
                            My design process follows a structured approach: research, ideation, wireframing, prototyping, testing, and iteration. I start by understanding the user needs, business goals, and project constraints. Then, I develop multiple design concepts, create low-fidelity wireframes, and progressively refine the design based on feedback and user testing.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

            </div>
            <div className='justify-center mt-10 mb-10 items-center'>
                <p className='text-center text-gray-500'> Did not find the answer you&apos;re looking for?<br />

                    <span className='text-white'> Contact info@example.com </span></p>
            </div>
        </div>
    );
}