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

const buttonsData = componentRegistry.buttons || [];
const navbarData = componentRegistry.navbar || [];
const carouselData = componentRegistry.carousel || [];

import { ChevronRight} from "lucide-react"
import {metaData} from "@/lib/component-registry"



const buttonsData = metaData.find(item => item.Buttons)?.Buttons || [];
const navbarData = metaData.find(item => item.Navbar)?.Navbar || [];
const carouselData = metaData.find(item => item.Carousal)?.Carousal || [];

const parentItems = [
        {
          title: "NavBar",
          url: "navbar",
          components: navbarData
        },
        {
          title: "Carousal",
          url: "carousal",
        },
        {
          title: "Buttons",
          url: "buttons",
          components: navbarData
        },
        {
          title: "Buttons",
          url: "buttons",
          components: buttonsData
        },
        {
          title: "Carousal",
          url: "carousal",
          components: carouselData
        },
    ]


export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarGroup>
        <SidebarGroupLabel className="font-sans text-base">Components</SidebarGroupLabel>
        {parentItems.map((item) => (
        <SidebarGroupLabel>Components</SidebarGroupLabel>
        <SidebarGroupLabel className="font-sans">Components</SidebarGroupLabel>
        <SidebarGroupLabel>Components</SidebarGroupLabel>
        {items.map((item) => (
        <SidebarGroupLabel className="font-sans">Components</SidebarGroupLabel>
        {parentItems.map((item) => (
            <Collapsible key={item.title} defaultOpen className="group/collapsible">
                <SidebarMenu>
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                        <SidebarMenuButton tooltip={item.title}>
                          <a  href={`/components/${item.url}`}>
                            <h3>{item.title}</h3>
                          </a>
                            <span className="font-sans">{item.title}</span>
                            <span>{item.title}</span>
                            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                     <SidebarMenuSub>
                       {chldItems.map((item) => (
                        <SidebarMenuSubItem key={item.title}>
                           <SidebarMenuSubButton href={item.url} title={item.title} >
                              <span>{item.title}</span>
                          <a  href={`/components/${item.url}`}>
                            <h3>{item.title}</h3>
                          </a>
                            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                     <SidebarMenuSub>
                       {item.components.map((component) => (
                        <SidebarMenuSubItem key={component.title}>
                           <SidebarMenuSubButton href={`/component/${component.slug}`} title={component.title} >
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
      
        
      <SidebarFooter />
    </Sidebar>
  )
}
