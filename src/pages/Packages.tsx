import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, Check, Building2, Home, Repeat } from "lucide-react";

const packageCategories = [
  {
    id: "membership",
    title: "Membership Plans",
    subtitle: "Most Popular",
    description: "Set it and forget it with our recurring maintenance programs. The smart choice for hassle-free property care.",
    icon: Repeat,
    highlight: true,
    packages: [
      {
        name: "Essential Care",
        description: "Perfect for smaller properties or those new to regular maintenance",
        starting: "$149",
        period: "/month",
        features: [
          "Monthly exterior window cleaning",
          "Quarterly gutter cleaning",
          "Property walkthrough inspection",
          "Priority scheduling",
        ],
      },
      {
        name: "Premium Care",
        description: "Our most popular plan for comprehensive property maintenance",
        starting: "$279",
        period: "/month",
        popular: true,
        features: [
          "Everything in Essential Care",
          "Monthly pressure washing rotation",
          "Photo/video property reports",
          "Snow removal (seasonal)",
        ],
      },
      {
        name: "Estate Care",
        description: "Full-service care for larger properties and estates",
        starting: "$449",
        period: "/month",
        features: [
          "Everything in Premium Care",
          "Weekly property check-ins",
          "Dedicated account manager",
          "Emergency response priority",
        ],
      },
    ],
  },
  {
    id: "agents",
    title: "Agent Listing Prep",
    subtitle: "For Real Estate Professionals",
    description: "Get listings photo-ready fast. Clean exteriors photograph better and sell faster.",
    icon: Building2,
    packages: [
      {
        name: "Quick Refresh",
        description: "Fast turnaround for properties that need light touch-ups",
        starting: "$199",
        period: "",
        features: [
          "Exterior window cleaning",
          "Front entrance detailing",
          "Walkway pressure wash",
          "48-hour turnaround",
        ],
      },
      {
        name: "Full Prep",
        description: "Complete exterior preparation for maximum listing impact",
        starting: "$399",
        period: "",
        popular: true,
        features: [
          "All exterior windows",
          "Full pressure washing",
          "Gutter cleaning",
          "Deck/patio detailing",
          "Photo-ready guarantee",
        ],
      },
      {
        name: "Luxury Listing",
        description: "Premium prep for high-end properties",
        starting: "$699",
        period: "",
        features: [
          "Everything in Full Prep",
          "Driveway restoration",
          "Landscape edging",
          "White-glove finish",
        ],
      },
    ],
  },
  {
    id: "homeowner",
    title: "Homeowner Packages",
    subtitle: "One-Time Services",
    description: "Perfect for seasonal cleanings or preparing your property for special occasions.",
    icon: Home,
    packages: [
      {
        name: "Seasonal Refresh",
        description: "Ideal for spring or fall property refresh",
        starting: "$249",
        period: "",
        features: [
          "Exterior window cleaning",
          "Gutter cleanout",
          "Front entrance pressure wash",
          "Screen cleaning",
        ],
      },
      {
        name: "Deep Clean",
        description: "Thorough cleaning for the entire property exterior",
        starting: "$499",
        period: "",
        features: [
          "All exterior windows",
          "Full pressure washing",
          "Gutter cleaning",
          "Deck restoration",
        ],
      },
      {
        name: "Complete Restoration",
        description: "Full property exterior rejuvenation",
        starting: "$899",
        period: "",
        features: [
          "Everything in Deep Clean",
          "Concrete sealing",
          "Exterior wood treatment",
        ],
      },
    ],
  },
];

export default function Packages() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-wide mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6">
              Service Packages
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Bundled services designed for your specific needs. From one-time deep cleans 
              to ongoing maintenance, find the perfect package for your property.
            </p>
          </div>
        </div>
      </section>

      {/* Package Categories */}
      {packageCategories.map((category) => (
        <section 
          key={category.id} 
          id={category.id}
          className={`section-padding ${category.highlight ? 'bg-primary/5' : ''}`}
        >
          <div className="container-wide mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                <category.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-primary">{category.subtitle}</p>
                <h2 className="text-2xl md:text-3xl font-semibold">{category.title}</h2>
              </div>
            </div>
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
              {category.description}
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {category.packages.map((pkg) => (
                <Card 
                  key={pkg.name} 
                  className={`hover-lift relative ${pkg.popular ? 'border-primary shadow-lg' : ''}`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-medium px-4 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">{pkg.name}</CardTitle>
                    <CardDescription>{pkg.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <span className="text-sm text-muted-foreground">Starting at</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-semibold text-primary">{pkg.starting}</span>
                        <span className="text-muted-foreground">{pkg.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      asChild 
                      variant={pkg.popular ? "cta" : "outline"} 
                      className="w-full"
                    >
                      <Link to="/book">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Custom CTA */}
      <section className="section-padding bg-secondary/30">
        <div className="container-narrow mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Not Sure Which Package?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Our team can help you choose the right package or create a custom plan based on your property's unique needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild variant="cta" size="xl">
              <Link to="/contact">
                Get Personalized Recommendation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
