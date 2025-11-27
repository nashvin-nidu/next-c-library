import Link from "next/link"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { componentRegistry } from "@/lib/component-registry"

function getCategoryFromSlug(slug: string): string | null {
  for (const [category, components] of Object.entries(componentRegistry)) {
    const found = components.find(c => c.slug === slug);
    if (found) return category;
  }
  return null;
}

export function BreadCrumb({slug} : {slug : string}) {
  const category = getCategoryFromSlug(slug);
  
  return (
    <Breadcrumb>
      <BreadcrumbList className="text-lg">
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {category && (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href={`/components/${category}`}>{category.charAt(0).toUpperCase() + category.slice(1)}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        )}
        <BreadcrumbItem>
          <BreadcrumbPage>{slug}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
