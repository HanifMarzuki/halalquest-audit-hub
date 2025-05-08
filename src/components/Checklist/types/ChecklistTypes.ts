
export type ChecklistItemStatus = "not-started" | "in-progress" | "completed";

export interface ChecklistAttachment {
  id: string;
  name: string;
  type: string;
  url: string;
  dateAdded: string;
  itemId: string;
  categoryId: string;
  phase: string;
}

export interface ChecklistItemData {
  id: string;
  title: string;
  description: string;
  status: ChecklistItemStatus;
  attachments?: ChecklistAttachment[];
}

export interface ChecklistCategoryData {
  id: string;
  title: string;
  items: ChecklistItemData[];
}
