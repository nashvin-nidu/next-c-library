'use client'

import Link from "next/link"
import { Component } from "@/lib/constants/data-components"

export const ComponentCard = ({data} : {data: Component }) =>{

   return(
    <Link href="#">
        <div className="shrink-0 px-1 pb-1 bg-card border-2 rounded-xl cursor-pointer">
            <div className="flex flex-col px-3 py-3">
                <span className="text-xs font-bold font-sans">{title}</span>
                <span className="text-xs font-light font-mono">{description}</span>
            </div>
            <div className="h-60 w-[350px] flex justify-center rounded-xl ">
                <video src={`/videos/${video_slug}.mp4`}
                loop 
                muted
                playsInline 
                onMouseEnter={(e) => e.currentTarget.play()} 
                onMouseLeave={(e) => {e.currentTarget.pause(); e.currentTarget.currentTime = 0;}}
                className="rounded-xl w-full h-full object-cover" />
            </div>
        </div>
    </Link>
   )
}