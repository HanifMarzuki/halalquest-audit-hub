
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { AttachmentIcon } from "@/components/ui/Icons";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { useAttachments } from "../context/AttachmentsContext";
import { ChecklistAttachment } from "../types/ChecklistTypes";

interface AttachmentManagerProps {
  itemId: string;
  categoryId: string;
  phase: string;
}

const AttachmentManager: React.FC<AttachmentManagerProps> = ({
  itemId,
  categoryId,
  phase,
}) => {
  const { getAttachmentsForItem, addAttachment, removeAttachment } = useAttachments();
  const [attachmentName, setAttachmentName] = useState("");
  const [attachmentUrl, setAttachmentUrl] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const { toast } = useToast();
  
  const itemAttachments = getAttachmentsForItem(itemId);

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
      itemId,
      categoryId,
      phase,
    };

    addAttachment(newAttachment);
    setAttachmentName("");
    setAttachmentUrl("");
    setShowDialog(false);
    
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
    <>
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
                  aria-label={`Open attachment: ${attachment.name}`}
                >
                  {attachment.name}
                </a>
                <button 
                  className="text-red-500 text-xs hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1 rounded px-1"
                  onClick={() => handleDeleteAttachment(attachment.id)}
                  aria-label={`Remove attachment: ${attachment.name}`}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogTrigger asChild>
          <Button 
            variant="outline" 
            size="sm" 
            className="h-8 px-3 text-xs"
            aria-label="Add new attachment"
          >
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
              <label htmlFor="attachment-name" className="text-sm font-medium">Name</label>
              <input
                id="attachment-name"
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                value={attachmentName}
                onChange={(e) => setAttachmentName(e.target.value)}
                placeholder="Certificate.pdf"
                aria-describedby="name-help"
              />
              <p id="name-help" className="text-xs text-muted-foreground">Enter a descriptive name for the file</p>
            </div>
            <div className="grid gap-2">
              <label htmlFor="attachment-url" className="text-sm font-medium">URL</label>
              <input
                id="attachment-url"
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                value={attachmentUrl}
                onChange={(e) => setAttachmentUrl(e.target.value)}
                placeholder="https://example.com/certificate.pdf"
                aria-describedby="url-help"
              />
              <p id="url-help" className="text-xs text-muted-foreground">Provide the direct link to the file</p>
            </div>
          </div>
          <div className="flex justify-end gap-3">
            <Button variant="outline" onClick={() => setShowDialog(false)}>Cancel</Button>
            <Button onClick={handleAddAttachment}>Add Attachment</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AttachmentManager;
