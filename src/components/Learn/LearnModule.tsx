
import React, { useState } from "react";
import LearnHeader from "./LearnHeader";
import LearningJourney from "./LearningJourney";
import DailyGoals from "./DailyGoals";
import LearningStats from "./LearningStats";
import LearningPaths from "./LearningPaths";

const LearnModule: React.FC = () => {
  const [streakCount, setStreakCount] = useState(5);
  
  return (
    <div className="space-y-6">
      <LearnHeader streakCount={streakCount} />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <LearningJourney streakCount={streakCount} />
          <DailyGoals />
        </div>
        
        <LearningStats streakCount={streakCount} />
      </div>

      <LearningPaths />
    </div>
  );
};

export default LearnModule;
