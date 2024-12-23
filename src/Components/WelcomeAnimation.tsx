import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const defaultDuration = 150 // Default duration for greetings rotation

interface WelcomeAnimationProps {
    duration?: number
    greetings: string[]
    onAnimationEnd?: () => void // Callback for animation end
}

export default function WelcomeAnimation({
    duration = defaultDuration,
    greetings,
    onAnimationEnd,
}: WelcomeAnimationProps) {
    const [currentGreeting, setCurrentGreeting] = useState(0)
    const [exitAnimation, setExitAnimation] = useState(false) // Track exit animation state
    const animationRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (exitAnimation) return // Skip if exit animation has started

        const timer = setTimeout(() => {
            if (currentGreeting < greetings.length - 1) {
                setCurrentGreeting(currentGreeting + 1)
            } else {
                setExitAnimation(true) // Trigger the exit animation after the last greeting
                setTimeout(() => {
                    onAnimationEnd?.() // Trigger callback after exit animation
                }, duration)
            }
        }, currentGreeting === 0 ? duration : defaultDuration)

        return () => clearTimeout(timer)
    }, [currentGreeting, greetings.length, duration, exitAnimation, onAnimationEnd])

    return (
        <motion.div
            ref={animationRef}
            initial={{ y: 0 }}
            animate={exitAnimation ? { y: '-100vh' } : { y: 0 }}
            transition={{
                duration: 1,
                ease: 'easeInOut',
            }}
            className="bg-[#0E100F] flex items-center justify-center w-full h-[100vh] absolute top-0 left-0"
        >
            <motion.div
                initial="hidden"
                animate="visible"
                variants={greetingVariants}
                className="text-[#FFFFE3] text-opacity-80 text-5xl font-halcyon flex items-center"
            >
                <div className="w-3 h-3 bg-[#FFFFE3] rounded-full mr-4 opacity-80"></div>
                {greetings[currentGreeting]}
            </motion.div>
        </motion.div>
    )
}

const greetingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
}
