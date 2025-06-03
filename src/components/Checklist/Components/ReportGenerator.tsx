
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ReportIcon, DownloadIcon } from "@/components/ui/Icons";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useChecklistData } from "../hooks/useChecklistData";
import { useAttachments } from "../context/AttachmentsContext";
import { useToast } from "@/hooks/use-toast";

interface ReportGeneratorProps {
  activeSector: string;
}

const ReportGenerator: React.FC<ReportGeneratorProps> = ({ activeSector }) => {
  const { checklists, getProgressPercentage } = useChecklistData();
  const { getAllAttachments } = useAttachments();
  const { toast } = useToast();
  const [includeAttachments, setIncludeAttachments] = useState(true);
  const [includeIncompleteItems, setIncludeIncompleteItems] = useState(true);
  
  const generateReport = () => {
    // Here we would typically generate a PDF or other document
    // For this demo, we'll just show a success message
    
    toast({
      title: "Report Generated",
      description: "Your halal audit report has been downloaded",
    });
    
    // In a real application, we would:
    // 1. Format the checklist data and status
    // 2. Generate a PDF using a library like jsPDF
    // 3. Include attachments if selected
    // 4. Trigger a download
    
    const progressValue = getProgressPercentage();
    console.log("Generating report with settings:", {
      sector: activeSector,
      includeAttachments,
      includeIncompleteItems,
      progress: progressValue,
      attachmentsCount: getAllAttachments().length
    });
    
    // Simulate download delay
    setTimeout(() => {
      const link = document.createElement("a");
      link.download = `Halal_Audit_Report_${activeSector}_${new Date().toISOString().split('T')[0]}.pdf`;
      // In a real app, this would be the URL to the generated PDF
      link.href = "#";
      link.click();
    }, 1500);
  };

  const progressValue = getProgressPercentage();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <ReportIcon size={16} />
          Generate Report
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Generate Audit Report</DialogTitle>
          <DialogDescription>
            Create a comprehensive halal audit report based on your checklist progress.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="attachments" 
              checked={includeAttachments} 
              onCheckedChange={(checked) => setIncludeAttachments(!!checked)} 
            />
            <Label htmlFor="attachments">Include attachments ({getAllAttachments().length})</Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="incomplete" 
              checked={includeIncompleteItems} 
              onCheckedChange={(checked) => setIncludeIncompleteItems(!!checked)} 
            />
            <Label htmlFor="incomplete">Include incomplete items</Label>
          </div>
          
          <div className="bg-gray-50 p-3 rounded-md">
            <h4 className="text-sm font-medium mb-1">Report Details</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>Sector: <span className="font-medium">{activeSector.charAt(0).toUpperCase() + activeSector.slice(1)}</span></li>
              <li>Completion: <span className="font-medium">{progressValue}%</span></li>
              <li>Generated on: <span className="font-medium">{new Date().toLocaleDateString()}</span></li>
            </ul>
          </div>
        </div>
        <div className="flex justify-end gap-3">
          <Button variant="outline">Cancel</Button>
          <Button className="gap-1" onClick={generateReport}>
            <DownloadIcon size={16} />
            Export Report
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReportGenerator;
