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
<<<<<<< Updated upstream
=======
<<<<<<<< Updated upstream:components/app/sidebar.tsx
>>>>>>> Stashed changes
import { ChevronRight, Link } from "lucide-react"
import { componentRegistry } from "@/lib/component-registry"


<<<<<<< Updated upstream
=======
========
import { ChevronRight} from "lucide-react"
import {metaData} from "@/lib/component-registry"



const buttonsData = metaData.find(item => item.Buttons)?.Buttons || [];
const navbarData = metaData.find(item => item.Navbar)?.Navbar || [];
const carouselData = metaData.find(item => item.Carousal)?.Carousal || [];

>>>>>>>> Stashed changes:components/sidebar.tsx
>>>>>>> Stashed changes
const parentItems = [
        {
          title: "NavBar",
          url: "navbar",
<<<<<<< Updated upstream
=======
<<<<<<<< Updated upstream:components/app/sidebar.tsx
>>>>>>> Stashed changes
        },
        {
          title: "Carousal",
          url: "carousal",
        },
        {
          title: "Buttons",
          url: "buttons",
<<<<<<< Updated upstream
=======
========
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
>>>>>>>> Stashed changes:components/sidebar.tsx
>>>>>>> Stashed changes
        },
    ]


<<<<<<< Updated upstream
=======
<<<<<<<< Updated upstream:components/app/sidebar.tsx
>>>>>>> Stashed changes
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


<<<<<<< Updated upstream
=======
========
>>>>>>>> Stashed changes:components/sidebar.tsx
>>>>>>> Stashed changes

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarGroup>
<<<<<<< Updated upstream
<<<<<<<< Updated upstream:components/app-sidebar.tsx
        <SidebarGroupLabel>Components</SidebarGroupLabel>
=======
<<<<<<<< Updated upstream:components/app/sidebar.tsx
<<<<<<< Updated upstream:components/app/sidebar.tsx
        <SidebarGroupLabel className="font-sans">Components</SidebarGroupLabel>
=======
<<<<<<<< Updated upstream:components/app-sidebar.tsx
        <SidebarGroupLabel>Components</SidebarGroupLabel>
>>>>>>> Stashed changes:components/app-sidebar.tsx
>>>>>>> Stashed changes
        {items.map((item) => (
========
        <SidebarGroupLabel className="font-sans">Components</SidebarGroupLabel>
        {parentItems.map((item) => (

>>>>>>>> Stashed changes:components/sidebar.tsx
<<<<<<< Updated upstream
=======
========
        <SidebarGroupLabel className="font-sans"><h2>Components</h2></SidebarGroupLabel>
        {parentItems.map((item) => (
>>>>>>>> Stashed changes:components/sidebar.tsx
>>>>>>> Stashed changes
            <Collapsible key={item.title} defaultOpen className="group/collapsible">
                <SidebarMenu>
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      
                        <SidebarMenuButton tooltip={item.title}>
<<<<<<< Updated upstream
=======
<<<<<<<< Updated upstream:components/app/sidebar.tsx
<<<<<<< Updated upstream:components/app/sidebar.tsx
                            <span className="font-sans">{item.title}</span>
=======
>>>>>>> Stashed changes
<<<<<<<< Updated upstream:components/app-sidebar.tsx
                            <span>{item.title}</span>
========
                          <a href={`/components/${item.url}`}>
                            <span className="font-sans">{item.title}</span>
                          </a>
>>>>>>>> Stashed changes:components/sidebar.tsx
<<<<<<< Updated upstream
                            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuButton>
                    </CollapsibleTrigger>

                    <CollapsibleContent>
                     <SidebarMenuSub>
                       {chldItems.map((item) => (
                        <SidebarMenuSubItem key={item.title}>
                           <SidebarMenuSubButton href={item.url} title={item.title} >
                              <span>{item.title}</span>
=======
>>>>>>> Stashed changes:components/app-sidebar.tsx
========
                          <a  href={`/components/${item.url}`}>
                            <h3>{item.title}</h3>
                          </a>
>>>>>>>> Stashed changes:components/sidebar.tsx
                            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                     <SidebarMenuSub>
<<<<<<<< Updated upstream:components/app/sidebar.tsx
                       {chldItems.map((item) => (
                        <SidebarMenuSubItem key={item.title}>
                           <SidebarMenuSubButton href={item.url} title={item.title} >
                              <span className="font-mono">{item.title}</span>
========
                       {item.components.map((component) => (
                        <SidebarMenuSubItem key={component.title}>
                           <SidebarMenuSubButton href={`/component/${component.slug}`} title={component.title} >
                              <span>{component.title}</span>
>>>>>>>> Stashed changes:components/sidebar.tsx
>>>>>>> Stashed changes
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
