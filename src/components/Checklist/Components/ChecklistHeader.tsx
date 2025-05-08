
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChecklistIcon } from "../../ui/Icons";

interface ChecklistHeaderProps {
  activeSector: string;
  progressPercentage: number;
  onSectorChange: (sector: string) => void;
}

const ChecklistHeader: React.FC<ChecklistHeaderProps> = ({
  activeSector,
  progressPercentage,
  onSectorChange,
}) => {
  const SECTORS = ["food", "cosmetics", "pharmaceuticals"];

  return (
    <>
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
            onChange={(e) => onSectorChange(e.target.value)}
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
            {progressPercentage}% Complete
          </Badge>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-halal-green h-2.5 rounded-full"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default ChecklistHeader;
