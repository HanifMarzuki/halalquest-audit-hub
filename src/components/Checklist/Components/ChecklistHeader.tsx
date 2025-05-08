
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChecklistIcon, DownloadIcon } from "../../ui/Icons";
import ReportGenerator from "./ReportGenerator";
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useIsMobile } from "@/hooks/use-mobile";

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
  const isMobile = useIsMobile();

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold flex items-center gap-2`}>
            <ChecklistIcon size={isMobile ? 20 : 24} className="text-halal-green" />
            Audit Checklist
          </h1>
          <p className="text-muted-foreground text-sm md:text-base mt-1">
            Track your halal certification readiness
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <Select 
            value={activeSector}
            onValueChange={onSectorChange}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select sector" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Industry Sectors</SelectLabel>
                {SECTORS.map((sector) => (
                  <SelectItem key={sector} value={sector}>
                    {sector.charAt(0).toUpperCase() + sector.slice(1)}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <ReportGenerator activeSector={activeSector} />
        </div>
      </div>

      <div className="bg-white rounded-lg border p-4 mb-6 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-medium">Overall Progress</h2>
          <Badge variant="outline" className="bg-halal-green/10 text-halal-green">
            {progressPercentage}% Complete
          </Badge>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
          <div
            className="bg-halal-green h-2.5 rounded-full transition-all duration-500 ease-in-out"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default ChecklistHeader;
