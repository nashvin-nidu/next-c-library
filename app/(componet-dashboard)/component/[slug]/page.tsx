import { ThemeButton } from "@/components/page-component/Buttons";
import MenuContent from "@/components/page-component/MenuContent";
import { PreviewCanvas } from "@/components/page-component/Preview";
import { getComponentData } from "@/lib/component-registry";
import Link from "next/link";

 const ComponentPage = async ({params} : {params: Promise<{slug:string}>}) => {
    const {slug} = await params;
    
    const Data = getComponentData(slug);
    
    if (!Data) {
      return <div className="text-center"><h1>Component not found</h1></div>;
    }
    return(
        <div className="flex">
            {/* Component Menu */}
            <div className="w-[35%] h-screen overflow-hidden">

                {/* Component Header, Interactive a links, buttons */}
                <div className="px-10 py-5 mt-5">
                    <span>
                        <Link className="underline" href={'/'}>Components</Link>{`/${slug}`}
                    </span>
                </div>
                
                <MenuContent data={Data}/>
            </div>

            {/* Preview Component */}
            <div className="flex flex-col w-[65%] h-screen border-2 rounded-4xl p-10">
                <ThemeButton />
                <PreviewCanvas preview={slug} />
            </div>
        </div>
    )
}

export default ComponentPage;