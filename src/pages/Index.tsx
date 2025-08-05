import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import ChatArea from "@/components/ChatArea";
import DisplayPanel from "@/components/DisplayPanel";

const Index = () => {
  // In a real app, this would come from the AppSidebar selection
  const [activeSession] = useState({
    id: "1",
    title: "Sunrise Running Videos"
  });

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <main className="flex-1 flex">
          {/* Chat Area - Left side of main content */}
          <div className="w-[40%] border-r border-border">
            {/* Header with sidebar trigger */}
            <div className="h-12 flex items-center border-b border-border px-4 bg-card/50 backdrop-blur-sm">
              <SidebarTrigger className="mr-2" />
              <span className="font-medium text-foreground">Chat</span>
            </div>
            
            <div className="h-[calc(100vh-3rem)]">
              <ChatArea 
                sessionId={activeSession.id}
                sessionTitle={activeSession.title}
              />
            </div>
          </div>
          
          {/* Display Panel - Right side of main content */}
          <div className="flex-1">
            <DisplayPanel />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
