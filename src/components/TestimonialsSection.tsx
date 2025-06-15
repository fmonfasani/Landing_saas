
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "DataFlow Pro transformed our data operations completely. We went from manual processes taking days to automated insights in minutes. ROI was immediate.",
      author: "Sarah Chen",
      role: "CTO",
      company: "TechCorp",
      logo: "TC",
      rating: 5,
      metrics: "300% faster reporting"
    },
    {
      quote: "The integration capabilities are outstanding. We connected 15+ tools in our first week and our team productivity increased by 40%. Best investment we've made.",
      author: "Michael Rodriguez",
      role: "VP of Engineering",
      company: "InnovateLabs",
      logo: "IL",
      rating: 5,
      metrics: "40% productivity boost"
    },
    {
      quote: "Security and compliance were our biggest concerns. DataFlow Pro exceeded expectations with SOC2 compliance and enterprise-grade security from day one.",
      author: "Jennifer Walsh",
      role: "Chief Data Officer",
      company: "FinanceFirst",
      logo: "FF",
      rating: 5,
      metrics: "100% compliance achieved"
    },
    {
      quote: "Implementation was surprisingly smooth. Their support team guided us through migration of 10TB of data without any downtime. Truly enterprise-ready.",
      author: "David Park",
      role: "Director of IT",
      company: "GlobalRetail",
      logo: "GR",
      rating: 5,
      metrics: "Zero downtime migration"
    },
    {
      quote: "The real-time analytics have changed how we make decisions. We can now spot trends and issues as they happen, not weeks later in monthly reports.",
      author: "Lisa Thompson",
      role: "Head of Analytics",
      company: "DataDriven Co",
      logo: "DD",
      rating: 5,
      metrics: "Real-time decision making"
    },
    {
      quote: "Custom workflows and automation saved us 20 hours per week. The platform scales beautifully as we've grown from 50 to 500 employees.",
      author: "Robert Kim",
      role: "Operations Manager",
      company: "ScaleUp Inc",
      logo: "SU",
      rating: 5,
      metrics: "20 hours saved weekly"
    }
  ];

  const companies = [
    { name: "Microsoft", logo: "MS" },
    { name: "Amazon", logo: "AZ" },
    { name: "Google", logo: "GO" },
    { name: "Salesforce", logo: "SF" },
    { name: "Adobe", logo: "AD" },
    { name: "Slack", logo: "SL" },
    { name: "Shopify", logo: "SH" },
    { name: "Stripe", logo: "ST" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Customer Success Stories
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of companies that have transformed their data operations 
            with DataFlow Pro. See what they're saying about us.
          </p>
        </div>

        {/* Company Logos */}
        <div className="mb-16">
          <p className="text-center text-sm text-gray-500 mb-8">
            Trusted by teams at these companies and many more
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {companies.map((company, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-gray-600 text-sm">
                    {company.logo}
                  </span>
                </div>
                <span className="ml-2 text-gray-600 font-medium">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="relative mb-6">
                <Quote className="w-8 h-8 text-blue-200 absolute -top-2 -left-2" />
                <p className="text-gray-700 leading-relaxed pl-6">
                  {testimonial.quote}
                </p>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">
                      {testimonial.logo}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <Badge variant="secondary" className="text-xs">
                  {testimonial.metrics}
                </Badge>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-blue-50 px-6 py-4 rounded-lg">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <div className="text-left">
              <p className="font-semibold text-gray-900">4.9/5 average rating</p>
              <p className="text-sm text-gray-600">Based on 2,847+ reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
