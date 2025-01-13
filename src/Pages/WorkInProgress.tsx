import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import NavBar from "@/Components/NavBar"
import Footer from "@/Components/Footer"

export default function WorkInProgress() {
    const [mousePosition, setMousePosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

    const handleMouseMove = useCallback((e: { pageX: number; pageY: number }) => {
        setMousePosition({
            x: e.pageX,
            y: e.pageY,
        });
    }, []);

    return (
        <>
            <NavBar onMouseMove={handleMouseMove} selectedLanguage={'en'} toggleLanguage={() => { }} />
            {/* Construction Tape */}
            <motion.div
                className="fixed top-[4.1rem] left-0 w-full h-12 z-50"
                style={{
                    backgroundImage: 'linear-gradient(45deg, #FFD074 25%, black 25%, black 50%, #FFD074 50%, #FFD074 75%, black 75%, black)',
                    backgroundSize: '40px 40px',
                    zIndex: 100, // Asegúrate de que el z-index sea alto
                }}
                animate={{
                    backgroundPosition: ['0% 0%', '100% 0%'], // Desplazamiento del fondo
                }}
                transition={{
                    repeat: Infinity,
                    duration: 10,
                    ease: 'linear',
                }}
            />

            <motion.div
                className="bg-[#0E100F] flex flex-col items-center justify-center w-full min-h-screen h-auto relative overflow-hidden"
                onMouseMove={handleMouseMove}
            >
                {/* Efecto de mouse */}
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
                <div className="z-10 flex flex-col items-center justify-center w-full min-h-[calc(100vh-8.4rem)] text-white space-y-6 font-halcyon bg-red-30 px-4">
                    <h1 className='text-5xl font-halcyon text-center'>Work in Progress</h1>
                    <p className='text-wrap text-center'>This page is currently under construction. Please check back later.</p>
                    {/* Boton de regreso */}
                    <a
                        href="/"
                        className="px-4 py-2 text-white bg-[#FFD074] rounded-lg transform transition-all duration-300 hover:scale-105"
                    >
                        Go back
                    </a>
                </div>
                <motion.div
                    className="relative w-full h-12 z-50"
                    style={{
                        backgroundImage: 'linear-gradient(45deg, #FFD074 25%, black 25%, black 50%, #FFD074 50%, #FFD074 75%, black 75%, black)',
                        backgroundSize: '40px 40px',
                        zIndex: 100, // Asegúrate de que el z-index sea alto
                    }}
                    animate={{
                        backgroundPosition: ['0% 0%', '100% 0%'], // Desplazamiento del fondo
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 10,
                        ease: 'linear',
                    }}
                />
                <Footer selectedLanguage={'en'} />
            </motion.div>
        </>
    );
}
