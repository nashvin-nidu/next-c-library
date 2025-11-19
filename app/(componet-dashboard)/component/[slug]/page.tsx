import { ThemeButton } from "@/components/page-component/Buttons";
import MenuContent from "@/components/page-component/MenuContent";
import { PreviewCanvas } from "@/components/page-component/Preview";

 const ComponentPage = async ({params} : {params: Promise<{slug:string}>}) => {
    const {slug} = await params;
    
    const Moudule = await import(`@/components/previews/${slug}`);

    const m = Moudule.Data
    const p = Moudule.Preview
    console.log(m)
    console.log(p)

    return(
        <div className="flex bg-(--container)">

            {/* Component Menu */}
            <div className="w-[35%] h-screen overflow-hidden">

                {/* Component Header, Interactive a links, buttons */}
                <div className="px-10 py-5 mt-5">
                    <span>{`Components/${slug}`}</span>
                </div>
                
                <MenuContent />
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