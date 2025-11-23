import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar";

const HomePageLayout = ({children} : {children : React.ReactNode}) => {
    return(
        
            <SidebarProvider >
              <AppSidebar  />
              <main className="min-w-0">
                {children}
              </main>
            </SidebarProvider>
    )
}

export default HomePageLayout;