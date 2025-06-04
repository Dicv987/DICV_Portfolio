import { useEffect } from "react";
//@ts-ignore
import navbar from "../assets/translations/navbar.js";

import "../styles/globals.css";

const techIcons = [
    // Frontend
    {
        src: "/assets/images/icons/React.svg",
        alt: "React",
    },
    {
        src: "assets/images/icons/Tailwind CSS.svg",
        alt: "Tailwind CSS",
    },
    {
        src: "assets/images/icons/Figma.svg",
        alt: "Figma",
    },
    {
        src: "assets/images/icons/TypeScript.svg",
        alt: "TypeScript",
    },
    
    // Backend
    {
        src: "assets/images/icons/Laravel.svg",
        alt: "Laravel",
    },
    {
        src: "assets/images/icons/PHP.svg",
        alt : "PHP",
    },
    {
        src: "assets/images/icons/Node.js.svg",
        alt: "Node.js",
    },
    {
        src: "assets/images/icons/Java.svg",
        alt: "Java",
    },
    {
        src: "assets/images/icons/Python.svg",
        alt: "Python",
    },
    {
        src: "assets/images/icons/C++ (CPlusPlus).svg",
        alt: "C++",
    },
    
    // Databases
    {
        src: "assets/images/icons/MySQL.svg",
        alt: "MySQL",
    },
    {
        src: "assets/images/icons/Microsoft SQL Server.svg",
        alt: "Microsoft SQL Server",
    },
    {
        src: "assets/images/icons/Firebase.svg",
        alt: "Firebase",
    },
    
    // DevOps
    {
        src: "assets/images/icons/Git.svg",
        alt: "Git",
    },
    {
        src: "assets/images/icons/AWS.svg",
        alt: "AWS",
    },
    {
        src: "assets/images/icons/Heroku.svg",
        alt: "Heroku",
    },
    
    // Others
    {
        src: "assets/images/icons/OpenCV.svg",
        alt: "OpenCV",
    },
];

interface ProjectsHomeProps {
    selectedLanguage: "en" | "es";
}

export default function MyStack({ selectedLanguage }: ProjectsHomeProps) {

    const t = navbar[selectedLanguage];


    useEffect(() => {
        const scrollers = document.querySelectorAll(".scroller");

        // If a user hasn't opted in for reduced motion, then we add the animation
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            addAnimation();
        }

        function addAnimation() {
            scrollers.forEach((scroller) => {
                // add data-animated="true" to every `.scroller` on the page
                scroller.setAttribute("data-animated", 'true');

                // Make an array from the elements within `.scroller-inner`
                const scrollerInner = scroller.querySelector(".scroller__inner");
                if (!scrollerInner) return;

                const scrollerContent = Array.from(scrollerInner.children);
                scrollerContent.forEach((item) => {
                    const duplicatedItem = item.cloneNode(true) as Element;
                    duplicatedItem.setAttribute("aria-hidden", "true");
                    scrollerInner.appendChild(duplicatedItem);
                });
            });
        }
    }, []);

    return (
        <div
            id="stack"
            className="flex flex-col items-center justify-center w-full h-auto p-6 md:p-12 space-y-4 font-halcyon text-white bg-transparent rounded-lg border-t-2 border-[#FFFFE3]"
        >

            <div className="text-4xl md:text-6xl bg-transparent text-[#FFFFE3] font-bold font-Interphases text-center w-full md:w-2/3 lg:w-1/2">
                {t.myStack}
            </div>

            <div className="text-2xl md:text-3xl text-wrap text-white text-center w-full md:w-2/3 lg:w-1/2">
                {t.myStackDescription.split(" ").map((word: string, index: number) => (
                    <span
                        key={index}
                        className={
                            word === "technologies" ||
                                word === "tecnologías" ||
                                word === "carrera" ||
                                word === "career"
                                ? "text-[#FFD074]"
                                : ""
                        }
                    >
                        {word}{" "}
                    </span>
                ))}
            </div>

            <div className="scroller" data-direction="left" data-speed="fast">
                <div className="scroller__inner">
                    {techIcons.map((icon, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <img src={icon.src} alt={icon.alt} />
                            <span className="mt-2 text-white bg-gray-800 rounded-full px-2 py-1 text-sm">
                                {icon.alt}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
