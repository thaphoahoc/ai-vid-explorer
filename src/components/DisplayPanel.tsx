import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FramesTab from "./tabs/FramesTab";
import VideosTab from "./tabs/VideosTab"; 
import FeaturesTab from "./tabs/FeaturesTab";

const DisplayPanel = () => {
  const [activeTab, setActiveTab] = useState("frames");

  return (
    <div className="w-full h-screen bg-background flex flex-col">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full flex flex-col">
        {/* Tab Navigation */}
        <div className="border-b border-border p-4">
          <TabsList className="grid w-full max-w-md grid-cols-3 bg-muted/50 p-1">
            <TabsTrigger 
              value="frames" 
              className={`${activeTab === 'frames' ? 'cyber-tab-active bg-primary/10' : ''} transition-all duration-300`}
            >
              <span className={activeTab === 'frames' ? 'cyber-gradient-text font-medium' : ''}>
                Frames
              </span>
            </TabsTrigger>
            <TabsTrigger 
              value="videos"
              className={`${activeTab === 'videos' ? 'cyber-tab-active bg-primary/10' : ''} transition-all duration-300`}
            >
              <span className={activeTab === 'videos' ? 'cyber-gradient-text font-medium' : ''}>
                Videos
              </span>
            </TabsTrigger>
            <TabsTrigger 
              value="features"
              className={`${activeTab === 'features' ? 'cyber-tab-active bg-primary/10' : ''} transition-all duration-300`}
            >
              <span className={activeTab === 'features' ? 'cyber-gradient-text font-medium' : ''}>
                Features
              </span>
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-hidden">
          <TabsContent value="frames" className="h-full m-0">
            <FramesTab />
          </TabsContent>
          
          <TabsContent value="videos" className="h-full m-0">
            <VideosTab />
          </TabsContent>
          
          <TabsContent value="features" className="h-full m-0">
            <FeaturesTab />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default DisplayPanel;