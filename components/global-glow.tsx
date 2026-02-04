"use client"

import React from "react"

export function GlobalGlow() {
    return (
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
            <div className="absolute top-[-10%] left-[20%] h-[800px] w-[800px] rounded-full bg-primary/[0.04] blur-[150px]" />
            <div className="absolute top-[30%] right-[0%] h-[700px] w-[700px] rounded-full bg-primary/[0.03] blur-[120px]" />
            <div className="absolute bottom-[20%] left-[-10%] h-[800px] w-[800px] rounded-full bg-primary/[0.04] blur-[150px]" />
            <div className="absolute top-[80%] right-[10%] h-[600px] w-[600px] rounded-full bg-primary/[0.03] blur-[120px]" />
        </div>
    )
}
