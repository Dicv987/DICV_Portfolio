import React from 'react'
import {Instagram, Linkedin, Github , Mail} from 'lucide-react'
//@ts-ignore
import navbar from "../assets/translations/navbar.js"

interface FooterProps {
    selectedLanguage: 'en' | 'es'
}

const SocialLink = ({ href, icon: Icon, label }: { href: string; icon: React.ElementType; label: string }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="transform transition-all duration-300 hover:scale-110 hover:text-[#FFD074]"
        aria-label={label}
    >
        <Icon className="w-6 h-6" />
    </a>
)

export default function Footer({ selectedLanguage }: FooterProps) {

    const validLanguage = selectedLanguage in navbar ? selectedLanguage : 'en'
    const t = navbar[validLanguage]

    return (
        <footer className="w-full px-4 py-6 bg-gray-300/10 text-white backdrop-blur-md border-t border-gray-200/10">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                    {/* Logo and copyright */}
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-[#FFD074] rounded-full" aria-hidden="true"></div>
                        <span className="font-bold">{t.copyright} © {new Date().getFullYear()}</span>
                    </div>
                    {/* Navigation links */}
                    <nav className="hidden md:flex flex-wrap justify-center gap-4">
                        <a href="#" className="hover:text-[#FFD074] transition-colors duration-300">{t.home}</a>
                        <a href="#projects" className="hover:text-[#FFD074] transition-colors duration-300">{t.projects}</a>
                        <a href="#about" className="hover:text-[#FFD074] transition-colors duration-300">{t.about}</a>
                    </nav>

                    {/* Social media links and language selector */}
                    <div className="flex items-center space-x-4">
                        <SocialLink href="mailto:diegocano98751@hotmail.com" icon={Mail} label="Email" />
                        <SocialLink href="https://www.instagram.com/diego.cano.v/" icon={Instagram} label="Instagram" />
                        <SocialLink href="https://www.linkedin.com/in/diego-cano-333366293/" icon={Linkedin} label="LinkedIn" />
                        <SocialLink href="https://github.com/Dicv987" icon={Github} label="GitHub" />
                    </div>
                </div>

            </div>
        </footer>
    )
}

