
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Database, 
  Cloud, 
  Code, 
  BarChart3, 
  Mail, 
  MessageCircle,
  ShoppingCart,
  CreditCard,
  Users,
  Zap,
  ArrowRight
} from "lucide-react";

const IntegrationsSection = () => {
  const integrationCategories = [
    {
      title: "Databases & Warehouses",
      icon: Database,
      color: "from-blue-500 to-blue-600",
      integrations: [
        { name: "PostgreSQL", logo: "PG", status: "Available" },
        { name: "MySQL", logo: "MY", status: "Available" },
        { name: "MongoDB", logo: "MG", status: "Available" },
        { name: "Snowflake", logo: "SF", status: "Available" },
        { name: "BigQuery", logo: "BQ", status: "Available" },
        { name: "Redshift", logo: "RS", status: "Available" }
      ]
    },
    {
      title: "Cloud Platforms",
      icon: Cloud,
      color: "from-green-500 to-green-600",
      integrations: [
        { name: "AWS", logo: "AW", status: "Available" },
        { name: "Azure", logo: "AZ", status: "Available" },
        { name: "Google Cloud", logo: "GC", status: "Available" },
        { name: "DigitalOcean", logo: "DO", status: "Available" },
        { name: "Heroku", logo: "HK", status: "Available" },
        { name: "Vercel", logo: "VC", status: "Available" }
      ]
    },
    {
      title: "Analytics & BI",
      icon: BarChart3,
      color: "from-purple-500 to-purple-600",
      integrations: [
        { name: "Tableau", logo: "TB", status: "Available" },
        { name: "Power BI", logo: "PB", status: "Available" },
        { name: "Looker", logo: "LK", status: "Available" },
        { name: "Metabase", logo: "MB", status: "Available" },
        { name: "Grafana", logo: "GF", status: "Available" },
        { name: "Amplitude", logo: "AM", status: "Available" }
      ]
    },
    {
      title: "Communication",
      icon: MessageCircle,
      color: "from-orange-500 to-orange-600",
      integrations: [
        { name: "Slack", logo: "SL", status: "Available" },
        { name: "Microsoft Teams", logo: "MT", status: "Available" },
        { name: "Discord", logo: "DC", status: "Available" },
        { name: "Telegram", logo: "TG", status: "Available" },
        { name: "WhatsApp", logo: "WA", status: "Coming Soon" },
        { name: "Zoom", logo: "ZM", status: "Available" }
      ]
    },
    {
      title: "E-commerce",
      icon: ShoppingCart,
      color: "from-red-500 to-red-600",
      integrations: [
        { name: "Shopify", logo: "SH", status: "Available" },
        { name: "WooCommerce", logo: "WC", status: "Available" },
        { name: "Magento", logo: "MG", status: "Available" },
        { name: "BigCommerce", logo: "BC", status: "Available" },
        { name: "Amazon", logo: "AM", status: "Available" },
        { name: "eBay", logo: "EB", status: "Coming Soon" }
      ]
    },
    {
      title: "Payment & Finance",
      icon: CreditCard,
      color: "from-indigo-500 to-indigo-600",
      integrations: [
        { name: "Stripe", logo: "ST", status: "Available" },
        { name: "PayPal", logo: "PP", status: "Available" },
        { name: "Square", logo: "SQ", status: "Available" },
        { name: "QuickBooks", logo: "QB", status: "Available" },
        { name: "Xero", logo: "XR", status: "Available" },
        { name: "FreshBooks", logo: "FB", status: "Available" }
      ]
    }
  ];

  const stats = [
    { label: "Total Integrations", value: "200+" },
    { label: "Categories", value: "15+" },
    { label: "Custom Connectors", value: "50+" },
    { label: "API Endpoints", value: "1000+" }
  ];

  return (
    <section id="integrations" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Seamless Integrations
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Connect Everything in Minutes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            DataFlow Pro integrates with all your favorite tools and platforms. 
            No complex setup required - just point, click, and connect.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Integration Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {integrationCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mr-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {category.title}
                    </h3>
                    <p className="text-gray-600">
                      {category.integrations.length} integrations available
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {category.integrations.map((integration, integrationIndex) => (
                    <div key={integrationIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-white rounded border border-gray-200 flex items-center justify-center mr-3">
                          <span className="text-xs font-bold text-gray-600">
                            {integration.logo}
                          </span>
                        </div>
                        <span className="text-sm font-medium text-gray-900">
                          {integration.name}
                        </span>
                      </div>
                      <Badge 
                        variant={integration.status === "Available" ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {integration.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Custom Integration CTA */}
        <Card className="p-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="text-center lg:text-left mb-6 lg:mb-0">
              <h3 className="text-2xl font-bold mb-2">
                Need a Custom Integration?
              </h3>
              <p className="text-blue-100 max-w-2xl">
                Our integration team can build custom connectors for your specific tools and systems. 
                Most custom integrations are delivered within 2-4 weeks.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <Button variant="secondary" size="lg">
                Request Integration
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                View All Integrations
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default IntegrationsSection;
