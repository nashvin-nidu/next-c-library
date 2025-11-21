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
import { ChevronRight, Link } from "lucide-react"
import { componentRegistry } from "@/lib/component-registry"


const parentItems = [
        {
          title: "NavBar",
          url: "navbar",
        },
        {
          title: "Carousal",
          url: "carousal",
        },
        {
          title: "Buttons",
          url: "buttons",
        },
    ]


const a = componentRegistry ;
  const chldItems = [
    {
      title: "Buttons",
      url: "#",
    },
    {
      title: "d",
      url: "#",
    },
    {
      title: "n",
      url: "#",
    }
  ]



export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarGroup>
<<<<<<<< Updated upstream:components/app-sidebar.tsx
        <SidebarGroupLabel>Components</SidebarGroupLabel>
        {items.map((item) => (
========
        <SidebarGroupLabel className="font-sans">Components</SidebarGroupLabel>
        {parentItems.map((item) => (

>>>>>>>> Stashed changes:components/sidebar.tsx
            <Collapsible key={item.title} defaultOpen className="group/collapsible">
                <SidebarMenu>
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      
                        <SidebarMenuButton tooltip={item.title}>
<<<<<<<< Updated upstream:components/app-sidebar.tsx
                            <span>{item.title}</span>
========
                          <a href={`/components/${item.url}`}>
                            <span className="font-sans">{item.title}</span>
                          </a>
>>>>>>>> Stashed changes:components/sidebar.tsx
                            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuButton>
                    </CollapsibleTrigger>

                    <CollapsibleContent>
                     <SidebarMenuSub>
                       {chldItems.map((item) => (
                        <SidebarMenuSubItem key={item.title}>
                           <SidebarMenuSubButton href={item.url} title={item.title} >
                              <span>{item.title}</span>
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
      
        
      <SidebarFooter />
    </Sidebar>
  )
}
