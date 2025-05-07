
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Flame, Award } from "lucide-react";

interface DailyStatsProps {
  streakCount: number;
}

const DailyStats: React.FC<DailyStatsProps> = ({ streakCount }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex flex-col items-center">
        <div className="bg-halal-green/10 rounded-full p-2 mb-1">
          <Flame size={20} className="text-halal-green" />
        </div>
        <span className="text-xs font-bold">{streakCount} days</span>
      </div>
      
      <div className="flex flex-col items-center">
        <div className="bg-halal-gold/10 rounded-full p-2 mb-1">
          <Award size={20} className="text-halal-gold" />
        </div>
        <span className="text-xs font-bold">3 badges</span>
      </div>
    </div>
  );
};

export default DailyStats;
