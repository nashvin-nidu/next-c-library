import { ComponentCard } from "@/components/ui/card";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Page() {

  const components = [
    {
      title: "Button",
      description: "Magic Ui",
      component_slug: "button-preview"
    }
  ]


  return (
    <div className="h-screen flex flex-col ">
      <div>
        <SidebarTrigger />
      </div>

      <div className=" m-3 px-5 bg-(--container-app) border-2 rounded-2xl">
        <div className="overflow-x-auto scrollbar-hide  flex mt-5 gap-7 pb-5">
          {components.map((comp) => (
            <ComponentCard key={comp.component_slug} title={comp.title} description={comp.description} video_slug={comp.component_slug} />
          ))}
        </div>
        
      </div>
    </div>
  );
}

