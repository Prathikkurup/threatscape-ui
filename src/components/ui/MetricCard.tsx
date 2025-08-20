import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string | number;
  unit?: string;
  description?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
  animated?: boolean;
}

export function MetricCard({ 
  title, 
  value, 
  unit, 
  description, 
  trend, 
  className,
  animated = false
}: MetricCardProps) {
  return (
    <Card className={cn(
      "border border-border/50 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:border-primary/30",
      animated && "scan-line",
      className
    )}>
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium text-muted-foreground font-mono uppercase tracking-wider">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline space-x-2 mb-2">
          <span className="text-3xl font-bold font-mono text-foreground">
            {value}
          </span>
          {unit && (
            <span className="text-sm text-muted-foreground font-mono">
              {unit}
            </span>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          {description && (
            <p className="text-xs text-muted-foreground">
              {description}
            </p>
          )}
          
          {trend && (
            <div className={cn(
              "text-xs font-mono flex items-center",
              trend.isPositive ? "text-safe" : "text-critical"
            )}>
              <span className="mr-1">
                {trend.isPositive ? "↗" : "↘"}
              </span>
              {Math.abs(trend.value)}%
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}