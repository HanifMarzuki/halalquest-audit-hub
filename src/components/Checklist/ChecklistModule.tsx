
import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ChecklistHeader from "./Components/ChecklistHeader";
import ChecklistPhase from "./Components/ChecklistPhase";
import { useChecklistData, PHASES } from "./hooks/useChecklistData";
import { AttachmentsProvider } from "./context/AttachmentsContext";
import ErrorBoundary from "@/components/ErrorBoundary";

const ChecklistModule: React.FC = () => {
  const {
    activeSector,
    activePhase,
    checklists,
    setActivePhase,
    updateItemStatus,
    handleSectorChange,
    getProgressPercentage
  } = useChecklistData();

  return (
    <ErrorBoundary>
      <AttachmentsProvider>
        <div className="space-y-6">
          <ChecklistHeader 
            activeSector={activeSector}
            progressPercentage={getProgressPercentage}
            onSectorChange={handleSectorChange}
          />

          <Tabs defaultValue={activePhase} onValueChange={setActivePhase}>
            <TabsList className="grid grid-cols-3 mb-6 w-full">
              {PHASES.map((phase) => (
                <TabsTrigger 
                  key={phase} 
                  value={phase}
                  className="text-xs md:text-sm"
                >
                  {phase
                    .split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                </TabsTrigger>
              ))}
            </TabsList>

            {PHASES.map((phase) => (
              <ChecklistPhase
                key={phase}
                phase={phase}
                categories={checklists[phase] || []}
                onStatusChange={updateItemStatus}
              />
            ))}
          </Tabs>
        </div>
      </AttachmentsProvider>
    </ErrorBoundary>
  );
};

export default ChecklistModule;
