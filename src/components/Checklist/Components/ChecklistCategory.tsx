
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ChecklistItem from "./ChecklistItem";
import { ChecklistItemStatus, ChecklistItemData } from "../types/ChecklistTypes";

interface ChecklistCategoryProps {
  id: string;
  title: string;
  items: ChecklistItemData[];
  phase: string;
  onStatusChange: (categoryId: string, itemId: string, status: ChecklistItemStatus) => void;
}

const ChecklistCategory: React.FC<ChecklistCategoryProps> = ({
  id,
  title,
  items,
  phase,
  onStatusChange,
}) => {
  return (
    <Card key={id}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          Complete the following checklist items
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {items.map((item) => (
            <ChecklistItem 
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              status={item.status}
              categoryId={id}
              phase={phase}
              onStatusChange={onStatusChange}
            />
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ChecklistCategory;
