
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChecklistIcon, CompletedIcon } from "../ui/Icons";
import { CheckSquare, AlertCircle, CheckCircle } from "lucide-react";

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

// Sample checklist data
const sampleChecklists: Record<string, ChecklistCategory[]> = {
  "pre-audit": [
    {
      id: "documentation",
      title: "Documentation",
      items: [
        {
          id: "doc-1",
          title: "Halal Policy",
          description: "Establish and document a clear Halal policy for your organization",
          status: "not-started",
        },
        {
          id: "doc-2",
          title: "Raw Material Documentation",
          description: "Prepare documentation for all raw materials and their sources",
          status: "not-started",
        },
        {
          id: "doc-3",
          title: "Process Flow Chart",
          description: "Create detailed process flow charts for production",
          status: "not-started",
        },
      ],
    },
    {
      id: "premises",
      title: "Premises Preparation",
      items: [
        {
          id: "prem-1",
          title: "Facility Cleanliness",
          description: "Ensure facility meets halal cleanliness requirements",
          status: "not-started",
        },
        {
          id: "prem-2",
          title: "Segregation Planning",
          description: "Plan segregation of halal and non-halal materials",
          status: "not-started",
        },
      ],
    },
  ],
  "during-audit": [
    {
      id: "inspection",
      title: "Inspection Process",
      items: [
        {
          id: "insp-1",
          title: "Present Documentation",
          description: "Have all prepared documentation ready for auditors",
          status: "not-started",
        },
        {
          id: "insp-2",
          title: "Facility Tour",
          description: "Be prepared to guide auditors through your facility",
          status: "not-started",
        },
      ],
    },
  ],
  "post-audit": [
    {
      id: "maintenance",
      title: "Certification Maintenance",
      items: [
        {
          id: "maint-1",
          title: "Regular Internal Audits",
          description: "Conduct regular internal audits to maintain compliance",
          status: "not-started",
        },
        {
          id: "maint-2",
          title: "Staff Training",
          description: "Provide ongoing halal training for staff",
          status: "not-started",
        },
      ],
    },
  ],
};

const ChecklistModule: React.FC = () => {
  const [activePhase, setActivePhase] = useState(PHASES[0]);
  const [activeSector, setActiveSector] = useState(SECTORS[0]);
  const [checklists, setChecklists] = useState(sampleChecklists);

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
            onChange={(e) => setActiveSector(e.target.value)}
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
