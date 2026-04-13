import { Badge } from "@/components/ui/badge";
import type { Difficulty } from "@/data/problems";

const difficultyConfig: Record<Difficulty, string> = {
  Easy: "bg-difficulty-easy/10 text-difficulty-easy border-difficulty-easy/20",
  Medium: "bg-difficulty-medium/10 text-difficulty-medium border-difficulty-medium/20",
  Hard: "bg-difficulty-hard/10 text-difficulty-hard border-difficulty-hard/20",
};

export function DifficultyBadge({ difficulty }: { difficulty: Difficulty }) {
  return (
    <Badge variant="outline" className={difficultyConfig[difficulty]}>
      {difficulty}
    </Badge>
  );
}
