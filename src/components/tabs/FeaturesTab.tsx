import { Hash, Users, Zap, MapPin, Camera, Target, Clock, Palette } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  items: string[];
  color: string;
}

const FeaturesTab = () => {
  const prompt = "Find videos with people running in a park during sunrise";
  
  const features: FeatureCategory[] = [
    {
      id: "keywords",
      title: "Keywords",
      icon: <Hash className="w-5 h-5" />,
      items: ["running", "jogging", "exercise", "fitness", "morning", "sunrise", "golden hour"],
      color: "bg-blue-500/20 text-blue-400 border-blue-500/50"
    },
    {
      id: "objects", 
      title: "Objects",
      icon: <Target className="w-5 h-5" />,
      items: ["person", "human", "runner", "trees", "path", "park bench", "lamp post"],
      color: "bg-green-500/20 text-green-400 border-green-500/50"
    },
    {
      id: "actions",
      title: "Actions", 
      icon: <Zap className="w-5 h-5" />,
      items: ["running", "jogging", "moving", "exercising", "breathing", "stretching"],
      color: "bg-orange-500/20 text-orange-400 border-orange-500/50"
    },
    {
      id: "people",
      title: "People",
      icon: <Users className="w-5 h-5" />,
      items: ["single person", "individual", "athlete", "fitness enthusiast", "morning runner"],
      color: "bg-purple-500/20 text-purple-400 border-purple-500/50"
    },
    {
      id: "scene",
      title: "Scene",
      icon: <MapPin className="w-5 h-5" />,
      items: ["park", "outdoor", "nature", "public space", "urban park", "green space"],
      color: "bg-teal-500/20 text-teal-400 border-teal-500/50"
    },
    {
      id: "time",
      title: "Time & Lighting",
      icon: <Clock className="w-5 h-5" />,
      items: ["sunrise", "early morning", "golden hour", "soft lighting", "warm tones"],
      color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/50"
    },
    {
      id: "visual",
      title: "Visual Style",
      icon: <Camera className="w-5 h-5" />,
      items: ["natural lighting", "outdoor shot", "medium shot", "tracking shot", "handheld"],
      color: "bg-pink-500/20 text-pink-400 border-pink-500/50"
    },
    {
      id: "mood",
      title: "Mood & Atmosphere", 
      icon: <Palette className="w-5 h-5" />,
      items: ["peaceful", "energetic", "motivational", "serene", "inspiring", "healthy"],
      color: "bg-indigo-500/20 text-indigo-400 border-indigo-500/50"
    }
  ];

  return (
    <ScrollArea className="h-full p-6">
      <div className="space-y-6">
        {/* Semantic Summary */}
        <Card className="cyber-card border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl cyber-gradient-text">
              <Camera className="w-6 h-6" />
              Semantic Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Original Query:</h4>
                <p className="text-foreground bg-muted/20 p-3 rounded-lg border border-border">
                  "{prompt}"
                </p>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-2">AI Interpretation:</h4>
                <p className="text-foreground">
                  Looking for outdoor fitness content featuring individual runners in park environments during early morning hours with warm, natural lighting and motivational atmosphere.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Feature Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((category) => (
            <Card key={category.id} className="cyber-card">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  {category.icon}
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, index) => (
                    <Badge 
                      key={index} 
                      variant="outline"
                      className={`${category.color} transition-all duration-200 hover:scale-105 cursor-pointer`}
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Search Confidence */}
        <Card className="cyber-card border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Search Confidence Metrics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="space-y-1">
                <div className="text-2xl font-bold text-primary">94%</div>
                <div className="text-xs text-muted-foreground">Keyword Match</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-primary">89%</div>
                <div className="text-xs text-muted-foreground">Visual Similarity</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-primary">92%</div>
                <div className="text-xs text-muted-foreground">Context Match</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-primary">87%</div>
                <div className="text-xs text-muted-foreground">Semantic Score</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </ScrollArea>
  );
};

export default FeaturesTab;