
import React from "react";
import { Check, CheckCircle } from "lucide-react";

interface Goal {
  name: string;
  done: boolean;
}

interface DailyGoalsProps {
  goals?: Goal[];
}

const DailyGoals: React.FC<DailyGoalsProps> = ({ 
  goals = [
    { name: "Complete a lesson", done: true },
    { name: "Complete a quiz", done: false },
    { name: "Review a standard", done: false },
  ] 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100">
      <h2 className="text-xl font-bold mb-4">Daily Goals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {goals.map((goal, i) => (
          <div 
            key={i} 
            className={`flex items-center gap-3 p-3 rounded-lg border ${goal.done ? 'bg-halal-green/5 border-halal-green/30' : 'bg-gray-50 border-gray-200'}`}
          >
            <div className={`rounded-full p-1 ${goal.done ? 'bg-halal-green text-white' : 'bg-gray-200'}`}>
              {goal.done ? <CheckCircle size={20} /> : <Check size={20} className="text-gray-400" />}
            </div>
            <span className={goal.done ? 'text-halal-green font-medium' : ''}>{goal.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyGoals;
