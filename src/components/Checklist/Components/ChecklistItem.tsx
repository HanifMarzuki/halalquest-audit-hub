
import React from "react";
import { Check, Clock, Circle } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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
        return <Check className="text-green-500" size={18} />;
      case "in-progress":
        return <Clock className="text-amber-500" size={18} />;
      default:
        return <Circle className="text-gray-400" size={18} />;
    }
  };

  const getStatusColor = (status: ChecklistItemStatus) => {
    switch (status) {
      case "completed":
        return "bg-green-50 border-green-100";
      case "in-progress":
        return "bg-amber-50 border-amber-100";
      default:
        return "bg-white border-gray-100";
    }
  };

  return (
    <li className={`border rounded-lg p-4 transition-colors ${getStatusColor(status)}`}>
      <div className="flex items-start gap-3">
        <div className="pt-1">{getStatusIcon(status)}</div>
        <div className="flex-1">
          <h4 className="font-medium">{title}</h4>
          <p className="text-sm text-muted-foreground">
            {description}
          </p>
        </div>
        
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div>
                <Select
                  value={status}
                  onValueChange={(value) => 
                    onStatusChange(categoryId, id, value as ChecklistItemStatus)
                  }
                >
                  <SelectTrigger className="w-[130px] h-8">
                    <SelectValue placeholder="Update status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="not-started">Not Started</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Update item status</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </li>
  );
};

export default ChecklistItem;
