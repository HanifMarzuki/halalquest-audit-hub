
import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ChecklistItemStatus } from "../types/ChecklistTypes";
import StatusIndicator from "./StatusIndicator";
import AttachmentManager from "./AttachmentManager";

export interface ChecklistItemProps {
  id: string;
  title: string;
  description: string;
  status: ChecklistItemStatus;
  categoryId: string;
  phase: string;
  onStatusChange: (categoryId: string, itemId: string, status: ChecklistItemStatus) => void;
}

const ChecklistItem: React.FC<ChecklistItemProps> = ({
  id,
  title,
  description,
  status,
  categoryId,
  phase,
  onStatusChange,
}) => {
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
    <li 
      className={`border rounded-lg p-4 transition-colors ${getStatusColor(status)}`}
      role="listitem"
    >
      <div className="flex items-start gap-3">
        <StatusIndicator status={status} />
        
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-sm md:text-base">{title}</h4>
          <p className="text-sm text-muted-foreground mt-1">
            {description}
          </p>
          
          <AttachmentManager 
            itemId={id}
            categoryId={categoryId}
            phase={phase}
          />
        </div>
        
        <div className="flex gap-2 flex-shrink-0">
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
                    <SelectTrigger 
                      className="w-[130px] h-8"
                      aria-label={`Update status for ${title}`}
                    >
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
      </div>
    </li>
  );
};

export default ChecklistItem;
