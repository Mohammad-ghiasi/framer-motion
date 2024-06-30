"use client"
import React, { ReactNode } from 'react'
import { AnimatePresence } from 'framer-motion';

export default function FramerAminateLayout({ children }: { children: ReactNode }) {
    return (
        <AnimatePresence mode="wait" >
            {children}
        </AnimatePresence>
    )
}
