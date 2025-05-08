
import React from "react";
import { CheckCircle, AlertCircle, CheckSquare } from "lucide-react";

export type ChecklistItemStatus = "not-started" | "in-progress" | "completed";

export interface ChecklistItemProps {
  id: string;
  title: string;
  description: string;
  status: ChecklistItemStatus;
  categoryId: string;
  onStatusChange: (categoryId: string, itemId: string, status: ChecklistItemStatus) => void;
}

const ChecklistItem: React.FC<ChecklistItemProps> = ({
  id,
  title,
  description,
  status,
  categoryId,
  onStatusChange,
}) => {
  const getStatusIcon = (status: ChecklistItemStatus) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="text-green-500" size={18} />;
      case "in-progress":
        return <AlertCircle className="text-amber-500" size={18} />;
      default:
        return <CheckSquare className="text-gray-400" size={18} />;
    }
  };

  return (
    <li className="border rounded-lg p-4">
      <div className="flex items-start gap-3">
        {getStatusIcon(status)}
        <div className="flex-1">
          <h4 className="font-medium">{title}</h4>
          <p className="text-sm text-muted-foreground">
            {description}
          </p>
        </div>
        <select
          value={status}
          onChange={(e) => onStatusChange(
            categoryId, 
            id, 
            e.target.value as ChecklistItemStatus
          )}
          className="text-sm border rounded p-1"
        >
          <option value="not-started">Not Started</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
    </li>
  );
};

export default ChecklistItem;
