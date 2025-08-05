import { Play, ExternalLink, BarChart3, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress";
import runningSunrise1 from "@/assets/running-sunrise-1.jpg";
import runningSunrise2 from "@/assets/running-sunrise-2.jpg";
import runningSunrise3 from "@/assets/running-sunrise-3.jpg";

interface VideoData {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  similarity: number;
  channel: string;
  description: string;
  views: string;
  uploadDate: string;
}

const VideosTab = () => {
  const videos: VideoData[] = [
    {
      id: "1",
      title: "Morning Park Run: Sunrise Fitness Motivation",
      thumbnail: runningSunrise1,
      duration: "12:34",
      similarity: 94,
      channel: "FitnessFirst",
      description: "Join me for an energizing morning run through the beautiful Central Park as the sun rises...",
      views: "2.3M",
      uploadDate: "2 days ago"
    },
    {
      id: "2",
      title: "Golden Hour Jogging: Perfect Morning Routine",
      thumbnail: runningSunrise2,
      duration: "8:45",
      similarity: 89,
      channel: "HealthyLiving",
      description: "Experience the magic of golden hour jogging and start your day with positive energy...",
      views: "892K",
      uploadDate: "1 week ago"
    },
    {
      id: "3",
      title: "Sunrise Trail Running in Nature",
      thumbnail: runningSunrise3,
      duration: "15:22", 
      similarity: 87,
      channel: "TrailRunner",
      description: "Beautiful trail running footage captured during sunrise in the mountain trails...",
      views: "1.5M",
      uploadDate: "3 days ago"
    },
    {
      id: "4",
      title: "Urban Park Morning Exercise Routine",
      thumbnail: runningSunrise1,
      duration: "6:18",
      similarity: 85,
      channel: "CityFit",
      description: "Complete morning exercise routine in an urban park setting with professional guidance...",
      views: "654K", 
      uploadDate: "5 days ago"
    },
    {
      id: "5",
      title: "Peaceful Morning Run: Mindful Movement",
      thumbnail: runningSunrise2,
      duration: "10:56",
      similarity: 82,
      channel: "MindfulFitness",
      description: "Combine mindfulness with morning running for a peaceful start to your day...",
      views: "445K",
      uploadDate: "1 week ago"
    }
  ];

  return (
    <ScrollArea className="h-full p-6">
      <div className="space-y-6">
        {videos.map((video) => (
          <div key={video.id} className="cyber-card p-6 group">
            <div className="flex gap-4">
              {/* Video Thumbnail */}
              <div className="relative flex-shrink-0">
                <div className="w-48 aspect-video bg-muted/20 rounded-lg overflow-hidden">
                  <img 
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  {/* Duration */}
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs">
                    <Clock className="w-3 h-3 inline mr-1" />
                    {video.duration}
                  </div>
                  
                  {/* Play Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>
              
              {/* Video Info */}
              <div className="flex-1 space-y-3">
                <div>
                  <h3 className="text-lg font-semibold text-foreground line-clamp-2 mb-2">
                    {video.title}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {video.channel}
                    </span>
                    <span>{video.views} views</span>
                    <span>{video.uploadDate}</span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {video.description}
                  </p>
                </div>
                
                {/* Similarity Score */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground flex items-center gap-2">
                      <BarChart3 className="w-4 h-4" />
                      Similarity Score
                    </span>
                    <span className="text-sm font-bold text-primary">{video.similarity}%</span>
                  </div>
                  <Progress value={video.similarity} className="h-2" />
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button className="cyber-glow bg-primary hover:bg-primary/80 text-primary-foreground">
                    <Play className="w-4 h-4 mr-2" />
                    View Full
                  </Button>
                  <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Jump to Match
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

export default VideosTab;