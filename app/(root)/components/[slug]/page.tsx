import { ComponentCard } from "@/components/ui/card";
import {ComponentData, componentRegistry} from "@/lib/component-registry";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


export default async function  Components({params} : {params: Promise<{slug:string}>}) {
  const {slug} = await params;
  const data : ComponentData[] = componentRegistry[slug] || [];


  return (
    <div className="m-5 h-[95%] p-5 bg-card border-2 rounded-md">
      <div className="flex gap-2 items-center">
        <Link href="/">
              <ArrowLeft width={20} height={20}/>
        </Link>

            <Breadcrumb>
              <BreadcrumbList className="text-lg items-center">
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{slug.charAt(0).toUpperCase() + slug.slice(1)}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
      </div>

            <div className="flex flex-wrap scrollbar-hide mt-5 pb-5 gap-5 overflow-y-auto  md: wrap-normal">
                {data.map((component) => (
                <ComponentCard key={component.title} data={component} />
            ))}
            </div>
    </div>
  )
}
