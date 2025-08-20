import { AlertTriangle, Shield, XCircle, CheckCircle, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatusCard } from "@/components/ui/StatusCard";
import { Badge } from "@/components/ui/badge";

export default function Threats() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Threat Management
          </h1>
          <p className="text-muted-foreground font-mono">
            Active threat monitoring, incident response & mitigation status
          </p>
        </div>
        
        <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-border rounded-lg px-4 py-2">
          <AlertTriangle className="h-4 w-4 text-warning pulse-neon" />
          <span className="text-sm font-mono text-warning">3 ACTIVE THREATS</span>
        </div>
      </div>

      {/* Threat Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatusCard
          title="Critical Threats"
          value="1"
          icon={XCircle}
          status="critical"
          trend="Immediate attention"
        />
        <StatusCard
          title="High Priority"
          value="2"
          icon={AlertTriangle}
          status="warning"
          trend="Under investigation"
        />
        <StatusCard
          title="Mitigated"
          value="47"
          icon={CheckCircle}
          status="safe"
          trend="Last 24 hours"
        />
        <StatusCard
          title="Response Time"
          value="2.3min"
          icon={Clock}
          status="info"
          trend="Average this week"
        />
      </div>

      {/* Active Threats */}
      <Card className="border border-border/50 bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 text-critical" />
            <span>Active Threats</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                id: "THR-2024-001",
                title: "Advanced Persistent Threat",
                description: "Sophisticated multi-stage attack targeting database servers",
                severity: "Critical",
                source: "External IP: 203.0.113.45",
                detected: "2 hours ago",
                status: "Active",
                affected: ["DB-Server-01", "Web-Gateway", "DNS-Primary"],
                technique: "Lateral Movement"
              },
              {
                id: "THR-2024-002", 
                title: "Brute Force Attack",
                description: "Multiple failed authentication attempts from same source",
                severity: "High",
                source: "Internal IP: 192.168.1.23",
                detected: "45 minutes ago",
                status: "Contained",
                affected: ["SSH-Server", "FTP-Gateway"],
                technique: "Credential Stuffing"
              },
              {
                id: "THR-2024-003",
                title: "DDoS Attempt",
                description: "Distributed denial of service targeting web infrastructure",
                severity: "High", 
                source: "Multiple sources",
                detected: "23 minutes ago",
                status: "Mitigating",
                affected: ["Load-Balancer", "Web-Server-Farm"],
                technique: "Volumetric Attack"
              }
            ].map((threat, i) => (
              <div key={i} className="p-6 bg-muted/30 rounded-lg border border-border/30">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    <div className={`w-3 h-3 rounded-full mt-1 ${
                      threat.severity === 'Critical' ? 'bg-critical critical-glow' : 
                      threat.severity === 'High' ? 'bg-critical' : 'bg-warning'
                    }`}></div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{threat.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{threat.description}</p>
                      <div className="flex items-center space-x-4 text-xs">
                        <span className="font-mono text-primary">ID: {threat.id}</span>
                        <span className="text-muted-foreground">Detected: {threat.detected}</span>
                        <span className="text-muted-foreground">Technique: {threat.technique}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <Badge variant={
                      threat.severity === 'Critical' ? 'destructive' : 
                      threat.severity === 'High' ? 'destructive' : 'secondary'
                    }>
                      {threat.severity}
                    </Badge>
                    <Badge variant={
                      threat.status === 'Active' ? 'destructive' :
                      threat.status === 'Contained' ? 'secondary' : 'outline'
                    }>
                      {threat.status}
                    </Badge>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground font-mono">Source:</span>
                    <div className="mt-1 font-mono text-foreground">{threat.source}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground font-mono">Affected Systems:</span>
                    <div className="mt-1 flex flex-wrap gap-1">
                      {threat.affected.map((system, j) => (
                        <Badge key={j} variant="outline" className="text-xs">
                          {system}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Threat Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-info" />
              <span>Recent Activity</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { time: "16:45", action: "Threat blocked", details: "Port scan from 203.0.113.45", type: "success" },
                { time: "16:42", action: "Alert triggered", details: "Suspicious SQL query detected", type: "warning" },
                { time: "16:38", action: "Mitigation applied", details: "IP blacklist updated", type: "success" },
                { time: "16:35", action: "Investigation started", details: "APT behavior analysis", type: "info" },
                { time: "16:30", action: "Threat detected", details: "Brute force attempt identified", type: "critical" },
              ].map((activity, i) => (
                <div key={i} className="flex items-start space-x-3 p-3 bg-muted/20 rounded-lg">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.type === 'success' ? 'bg-safe' :
                    activity.type === 'warning' ? 'bg-warning' :
                    activity.type === 'critical' ? 'bg-critical' : 'bg-info'
                  }`}></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-sm">{activity.action}</span>
                      <span className="text-xs font-mono text-primary">{activity.time}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{activity.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-safe" />
              <span>Mitigation Actions</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 bg-safe/10 border border-safe/20 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Firewall Rules</span>
                  <span className="text-xs font-mono text-safe">ACTIVE</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  47 new blocking rules deployed automatically
                </div>
              </div>

              <div className="p-3 bg-info/10 border border-info/20 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Traffic Filtering</span>
                  <span className="text-xs font-mono text-info">MONITORING</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  Enhanced DPI inspection enabled on all gateways
                </div>
              </div>

              <div className="p-3 bg-warning/10 border border-warning/20 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">User Notifications</span>
                  <span className="text-xs font-mono text-warning">PENDING</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  Security alert sent to 23 affected users
                </div>
              </div>

              <div className="p-3 bg-primary/10 border border-primary/20 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">System Isolation</span>
                  <span className="text-xs font-mono text-primary">READY</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  Quarantine protocols prepared for critical threats
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}