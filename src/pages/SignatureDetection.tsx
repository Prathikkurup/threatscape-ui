import { Search, Database, Target, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatusCard } from "@/components/ui/StatusCard";
import { MetricCard } from "@/components/ui/MetricCard";

export default function SignatureDetection() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Signature-Based Detection
          </h1>
          <p className="text-muted-foreground font-mono">
            Pattern matching & rule-based threat identification
          </p>
        </div>
        
        <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-border rounded-lg px-4 py-2">
          <Search className="h-4 w-4 text-primary pulse-neon" />
          <span className="text-sm font-mono text-primary">SCANNING</span>
        </div>
      </div>

      {/* Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatusCard
          title="Signature DB"
          value="47,823"
          icon={Database}
          status="safe"
          trend="Updated 2h ago"
        />
        <StatusCard
          title="Active Rules"
          value="12,456"
          icon={Target}
          status="info"
          trend="Rule engine online"
        />
        <StatusCard
          title="Matches Today"
          value="284"
          icon={Search}
          status="warning"
          trend="+12 from yesterday"
        />
        <StatusCard
          title="Scan Speed"
          value="OPTIMAL"
          icon={Clock}
          status="safe"
          trend="8.2GB/s throughput"
        />
      </div>

      {/* Detection Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <MetricCard
          title="Signature Database"
          value="47,823"
          unit="signatures"
          description="Known threat patterns"
          trend={{ value: 234, isPositive: true }}
          animated
        />
        <MetricCard
          title="Rule Categories"
          value="23"
          description="Attack classifications"
        />
        <MetricCard
          title="Custom Rules"
          value="1,847"
          description="Organization-specific"
          trend={{ value: 12, isPositive: true }}
        />
        <MetricCard
          title="Detection Rate"
          value="99.8"
          unit="%"
          description="Pattern match accuracy"
        />
        <MetricCard
          title="False Positives"
          value="0.02"
          unit="%"
          description="Misidentification rate"
          trend={{ value: 15, isPositive: false }}
        />
        <MetricCard
          title="Processing Speed"
          value="8.2"
          unit="GB/s"
          description="Signature matching"
          trend={{ value: 5, isPositive: true }}
        />
      </div>

      {/* Signature Matches */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="h-5 w-5 text-critical" />
              <span>Recent Signature Matches</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { 
                  time: "16:45", 
                  signature: "CVE-2023-4567", 
                  type: "SQL Injection", 
                  source: "203.0.113.45",
                  severity: "Critical"
                },
                { 
                  time: "16:42", 
                  signature: "MALWARE-007", 
                  type: "Trojan Horse", 
                  source: "192.168.1.23",
                  severity: "High"
                },
                { 
                  time: "16:38", 
                  signature: "SCAN-001", 
                  type: "Port Scanner", 
                  source: "10.0.0.45",
                  severity: "Medium"
                },
                { 
                  time: "16:35", 
                  signature: "PHISH-123", 
                  type: "Email Phishing", 
                  source: "mail.example.org",
                  severity: "High"
                },
              ].map((match, i) => (
                <div key={i} className="p-4 bg-muted/30 rounded-lg border border-border/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${
                        match.severity === 'Critical' ? 'bg-critical critical-glow' : 
                        match.severity === 'High' ? 'bg-critical' :
                        match.severity === 'Medium' ? 'bg-warning' : 'bg-info'
                      }`}></div>
                      <span className="font-medium font-mono text-sm">{match.signature}</span>
                    </div>
                    <span className="text-xs font-mono text-primary">{match.time}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <div>
                      <div className="text-foreground font-medium">{match.type}</div>
                      <div className="text-muted-foreground">{match.source}</div>
                    </div>
                    <span className={`font-mono px-2 py-1 rounded ${
                      match.severity === 'Critical' ? 'bg-critical/20 text-critical' : 
                      match.severity === 'High' ? 'bg-critical/20 text-critical' :
                      match.severity === 'Medium' ? 'bg-warning/20 text-warning' : 'bg-info/20 text-info'
                    }`}>{match.severity}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Database className="h-5 w-5 text-info" />
              <span>Signature Categories</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { category: "Malware", count: 18423, percentage: 38.5, color: "critical" },
                { category: "Network Attacks", count: 12847, percentage: 26.9, color: "warning" },
                { category: "Web Exploits", count: 8934, percentage: 18.7, color: "info" },
                { category: "Email Threats", count: 4256, percentage: 8.9, color: "primary" },
                { category: "Data Exfiltration", count: 2105, percentage: 4.4, color: "safe" },
                { category: "Other", count: 1258, percentage: 2.6, color: "muted" },
              ].map((cat, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full bg-${cat.color}`}></div>
                    <div>
                      <div className="font-medium text-sm">{cat.category}</div>
                      <div className="text-xs text-muted-foreground font-mono">
                        {cat.count.toLocaleString()} signatures
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-mono">{cat.percentage}%</div>
                    <div className="w-16 h-1 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-${cat.color}`}
                        style={{ width: `${cat.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}