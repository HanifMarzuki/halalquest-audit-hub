
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock } from "lucide-react";

interface CourseCardProps {
  title: string;
  description: string;
  level: string;
  time: string;
  modules: number;
  color: "green" | "blue" | "gold";
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  level,
  time,
  modules,
  color
}) => {
  const getColorClass = (color: string, type: string) => {
    switch (color) {
      case "green":
        return type === "bg" ? "bg-halal-green" : 
               type === "text" ? "text-halal-green" : 
               type === "hover" ? "hover:bg-halal-green-light" :
               type === "border" ? "#0A6E46" : "";
      case "blue":
        return type === "bg" ? "bg-halal-blue" : 
               type === "text" ? "text-halal-blue" : 
               type === "hover" ? "hover:bg-halal-blue-light" : 
               type === "border" ? "#2C3E50" : "";
      case "gold":
        return type === "bg" ? "bg-halal-gold" : 
               type === "text" ? "text-halal-gold" : 
               type === "hover" ? "hover:bg-halal-gold-light" : 
               type === "border" ? "#D4AF37" : "";
      default:
        return "";
    }
  };

  return (
    <Card 
      className="overflow-hidden border-t-4 hover:shadow-lg transition-shadow" 
      style={{ borderTopColor: getColorClass(color, "border") }}
    >
      <CardHeader className="pb-2">
        <div className={`h-40 ${getColorClass(color, "bg")}/10 rounded-md flex items-center justify-center`}>
          <BookOpen size={36} className={getColorClass(color, "text")} />
        </div>
        <div className="flex items-center justify-between mt-3">
          <CardTitle className="text-lg">{title}</CardTitle>
          <Badge variant="outline" className={`${getColorClass(color, "bg")}/10 ${getColorClass(color, "text")}`}>
            {level}
          </Badge>
        </div>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen size={14} />
            <span>{modules} modules</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className={`w-full ${getColorClass(color, "bg")} ${getColorClass(color, "hover")}`}>
          Start Course
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
