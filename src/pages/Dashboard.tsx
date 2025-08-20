import { Shield, AlertTriangle, Activity, Zap, Users, Server } from "lucide-react";
import { StatusCard } from "@/components/ui/StatusCard";
import { MetricCard } from "@/components/ui/MetricCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Security Dashboard
          </h1>
          <p className="text-muted-foreground font-mono">
            Real-time network intrusion detection & analysis
          </p>
        </div>
        
        <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-border rounded-lg px-4 py-2">
          <div className="w-2 h-2 bg-safe rounded-full pulse-neon"></div>
          <span className="text-sm font-mono text-safe">ACTIVE MONITORING</span>
        </div>
      </div>

      {/* Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatusCard
          title="System Status"
          value="SECURE"
          icon={Shield}
          status="safe"
          trend="All systems operational"
        />
        <StatusCard
          title="Active Threats"
          value="3"
          icon={AlertTriangle}
          status="warning"
          trend="+1 from last hour"
        />
        <StatusCard
          title="Network Activity"
          value="NORMAL"
          icon={Activity}
          status="info"
          trend="Monitor active"
        />
        <StatusCard
          title="AI Engine"
          value="ONLINE"
          icon={Zap}
          status="safe"
          trend="Learning active"
        />
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <MetricCard
          title="Packets Analyzed"
          value="2.4M"
          unit="packets/hour"
          description="Real-time packet inspection"
          trend={{ value: 12, isPositive: true }}
          animated
        />
        <MetricCard
          title="Detection Rate"
          value="99.7"
          unit="%"
          description="AI accuracy rate"
          trend={{ value: 2.1, isPositive: true }}
        />
        <MetricCard
          title="Response Time"
          value="0.03"
          unit="ms"
          description="Average detection latency"
          trend={{ value: 15, isPositive: false }}
        />
        <MetricCard
          title="Connected Nodes"
          value="247"
          unit="devices"
          description="Network endpoints"
          trend={{ value: 5, isPositive: true }}
        />
        <MetricCard
          title="Blocked Attacks"
          value="1,832"
          unit="today"
          description="Prevented intrusions"
          trend={{ value: 8, isPositive: true }}
        />
        <MetricCard
          title="False Positives"
          value="0.1"
          unit="%"
          description="Accuracy metric"
          trend={{ value: 0.3, isPositive: false }}
        />
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-warning" />
              <span>Recent Threats</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { time: "14:32", type: "Port Scan", source: "192.168.1.45", severity: "Medium" },
                { time: "14:28", type: "Brute Force", source: "10.0.0.23", severity: "High" },
                { time: "14:15", type: "Anomaly", source: "172.16.0.12", severity: "Low" },
              ].map((threat, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg border border-border/30">
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${
                      threat.severity === 'High' ? 'bg-critical' : 
                      threat.severity === 'Medium' ? 'bg-warning' : 'bg-info'
                    }`}></div>
                    <div>
                      <p className="font-medium font-mono text-sm">{threat.type}</p>
                      <p className="text-xs text-muted-foreground">{threat.source}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-mono text-primary">{threat.time}</p>
                    <p className="text-xs text-muted-foreground">{threat.severity}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="h-5 w-5 text-info" />
              <span>System Performance</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-mono">CPU Usage</span>
                <div className="flex items-center space-x-2">
                  <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-safe"></div>
                  </div>
                  <span className="text-sm font-mono text-safe">72%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-mono">Memory</span>
                <div className="flex items-center space-x-2">
                  <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="w-1/2 h-full bg-info"></div>
                  </div>
                  <span className="text-sm font-mono text-info">54%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-mono">Network I/O</span>
                <div className="flex items-center space-x-2">
                  <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="w-5/6 h-full bg-warning"></div>
                  </div>
                  <span className="text-sm font-mono text-warning">89%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}