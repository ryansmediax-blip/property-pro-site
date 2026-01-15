import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Star, Zap, Crown, Shield, Clock, Percent, Heart, Camera, Handshake, Building2 } from "lucide-react";

const homeownerPlans = [
  {
    name: "Essential",
    price: "$149",
    description: "The smart starting point",
    icon: Zap,
    features: [
      "Monthly exterior window cleaning",
      "Quarterly gutter cleaning",
      "Property walkthrough each visit",
      "Priority scheduling",
      "Email service reports",
    ],
    cta: "Start Essential",
  },
  {
    name: "Premium",
    price: "$279",
    description: "Our most popular choice",
    icon: Star,
    popular: true,
    features: [
      "Everything in Essential",
      "Monthly pressure washing rotation",
      "Photo & video property reports",
      "Seasonal snow removal included",
      "Deck & patio deep cleaning",
    ],
    cta: "Start Premium",
  },
  {
    name: "Estate",
    price: "$449",
    description: "The ultimate in property care",
    icon: Crown,
    highlighted: true,
    features: [
      "Everything in Premium",
      "Weekly property check-ins",
      "Dedicated account manager",
      "24/7 emergency response",
      "Concierge coordination",
      "Annual exterior wood treatment",
      "Priority winter services",
    ],
    cta: "Start Estate",
    savings: "Best value for estates",
  },
];

const agentPackages = [
  {
    name: "Starter",
    price: "$299",
    priceNote: "/month",
    description: "6 listing preps per year",
    icon: Zap,
    features: [
      "6 Full Listing Prep credits annually",
      "Use credits anytime within 12 months",
      "48hr priority scheduling",
      "Photo-ready guarantee",
      "$50/listing (vs $75 one-time)",
    ],
    cta: "Start Starter Plan",
    annualValue: "$450 value",
  },
  {
    name: "Professional",
    price: "$499",
    priceNote: "/month",
    description: "12 listing preps per year",
    icon: Star,
    popular: true,
    features: [
      "12 Full Listing Prep credits annually",
      "Use credits anytime within 12 months",
      "24hr rush scheduling included",
      "Photo-ready guarantee",
      "$42/listing (vs $75 one-time)",
      "Rollover unused credits (up to 3)",
    ],
    cta: "Start Professional Plan",
    annualValue: "$900 value",
  },
  {
    name: "Top Producer",
    price: "$799",
    priceNote: "/month",
    description: "24 listing preps per year",
    icon: Crown,
    highlighted: true,
    features: [
      "24 Full Listing Prep credits annually",
      "Use credits anytime within 12 months",
      "Same-day rush available",
      "Photo-ready guarantee",
      "$33/listing (vs $75 one-time)",
      "Rollover unused credits (up to 6)",
      "Dedicated account manager",
      "Co-branded marketing materials",
    ],
    cta: "Start Top Producer Plan",
    savings: "Best value for high-volume agents",
    annualValue: "$1,800 value",
  },
];

const homeownerComparison = [
  { name: "Exterior window cleaning", essential: "Monthly", premium: "Monthly", estate: "Weekly" },
  { name: "Gutter cleaning", essential: "Quarterly", premium: "Monthly", estate: "Monthly" },
  { name: "Pressure washing", essential: "—", premium: "Monthly", estate: "Bi-weekly" },
  { name: "Property reports", essential: "Email", premium: "Photo/Video", estate: "Video + Call" },
  { name: "Snow removal", essential: "Add-on", premium: "Included", estate: "Priority" },
  { name: "Account manager", essential: "—", premium: "—", estate: "Dedicated" },
  { name: "Emergency response", essential: "48hr", premium: "24hr", estate: "Same-day" },
];

const agentComparison = [
  { name: "Listing prep credits", starter: "6/year", professional: "12/year", topProducer: "24/year" },
  { name: "Cost per listing", starter: "$50", professional: "$42", topProducer: "$33" },
  { name: "Rush scheduling", starter: "48hr priority", professional: "24hr included", topProducer: "Same-day" },
  { name: "Credit rollover", starter: "—", professional: "Up to 3", topProducer: "Up to 6" },
  { name: "Account manager", starter: "—", professional: "—", topProducer: "Dedicated" },
  { name: "Photo guarantee", starter: "✓", professional: "✓", topProducer: "✓" },
  { name: "Annual commitment", starter: "12 months", professional: "12 months", topProducer: "12 months" },
];

export default function Memberships() {
  const [customerType, setCustomerType] = useState<"homeowner" | "agent">("homeowner");
  
  const plans = customerType === "homeowner" ? homeownerPlans : agentPackages;
  const comparisonFeatures = customerType === "homeowner" ? homeownerComparison : agentComparison;

  return (
    <Layout>
      {/* Hero - Apple Style */}
      <section className="relative py-24 md:py-32 bg-[#1d1d1f] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
        
        <div className="relative container-wide mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm font-medium px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
              {customerType === "homeowner" ? (
                <>
                  <Heart className="h-4 w-4 text-[#ff6b6b]" />
                  <span>Set It & Forget It</span>
                </>
              ) : (
                <>
                  <Building2 className="h-4 w-4" />
                  <span>For Real Estate Professionals</span>
                </>
              )}
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] tracking-tight mb-6">
              {customerType === "homeowner" ? (
                <>
                  Property care.{" "}
                  <span className="bg-gradient-to-r from-[#2997ff] to-[#5ac8fa] bg-clip-text text-transparent">
                    Simplified.
                  </span>
                </>
              ) : (
                <>
                  Listings that{" "}
                  <span className="bg-gradient-to-r from-[#2997ff] to-[#5ac8fa] bg-clip-text text-transparent">
                    photograph beautifully.
                  </span>
                </>
              )}
            </h1>
            
            <p className="text-xl md:text-2xl text-[#86868b] max-w-2xl mx-auto mb-4">
              {customerType === "homeowner" 
                ? "Stop worrying. Start enjoying." 
                : "Fast, reliable exterior prep that makes your properties shine."}
            </p>
            <p className="text-lg text-[#86868b] max-w-xl mx-auto">
              {customerType === "homeowner"
                ? "Monthly memberships that keep your property pristine year-round, so you can focus on what matters most."
                : "Get your listings photo-ready with our professional exterior prep packages."}
            </p>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16 bg-[#1d1d1f] border-t border-white/5">
        <div className="container-wide mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {customerType === "homeowner" ? (
              <>
                {[
                  { icon: Shield, title: "No Contracts", desc: "Cancel anytime" },
                  { icon: Clock, title: "Priority Access", desc: "First in line" },
                  { icon: Percent, title: "Save 20-30%", desc: "vs. one-time booking" },
                  { icon: Zap, title: "Set & Forget", desc: "Automatic scheduling" },
                ].map((item) => (
                  <div key={item.title} className="text-center">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-6 w-6 text-[#2997ff]" />
                    </div>
                    <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                    <p className="text-[#86868b] text-sm">{item.desc}</p>
                  </div>
                ))}
              </>
            ) : (
              <>
                {[
                  { icon: Camera, title: "Photo-Ready", desc: "Every time" },
                  { icon: Clock, title: "Fast Turnaround", desc: "24-48hr rush available" },
                  { icon: Handshake, title: "Reliable", desc: "Never miss a deadline" },
                  { icon: Star, title: "15% Partner Discount", desc: "Volume pricing" },
                ].map((item) => (
                  <div key={item.title} className="text-center">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-6 w-6 text-[#2997ff]" />
                    </div>
                    <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                    <p className="text-[#86868b] text-sm">{item.desc}</p>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </section>

      {/* Plans Section with Toggle */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container-wide mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Choose Your Level of Care</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
              {customerType === "homeowner" 
                ? "Every plan includes our satisfaction guarantee and the flexibility to upgrade anytime."
                : "Professional exterior prep packages designed for listing success."}
            </p>

            {/* Customer Type Toggle */}
            <div className="inline-flex items-center bg-secondary rounded-full p-1 mb-12">
              <button
                onClick={() => setCustomerType("homeowner")}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  customerType === "homeowner"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Homeowner
              </button>
              <button
                onClick={() => setCustomerType("agent")}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  customerType === "agent"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Real Estate Agent
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
            {plans.map((plan) => (
              <div 
                key={plan.name}
                className={`relative rounded-3xl p-8 transition-all duration-300 ${
                  plan.highlighted 
                    ? 'bg-gradient-to-b from-primary to-primary/90 text-primary-foreground scale-105 shadow-2xl lg:-mt-4 lg:mb-4' 
                    : plan.popular
                    ? 'bg-card border-2 border-primary shadow-lg'
                    : 'bg-card border border-border hover:border-primary/50 hover:shadow-lg'
                }`}
              >
                {plan.popular && !plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-sm font-medium px-6 py-2 rounded-full">
                    Most Popular
                  </div>
                )}
                
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-sm font-semibold px-6 py-2 rounded-full flex items-center gap-2">
                    <Crown className="h-4 w-4" />
                    Recommended
                  </div>
                )}

                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                  plan.highlighted ? 'bg-primary-foreground/20' : 'bg-secondary'
                }`}>
                  <plan.icon className={`h-7 w-7 ${plan.highlighted ? 'text-primary-foreground' : 'text-primary'}`} />
                </div>

                <h3 className={`text-2xl font-semibold mb-2 ${plan.highlighted ? 'text-primary-foreground' : 'text-foreground'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.highlighted ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                  {plan.description}
                </p>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className={`text-5xl font-semibold ${plan.highlighted ? 'text-primary-foreground' : 'text-primary'}`}>
                      {plan.price}
                    </span>
                    <span className={plan.highlighted ? 'text-primary-foreground/70' : 'text-muted-foreground'}>
                      {customerType === "homeowner" ? "/month" : ('priceNote' in plan ? (plan as { priceNote?: string }).priceNote : "")}
                    </span>
                  </div>
                  {plan.savings && (
                    <p className="text-sm mt-2 text-accent font-medium">{plan.savings}</p>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                        plan.highlighted ? 'text-accent' : 'text-primary'
                      }`} />
                      <span className={`text-sm ${plan.highlighted ? 'text-primary-foreground' : 'text-foreground'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button 
                  asChild 
                  size="lg"
                  className={`w-full ${
                    plan.highlighted 
                      ? 'bg-white text-primary hover:bg-white/90' 
                      : plan.popular 
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : ''
                  }`}
                  variant={plan.highlighted ? "default" : plan.popular ? "cta" : "outline"}
                >
                  <Link to="/book">
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-secondary/30">
        <div className="container-wide mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Compare {customerType === "homeowner" ? "Plans" : "Packages"}</h2>
            <p className="text-muted-foreground text-lg">See exactly what's included in each tier.</p>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 pr-8 font-medium text-muted-foreground">Feature</th>
                  {customerType === "homeowner" ? (
                    <>
                      <th className="text-center py-4 px-4 font-semibold">Essential</th>
                      <th className="text-center py-4 px-4 font-semibold text-primary">Premium</th>
                      <th className="text-center py-4 px-4 font-semibold">
                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">Estate</span>
                      </th>
                    </>
                  ) : (
                    <>
                      <th className="text-center py-4 px-4 font-semibold">Starter</th>
                      <th className="text-center py-4 px-4 font-semibold text-primary">Professional</th>
                      <th className="text-center py-4 px-4 font-semibold">
                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">Top Producer</span>
                      </th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature) => (
                  <tr key={feature.name} className="border-b border-border/50">
                    <td className="py-4 pr-8 text-sm">{feature.name}</td>
                    {customerType === "homeowner" ? (
                      <>
                        <td className="text-center py-4 px-4 text-sm text-muted-foreground">{(feature as typeof homeownerComparison[0]).essential}</td>
                        <td className="text-center py-4 px-4 text-sm font-medium">{(feature as typeof homeownerComparison[0]).premium}</td>
                        <td className="text-center py-4 px-4 text-sm font-medium text-primary">{(feature as typeof homeownerComparison[0]).estate}</td>
                      </>
                    ) : (
                      <>
                        <td className="text-center py-4 px-4 text-sm text-muted-foreground">{(feature as typeof agentComparison[0]).starter}</td>
                        <td className="text-center py-4 px-4 text-sm font-medium">{(feature as typeof agentComparison[0]).professional}</td>
                        <td className="text-center py-4 px-4 text-sm font-medium text-primary">{(feature as typeof agentComparison[0]).topProducer}</td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Persuasive Section - Conditional */}
      {customerType === "homeowner" ? (
        <section className="py-24 md:py-32 bg-[#1d1d1f]">
          <div className="container-wide mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <Crown className="h-12 w-12 text-[#ffd700] mx-auto mb-6" />
                <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
                  Why Estate Members Love It
                </h2>
                <p className="text-[#86868b] text-xl max-w-2xl mx-auto">
                  For properties that deserve the highest standard of care.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Same-Day Emergency Response",
                    description: "Pipe burst? Storm damage? We're there within hours, not days. Your property is never left vulnerable.",
                  },
                  {
                    title: "Dedicated Account Manager",
                    description: "One person who knows your property inside and out. Direct line, personal attention, proactive care.",
                  },
                  {
                    title: "Weekly Property Intelligence",
                    description: "Video walkthroughs and detailed reports so you know your property's condition, even from 1,000 miles away.",
                  },
                  {
                    title: "Concierge Coordination",
                    description: "We coordinate with contractors, deliveries, and other services. Your property manager, on demand.",
                  },
                ].map((item) => (
                  <div key={item.title} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-[#86868b] text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button asChild size="xl" className="bg-white text-[#1d1d1f] hover:bg-white/90">
                  <Link to="/book">
                    Experience Estate Care
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="py-20 bg-secondary/30">
          <div className="container-narrow mx-auto px-6 lg:px-8">
            <div className="bg-card rounded-3xl p-8 md:p-12 border border-border text-center">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Agent Partnership Program</h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Volume discounts, priority scheduling, dedicated support, 
                and co-branded marketing materials.
              </p>
              <Button asChild variant="cta" size="lg">
                <Link to="/contact">
                  Apply to Partner
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* One-Time Services Note - Only for Homeowners */}
      {customerType === "homeowner" && (
        <section className="py-16 bg-background border-t border-border">
          <div className="container-narrow mx-auto px-6 lg:px-8 text-center">
            <h3 className="text-xl font-semibold mb-3">Need a One-Time Service?</h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Not ready for a membership? We offer individual services too. 
              Check our services page or contact us for a custom quote.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild variant="outline">
                <Link to="/services">View Services</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link to="/contact">Request Quote</Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container-narrow mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            {customerType === "homeowner" 
              ? "Ready to Simplify Your Property Care?" 
              : "Ready to Elevate Your Listings?"}
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
            {customerType === "homeowner"
              ? "Join hundreds of Valley County homeowners who've discovered the freedom of hassle-free property maintenance."
              : "Join top Valley County agents who trust us to make their listings shine."}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild variant="cta" size="xl">
              <Link to="/book">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="xl" className="bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
              <Link to="/contact">Have Questions?</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
