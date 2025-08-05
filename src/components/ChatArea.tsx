import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  content: string;
  timestamp: Date;
  isUser: boolean;
}

interface ChatAreaProps {
  sessionId?: string;
  sessionTitle?: string;
}

const ChatArea = ({ sessionId, sessionTitle }: ChatAreaProps) => {
  const [inputValue, setInputValue] = useState("");
  
  // Mock messages - in a real app, this would be based on sessionId
  const [messages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm your AI video search assistant. What can I help you find today?",
      timestamp: new Date(),
      isUser: false,
    },
    {
      id: "2", 
      content: sessionTitle || "Find videos with people running in a park during sunrise",
      timestamp: new Date(),
      isUser: true,
    },
    {
      id: "3",
      content: "I found 12 videos matching your criteria. Check the results in the display panel!",
      timestamp: new Date(),
      isUser: false,
    }
  ]);

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      // Handle sending message
      setInputValue("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  if (!sessionId) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="text-6xl">🤖</div>
          <h2 className="text-xl font-semibold cyber-gradient-text">AI Video Search Assistant</h2>
          <p className="text-muted-foreground">Select a chat session or create a new one to get started</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      {/* Chat Header */}
      <div className="p-4 border-b border-chat-border bg-card/50 backdrop-blur-sm">
        <h2 className="text-lg font-semibold text-foreground truncate">
          {sessionTitle || "Chat Session"}
        </h2>
      </div>

      {/* Messages Area */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4 max-w-4xl mx-auto">
          {messages.map((message) => (
            <div 
              key={message.id}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[80%] p-4 rounded-lg ${
                message.isUser 
                  ? 'bg-primary text-primary-foreground ml-4' 
                  : 'cyber-card mr-4'
              }`}>
                <p className="text-sm">{message.content}</p>
                <span className="text-xs opacity-70 mt-2 block">
                  {message.timestamp.toLocaleTimeString([], { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </span>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Input Area */}
      <div className="p-4 border-t border-chat-border bg-card/50 backdrop-blur-sm">
        <div className="flex gap-3 max-w-4xl mx-auto">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Describe the video you're looking for..."
            className="cyber-input flex-1"
          />
          <Button 
            onClick={handleSendMessage}
            className="cyber-glow bg-primary hover:bg-primary/80 text-primary-foreground"
            size="icon"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatArea;