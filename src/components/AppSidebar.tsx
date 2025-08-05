import { useState } from "react";
import { MessageSquare, Clock, Plus, Trash2 } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ChatSession {
  id: string;
  title: string;
  timestamp: Date;
  preview: string;
  isActive: boolean;
}

export function AppSidebar() {
  const { state, open } = useSidebar();
  const location = useLocation();
  
  const [chatSessions, setChatSessions] = useState<ChatSession[]>([
    {
      id: "1",
      title: "Sunrise Running Videos",
      timestamp: new Date(),
      preview: "Find videos with people running in a park during sunrise",
      isActive: true
    },
    {
      id: "2", 
      title: "Cooking Tutorials",
      timestamp: new Date(Date.now() - 86400000),
      preview: "Show me professional cooking videos with Italian cuisine",
      isActive: false
    },
    {
      id: "3",
      title: "Nature Documentaries", 
      timestamp: new Date(Date.now() - 172800000),
      preview: "Wildlife footage of African savanna animals",
      isActive: false
    },
    {
      id: "4",
      title: "Tech Conferences", 
      timestamp: new Date(Date.now() - 259200000),
      preview: "Latest AI and machine learning conference presentations",
      isActive: false
    },
    {
      id: "5",
      title: "Music Videos", 
      timestamp: new Date(Date.now() - 345600000),
      preview: "Electronic music videos with visual effects",
      isActive: false
    }
  ]);

  const handleSessionClick = (sessionId: string) => {
    setChatSessions(sessions => 
      sessions.map(session => ({
        ...session,
        isActive: session.id === sessionId
      }))
    );
  };

  const handleNewChat = () => {
    const newSession: ChatSession = {
      id: `${Date.now()}`,
      title: "New Chat",
      timestamp: new Date(),
      preview: "Start a new conversation...",
      isActive: true
    };
    
    setChatSessions(sessions => [
      newSession,
      ...sessions.map(session => ({ ...session, isActive: false }))
    ]);
  };

  const handleDeleteSession = (sessionId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setChatSessions(sessions => sessions.filter(session => session.id !== sessionId));
  };

  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    return date.toLocaleDateString();
  };

  const collapsed = state === "collapsed";

  return (
    <Sidebar
      className={`transition-all duration-300 bg-chat-background border-r border-chat-border`}
      collapsible="icon"
    >
      {/* Header with New Chat Button */}
      {!collapsed && (
        <div className="p-4 border-b border-chat-border">
          <Button 
            onClick={handleNewChat}
            className="w-full cyber-glow bg-primary hover:bg-primary/80 text-primary-foreground"
          >
            <Plus className="w-4 h-4 mr-2" />
            New Chat
          </Button>
        </div>
      )}

      {/* Collapsed state trigger */}
      {collapsed && (
        <div className="p-2">
          <SidebarTrigger className="w-full" />
          <Button 
            onClick={handleNewChat}
            size="icon"
            className="w-full mt-2 cyber-glow bg-primary hover:bg-primary/80 text-primary-foreground"
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      )}

      <SidebarContent>
        <SidebarGroup>
          {!collapsed && (
            <SidebarGroupLabel className="flex items-center gap-2 text-foreground">
              <MessageSquare className="w-4 h-4 text-primary" />
              Chat Sessions
            </SidebarGroupLabel>
          )}

          <SidebarGroupContent>
            <ScrollArea className="h-[calc(100vh-200px)]">
              <SidebarMenu className="space-y-2">
                {chatSessions.map((session) => (
                  <SidebarMenuItem key={session.id}>
                    <div 
                      className={`group cursor-pointer p-3 rounded-lg transition-all duration-200 ${
                        session.isActive 
                          ? 'cyber-card border-primary/50 bg-primary/10' 
                          : 'cyber-card hover:border-primary/30'
                      }`}
                      onClick={() => handleSessionClick(session.id)}
                    >
                      {collapsed ? (
                        <div className="flex justify-center">
                          <MessageSquare className={`w-5 h-5 ${session.isActive ? 'text-primary' : 'text-muted-foreground'}`} />
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <div className="flex items-start justify-between">
                            <h3 className={`text-sm font-medium truncate flex-1 ${
                              session.isActive ? 'text-primary' : 'text-foreground'
                            }`}>
                              {session.title}
                            </h3>
                            <div className="flex items-center gap-1 ml-2">
                              <Clock className="w-3 h-3 text-muted-foreground" />
                              <Button
                                variant="ghost"
                                size="icon"
                                className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-destructive"
                                onClick={(e) => handleDeleteSession(session.id, e)}
                              >
                                <Trash2 className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                          
                          <p className="text-xs text-muted-foreground line-clamp-2">
                            {session.preview}
                          </p>
                          
                          <div className="text-xs text-muted-foreground">
                            {formatTimeAgo(session.timestamp)}
                          </div>
                        </div>
                      )}
                    </div>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </ScrollArea>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}