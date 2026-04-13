import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DifficultyBadge } from "./DifficultyBadge";
import { Users, Lightbulb } from "lucide-react";
import type { Problem } from "@/data/problems";

interface ProblemCardProps {
  problem: Problem;
  onClick: () => void;
}

export function ProblemCard({ problem, onClick }: ProblemCardProps) {
  return (
    <Card
      className="cursor-pointer transition-all hover:shadow-md hover:border-primary/30 group"
      onClick={onClick}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <Badge variant="secondary" className="text-xs font-medium shrink-0">
            {problem.category}
          </Badge>
          <DifficultyBadge difficulty={problem.difficulty} />
        </div>
      </CardHeader>
      <CardContent className="pb-3">
        <h3 className="text-sm font-semibold leading-snug text-foreground group-hover:text-primary transition-colors">
          {problem.hmw}
        </h3>
        <p className="mt-2 text-xs text-muted-foreground line-clamp-2">
          {problem.context}
        </p>
      </CardContent>
      <CardFooter className="pt-0 flex items-center gap-3 text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <Users className="h-3 w-3" />
          {problem.userType}
        </span>
        <span className="flex items-center gap-1">
          <Lightbulb className="h-3 w-3" />
          {problem.persona.split(" ").slice(0, 3).join(" ")}…
        </span>
      </CardFooter>
    </Card>
  );
}
