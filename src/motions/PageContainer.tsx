"use client"
import React from 'react'
import {  motion, MotionProps } from "framer-motion"

interface XmotionProps extends MotionProps {
    children: React.ReactNode;
    className?: string;
}

export const pageVariants = {
    hidden: { opacity: 0, transition: { duration: 0.5 } },
    enter: { opacity: 1, transition: { duration: 0.6 } },
    exit: { opacity: 0, transition: { duration: 1 } },
};

export default function PageContainerMotion({ className, children, ...rest }: XmotionProps) {
    return (
        <motion.div
            className={className}
            {...rest}
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={pageVariants}
        >
            {children}
        </motion.div>
    )
}
