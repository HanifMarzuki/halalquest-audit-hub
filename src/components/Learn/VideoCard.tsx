
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import { VideoIcon } from "@/components/ui/Icons";

interface VideoCardProps {
  title?: string;
  description?: string;
  duration?: string;
  index: number;
}

const VideoCard: React.FC<VideoCardProps> = ({
  title = "Halal Production Requirements",
  description = "Video guide to halal production requirements",
  duration = "25 minutes",
  index
}) => {
  return (
    <Card key={index} className="overflow-hidden border-t-4 border-t-halal-blue hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2">
        <div className="h-40 bg-halal-blue/10 rounded-md flex items-center justify-center">
          <VideoIcon size={36} className="text-halal-blue" />
        </div>
        <CardTitle className="mt-3">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex items-center gap-2 text-sm">
          <Clock size={14} />
          <span>{duration}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-halal-blue hover:bg-halal-blue-light">Watch Video</Button>
      </CardFooter>
    </Card>
  );
};

export default VideoCard;
