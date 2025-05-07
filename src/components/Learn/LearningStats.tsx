
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Flame, Star } from "lucide-react";

interface LearningStatsProps {
  streakCount: number;
}

const LearningStats: React.FC<LearningStatsProps> = ({ streakCount }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Star size={20} className="text-halal-gold" />
          Your Stats
        </CardTitle>
        <CardDescription>Track your progress</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between border-b pb-3">
          <span className="text-sm font-medium">Courses Completed</span>
          <span className="text-xl font-bold text-halal-green">2</span>
        </div>
        <div className="flex items-center justify-between border-b pb-3">
          <span className="text-sm font-medium">Certificates</span>
          <span className="text-xl font-bold text-halal-green">1</span>
        </div>
        <div className="flex items-center justify-between border-b pb-3">
          <span className="text-sm font-medium">Learning Streak</span>
          <div className="flex items-center">
            <Flame size={16} className="text-halal-gold mr-1" />
            <span className="text-xl font-bold text-halal-gold">{streakCount} days</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Quiz Success</span>
          <span className="text-xl font-bold text-halal-green">78%</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">View All Stats</Button>
      </CardFooter>
    </Card>
  );
};

export default LearningStats;
