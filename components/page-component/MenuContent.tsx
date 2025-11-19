import CodeBlock from "./CodeBlock";
import FooterMenuContent from "./FooterMenuContent";
import { CopyButton, PromptButton } from "./Buttons";


const MenuContent = () => {
  return (
    <div className="flex flex-col p-10 overflow-y-auto max-h-full scrollbar-hide">
      <h1 className="font-sans font-bold mb-3">Title</h1>
      <span className="text-sm mb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        incidunt dolores maiores suscipit, nulla excepturi reprehenderit id nam.
        Illum quae iusto velit? Ex optio facere, nobis libero repellendus
        possimus aliquam.
      </span>

      <div className="mb-5">
        <h1 className="font-sans font-bold mb-2">Installation</h1>
        <div className="flex justify-start items-center bg-card w-full h-15 px-3 rounded-sm overflow-x-auto scrollbar-hide ">
          <p className="font-mono text-sm whitespace-nowrap">
            <span className="font-bold">npx</span> shadcn@latest add
            https://21st.dev/r/aceternity/sidebar Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Officia accusantium, inventore
            provident laudantium omnis libero eum impedit? Saepe vitae nisi,
            dolore dolorem ab voluptatem similique vero voluptates quas quaerat
            odit?
          </p>
        </div>
      </div>

      {/* Code Block */}
      <div className="flex flex-col mb-5">
        <h1 className="font-sans font-bold mb-5">How to Use</h1>
        <div className="flex gap-5 mb-5">



          <CopyButton />
          <PromptButton />



        </div>
        <div className="flex justify-start items-center bg-card w-full rounded-sm">
          <CodeBlock
            language="tsx"
            code={`'use client'
                            import dynamic from "next/dynamic"
                            
                            export const PreviewCanvas = ({preview} : {preview: string}) =>{
                                const Preview = dynamic(() => import("@/components/previews/preview"),{ ssr: false })
                                return(
                                    <div className="w-full h-full overflow-hidden">
                                        <Preview />
                                    </div>
                                )
                            
                            }
                                'use client'
                            import dynamic from "next/dynamic"
                            
                            export const PreviewCanvas = ({preview} : {preview: string}) =>{
                                const Preview = dynamic(() => import("@/components/previews/preview"),{ ssr: false })
                                return(
                                    <div className="w-full h-full overflow-hidden">
                                        <Preview />
                                    </div>
                                )
                            
                            }
                                'use client'
                            import dynamic from "next/dynamic"
                            
                            export const PreviewCanvas = ({preview} : {preview: string}) =>{
                                const Preview = dynamic(() => import("@/components/previews/preview"),{ ssr: false })
                                return(
                                    <div className="w-full h-full overflow-hidden">
                                        <Preview />
                                    </div>
                                )
                            
                            }
                            `}
          />
        </div>
      </div>

      <FooterMenuContent />
    </div>
  );
};

export default MenuContent;
