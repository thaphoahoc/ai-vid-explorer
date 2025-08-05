import { Play, Clock, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import runningSunrise1 from "@/assets/running-sunrise-1.jpg";
import runningSunrise2 from "@/assets/running-sunrise-2.jpg";
import runningSunrise3 from "@/assets/running-sunrise-3.jpg";

interface FrameData {
  id: string;
  thumbnail: string;
  timestamp: string;
  title: string;
  similarity: number;
}

const FramesTab = () => {
  // Mock data for video frames
  const frames: FrameData[] = [
    {
      id: "1",
      thumbnail: runningSunrise1,
      timestamp: "02:34",
      title: "Person running at sunrise",
      similarity: 94
    },
    {
      id: "2", 
      thumbnail: runningSunrise2,
      timestamp: "05:12",
      title: "Morning jog in park",
      similarity: 89
    },
    {
      id: "3",
      thumbnail: runningSunrise3, 
      timestamp: "01:45",
      title: "Sunrise through trees",
      similarity: 87
    },
    {
      id: "4",
      thumbnail: runningSunrise1,
      timestamp: "03:22",
      title: "Runner silhouette",
      similarity: 85
    },
    {
      id: "5",
      thumbnail: runningSunrise2,
      timestamp: "04:56",
      title: "Park pathway view",
      similarity: 82
    },
    {
      id: "6",
      thumbnail: runningSunrise3,
      timestamp: "02:18",
      title: "Golden hour lighting",
      similarity: 80
    },
    {
      id: "7",
      thumbnail: runningSunrise1,
      timestamp: "06:33",
      title: "Morning exercise",
      similarity: 78
    },
    {
      id: "8",
      thumbnail: runningSunrise2,
      timestamp: "01:29",
      title: "Peaceful park scene", 
      similarity: 75
    }
  ];

  return (
    <ScrollArea className="h-full p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {frames.map((frame) => (
          <div key={frame.id} className="cyber-card p-4 group">
            {/* Thumbnail Container */}
            <div className="relative aspect-video bg-muted/20 rounded-lg overflow-hidden mb-3">
              <img 
                src={frame.thumbnail}
                alt={frame.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              
              {/* Timestamp Overlay */}
              <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {frame.timestamp}
              </div>
              
              {/* Similarity Score */}
              <div className="absolute top-2 left-2 bg-primary/90 text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                {frame.similarity}% match
              </div>
              
              {/* Hover Play Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Play className="w-8 h-8 text-white" />
              </div>
            </div>
            
            {/* Frame Info */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-foreground line-clamp-2">
                {frame.title}
              </h3>
              
              <Button 
                size="sm" 
                className="w-full cyber-glow bg-primary hover:bg-primary/80 text-primary-foreground"
              >
                <Eye className="w-4 h-4 mr-2" />
                View Clip
              </Button>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

export default FramesTab;