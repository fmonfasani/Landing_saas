
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Building2 } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Básico",
      price: "$49",
      period: "/mes",
      description: "Perfect for small teams getting started",
      icon: Zap,
      popular: false,
      features: [
        "Up to 5 data sources",
        "10GB data processing/month",
        "Basic dashboard templates",
        "Email support",
        "Standard security",
        "API access (1000 calls/month)",
        "Basic integrations (10+)",
        "User management (up to 5 users)"
      ],
      cta: "Start Free Trial",
      variant: "outline"
    },
    {
      name: "Pro",
      price: "$149",
      period: "/mes",
      description: "Advanced features for growing businesses",
      icon: Star,
      popular: true,
      features: [
        "Unlimited data sources",
        "100GB data processing/month",
        "Custom dashboard builder",
        "Priority support (24/7)",
        "Advanced security & compliance",
        "API access (50K calls/month)",
        "Premium integrations (100+)",
        "Advanced user management (up to 50 users)",
        "Real-time data streaming",
        "Custom workflows & automation",
        "Advanced analytics & reporting",
        "White-label options"
      ],
      cta: "Start Free Trial",
      variant: "default"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations",
      icon: Building2,
      popular: false,
      features: [
        "Unlimited everything",
        "Dedicated infrastructure",
        "Custom integrations",
        "Dedicated success manager",
        "Enterprise security (SOC2, GDPR)",
        "Unlimited API access",
        "Custom integrations development",
        "Unlimited users & teams",
        "On-premise deployment options",
        "Custom SLA agreements",
        "Advanced audit logs",
        "Priority feature requests"
      ],
      cta: "Contact Sales",
      variant: "outline"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Transparent Pricing
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start free and scale as you grow. All plans include our core features 
            with no hidden fees or long-term commitments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <Card 
                key={index} 
                className={`relative p-8 ${
                  plan.popular 
                    ? "border-2 border-blue-500 shadow-2xl scale-105" 
                    : "border border-gray-200 shadow-lg"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${
                    plan.popular ? "bg-blue-100" : "bg-gray-100"
                  }`}>
                    <Icon className={`w-6 h-6 ${
                      plan.popular ? "text-blue-600" : "text-gray-600"
                    }`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {plan.description}
                  </p>
                  
                  <div className="flex items-baseline justify-center mb-6">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-gray-600 ml-1">
                        {plan.period}
                      </span>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? "bg-blue-600 hover:bg-blue-700 text-white" 
                      : plan.variant === "outline" 
                        ? "border-gray-300 text-gray-700 hover:bg-gray-50"
                        : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                  variant={plan.popular ? "default" : plan.variant as any}
                  size="lg"
                >
                  {plan.cta}
                </Button>

                {plan.name !== "Enterprise" && (
                  <p className="text-center text-sm text-gray-500 mt-4">
                    14-day free trial • No credit card required
                  </p>
                )}
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need a custom solution? Our enterprise team is here to help.
          </p>
          <Button variant="outline" size="lg">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
