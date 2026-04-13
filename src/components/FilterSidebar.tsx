import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { industries, difficulties, userTypes } from "@/data/problems";
import type { Industry, Difficulty, UserType } from "@/data/problems";
import { X } from "lucide-react";

interface FilterSidebarProps {
  selectedIndustries: Industry[];
  selectedDifficulties: Difficulty[];
  selectedUserTypes: UserType[];
  onToggleIndustry: (v: Industry) => void;
  onToggleDifficulty: (v: Difficulty) => void;
  onToggleUserType: (v: UserType) => void;
  onClearAll: () => void;
  totalCount: number;
  filteredCount: number;
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`text-xs px-3 py-1.5 rounded-md border transition-colors ${
        active
          ? "bg-primary text-primary-foreground border-primary"
          : "bg-card text-muted-foreground border-border hover:border-primary/40"
      }`}
    >
      {label}
    </button>
  );
}

export function FilterSidebar({
  selectedIndustries,
  selectedDifficulties,
  selectedUserTypes,
  onToggleIndustry,
  onToggleDifficulty,
  onToggleUserType,
  onClearAll,
  totalCount,
  filteredCount,
}: FilterSidebarProps) {
  const hasFilters =
    selectedIndustries.length > 0 ||
    selectedDifficulties.length > 0 ||
    selectedUserTypes.length > 0;

  return (
    <Sidebar collapsible="icon" className="border-r">
      <SidebarContent className="pt-4 px-2">
        <div className="px-2 mb-4 flex items-center justify-between">
          <span className="text-xs text-muted-foreground">
            {filteredCount} of {totalCount} challenges
          </span>
          {hasFilters && (
            <Button variant="ghost" size="sm" className="h-6 text-xs gap-1" onClick={onClearAll}>
              <X className="h-3 w-3" /> Clear
            </Button>
          )}
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>Industry</SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="flex flex-wrap gap-1.5 px-2 pb-2">
              {industries.map((ind) => (
                <FilterChip
                  key={ind}
                  label={ind}
                  active={selectedIndustries.includes(ind)}
                  onClick={() => onToggleIndustry(ind)}
                />
              ))}
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Difficulty</SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="flex flex-wrap gap-1.5 px-2 pb-2">
              {difficulties.map((d) => (
                <FilterChip
                  key={d}
                  label={d}
                  active={selectedDifficulties.includes(d)}
                  onClick={() => onToggleDifficulty(d)}
                />
              ))}
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>User Type</SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="flex flex-wrap gap-1.5 px-2 pb-2">
              {userTypes.map((ut) => (
                <FilterChip
                  key={ut}
                  label={ut}
                  active={selectedUserTypes.includes(ut)}
                  onClick={() => onToggleUserType(ut)}
                />
              ))}
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
