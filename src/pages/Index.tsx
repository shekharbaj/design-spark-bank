import { useState, useMemo, useCallback } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { FilterSidebar } from "@/components/FilterSidebar";
import { ProblemCard } from "@/components/ProblemCard";
import { ProblemDetail } from "@/components/ProblemDetail";
import { Input } from "@/components/ui/input";
import { problems } from "@/data/problems";
import type { Industry, Difficulty, UserType, Problem } from "@/data/problems";
import { Search, LayoutGrid } from "lucide-react";

function toggle<T>(arr: T[], val: T): T[] {
  return arr.includes(val) ? arr.filter((v) => v !== val) : [...arr, val];
}

export default function Index() {
  const [search, setSearch] = useState("");
  const [selectedIndustries, setSelectedIndustries] = useState<Industry[]>([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState<Difficulty[]>([]);
  const [selectedUserTypes, setSelectedUserTypes] = useState<UserType[]>([]);
  const [activeProblem, setActiveProblem] = useState<Problem | null>(null);

  const filtered = useMemo(() => {
    return problems.filter((p) => {
      if (selectedIndustries.length && !selectedIndustries.includes(p.category)) return false;
      if (selectedDifficulties.length && !selectedDifficulties.includes(p.difficulty)) return false;
      if (selectedUserTypes.length && !selectedUserTypes.includes(p.userType)) return false;
      if (search) {
        const q = search.toLowerCase();
        return p.hmw.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);
      }
      return true;
    });
  }, [search, selectedIndustries, selectedDifficulties, selectedUserTypes]);

  const clearAll = useCallback(() => {
    setSelectedIndustries([]);
    setSelectedDifficulties([]);
    setSelectedUserTypes([]);
    setSearch("");
  }, []);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <FilterSidebar
          selectedIndustries={selectedIndustries}
          selectedDifficulties={selectedDifficulties}
          selectedUserTypes={selectedUserTypes}
          onToggleIndustry={(v) => setSelectedIndustries((s) => toggle(s, v))}
          onToggleDifficulty={(v) => setSelectedDifficulties((s) => toggle(s, v))}
          onToggleUserType={(v) => setSelectedUserTypes((s) => toggle(s, v))}
          onClearAll={clearAll}
          totalCount={problems.length}
          filteredCount={filtered.length}
        />

        <div className="flex-1 flex flex-col min-w-0">
          <header className="h-14 border-b flex items-center gap-3 px-4 shrink-0">
            <SidebarTrigger />
            <div className="flex items-center gap-2">
              <LayoutGrid className="h-5 w-5 text-primary" />
              <h1 className="text-base font-semibold text-foreground">Design Sprint Bank</h1>
            </div>
            <div className="ml-auto relative max-w-xs w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search challenges…"
                className="pl-9 h-9 text-sm"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </header>

          <main className="flex-1 p-4 md:p-6 overflow-auto">
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-64 text-muted-foreground">
                <p className="text-sm">No challenges match your filters.</p>
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((p) => (
                  <ProblemCard key={p.id} problem={p} onClick={() => setActiveProblem(p)} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      <ProblemDetail
        problem={activeProblem}
        open={!!activeProblem}
        onOpenChange={(open) => !open && setActiveProblem(null)}
      />
    </SidebarProvider>
  );
}
