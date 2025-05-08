
import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import ChecklistCategory, { ChecklistItemData } from "./ChecklistCategory";
import { ChecklistItemStatus } from "./ChecklistItem";

export interface ChecklistCategoryData {
  id: string;
  title: string;
  items: ChecklistItemData[];
}

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
  return (
    <TabsContent value={phase} className="space-y-6">
      {categories.map((category) => (
        <ChecklistCategory
          key={category.id}
          id={category.id}
          title={category.title}
          items={category.items}
          onStatusChange={onStatusChange}
        />
      ))}
    </TabsContent>
  );
};

export default ChecklistPhase;
