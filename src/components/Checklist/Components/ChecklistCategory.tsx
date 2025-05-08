
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ChecklistItem, { ChecklistItemStatus } from "./ChecklistItem";

export interface ChecklistItemData {
  id: string;
  title: string;
  description: string;
  status: ChecklistItemStatus;
}

interface ChecklistCategoryProps {
  id: string;
  title: string;
  items: ChecklistItemData[];
  onStatusChange: (categoryId: string, itemId: string, status: ChecklistItemStatus) => void;
}

const ChecklistCategory: React.FC<ChecklistCategoryProps> = ({
  id,
  title,
  items,
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
              onStatusChange={onStatusChange}
            />
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ChecklistCategory;
