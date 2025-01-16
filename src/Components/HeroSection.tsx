import { Linkedin, Github, Mail, FileText, Instagram, ChevronDown } from 'lucide-react'
import Me from '../assets/images/me5.jpg'

//@ts-expect-error: JavaScript import of translations is not typed
import navbar from "../assets/translations/navbar.js"

import CV_en from '../assets/resume/CV_English.pdf'
import CV_es from '../assets/resume/CV_Spanish.pdf'

interface HeroSectionProps {
    selectedLanguage: 'en' | 'es'
}

export default function HeroSection({ selectedLanguage }: HeroSectionProps) {
    const { greeting, fullstack, based, location, developer, connect, student, university, resume, scroll } = navbar[selectedLanguage]
    const resumeLink = selectedLanguage === 'en' ? CV_en : CV_es;

    return (
        <section className="flex flex-col items-center justify-center w-full h-[100vh] text-white space-y-6 font-halcyon bg-red-30">
            {/* Picture and name */}
            <div className="flex items-center space-x-3 md:space-x-5 rounded-md">
                <img src={Me} alt="Picture of Cano" className="rounded-full bg-black w-12 h-12 md:w-16 md:h-16" />
                <div className="border border-[#FFD074] rounded-full px-3 py-1 md:px-4 md:py-2 transition-transform transform hover:scale-105 hover:rotate-3">
                    <h1 className="text-lg md:text-xl text-[#FFFFE3] text-center">{greeting}</h1>
                </div>
            </div>

            {/* Description and location */}
            <div className="flex flex-col md:flex-row items-center md:space-x-5 text-center md:text-left rounded-md">
                <h2 className="text-5xl md:text-7xl text-[#A374FF] font-bold font-Interphases">{fullstack}</h2>
                <p className="text-base md:text-lg font-bold font-Interphases mt-2 md:mt-0 hidden md:block">
                    {based}
                    <br />
                    <span className="text-[#FFD074]">{location}</span>
                </p>
            </div>

            {/* Developer and Connect Button */}
            <div className="flex flex-col md:flex-row items-center md:space-x-5 text-center md:text-left rounded-md">
                <h3 className="text-6xl md:text-8xl text-[#FFD074] font-bold font-Interphases">{developer}</h3>
                <a href="https://api.whatsapp.com/send?phone=5214498043308" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center bg-white text-[#0E100F] px-5 py-2 md:px-6 md:py-3 rounded-md mt-2 md:mt-0">
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-green-500 rounded-full animate-blink mr-2"></div>
                    <span>{connect}</span>
                </a>
                <p className="text-base md:text-lg font-bold font-Interphases mt-2 md:mt-0 block md:hidden">
                    {based}
                    <br />
                    <span className="text-[#FFD074]">{location}</span>
                </p>
            </div>

            {/* AI Student */}
            <div className="flex flex-col md:flex-row items-center md:space-x-5 text-center md:text-left rounded-md">
                <h4 className="text-4xl md:text-6xl text-[#17F1D1] font-bold font-Interphases">{student}</h4>
                <p className="text-base md:text-lg font-bold font-Interphases mt-2 md:mt-0">
                    at
                    <br />
                    <span className="text-[#FFD074]">{university}</span>
                </p>
            </div>

            {/* Social Links and Resume Button */}
            <div className="relative flex flex-col items-center p-5">
                <div className="flex flex-row space-x-5">
                    <a href={resumeLink} download className="flex items-center space-x-2 bg-[#FFD074] text-[#0E100F] px-4 py-2 rounded-md transition-transform transform hover:scale-105">
                        <span>{resume}</span>
                        <FileText className="w-5 h-5" />
                    </a>

                    {/* Social Icons */}
                    <div className="flex space-x-3">
                        <a href="https://www.linkedin.com/in/diego-cano-333366293/" target="_blank" rel="noopener noreferrer" className="group">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0A66C2] text-white transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:mx-1">
                                <Linkedin className="w-5 h-5" />
                            </div>
                        </a>
                        <a href="https://github.com/Dicv987" target="_blank" rel="noopener noreferrer" className="group">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#171515] text-white transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:mx-1">
                                <Github className="w-5 h-5" />
                            </div>
                        </a>
                        <a href="https://instagram.com/diego.cano.v" target="_blank" rel="noopener noreferrer" className="group">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:mx-1">
                                <Instagram className="w-5 h-5" />
                            </div>
                        </a>
                        <a href="mailto:diegocano98751@hotmail.com" className="group">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-black transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:mx-1">
                                <Mail className="w-5 h-5" />
                            </div>
                        </a>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div
                    className="absolute top-28 md:top-32 flex flex-col items-center animate-bounce cursor-pointer"
                    onClick={() => {
                        const target = document.getElementById("experience");
                        const navbar = document.querySelector("nav");

                        if (target && navbar) {
                            const navbarHeight = (navbar as HTMLElement).offsetHeight;
                            window.scrollTo({
                                top: target.offsetTop - navbarHeight,
                                behavior: "smooth",
                            });
                        }
                    }}
                >
                    <ChevronDown className="w-10 h-10 text-[#FFD074]" />
                    <span className="text-[#FFD074] text-sm mt-2">{scroll}</span>
                </div>
            </div>
        </section>
    )
}
