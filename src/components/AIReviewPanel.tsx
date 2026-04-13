import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, HelpCircle } from "lucide-react";
import type { Problem } from "@/data/problems";

interface AIReviewPanelProps {
  solution: string;
  problem: Problem;
}

const pillars = [
  {
    name: "Desirability",
    score: 4,
    feedback: "Your solution demonstrates strong empathy for the user's pain point. Consider validating demand with lightweight user interviews.",
  },
  {
    name: "Feasibility",
    score: 3,
    feedback: "The technical approach is sound but may require significant integration effort. Break it into an MVP scope first.",
  },
  {
    name: "Viability",
    score: 3,
    feedback: "The business model is implied but not explicit. Define how this creates sustainable value or reduces cost.",
  },
  {
    name: "Accessibility",
    score: 4,
    feedback: "Good consideration of inclusive design. Ensure WCAG 2.1 AA compliance and test with assistive technologies.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < count ? "fill-primary text-primary" : "text-muted-foreground/30"}`}
        />
      ))}
    </div>
  );
}

function getQuestions(problem: Problem): string[] {
  const base = [
    `How does your solution specifically address the needs of "${problem.persona.split(",")[0]}"?`,
    "What is the smallest experiment you could run in one week to validate your riskiest assumption?",
    "If you had to remove one feature to ship faster, which would it be and why?",
  ];
  return base;
}

export function AIReviewPanel({ solution, problem }: AIReviewPanelProps) {
  const questions = getQuestions(problem);
  const overall = Math.round(pillars.reduce((s, p) => s + p.score, 0) / pillars.length);

  return (
    <div className="space-y-4 border-t pt-4">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold text-foreground">AI Review</h4>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">Overall</span>
          <Stars count={overall} />
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {pillars.map((p) => (
          <Card key={p.name} className="border">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm">{p.name}</CardTitle>
                <Stars count={p.score} />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">{p.feedback}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-primary/20 bg-primary/5">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm flex items-center gap-2">
            <HelpCircle className="h-4 w-4 text-primary" />
            Critical Thinking Questions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="space-y-2 list-decimal pl-4">
            {questions.map((q, i) => (
              <li key={i} className="text-sm text-muted-foreground">{q}</li>
            ))}
          </ol>
        </CardContent>
      </Card>
    </div>
  );
}
