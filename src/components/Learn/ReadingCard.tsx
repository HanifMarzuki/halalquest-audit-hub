
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import { DocumentIcon } from "@/components/ui/Icons";

interface ReadingCardProps {
  title?: string;
  description?: string;
  readTime?: string;
  index: number;
}

const ReadingCard: React.FC<ReadingCardProps> = ({
  title = "MS2424 Standard Guide",
  description = "Guide to MS2424 halal pharmaceutical standards",
  readTime = "15 min read",
  index
}) => {
  return (
    <Card key={index} className="overflow-hidden border-t-4 border-t-halal-gold hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2">
        <div className="h-40 bg-halal-gold/10 rounded-md flex items-center justify-center">
          <DocumentIcon size={36} className="text-halal-gold" />
        </div>
        <CardTitle className="mt-3">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex items-center gap-2 text-sm">
          <Clock size={14} />
          <span>{readTime}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-halal-gold hover:bg-halal-gold-light text-white">Read Article</Button>
      </CardFooter>
    </Card>
  );
};

export default ReadingCard;
