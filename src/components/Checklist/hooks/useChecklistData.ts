
import { useState, useEffect } from "react";
import { checklistData } from "../checklistData";
import { ChecklistItemStatus } from "../Components/ChecklistItem";
import { ChecklistCategoryData } from "../Components/ChecklistPhase";

export const PHASES = ["pre-audit", "during-audit", "post-audit"];
export const SECTORS = ["food", "cosmetics", "pharmaceuticals"];

export const useChecklistData = (initialSector: string = SECTORS[0]) => {
  const [activeSector, setActiveSector] = useState(initialSector);
  const [activePhase, setActivePhase] = useState(PHASES[0]);
  const [checklists, setChecklists] = useState<Record<string, ChecklistCategoryData[]>>(() => {
    return initializeChecklists(activeSector);
  });

  // Re-initialize checklists when sector changes
  useEffect(() => {
    setChecklists(initializeChecklists(activeSector));
  }, [activeSector]);

  const handleSectorChange = (sector: string) => {
    setActiveSector(sector);
  };

  function initializeChecklists(sector: string): Record<string, ChecklistCategoryData[]> {
    const initialChecklists: Record<string, ChecklistCategoryData[]> = {};
    
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
      const sectorData = checklistData[sector.charAt(0).toUpperCase() + sector.slice(1)];
      
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
  }

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

  const getProgressPercentage = () => {
    const items = checklists[activePhase].flatMap((cat) => cat.items);
    if (items.length === 0) return 0;
    
    const completed = items.filter((item) => item.status === "completed").length;
    return Math.round((completed / items.length) * 100);
  };

  return {
    activeSector,
    activePhase,
    checklists,
    setActivePhase,
    updateItemStatus,
    handleSectorChange,
    getProgressPercentage,
  };
};
