import ChatSidebar from "@/components/ChatSidebar";
import DisplayPanel from "@/components/DisplayPanel";

const Index = () => {
  return (
    <div className="h-screen flex bg-background overflow-hidden">
      {/* Left Column - Chat Sidebar (30% width) */}
      <div className="w-[30%] min-w-[320px] max-w-[480px]">
        <ChatSidebar />
      </div>
      
      {/* Right Column - Display Panel (70% width) */}
      <div className="flex-1">
        <DisplayPanel />
      </div>
    </div>
  );
};

export default Index;
