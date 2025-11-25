'use client'
import { ParticleButton } from "../source-preview/Buttons/particle-button"
// import { Button } from "@/components/ui/button"
// import { LucideIcon } from "lucide-react"

export default function ParticleButtonDemo() {
    return (
        <ParticleButton successDuration={1000} variant="default">
            Click me!
        </ParticleButton>
    )
}
