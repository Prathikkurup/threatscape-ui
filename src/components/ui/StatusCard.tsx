import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatusCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  status: "safe" | "warning" | "critical" | "info";
  trend?: string;
  className?: string;
}

const statusStyles = {
  safe: "text-safe border-safe/20 bg-safe/5",
  warning: "text-warning border-warning/20 bg-warning/5",  
  critical: "text-critical border-critical/20 bg-critical/5 critical-glow",
  info: "text-info border-info/20 bg-info/5"
};

export function StatusCard({ 
  title, 
  value, 
  icon: Icon, 
  status, 
  trend, 
  className 
}: StatusCardProps) {
  return (
    <Card className={cn(
      "border-2 transition-all duration-300 hover:scale-105",
      statusStyles[status],
      className
    )}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium font-mono uppercase tracking-wider">
          {title}
        </CardTitle>
        <Icon className="h-5 w-5" />
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold font-mono mb-1">
          {value}
        </div>
        {trend && (
          <p className="text-xs text-muted-foreground font-mono">
            {trend}
          </p>
        )}
      </CardContent>
    </Card>
  );
}