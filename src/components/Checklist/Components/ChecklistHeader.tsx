
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChecklistIcon, DownloadIcon } from "../../ui/Icons";
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

          <Button variant="outline" className="gap-2">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 15V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V15M17 10L12 15M12 15L7 10M12 15V3" 
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Export
          </Button>
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
