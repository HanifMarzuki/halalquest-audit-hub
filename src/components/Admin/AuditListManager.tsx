
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Edit, Trash2, Save, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AuditItem {
  id: string;
  title: string;
  description: string;
  sector: string;
  phase: string;
  category: string;
  priority: "high" | "medium" | "low";
  isRequired: boolean;
}

const AuditListManager: React.FC = () => {
  const { toast } = useToast();
  const [editingItem, setEditingItem] = useState<AuditItem | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Mock data - in real app this would come from an API
  const [auditItems, setAuditItems] = useState<AuditItem[]>([
    {
      id: "1",
      title: "Halal Certification Documentation",
      description: "Verify all products have valid halal certification",
      sector: "food",
      phase: "preparation",
      category: "documentation",
      priority: "high",
      isRequired: true
    },
    {
      id: "2",
      title: "Ingredient Source Verification",
      description: "Check all ingredient sources for halal compliance",
      sector: "food",
      phase: "preparation",
      category: "sourcing",
      priority: "high",
      isRequired: true
    },
    {
      id: "3",
      title: "Production Line Cleaning",
      description: "Ensure production lines are properly cleaned between products",
      sector: "cosmetics",
      phase: "production",
      category: "hygiene",
      priority: "medium",
      isRequired: false
    }
  ]);

  const handleSave = (item: Partial<AuditItem>) => {
    if (editingItem) {
      // Update existing item
      setAuditItems(prev => prev.map(i => i.id === editingItem.id ? { ...i, ...item } : i));
      toast({
        title: "Item Updated",
        description: "Audit item has been successfully updated."
      });
    } else {
      // Add new item
      const newItem: AuditItem = {
        id: Date.now().toString(),
        title: item.title || "",
        description: item.description || "",
        sector: item.sector || "food",
        phase: item.phase || "preparation",
        category: item.category || "documentation",
        priority: item.priority || "medium",
        isRequired: item.isRequired || false
      };
      setAuditItems(prev => [...prev, newItem]);
      toast({
        title: "Item Added",
        description: "New audit item has been successfully added."
      });
    }
    setEditingItem(null);
    setIsDialogOpen(false);
  };

  const handleDelete = (id: string) => {
    setAuditItems(prev => prev.filter(i => i.id !== id));
    toast({
      title: "Item Deleted",
      description: "Audit item has been removed."
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">Audit Checklist Management</h3>
          <p className="text-sm text-muted-foreground">
            Add, edit, and organize audit checklist items
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2" onClick={() => setEditingItem(null)}>
              <Plus size={16} />
              Add Item
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <AuditItemForm 
              item={editingItem} 
              onSave={handleSave} 
              onCancel={() => setIsDialogOpen(false)} 
            />
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {auditItems.map((item) => (
          <Card key={item.id}>
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <CardTitle className="text-base">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => {
                      setEditingItem(item);
                      setIsDialogOpen(true);
                    }}
                  >
                    <Edit size={14} />
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => handleDelete(item.id)}
                  >
                    <Trash2 size={14} />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">{item.sector}</Badge>
                <Badge variant="outline">{item.phase}</Badge>
                <Badge variant="outline">{item.category}</Badge>
                <Badge 
                  className={`${
                    item.priority === 'high' ? 'bg-red-100 text-red-800' :
                    item.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}
                >
                  {item.priority}
                </Badge>
                {item.isRequired && <Badge className="bg-halal-blue text-white">Required</Badge>}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

interface AuditItemFormProps {
  item: AuditItem | null;
  onSave: (item: Partial<AuditItem>) => void;
  onCancel: () => void;
}

const AuditItemForm: React.FC<AuditItemFormProps> = ({ item, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: item?.title || "",
    description: item?.description || "",
    sector: item?.sector || "food",
    phase: item?.phase || "preparation",
    category: item?.category || "documentation",
    priority: item?.priority || "medium" as "high" | "medium" | "low",
    isRequired: item?.isRequired || false
  });

  return (
    <>
      <DialogHeader>
        <DialogTitle>{item ? "Edit" : "Add"} Audit Item</DialogTitle>
        <DialogDescription>
          {item ? "Update the audit item details." : "Create a new audit checklist item."}
        </DialogDescription>
      </DialogHeader>
      <div className="space-y-4 py-4">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={formData.title}
            onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
            placeholder="Enter item title"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
            placeholder="Enter item description"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="sector">Sector</Label>
            <Select value={formData.sector} onValueChange={(value) => setFormData(prev => ({ ...prev, sector: value }))}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="food">Food</SelectItem>
                <SelectItem value="cosmetics">Cosmetics</SelectItem>
                <SelectItem value="pharmaceutical">Pharmaceutical</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phase">Phase</Label>
            <Select value={formData.phase} onValueChange={(value) => setFormData(prev => ({ ...prev, phase: value }))}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="preparation">Preparation</SelectItem>
                <SelectItem value="production">Production</SelectItem>
                <SelectItem value="packaging">Packaging</SelectItem>
                <SelectItem value="distribution">Distribution</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select value={formData.category} onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="documentation">Documentation</SelectItem>
                <SelectItem value="sourcing">Sourcing</SelectItem>
                <SelectItem value="hygiene">Hygiene</SelectItem>
                <SelectItem value="storage">Storage</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="priority">Priority</Label>
            <Select value={formData.priority} onValueChange={(value) => setFormData(prev => ({ ...prev, priority: value as "high" | "medium" | "low" }))}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end gap-3">
        <Button variant="outline" onClick={onCancel}>
          <X size={16} className="mr-1" />
          Cancel
        </Button>
        <Button onClick={() => onSave(formData)}>
          <Save size={16} className="mr-1" />
          Save Item
        </Button>
      </div>
    </>
  );
};

export default AuditListManager;
