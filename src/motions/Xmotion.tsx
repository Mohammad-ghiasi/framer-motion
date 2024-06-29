// "use client" 
import React from 'react'
import { motion, MotionProps } from "framer-motion"

interface XmotionProps extends MotionProps {
    children: React.ReactNode;
    className?: string;
}

export default function Xmotion({ className, children, ...rest }: XmotionProps) {
    return (
        <motion.p className={className} {...rest}>
            {children}
        </motion.p>
    )
}
