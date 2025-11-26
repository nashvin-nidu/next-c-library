'use client'
import dynamic from "next/dynamic"
import { notFound } from "next/navigation"

export const PreviewCanvas = ({preview} : {preview: string}) =>{
    
    const Preview = dynamic(
        () => import(`@/components/previews/${preview}`).catch(() => {
            notFound()
            return { default: () => null }
        }), 
        { ssr: false }
    );
    
    return(
        <div className="h-full w-full overflow-auto flex flex-center">
            <Preview />    
        </div> 
    )

}
