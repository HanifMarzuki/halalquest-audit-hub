
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, DocumentIcon } from "@/components/ui/Icons";
import { Progress } from "@/components/ui/progress";

interface LearningJourneyProps {
  streakCount: number;
}

const LearningJourney: React.FC<LearningJourneyProps> = ({ streakCount }) => {
  return (
    <Card className="border-2 border-halal-green/30 overflow-hidden">
      <CardHeader className="bg-halal-green/5 border-b border-halal-green/20">
        <CardTitle className="flex items-center justify-between">
          <span>Continue Your Learning Journey</span>
          <Badge variant="outline" className="bg-halal-green text-white border-none">
            Daily Streak: {streakCount} 🔥
          </Badge>
        </CardTitle>
        <CardDescription>Pick up where you left off</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="bg-halal-green text-white p-2 rounded-full">
                <BookOpen size={18} />
              </div>
              <div>
                <h3 className="text-lg font-medium">Halal Fundamentals</h3>
                <p className="text-sm text-muted-foreground">Module 3 of 5</p>
              </div>
            </div>
            <Button className="bg-halal-green hover:bg-halal-green-light">
              Continue
            </Button>
          </div>
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-medium">Progress: 60%</span>
              <span className="text-xs font-medium">3/5 Modules</span>
            </div>
            <Progress value={60} className="h-3 bg-gray-100" />
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="bg-halal-blue text-white p-2 rounded-full">
                <DocumentIcon size={18} />
              </div>
              <div>
                <h3 className="text-lg font-medium">MS1500:2009 Standards</h3>
                <p className="text-sm text-muted-foreground">Section 1 of 4</p>
              </div>
            </div>
            <Button variant="outline" className="border-halal-blue text-halal-blue hover:bg-halal-blue hover:text-white">
              Continue
            </Button>
          </div>
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-medium">Progress: 25%</span>
              <span className="text-xs font-medium">1/4 Sections</span>
            </div>
            <Progress value={25} className="h-3 bg-gray-100" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LearningJourney;
