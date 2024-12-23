import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import WelcomeAnimation from '../Components/WelcomeAnimation'
import NavBar from '../Components/NavBar'
import HeroSection from '../Components/HeroSection'
import ProjectsHome from '../Components/ProjectsHome'
import ExperienceHome from '../Components/ExperienceHome'
import MyStack from '@/Components/MyStack.js'
//@ts-ignore
import navbar from "../assets/translations/navbar.js"
import Footer from '@/Components/Footer.js'

export default function HomePage() {
    const [showWelcome, setShowWelcome] = useState(true)
    const [mousePosition, setMousePosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
    const [selectedLanguage, setSelectedLanguage] = useState<'en' | 'es'>('en')
    const customGreetings = ['Hello', 'Bonjour', 'Ciào', 'Olá', '你好', '안녕하세요', 'وعليكم السلام']

    const toggleLanguage = useCallback(() => {
        setSelectedLanguage((prev) => (prev === 'en' ? 'es' : 'en'))
    }, [])

    const handleMouseMove = useCallback((e: { pageX: number; pageY: number }) => {
        setMousePosition({
            x: e.pageX,
            y: e.pageY,
        })
    }, [])

    const handleScroll = useCallback(() => {
        setMousePosition((prevPosition) => ({
            x: prevPosition.x, // Mantiene la posición horizontal del mouse
            y: window.scrollY + window.innerHeight / 2, // Ajusta la luz al centro del viewport
        }))
    }, [])

    useEffect(() => {
        window.scrollTo(1, 1)
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [handleScroll])

    return (
        <>
            {showWelcome && (
                <div className="z-[100] absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <WelcomeAnimation
                        duration={1000}
                        greetings={customGreetings}
                        onAnimationEnd={() => setShowWelcome(false)}
                    />
                </div>
            )}
            <NavBar onMouseMove={handleMouseMove} selectedLanguage={selectedLanguage} toggleLanguage={toggleLanguage} />

            <motion.div
                className="bg-[#0E100F] flex flex-col items-center justify-center w-full min-h-screen h-auto relative overflow-hidden"
                onMouseMove={handleMouseMove}
            >
                <motion.div
                    className="absolute z-0 pointer-events-none"
                    style={{
                        width: '900px',
                        height: '900px',
                        background: 'radial-gradient(circle, rgba(255, 208, 116, 0.2) 0%, rgba(255, 208, 116, 0) 70%)',
                    }}
                    animate={{
                        top: mousePosition.y - 400,
                        left: mousePosition.x - 400,
                    }}
                    transition={{
                        type: 'tween',
                        duration: 0.2,
                    }}
                />


                <div
                    className="absolute top-0 left-0 w-full h-full pointer-events-none"
                    style={{
                        backdropFilter: 'blur(20px) brightness(1)',
                    }}
                />

                <div className="z-10 flex flex-col items-center justify-start w-full h-auto overflow-y-auto overflow-x-hidden">
                    {/* Hero section */}
                    <HeroSection selectedLanguage={selectedLanguage} />
                    {/* Experience section */}
                    <ExperienceHome selectedLanguage={selectedLanguage} />
                    {/* Projects section */}
                    <ProjectsHome selectedLanguage={selectedLanguage} />
                    {/* Stack section */}
                    <MyStack selectedLanguage={selectedLanguage} />
                </div>

                <Footer selectedLanguage={selectedLanguage} />
            </motion.div>
        </>
    )
}
