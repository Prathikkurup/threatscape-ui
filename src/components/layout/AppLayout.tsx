import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <div className="flex flex-col flex-1">
          {/* Header */}
          <header className="h-16 border-b border-border bg-card/50 backdrop-blur-sm flex items-center px-6">
            <SidebarTrigger className="mr-4" />
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-safe rounded-full pulse-neon"></div>
                <span className="text-sm font-mono text-muted-foreground">
                  NIDS v2.1.0 - System Online
                </span>
              </div>
            </div>
            
            <div className="ml-auto flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm font-mono">
                <span className="text-muted-foreground">Last Scan:</span>
                <span className="text-primary">{new Date().toLocaleTimeString()}</span>
              </div>
            </div>
          </header>
          
          {/* Main Content */}
          <main className="flex-1 p-6 bg-gradient-dark">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}