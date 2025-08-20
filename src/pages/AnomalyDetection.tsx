import { Brain, TrendingUp, AlertCircle, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatusCard } from "@/components/ui/StatusCard";
import { MetricCard } from "@/components/ui/MetricCard";

export default function AnomalyDetection() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            AI Anomaly Detection
          </h1>
          <p className="text-muted-foreground font-mono">
            Neural network-powered behavioral analysis & threat detection
          </p>
        </div>
        
        <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-border rounded-lg px-4 py-2">
          <Brain className="h-4 w-4 text-primary pulse-neon" />
          <span className="text-sm font-mono text-primary">AI LEARNING</span>
        </div>
      </div>

      {/* AI Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatusCard
          title="AI Engine"
          value="ACTIVE"
          icon={Brain}
          status="safe"
          trend="Learning in progress"
        />
        <StatusCard
          title="Model Accuracy"
          value="99.2%"
          icon={TrendingUp}
          status="safe"
          trend="+0.3% this hour"
        />
        <StatusCard
          title="Anomalies Found"
          value="12"
          icon={AlertCircle}
          status="warning"
          trend="Last 24 hours"
        />
        <StatusCard
          title="Processing Rate"
          value="HIGH"
          icon={CheckCircle}
          status="info"
          trend="15.2M events/hour"
        />
      </div>

      {/* AI Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <MetricCard
          title="Neural Network Layers"
          value="24"
          description="Deep learning architecture"
          animated
        />
        <MetricCard
          title="Training Samples"
          value="847M"
          description="Historical data points"
          trend={{ value: 12, isPositive: true }}
        />
        <MetricCard
          title="Feature Vectors"
          value="2,048"
          description="Behavioral patterns"
        />
        <MetricCard
          title="Confidence Score"
          value="94.7"
          unit="%"
          description="Detection reliability"
          trend={{ value: 2.1, isPositive: true }}
        />
        <MetricCard
          title="Learning Rate"
          value="0.001"
          description="Model adaptation speed"
        />
        <MetricCard
          title="Prediction Latency"
          value="0.8"
          unit="ms"
          description="AI response time"
          trend={{ value: 5, isPositive: false }}
        />
      </div>

      {/* Anomaly Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertCircle className="h-5 w-5 text-warning" />
              <span>Detected Anomalies</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { 
                  time: "15:42", 
                  type: "Traffic Spike", 
                  confidence: "97.3%", 
                  source: "Web Server Cluster",
                  severity: "High"
                },
                { 
                  time: "15:38", 
                  type: "Unusual Port Access", 
                  confidence: "89.1%", 
                  source: "Database Server",
                  severity: "Medium"
                },
                { 
                  time: "15:22", 
                  type: "Authentication Pattern", 
                  confidence: "92.7%", 
                  source: "User Workstation",
                  severity: "Low"
                },
              ].map((anomaly, i) => (
                <div key={i} className="p-4 bg-muted/30 rounded-lg border border-border/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${
                        anomaly.severity === 'High' ? 'bg-critical' : 
                        anomaly.severity === 'Medium' ? 'bg-warning' : 'bg-info'
                      }`}></div>
                      <span className="font-medium font-mono text-sm">{anomaly.type}</span>
                    </div>
                    <span className="text-xs font-mono text-primary">{anomaly.time}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">{anomaly.source}</span>
                    <div className="flex items-center space-x-4">
                      <span className="text-muted-foreground">Confidence: {anomaly.confidence}</span>
                      <span className={`font-mono ${
                        anomaly.severity === 'High' ? 'text-critical' : 
                        anomaly.severity === 'Medium' ? 'text-warning' : 'text-info'
                      }`}>{anomaly.severity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Brain className="h-5 w-5 text-primary" />
              <span>AI Model Status</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 bg-safe/10 border border-safe/20 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Main Detection Model</span>
                  <span className="text-xs font-mono text-safe">ACTIVE</span>
                </div>
                <div className="text-xs text-muted-foreground space-y-1">
                  <div>Version: v2.4.1</div>
                  <div>Trained: 2 hours ago</div>
                  <div>Samples: 847M events</div>
                </div>
              </div>

              <div className="p-3 bg-primary/10 border border-primary/20 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Behavioral Analysis</span>
                  <span className="text-xs font-mono text-primary">LEARNING</span>
                </div>
                <div className="text-xs text-muted-foreground space-y-1">
                  <div>Version: v1.8.3</div>
                  <div>Updated: 23min ago</div>
                  <div>Patterns: 2,048 features</div>
                </div>
              </div>

              <div className="p-3 bg-info/10 border border-info/20 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Prediction Engine</span>
                  <span className="text-xs font-mono text-info">OPTIMIZING</span>
                </div>
                <div className="text-xs text-muted-foreground space-y-1">
                  <div>Version: v3.1.0</div>
                  <div>Deployed: 1 day ago</div>
                  <div>Accuracy: 99.2%</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}