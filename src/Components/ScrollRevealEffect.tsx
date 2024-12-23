import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

export const ScrollRevealEffect = ({ children }: { children: ReactNode }) => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    return (
        <motion.div
            style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(100px)",
                transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
            }}
            ref={ref}
        >
            {children}
        </motion.div>
    );
};
