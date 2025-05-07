
import React from "react";
import { LearnIcon } from "@/components/ui/Icons";
import DailyStats from "./DailyStats";

interface LearnHeaderProps {
  streakCount: number;
}

const LearnHeader: React.FC<LearnHeaderProps> = ({ streakCount }) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <LearnIcon size={24} className="text-halal-green" />
          Learn
        </h1>
        <p className="text-muted-foreground mt-1">
          Master halal standards through interactive lessons
        </p>
      </div>
      
      <DailyStats streakCount={streakCount} />
    </div>
  );
};

export default LearnHeader;
