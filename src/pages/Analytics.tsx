import { BarChart3, TrendingUp, PieChart, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MetricCard } from "@/components/ui/MetricCard";

export default function Analytics() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Security Analytics
          </h1>
          <p className="text-muted-foreground font-mono">
            Comprehensive threat intelligence & security metrics dashboard
          </p>
        </div>
        
        <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-border rounded-lg px-4 py-2">
          <BarChart3 className="h-4 w-4 text-primary pulse-neon" />
          <span className="text-sm font-mono text-primary">ANALYZING</span>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Events"
          value="2.4M"
          unit="today"
          description="Security events processed"
          trend={{ value: 8, isPositive: true }}
          animated
        />
        <MetricCard
          title="Threat Detection"
          value="99.2"
          unit="%"
          description="Overall accuracy rate"
          trend={{ value: 0.5, isPositive: true }}
        />
        <MetricCard
          title="Response Time"
          value="2.3"
          unit="minutes"
          description="Average incident resolution"
          trend={{ value: 12, isPositive: false }}
        />
        <MetricCard
          title="Risk Score"
          value="LOW"
          description="Current threat level"
          trend={{ value: 15, isPositive: false }}
        />
      </div>

      {/* Analytics Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span>Threat Trends (24h)</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { hour: "00:00", events: 850, threats: 12 },
                { hour: "04:00", events: 720, threats: 8 },
                { hour: "08:00", events: 1240, threats: 23 },
                { hour: "12:00", events: 1850, threats: 31 },
                { hour: "16:00", events: 2100, threats: 18 },
                { hour: "20:00", events: 1650, threats: 14 },
              ].map((data, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-muted/20 rounded">
                  <span className="font-mono text-sm">{data.hour}</span>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-info"
                          style={{ width: `${(data.events / 2500) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-xs font-mono text-info w-12">{data.events}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-warning"
                          style={{ width: `${(data.threats / 50) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-xs font-mono text-warning w-8">{data.threats}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center space-x-6 mt-4 text-xs">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-info rounded"></div>
                <span>Security Events</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-warning rounded"></div>
                <span>Threats Detected</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <PieChart className="h-5 w-5 text-safe" />
              <span>Attack Vectors</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { type: "Network Intrusion", count: 142, percentage: 34.2, color: "critical" },
                { type: "Malware Detection", count: 98, percentage: 23.6, color: "warning" },
                { type: "Brute Force", count: 76, percentage: 18.3, color: "info" },
                { type: "Data Exfiltration", count: 45, percentage: 10.8, color: "primary" },
                { type: "Phishing Attempts", count: 32, percentage: 7.7, color: "safe" },
                { type: "Other", count: 22, percentage: 5.4, color: "muted" },
              ].map((attack, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-muted/20 rounded">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      attack.color === 'critical' ? 'bg-critical' :
                      attack.color === 'warning' ? 'bg-warning' :
                      attack.color === 'info' ? 'bg-info' :
                      attack.color === 'primary' ? 'bg-primary' :
                      attack.color === 'safe' ? 'bg-safe' : 'bg-muted-foreground'
                    }`}></div>
                    <span className="text-sm font-medium">{attack.type}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${
                          attack.color === 'critical' ? 'bg-critical' :
                          attack.color === 'warning' ? 'bg-warning' :
                          attack.color === 'info' ? 'bg-info' :
                          attack.color === 'primary' ? 'bg-primary' :
                          attack.color === 'safe' ? 'bg-safe' : 'bg-muted-foreground'
                        }`}
                        style={{ width: `${attack.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-xs font-mono w-12 text-right">{attack.count}</span>
                    <span className="text-xs font-mono w-12 text-right">{attack.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Security Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="border border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="h-5 w-5 text-info" />
              <span>Top Source IPs</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { ip: "203.0.113.45", attacks: 47, country: "Unknown" },
                { ip: "198.51.100.23", attacks: 32, country: "Russia" },
                { ip: "192.0.2.156", attacks: 28, country: "China" },
                { ip: "172.16.0.87", attacks: 19, country: "Internal" },
                { ip: "10.0.0.234", attacks: 15, country: "Internal" },
              ].map((source, i) => (
                <div key={i} className="flex items-center justify-between p-2 bg-muted/20 rounded text-sm">
                  <div>
                    <div className="font-mono">{source.ip}</div>
                    <div className="text-xs text-muted-foreground">{source.country}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-critical">{source.attacks}</div>
                    <div className="text-xs text-muted-foreground">attacks</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-warning" />
              <span>Most Targeted Ports</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { port: 22, service: "SSH", attempts: 156 },
                { port: 80, service: "HTTP", attempts: 142 },
                { port: 443, service: "HTTPS", attempts: 98 },
                { port: 3389, service: "RDP", attempts: 76 },
                { port: 21, service: "FTP", attempts: 54 },
              ].map((target, i) => (
                <div key={i} className="flex items-center justify-between p-2 bg-muted/20 rounded text-sm">
                  <div>
                    <div className="font-mono">Port {target.port}</div>
                    <div className="text-xs text-muted-foreground">{target.service}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-warning">{target.attempts}</div>
                    <div className="text-xs text-muted-foreground">attempts</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="h-5 w-5 text-safe" />
              <span>Weekly Summary</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 bg-safe/10 border border-safe/20 rounded">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Threats Blocked</span>
                  <span className="font-mono text-safe font-bold">2,847</span>
                </div>
                <div className="text-xs text-muted-foreground mt-1">+12% from last week</div>
              </div>
              
              <div className="p-3 bg-info/10 border border-info/20 rounded">
                <div className="flex justify-between items-center">
                  <span className="text-sm">False Positives</span>
                  <span className="font-mono text-info font-bold">23</span>
                </div>
                <div className="text-xs text-muted-foreground mt-1">-8% from last week</div>
              </div>
              
              <div className="p-3 bg-primary/10 border border-primary/20 rounded">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Avg Response Time</span>
                  <span className="font-mono text-primary font-bold">1.8min</span>
                </div>
                <div className="text-xs text-muted-foreground mt-1">-22% from last week</div>
              </div>
              
              <div className="p-3 bg-warning/10 border border-warning/20 rounded">
                <div className="flex justify-between items-center">
                  <span className="text-sm">System Uptime</span>
                  <span className="font-mono text-warning font-bold">99.94%</span>
                </div>
                <div className="text-xs text-muted-foreground mt-1">6 minutes downtime</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}