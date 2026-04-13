import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { DifficultyBadge } from "./DifficultyBadge";
import { AIReviewPanel } from "./AIReviewPanel";
import { User, AlertTriangle, Sparkles } from "lucide-react";
import type { Problem } from "@/data/problems";

interface ProblemDetailProps {
  problem: Problem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProblemDetail({ problem, open, onOpenChange }: ProblemDetailProps) {
  const [solution, setSolution] = useState("");
  const [showReview, setShowReview] = useState(false);
  const [reviewing, setReviewing] = useState(false);

  if (!problem) return null;

  const handleRequestReview = () => {
    if (!solution.trim()) return;
    setReviewing(true);
    setShowReview(false);
    setTimeout(() => {
      setReviewing(false);
      setShowReview(true);
    }, 2500);
  };

  const handleClose = (val: boolean) => {
    if (!val) {
      setSolution("");
      setShowReview(false);
      setReviewing(false);
    }
    onOpenChange(val);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="secondary">{problem.category}</Badge>
            <DifficultyBadge difficulty={problem.difficulty} />
            <Badge variant="outline">{problem.userType}</Badge>
          </div>
          <DialogTitle className="text-lg leading-snug">
            {problem.hmw}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 mt-2">
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-1">Context</h4>
            <p className="text-sm text-muted-foreground">{problem.context}</p>
          </div>

          <div className="flex items-start gap-2">
            <User className="h-4 w-4 mt-0.5 text-primary" />
            <div>
              <h4 className="text-sm font-semibold text-foreground">Persona</h4>
              <p className="text-sm text-muted-foreground">{problem.persona}</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <AlertTriangle className="h-4 w-4 mt-0.5 text-warning" />
            <div>
              <h4 className="text-sm font-semibold text-foreground">Constraints</h4>
              <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                {problem.constraints.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t pt-4">
            <h4 className="text-sm font-semibold text-foreground mb-2">Your Solution</h4>
            <Textarea
              placeholder="Describe your design solution here. Consider the persona, constraints, and how your solution addresses the core pain point…"
              className="min-h-[120px] text-sm"
              value={solution}
              onChange={(e) => setSolution(e.target.value)}
            />
            <Button
              className="mt-3 gap-2"
              onClick={handleRequestReview}
              disabled={!solution.trim() || reviewing}
            >
              <Sparkles className="h-4 w-4" />
              {reviewing ? "Analyzing…" : "Request AI Review"}
            </Button>
          </div>

          {showReview && <AIReviewPanel solution={solution} problem={problem} />}
        </div>
      </DialogContent>
    </Dialog>
  );
}
