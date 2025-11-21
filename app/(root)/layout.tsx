import { SidebarProvider } from "@/components/ui/sidebar";
<<<<<<< Updated upstream
import { AppSidebar } from "@/components/app/sidebar";
=======
import { AppSidebar } from "@/components/sidebar";
>>>>>>> Stashed changes


const HomePageLayout = ({children} : {children : React.ReactNode}) => {
    return(
        
            <SidebarProvider >
              <AppSidebar  />
              <main className="w-full">
                {children}
              </main>
            </SidebarProvider>
    )
}

export default HomePageLayout;