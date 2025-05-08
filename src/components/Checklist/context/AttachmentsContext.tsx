
import React, { createContext, useState, useContext, ReactNode } from "react";
import { ChecklistAttachment } from "../types/ChecklistTypes";

interface AttachmentsContextType {
  attachments: ChecklistAttachment[];
  addAttachment: (attachment: ChecklistAttachment) => void;
  removeAttachment: (attachmentId: string) => void;
  getAttachmentsForItem: (itemId: string) => ChecklistAttachment[];
  getAllAttachments: () => ChecklistAttachment[];
}

const AttachmentsContext = createContext<AttachmentsContextType | undefined>(undefined);

export const AttachmentsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [attachments, setAttachments] = useState<ChecklistAttachment[]>([]);

  const addAttachment = (attachment: ChecklistAttachment) => {
    setAttachments((prev) => [...prev, attachment]);
  };

  const removeAttachment = (attachmentId: string) => {
    setAttachments((prev) => prev.filter((a) => a.id !== attachmentId));
  };

  const getAttachmentsForItem = (itemId: string) => {
    return attachments.filter((a) => a.itemId === itemId);
  };

  const getAllAttachments = () => {
    return [...attachments];
  };

  return (
    <AttachmentsContext.Provider
      value={{
        attachments,
        addAttachment,
        removeAttachment,
        getAttachmentsForItem,
        getAllAttachments,
      }}
    >
      {children}
    </AttachmentsContext.Provider>
  );
};

export const useAttachments = (): AttachmentsContextType => {
  const context = useContext(AttachmentsContext);
  if (context === undefined) {
    throw new Error("useAttachments must be used within an AttachmentsProvider");
  }
  return context;
};
