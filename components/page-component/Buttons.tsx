import { Copy, FileText, Sun } from "lucide-react"

export const ThemeButton = () =>{
    return(
        <div className="h-15">
            <button type="button" id="" className="flex flex-center gap-2 py-1 px-3 bg-card border-2 rounded-md cursor-pointer" >
                <Sun className="w-4 h-4" />
                <span>Dark</span>
            </button>
        </div>
        
    )
}


export const CopyButton = () =>{
    return(
        <button type="button" className="flex px-3 py-1 gap-2 flex-center bg-card border-card rounded-md cursor-pointer">
            <Copy className="w-4 h-4" />
            <span>Copy</span>
        </button>
        
    )
}

export const PromptButton = () =>{
    return(
        <button type="button" className="flex px-3 py-1 gap-2 flex-center bg-card border-card rounded-md cursor-pointer">
            <FileText className="w-4 h-4" />
            <span>Prompt</span>
        </button>
    )
}