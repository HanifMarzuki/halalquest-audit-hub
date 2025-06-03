
import React, { useState } from "react";
import Layout from "@/components/Layout/Layout";
import { AttachmentsIcon } from "@/components/ui/Icons";
import { useAttachments } from "@/components/Checklist/context/AttachmentsContext";
import { AttachmentsProvider } from "@/components/Checklist/context/AttachmentsContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const AttachmentsContent = () => {
  const { getAllAttachments, removeAttachment } = useAttachments();
  const [searchTerm, setSearchTerm] = useState("");
  const isMobile = useIsMobile();
  
  const attachments = getAllAttachments();
  const filteredAttachments = attachments.filter(att => 
    att.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };
  
  const getPhaseForDisplay = (phase: string) => {
    return phase
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <Layout>
      <div className="py-6 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold flex items-center gap-2`}>
              <AttachmentsIcon size={isMobile ? 20 : 24} className="text-halal-green" />
              Audit Attachments
            </h1>
            <p className="text-muted-foreground text-sm md:text-base mt-1">
              View and manage all your audit documentation
            </p>
          </div>
          
          <div className="w-full md:w-64">
            <Input
              placeholder="Search attachments..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-9"
            />
          </div>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>All Attachments</CardTitle>
          </CardHeader>
          <CardContent>
            {attachments.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <p>No attachments have been added yet.</p>
                <p className="text-sm mt-1">Add files to checklist items to see them here.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      {!isMobile && <TableHead>Type</TableHead>}
                      <TableHead>Phase</TableHead>
                      {!isMobile && <TableHead>Date Added</TableHead>}
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredAttachments.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={5} className="text-center py-4 text-muted-foreground">
                          No attachments found matching "{searchTerm}"
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredAttachments.map((attachment) => (
                        <TableRow key={attachment.id}>
                          <TableCell className="font-medium">
                            <a href={attachment.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                              {attachment.name}
                            </a>
                          </TableCell>
                          {!isMobile && <TableCell>{attachment.type.toUpperCase()}</TableCell>}
                          <TableCell>{getPhaseForDisplay(attachment.phase)}</TableCell>
                          {!isMobile && <TableCell>{formatDate(attachment.dateAdded)}</TableCell>}
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button variant="ghost" size="sm" asChild>
                                <a href={attachment.url} target="_blank" rel="noopener noreferrer">
                                  View
                                </a>
                              </Button>
                              <Button 
                                variant="destructive" 
                                size="sm"
                                onClick={() => removeAttachment(attachment.id)}
                              >
                                Delete
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

const Attachments = () => {
  return (
    <AttachmentsProvider>
      <AttachmentsContent />
    </AttachmentsProvider>
  );
};

export default Attachments;
