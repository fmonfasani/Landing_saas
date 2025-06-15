
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Shield, Lock, Zap, Code, Globe, HelpCircle } from "lucide-react";

const FAQSection = () => {
  const faqCategories = [
    {
      title: "Security & Compliance",
      icon: Shield,
      color: "from-red-500 to-red-600",
      faqs: [
        {
          q: "What security certifications does DataFlow Pro have?",
          a: "We are SOC 2 Type II certified, GDPR compliant, and follow enterprise-grade security practices. Our infrastructure is regularly audited by third-party security firms. We also support HIPAA compliance for healthcare customers."
        },
        {
          q: "How is my data encrypted?",
          a: "All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption. We use separate encryption keys for each customer, managed through AWS KMS with automatic key rotation."
        },
        {
          q: "Where is my data stored and who has access?",
          a: "Data is stored in secure AWS data centers in your region of choice. Only authorized personnel with multi-factor authentication can access systems. We provide detailed audit logs of all access attempts."
        },
        {
          q: "Do you support single sign-on (SSO)?",
          a: "Yes, we support SAML 2.0 and OpenID Connect with major identity providers including Okta, Auth0, Azure AD, and Google Workspace. Enterprise plans include advanced user provisioning and role management."
        }
      ]
    },
    {
      title: "API & Technical",
      icon: Code,
      color: "from-blue-500 to-blue-600",
      faqs: [
        {
          q: "What API rate limits do you have?",
          a: "Basic plans include 1,000 API calls/month, Pro plans get 50,000 calls/month, and Enterprise plans have unlimited API access. Rate limits are per endpoint and reset monthly. We provide detailed API usage analytics."
        },
        {
          q: "Do you provide webhook support?",
          a: "Yes, we support both incoming and outgoing webhooks with automatic retry logic, signature verification, and detailed delivery logs. You can configure webhooks for real-time data updates and system notifications."
        },
        {
          q: "What programming languages do you support?",
          a: "We provide official SDKs for Python, JavaScript/Node.js, Go, and Java. Our REST API works with any language that supports HTTP requests. We also provide GraphQL endpoints for advanced querying."
        },
        {
          q: "Can I use DataFlow Pro on-premise?",
          a: "Enterprise customers can deploy DataFlow Pro on-premise or in their private cloud. This includes full source code access, dedicated support, and custom SLA agreements. Contact our enterprise team for details."
        }
      ]
    },
    {
      title: "Scalability & Performance",
      icon: Zap,
      color: "from-green-500 to-green-600",
      faqs: [
        {
          q: "How much data can DataFlow Pro handle?",
          a: "Our platform is designed to scale from gigabytes to petabytes. We use distributed processing and can auto-scale based on demand. Enterprise customers regularly process 100TB+ monthly without performance issues."
        },
        {
          q: "What's the typical data processing latency?",
          a: "Real-time streaming data is processed within 100ms. Batch processing depends on data volume but typically completes within minutes. We provide detailed performance metrics and SLA guarantees for enterprise customers."
        },
        {
          q: "How do you handle system downtime?",
          a: "We maintain 99.9% uptime SLA with automatic failover and redundancy across multiple regions. Planned maintenance is scheduled during low-usage periods with advance notice. Enterprise plans include dedicated infrastructure and priority support."
        },
        {
          q: "Can DataFlow Pro handle high-frequency data?",
          a: "Yes, our streaming infrastructure can handle millions of events per second. We use Apache Kafka and custom processing engines optimized for high-throughput, low-latency data ingestion and transformation."
        }
      ]
    }
  ];

  const generalFAQs = [
    {
      q: "How long does implementation typically take?",
      a: "Most customers are up and running within 1-2 weeks. Our onboarding team provides dedicated support, training sessions, and helps migrate your existing data workflows. Complex enterprise deployments may take 4-6 weeks."
    },
    {
      q: "Do you offer data migration services?",
      a: "Yes, we provide free data migration for Pro and Enterprise customers. Our team will help transfer data from your existing systems with zero downtime. We support migration from most major data platforms and custom systems."
    },
    {
      q: "What kind of support do you provide?",
      a: "Basic plans include email support with 24-hour response time. Pro plans get priority support with 4-hour response time. Enterprise customers receive dedicated support managers, phone support, and custom SLA agreements."
    },
    {
      q: "Can I cancel my subscription anytime?",
      a: "Yes, you can cancel anytime with no penalties. You'll continue to have access until your current billing period ends. We also provide data export tools to help you migrate to another platform if needed."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Frequently Asked Questions
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Technical Questions Answered
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to the most common technical questions about security, 
            API capabilities, and platform scalability.
          </p>
        </div>

        {/* Technical FAQs by Category */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {faqCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="p-6">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mr-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {category.title}
                  </h3>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`item-${index}-${faqIndex}`}>
                      <AccordionTrigger className="text-left text-sm font-medium">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-gray-600">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Card>
            );
          })}
        </div>

        {/* General FAQs */}
        <Card className="p-8 max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <HelpCircle className="w-6 h-6 text-blue-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">
              General Questions
            </h3>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {generalFAQs.map((faq, index) => (
              <AccordionItem key={index} value={`general-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions? Our technical team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Badge variant="outline" className="px-4 py-2">
              <Globe className="w-4 h-4 mr-2" />
              Visit our Documentation
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              <HelpCircle className="w-4 h-4 mr-2" />
              Contact Technical Support
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
