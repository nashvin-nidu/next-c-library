import Section from "@/components/section";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { componentRegistry } from "@/lib/component-registry";



export default function Page() {
    const buttonsData = componentRegistry.buttons || [];
    const navbarData = componentRegistry.navbar || [];
    const carouselData = componentRegistry.carousel || [];
  return (
    <div className="h-screen flex flex-col ">
        <SidebarTrigger />

        <Section data={buttonsData} title={"Buttons"} endPoint={"/buttons"} />
        <Section data={navbarData} title={"NavBar"} endPoint={"/navbar"} />
        <Section data={carouselData} title={"Carousel"} endPoint={"/carousel"} />
    </div>
  );
}

