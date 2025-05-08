
import React, { useState } from "react";
import { Check, Clock, Circle } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { AttachmentIcon } from "@/components/ui/Icons";
import { useAttachments } from "../context/AttachmentsContext";
import { ChecklistAttachment, ChecklistItemStatus } from "../types/ChecklistTypes";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

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
  const { getAttachmentsForItem, addAttachment, removeAttachment } = useAttachments();
  const [attachmentName, setAttachmentName] = useState("");
  const [attachmentUrl, setAttachmentUrl] = useState("");
  const [showAttachmentDialog, setShowAttachmentDialog] = useState(false);
  const { toast } = useToast();
  
  const itemAttachments = getAttachmentsForItem(id);

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

  const handleAddAttachment = () => {
    if (!attachmentName.trim() || !attachmentUrl.trim()) {
      toast({
        title: "Error",
        description: "Please provide both a name and URL for the attachment.",
        variant: "destructive",
      });
      return;
    }

    const newAttachment: ChecklistAttachment = {
      id: `attachment-${Date.now()}`,
      name: attachmentName,
      type: attachmentUrl.split('.').pop() || 'unknown',
      url: attachmentUrl,
      dateAdded: new Date().toISOString(),
      itemId: id,
      categoryId,
      phase,
    };

    addAttachment(newAttachment);
    setAttachmentName("");
    setAttachmentUrl("");
    setShowAttachmentDialog(false);
    
    toast({
      title: "Success",
      description: "Attachment added successfully",
    });
  };

  const handleDeleteAttachment = (attachmentId: string) => {
    removeAttachment(attachmentId);
    toast({
      description: "Attachment removed",
    });
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
          
          {itemAttachments.length > 0 && (
            <div className="mt-3 space-y-2">
              <h5 className="text-sm font-medium flex items-center gap-1">
                <AttachmentIcon size={14} />
                Attachments ({itemAttachments.length})
              </h5>
              <ul className="text-sm text-muted-foreground space-y-1">
                {itemAttachments.map((attachment) => (
                  <li key={attachment.id} className="flex items-center gap-2">
                    <a 
                      href={attachment.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline flex-1 truncate"
                    >
                      {attachment.name}
                    </a>
                    <button 
                      className="text-red-500 text-xs hover:text-red-700"
                      onClick={() => handleDeleteAttachment(attachment.id)}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        <div className="flex gap-2">
          <Dialog open={showAttachmentDialog} onOpenChange={setShowAttachmentDialog}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="h-8 px-3 text-xs">
                <AttachmentIcon size={14} className="mr-1" />
                Add File
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Attachment</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <input
                    id="name"
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    value={attachmentName}
                    onChange={(e) => setAttachmentName(e.target.value)}
                    placeholder="Certificate.pdf"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="url" className="text-sm font-medium">URL</label>
                  <input
                    id="url"
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    value={attachmentUrl}
                    onChange={(e) => setAttachmentUrl(e.target.value)}
                    placeholder="https://example.com/certificate.pdf"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-3">
                <Button variant="outline" onClick={() => setShowAttachmentDialog(false)}>Cancel</Button>
                <Button onClick={handleAddAttachment}>Add Attachment</Button>
              </div>
            </DialogContent>
          </Dialog>

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
      </div>
    </li>
  );
};

export default ChecklistItem;
