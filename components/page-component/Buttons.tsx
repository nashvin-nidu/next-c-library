'use client'
import { useTheme } from "next-themes"
import { Copy, FileText, Moon, Sun } from "lucide-react"
import { toast } from "sonner"
import { Button } from "../ui/button"



export const ThemeButton = () =>{
      const { theme = 'dark', setTheme } = useTheme()
      const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
      }
    return(
        <div className="h-15 relative z-50">
            <button 
                type="button" 
                id="theme" 
                onClick={toggleTheme}
                className="flex flex-center gap-2 py-1 px-3 bg-card border-2 rounded-md cursor-pointer"
            >
                {theme === 'dark' ? (
                    <Sun className="w-4 h-4" />
                ) : (
                    <Moon className="w-4 h-4" />
                )}
                <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
            </button>
        </div>
        
    )
}


export const CopyCode = async (data: string) => {
    try {
        await navigator.clipboard.writeText(data);
        toast.success("Code has been Copied")
    } catch (err) {
        console.error('Failed to copy:', err);
        toast.error("Code Not Copied")
    }
}

export const CopyButton = ({data} : {data: string}) =>{
    return(
        <Button type="button" variant="outline" onClick={ () => CopyCode(data)} className="flex px-3 py-1 gap-2 flex-center bg-card border-card rounded-md cursor-pointer">
            <Copy className="w-4 h-4" />
            <span>Copy Code</span>
        </Button> 
    )
}

export const PromptButton = ({data} : {data: string}) => {
    const handleClick = async () => {
        try {
            await navigator.clipboard.writeText(data);
            toast.success("Prompt has been Copied")
        } catch (err) {
            console.error('Failed to copy:', err);
            toast.error("Event has not been created")
        }
    }

    return(
        <Button type="button" variant="outline" onClick={handleClick} className="flex px-3 py-1 gap-2 flex-center bg-card border-card rounded-md cursor-pointer">
            <FileText className="w-4 h-4" />
            <span>Prompt</span>
        </Button>
    )
}