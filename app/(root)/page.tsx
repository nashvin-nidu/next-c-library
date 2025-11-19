import { ComponentCard } from "@/components/ui/card";
import { SidebarTrigger } from "@/components/ui/sidebar";
import data_components from "@/lib/constants/data-components";



export default function Page() {
  const data = data_components;
  return (
    <div className="h-screen flex flex-col ">
      <div>
        <SidebarTrigger />
      </div>

      <div className=" m-3 px-5 bg-(--container-app) border-2 rounded-2xl">
        <div className="overflow-x-auto scrollbar-hide  flex mt-5 gap-7 pb-5">
          {data.map((component) => (
            <ComponentCard key={component.title} data={component} />
          ))}
        </div>
        
      </div>
    </div>
  );
}

