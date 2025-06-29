
import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import ChecklistCategory from "./ChecklistCategory";
import { ChecklistItemStatus, ChecklistItemData, ChecklistCategoryData } from "../types/ChecklistTypes";
import { useIsMobile } from "@/hooks/use-mobile";

interface ChecklistPhaseProps {
  phase: string;
  categories: ChecklistCategoryData[];
  onStatusChange: (categoryId: string, itemId: string, status: ChecklistItemStatus) => void;
}

const ChecklistPhase: React.FC<ChecklistPhaseProps> = ({
  phase,
  categories,
  onStatusChange,
}) => {
  const isMobile = useIsMobile();
  
  return (
    <TabsContent value={phase} className="space-y-6">
      <div className={isMobile ? "space-y-4" : "space-y-6"}>
        {categories.map((category) => (
          <ChecklistCategory
            key={category.id}
            id={category.id}
            title={category.title}
            items={category.items}
            onStatusChange={onStatusChange}
            phase={phase}
          />
        ))}
      </div>
    </TabsContent>
  );
};

export default ChecklistPhase;
