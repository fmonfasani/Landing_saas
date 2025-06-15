
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { 
  BarChart3, 
  Users, 
  TrendingUp, 
  Database, 
  Zap, 
  Shield,
  Play,
  Pause
} from "lucide-react";

const DemoSection = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isPlaying, setIsPlaying] = useState(false);

  const tabs = [
    { id: "dashboard", label: "Analytics Dashboard", icon: BarChart3 },
    { id: "integrations", label: "Data Integration", icon: Database },
    { id: "automation", label: "Workflow Automation", icon: Zap },
    { id: "security", label: "Security & Compliance", icon: Shield }
  ];

  const mockData = {
    dashboard: {
      title: "Real-time Analytics Dashboard",
      description: "Monitor all your business metrics in one unified view",
      metrics: [
        { label: "Active Users", value: "24,891", change: "+12.5%" },
        { label: "Revenue", value: "$89,423", change: "+8.2%" },
        { label: "Conversion Rate", value: "3.4%", change: "+0.8%" },
        { label: "Data Sources", value: "47", change: "+3" }
      ]
    }
  };

  return (
    <section id="demo" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Interactive Demo
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            See DataFlow Pro in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore how our platform transforms complex data workflows into simple, 
            automated processes that scale with your business.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center mb-8 border-b border-gray-200">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-4 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="relative">
            <Card className="p-8 shadow-2xl border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {mockData.dashboard.title}
                  </h3>
                  <p className="text-gray-600">
                    {mockData.dashboard.description}
                  </p>
                </div>
                <Button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4 mr-2" />
                  ) : (
                    <Play className="w-4 h-4 mr-2" />
                  )}
                  {isPlaying ? "Pause Demo" : "Play Demo"}
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {mockData.dashboard.metrics.map((metric, index) => (
                  <Card key={index} className="p-6 border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-medium text-gray-600">
                        {metric.label}
                      </p>
                      <TrendingUp className="w-4 h-4 text-green-500" />
                    </div>
                    <p className="text-2xl font-bold text-gray-900 mb-1">
                      {metric.value}
                    </p>
                    <p className="text-sm text-green-600">
                      {metric.change} from last month
                    </p>
                  </Card>
                ))}
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                          <p className="text-gray-600 font-medium">Interactive Chart</p>
                          <p className="text-gray-500 text-sm">Revenue Trends & Forecasting</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <Card className="p-4">
                      <div className="flex items-center space-x-3">
                        <Users className="w-8 h-8 text-blue-600" />
                        <div>
                          <p className="font-medium">Team Activity</p>
                          <p className="text-sm text-gray-500">15 active sessions</p>
                        </div>
                      </div>
                    </Card>
                    
                    <Card className="p-4">
                      <div className="flex items-center space-x-3">
                        <Database className="w-8 h-8 text-green-600" />
                        <div>
                          <p className="font-medium">Data Sync</p>
                          <p className="text-sm text-gray-500">Last updated: 2min ago</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            </Card>

            <div className="text-center mt-8">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Request Full Demo
              </Button>
              <p className="text-sm text-gray-500 mt-2">
                Get a personalized demo with your data
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
