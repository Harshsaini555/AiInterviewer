import { Play } from "lucide-react";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export  function VideoPreview() {
  const handlePlayVideo = () => {
    // Placeholder for video play functionality
    console.log("Playing demo video...");
  };

  const handleWatchFullDemo = () => {
    // Placeholder for full demo functionality
    console.log("Opening full demo...");
  };

  return (
    <section className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Headline */}
        <h2 className="mb-8 text-primary">
          See ResumeMentor.AI in Action
        </h2>
        
        {/* Video Preview Card */}
        <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 mb-6">
          <div className="relative aspect-video bg-gray-100 rounded-xl overflow-hidden group cursor-pointer" onClick={handlePlayVideo}>
            {/* Video Thumbnail */}
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=450&fit=crop&auto=format"
              alt="ResumeMentor.AI Demo Video"
              className="w-full h-full object-cover"
            />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors duration-300">
              <div className="bg-white rounded-full p-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
              </div>
            </div>
            
            {/* Video Duration Badge */}
            <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-md">
              2:34
            </div>
          </div>
        </div>
        
        {/* Subheading */}
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Watch how we analyze resumes and conduct AI-driven interviews
        </p>
        
        {/* Optional Watch Full Demo Button */}
        <Button 
          variant="outline" 
          size="lg"
          onClick={handleWatchFullDemo}
          className="px-8"
        >
          Watch Full Demo
        </Button>
      </div>
    </section>
  );
}