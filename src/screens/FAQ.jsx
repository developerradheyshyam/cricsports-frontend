"use client"

import React, { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { dmSerif } from '@/utils/fonts';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    const contentRef = useRef(null);

    return (
        <div className="border border-gray-200 rounded-lg overflow-hidden bg-white flex items-center flex-col ">
            <button
                className="w-full  h-20 px-6 py-4 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
                onClick={onClick}
                aria-expanded={isOpen}
            >
                <span className="font-semibold text-gray-900">{question}</span>
                <ChevronDown
                    className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ease-in-out ${isOpen ? '-rotate-180' : 'rotate-0'
                        }`}
                />
            </button>
            <div
                ref={contentRef}
                className="transition-all duration-300 ease-in-out"
                style={{
                    maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0',
                    overflow: 'hidden'
                }}
            >
                <div className="px-6 py-4 text-gray-600 border-t">
                    {answer}
                </div>
            </div>
        </div>
    );
};

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    const faqs = [
        {
            question: "Where does it come from?",
            answer: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an"
        },
        {
            question: "Where does it come from?",
            answer: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
            question: "Where does it come from?",
            answer: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
            question: "Where does it come from?",
            answer: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
            question: "Where does it come from?",
            answer: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s."
        }
    ];

    return (
        <div className="max-w-7xl min-h-screen mx-auto px-4 py-16 sm:px-6 lg:px-8 flex flex-col space-y-10">
            <div className="text-center lg:text-left flex flex-col justify-center items-center ">
                <h2 className="text-4xl font-bold mb-6">
                    Frequently Asked Questions   <span className={`${dmSerif.variable}  text-red-600 text-3xl font-thin font-dmSerif italic`}>Cricsportz</span>
                </h2>
                <p className="text-gray-600 max-w-5xl ">
                    All important tours, series, and domestic tournaments from across the world are included in the CricSportz cricket data stream data stream may be utilized in a variety of applications, including but not limited to
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                {/* Left side - Image and Title */}
                <div className="space-y-8">

                    <div className="relative w-full h-96">
                        <img
                            src="/girlonchaire.png"
                            alt="FAQ Illustration"
                            className="object-fit w-full h-auto"
                        />
                    </div>
                </div>

                {/* Right side - FAQ Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => toggleFAQ(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQSection;