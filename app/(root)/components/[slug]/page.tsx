import { ComponentCard } from "@/components/ui/card";
import {metaData} from "@/lib/component-registry";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";




export default async function  Components({params} : {params: Promise<{slug:string}>}) {
  const {slug} = await params;
  console.log(slug)
  const slugName = slug.charAt(0).toUpperCase() + slug.slice(1);
  const data = metaData.find(item => item[slugName])?.[slugName] || [];


  return (
    <div className="m-5 h-[95%] p-5 bg-card border-2 rounded-md">
            <Link href="/">
              <ArrowLeft width={20} height={20}/>
            </Link>

            <div className="flex flex-wrap scrollbar-hide mt-5 pb-5 gap-5 overflow-y-auto  md: wrap-normal">
                {data.map((component) => (
                <ComponentCard key={component.title} data={component} />
            ))}
            </div>
    </div>
  )
}
