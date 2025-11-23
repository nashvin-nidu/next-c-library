import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ComponentCard } from "./ui/card";
import { ComponentData} from "@/lib/component-registry";

export default function Section({data, title, endPoint}: {data: ComponentData[]; title: string, endPoint: string;}) {

  return (
    <div className="m-3 px-5">
        <div className="flex justify-between pt-3 pr-10">
          <h2 className="text-sm">{title}</h2>
          <Link href={`/components${endPoint}`} className="flex flex-center gap-2 ">
            <p className="text-sm">View All</p>
            <ArrowRight width={16} height={16}/>
          </Link>
        </div>
        
        <div className="overflow-x-auto scrollbar-hide  flex mt-5 gap-7 pb-5">
          {data.map((component: ComponentData) => 
          (
            <ComponentCard key={component.title} data={component} />
          ))}
        </div>
      </div>
  );
}

