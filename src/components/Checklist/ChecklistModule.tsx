
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChecklistIcon, CompletedIcon } from "../ui/Icons";
import { CheckSquare, AlertCircle, CheckCircle } from "lucide-react";
import { checklistData } from "./checklistData";

type ChecklistItemStatus = "not-started" | "in-progress" | "completed";

interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  status: ChecklistItemStatus;
}

interface ChecklistCategory {
  id: string;
  title: string;
  items: ChecklistItem[];
}

const PHASES = ["pre-audit", "during-audit", "post-audit"];
const SECTORS = ["food", "cosmetics", "pharmaceuticals"];

const ChecklistModule: React.FC = () => {
  const [activePhase, setActivePhase] = useState(PHASES[0]);
  const [activeSector, setActiveSector] = useState(SECTORS[0]);
  const [checklists, setChecklists] = useState(() => {
    // Initialize checklist from data
    const initialChecklists: Record<string, ChecklistCategory[]> = {};
    
    PHASES.forEach(phase => {
      initialChecklists[phase] = [];
      
      // Determine which category based on phase
      const categoryKey = phase === 'pre-audit' 
        ? 'PreAuditReadiness' 
        : phase === 'during-audit' 
          ? 'DuringAudit' 
          : 'PostAuditMaintenance';
      
      // Create a category for these items
      const categoryId = phase;
      const categoryTitle = phase === 'pre-audit' 
        ? 'Pre-Audit Readiness' 
        : phase === 'during-audit' 
          ? 'During Audit' 
          : 'Post-Audit Maintenance';
      
      // Get items from data based on sector and phase
      const sectorData = checklistData[activeSector.charAt(0).toUpperCase() + activeSector.slice(1)];
      if (sectorData && sectorData[categoryKey]) {
        const checklistItems = sectorData[categoryKey].map((item, index) => ({
          id: `${phase}-${index}`,
          title: item.item,
          description: item.description,
          status: "not-started" as ChecklistItemStatus
        }));
        
        initialChecklists[phase].push({
          id: categoryId,
          title: categoryTitle,
          items: checklistItems
        });
      }
    });
    
    return initialChecklists;
  });

  const updateItemStatus = (categoryId: string, itemId: string, status: ChecklistItemStatus) => {
    setChecklists((prev) => {
      const updated = { ...prev };
      const category = updated[activePhase].find((cat) => cat.id === categoryId);
      
      if (category) {
        const itemIndex = category.items.findIndex((item) => item.id === itemId);
        if (itemIndex !== -1) {
          category.items[itemIndex].status = status;
        }
      }
      
      return updated;
    });
  };

  const getStatusIcon = (status: ChecklistItemStatus) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="text-green-500" size={18} />;
      case "in-progress":
        return <AlertCircle className="text-amber-500" size={18} />;
      default:
        return <CheckSquare className="text-gray-400" size={18} />;
    }
  };

  const getProgressPercentage = () => {
    const items = checklists[activePhase].flatMap((cat) => cat.items);
    if (items.length === 0) return 0;
    
    const completed = items.filter((item) => item.status === "completed").length;
    return Math.round((completed / items.length) * 100);
  };

  // Update checklists when sector changes
  const handleSectorChange = (sector: string) => {
    setActiveSector(sector);
    
    // Reset and rebuild checklists for the new sector
    const updatedChecklists: Record<string, ChecklistCategory[]> = {};
    
    PHASES.forEach(phase => {
      updatedChecklists[phase] = [];
      
      // Determine which category based on phase
      const categoryKey = phase === 'pre-audit' 
        ? 'PreAuditReadiness' 
        : phase === 'during-audit' 
          ? 'DuringAudit' 
          : 'PostAuditMaintenance';
      
      // Create a category for these items
      const categoryId = phase;
      const categoryTitle = phase === 'pre-audit' 
        ? 'Pre-Audit Readiness' 
        : phase === 'during-audit' 
          ? 'During Audit' 
          : 'Post-Audit Maintenance';
      
      // Get items from data based on sector and phase
      const sectorData = checklistData[sector.charAt(0).toUpperCase() + sector.slice(1)];
      
      if (sectorData && sectorData[categoryKey]) {
        const checklistItems = sectorData[categoryKey].map((item, index) => ({
          id: `${phase}-${index}`,
          title: item.item,
          description: item.description,
          status: "not-started" as ChecklistItemStatus
        }));
        
        updatedChecklists[phase].push({
          id: categoryId,
          title: categoryTitle,
          items: checklistItems
        });
      }
    });
    
    setChecklists(updatedChecklists);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <ChecklistIcon size={24} className="text-halal-green" />
            Audit Checklist
          </h1>
          <p className="text-muted-foreground mt-1">
            Track your halal certification readiness with our comprehensive checklists
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <select
            className="border rounded-md p-2 text-sm"
            value={activeSector}
            onChange={(e) => handleSectorChange(e.target.value)}
          >
            {SECTORS.map((sector) => (
              <option key={sector} value={sector}>
                {sector.charAt(0).toUpperCase() + sector.slice(1)}
              </option>
            ))}
          </select>

          <Button variant="outline">
            Export Report
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-lg border p-4 mb-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-medium">Overall Progress</h2>
          <Badge variant="outline" className="bg-halal-green/10 text-halal-green">
            {getProgressPercentage()}% Complete
          </Badge>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-halal-green h-2.5 rounded-full"
            style={{ width: `${getProgressPercentage()}%` }}
          ></div>
        </div>
      </div>

      <Tabs defaultValue={activePhase} onValueChange={setActivePhase}>
        <TabsList className="grid grid-cols-3 mb-6">
          {PHASES.map((phase) => (
            <TabsTrigger key={phase} value={phase}>
              {phase
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </TabsTrigger>
          ))}
        </TabsList>

        {PHASES.map((phase) => (
          <TabsContent key={phase} value={phase} className="space-y-6">
            {checklists[phase].map((category) => (
              <Card key={category.id}>
                <CardHeader>
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription>
                    Complete the following checklist items
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {category.items.map((item) => (
                      <li key={item.id} className="border rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          {getStatusIcon(item.status)}
                          <div className="flex-1">
                            <h4 className="font-medium">{item.title}</h4>
                            <p className="text-sm text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                          <select
                            value={item.status}
                            onChange={(e) => updateItemStatus(
                              category.id, 
                              item.id, 
                              e.target.value as ChecklistItemStatus
                            )}
                            className="text-sm border rounded p-1"
                          >
                            <option value="not-started">Not Started</option>
                            <option value="in-progress">In Progress</option>
                            <option value="completed">Completed</option>
                          </select>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default ChecklistModule;
