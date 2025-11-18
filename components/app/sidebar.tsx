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
import { ChevronRight } from "lucide-react"


const items = [
        {
          title: "Routing",
          url: "#",
        },
        {
          title: "Data Fetching",
          url: "#",
        },
        {
          title: "Rendering",
          url: "#",
        },
    ]
       
export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarGroup>
        <SidebarGroupLabel className="font-sans">Components</SidebarGroupLabel>
        {items.map((item) => (
            <Collapsible key={item.title} defaultOpen className="group/collapsible">
                <SidebarMenu>
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                        <SidebarMenuButton tooltip={item.title}>
                            <span className="font-sans">{item.title}</span>
                            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuButton>
                    </CollapsibleTrigger>

                    <CollapsibleContent>
                     <SidebarMenuSub>
                       {items.map((item) => (
                        <SidebarMenuSubItem key={item.title}>
                           <SidebarMenuSubButton href={item.url} title={item.title} >
                              <span className="font-mono">{item.title}</span>
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
