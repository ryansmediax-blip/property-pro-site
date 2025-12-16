import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Check, Camera, Clock, Handshake, Star } from "lucide-react";

const benefits = [
  {
    icon: Camera,
    title: "Photo-Ready Properties",
    description: "Listings with clean exteriors photograph better and attract more buyer interest online.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Need it done before the photographer arrives? We offer 24-48 hour rush service for active listings.",
  },
  {
    icon: Handshake,
    title: "Reliable Partnership",
    description: "Build your reputation with consistently presentable listings. We make you look good.",
  },
  {
    icon: Star,
    title: "Preferred Pricing",
    description: "Volume discounts and priority scheduling for agents who regularly work with us.",
  },
];

const packages = [
  {
    name: "Quick Refresh",
    price: "$199",
    turnaround: "48-hour turnaround",
    description: "Fast touch-up for properties that need light exterior cleaning",
    features: [
      "Exterior window cleaning",
      "Front entrance detailing",
      "Walkway pressure wash",
      "Doormat area cleanup",
    ],
    ideal: "Ideal for well-maintained properties",
  },
  {
    name: "Full Listing Prep",
    price: "$399",
    turnaround: "2-3 day turnaround",
    description: "Complete exterior preparation for maximum listing impact",
    popular: true,
    features: [
      "All exterior windows",
      "Full pressure washing",
      "Gutter cleaning & face wash",
      "Deck/patio detailing",
      "Photo-ready guarantee",
    ],
    ideal: "Perfect for most listings",
  },
  {
    name: "Luxury Listing",
    price: "$699",
    turnaround: "3-5 day turnaround",
    description: "Premium prep for high-end and estate properties",
    features: [
      "Everything in Full Prep",
      "Driveway restoration",
      "Outdoor furniture cleaning",
      "White-glove finish",
    ],
    ideal: "For $1M+ properties",
  },
];

export default function Agents() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-wide mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-medium text-primary mb-4">For Real Estate Professionals</p>
            <h1 className="text-4xl md:text-5xl font-semibold mb-6">
              Partner With Us for Listing Success
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Clean exteriors sell homes faster. We help Valley County agents present listings at their absolute best — 
              ready for photography, showings, and the market.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">Become a Partner</Link>
              </Button>
              <Button asChild variant="hero-outline" size="lg">
                <Link to="/book">Book Listing Prep</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Why Agents Choose Us</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We understand the real estate business. That means reliability, speed, and results you can count on.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="hover-lift text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Listing Prep Packages */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Listing Prep Packages</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Fast, reliable exterior prep designed specifically for real estate listings.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg) => (
              <Card 
                key={pkg.name} 
                className={`hover-lift relative ${pkg.popular ? 'border-2 border-primary' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-medium px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">{pkg.turnaround}</div>
                  <h3 className="text-xl font-semibold mb-1">{pkg.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{pkg.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-sm text-muted-foreground">Starting at</span>
                    <div className="text-3xl font-semibold text-primary">{pkg.price}</div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-xs text-muted-foreground mb-4 italic">{pkg.ideal}</p>

                  <Button 
                    asChild 
                    variant={pkg.popular ? "cta" : "outline"} 
                    className="w-full"
                  >
                    <Link to="/book">
                      Book Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Program */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <Card className="bg-primary text-primary-foreground overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-semibold mb-4">Agent Partnership Program</h2>
                  <p className="text-primary-foreground/80 mb-6">
                    Become a preferred partner and enjoy exclusive benefits designed for busy real estate professionals.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Priority scheduling for all listings",
                      "Volume pricing discounts",
                      "Dedicated account support",
                      "Co-branded marketing materials",
                      "Referral incentives",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm">
                        <Check className="h-5 w-5 text-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="cta" size="lg">
                    <Link to="/contact">
                      Apply to Partner
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="text-center">
                  <div className="text-6xl font-bold text-accent mb-2">15%</div>
                  <p className="text-primary-foreground/80">Partner discount on all services</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding bg-secondary/30">
        <div className="container-narrow mx-auto text-center">
          <Card className="hover-lift">
            <CardContent className="p-8 md:p-12">
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-accent fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl font-medium text-foreground mb-6">
                "Payette Property Prep has become an essential part of my listing process. 
                My properties photograph beautifully and clients always comment on how clean everything looks. 
                They're reliable, professional, and easy to work with."
              </blockquote>
              <div>
                <p className="font-semibold text-foreground">Sarah Mitchell</p>
                <p className="text-muted-foreground">Top Producing Agent, McCall Real Estate</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-narrow mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Elevate Your Listings?</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            Join Valley County's leading agents who trust us to make their listings shine.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="hero-outline" size="xl">
              <Link to="/book">Book Listing Prep</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
