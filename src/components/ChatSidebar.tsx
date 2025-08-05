import { useState } from "react";
import { Send, MessageSquare, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  content: string;
  timestamp: Date;
  isUser: boolean;
}

interface ChatSession {
  id: string;
  title: string;
  timestamp: Date;
  preview: string;
}

const ChatSidebar = () => {
  const [inputValue, setInputValue] = useState("");
  const [messages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm your AI video search assistant. What can I help you find today?",
      timestamp: new Date(),
      isUser: false,
    },
    {
      id: "2", 
      content: "Find videos with people running in a park during sunrise",
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

  const [chatSessions] = useState<ChatSession[]>([
    {
      id: "1",
      title: "Sunrise Running Videos",
      timestamp: new Date(),
      preview: "Find videos with people running in a park during sunrise"
    },
    {
      id: "2", 
      title: "Cooking Tutorials",
      timestamp: new Date(Date.now() - 86400000),
      preview: "Show me professional cooking videos with Italian cuisine"
    },
    {
      id: "3",
      title: "Nature Documentaries", 
      timestamp: new Date(Date.now() - 172800000),
      preview: "Wildlife footage of African savanna animals"
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

  return (
    <div className="w-full h-screen bg-chat-background border-r border-chat-border flex flex-col">
      {/* Chat Sessions Header */}
      <div className="p-4 border-b border-chat-border">
        <div className="flex items-center gap-2 mb-4">
          <MessageSquare className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-semibold text-foreground">Chat History</h2>
        </div>
        
        {/* Recent Sessions */}
        <ScrollArea className="max-h-40">
          <div className="space-y-2">
            {chatSessions.map((session) => (
              <div 
                key={session.id}
                className="cyber-card p-3 cursor-pointer group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-foreground truncate">
                      {session.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                      {session.preview}
                    </p>
                  </div>
                  <Clock className="w-3 h-3 text-muted-foreground mt-1 ml-2 flex-shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Messages Area */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div 
              key={message.id}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[80%] p-3 rounded-lg ${
                message.isUser 
                  ? 'bg-primary text-primary-foreground ml-4' 
                  : 'cyber-card mr-4'
              }`}>
                <p className="text-sm">{message.content}</p>
                <span className="text-xs opacity-70 mt-1 block">
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
      <div className="p-4 border-t border-chat-border">
        <div className="flex gap-2">
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

export default ChatSidebar;