import {
  Sidebar,
  SidebarMenu,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronRight, HomeIcon } from "lucide-react"
import { componentRegistry } from "@/lib/component-registry"
import Link from "next/link";

const buttonsData = componentRegistry.buttons || [];
const navbarData = componentRegistry.navbar || [];
const carouselData = componentRegistry.carousel || [];

const parentItems = [
        {
          title: "NavBar",
          url: "navbar",
          components: navbarData
        },
        {
          title: "Buttons",
          url: "buttons",
          components: buttonsData
        },
        {
          title: "Carousal",
          url: "carousel",
          components: carouselData
        },
    ]


export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader></SidebarHeader>
      <SidebarGroup>
        <SidebarGroupLabel className="font-sans text-base gap-2">
            <Link href="/">
              <HomeIcon width={16} height={16}/>
            </Link>
            <span>Components</span>
          </SidebarGroupLabel>
        {parentItems.map((item) => (
          <Collapsible key={item.title} defaultOpen className="group/collapsible">
            <SidebarMenu>
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip={item.title}>
                      <Link  href={`/components/${item.url}`}>
                        <h3>{item.title}</h3>
                      </Link>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.components.map((component) => (
                      <SidebarMenuSubItem key={component.title}>
                        <SidebarMenuSubButton href={`/component/${component.slug}`} title={component.title}>
                          <span>{component.title}</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </SidebarMenu>
          </Collapsible>
        ))}
      </SidebarGroup>
      <SidebarFooter ></SidebarFooter>
    </Sidebar>
  )
}