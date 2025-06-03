
import React from "react";
import { Check, Clock, Circle } from "lucide-react";
import { ChecklistItemStatus } from "../types/ChecklistTypes";

interface StatusIndicatorProps {
  status: ChecklistItemStatus;
  size?: number;
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ status, size = 18 }) => {
  const getIcon = () => {
    switch (status) {
      case "completed":
        return <Check className="text-green-500" size={size} aria-label="Completed" />;
      case "in-progress":
        return <Clock className="text-amber-500" size={size} aria-label="In progress" />;
      default:
        return <Circle className="text-gray-400" size={size} aria-label="Not started" />;
    }
  };

  return <div className="pt-1">{getIcon()}</div>;
};

export default StatusIndicator;
