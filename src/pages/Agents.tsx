import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Camera, Clock, Handshake, Star, Building2 } from "lucide-react";

const packages = [
  {
    name: "Quick Refresh",
    price: "$199",
    turnaround: "48hr",
    features: ["Exterior windows", "Front entrance", "Walkway pressure wash"],
  },
  {
    name: "Full Listing Prep",
    price: "$399",
    turnaround: "2-3 days",
    popular: true,
    features: ["All exterior windows", "Full pressure washing", "Gutter cleaning", "Deck/patio", "Photo-ready guarantee"],
  },
  {
    name: "Luxury Listing",
    price: "$699",
    turnaround: "3-5 days",
    features: ["Everything in Full Prep", "Driveway restoration", "Outdoor furniture", "White-glove finish"],
  },
];

export default function Agents() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-[#1d1d1f] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
        
        <div className="relative container-wide mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm font-medium px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
              <Building2 className="h-4 w-4" />
              <span>For Real Estate Professionals</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight tracking-tight mb-6">
              Listings that{" "}
              <span className="bg-gradient-to-r from-[#2997ff] to-[#5ac8fa] bg-clip-text text-transparent">
                photograph beautifully.
              </span>
            </h1>
            
            <p className="text-xl text-[#86868b] max-w-xl mx-auto mb-8">
              Fast, reliable exterior prep that makes your properties shine — 
              and makes you look even better.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="xl" className="bg-white text-[#1d1d1f] hover:bg-white/90">
                <Link to="/contact">Become a Partner</Link>
              </Button>
              <Button asChild size="xl" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <Link to="/book">Book Listing Prep</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Strip */}
      <section className="py-12 bg-[#1d1d1f] border-t border-white/5">
        <div className="container-wide mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Camera, title: "Photo-Ready", desc: "Every time" },
              { icon: Clock, title: "Fast Turnaround", desc: "24-48hr rush available" },
              { icon: Handshake, title: "Reliable", desc: "Never miss a deadline" },
              { icon: Star, title: "15% Partner Discount", desc: "Volume pricing" },
            ].map((item) => (
              <div key={item.title}>
                <item.icon className="h-6 w-6 text-[#2997ff] mx-auto mb-3" />
                <h3 className="text-white font-semibold">{item.title}</h3>
                <p className="text-[#86868b] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-background">
        <div className="container-wide mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-3">Listing Prep Packages</h2>
            <p className="text-muted-foreground">Choose your level, we handle the rest.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {packages.map((pkg) => (
              <div 
                key={pkg.name}
                className={`p-6 rounded-2xl transition-all ${
                  pkg.popular 
                    ? 'bg-primary text-primary-foreground scale-105 shadow-xl' 
                    : 'bg-card border border-border hover:border-primary/50'
                }`}
              >
                {pkg.popular && (
                  <p className="text-xs font-medium text-accent mb-3">Most Popular</p>
                )}
                
                <h3 className={`text-xl font-semibold mb-1 ${pkg.popular ? '' : 'text-foreground'}`}>
                  {pkg.name}
                </h3>
                
                <div className="flex items-baseline gap-2 mb-4">
                  <span className={`text-3xl font-semibold ${pkg.popular ? '' : 'text-primary'}`}>
                    {pkg.price}
                  </span>
                  <span className={`text-sm ${pkg.popular ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                    · {pkg.turnaround}
                  </span>
                </div>

                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className={`h-4 w-4 flex-shrink-0 mt-0.5 ${pkg.popular ? 'text-accent' : 'text-primary'}`} />
                      <span className={pkg.popular ? 'text-primary-foreground' : ''}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  asChild 
                  className={`w-full ${pkg.popular ? 'bg-white text-primary hover:bg-white/90' : ''}`}
                  variant={pkg.popular ? "default" : "outline"}
                >
                  <Link to="/book">Book Now</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
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

      {/* Testimonial */}
      <section className="py-16 bg-background">
        <div className="container-narrow mx-auto px-6 lg:px-8 text-center">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-accent fill-current" />
            ))}
          </div>
          <blockquote className="text-xl md:text-2xl font-medium text-foreground mb-6 max-w-2xl mx-auto">
            "Payette Property Prep has become essential to my listing process. 
            Properties photograph beautifully and clients always comment on how clean everything looks."
          </blockquote>
          <p className="font-semibold">Sarah Mitchell</p>
          <p className="text-sm text-muted-foreground">Top Producing Agent, McCall Real Estate</p>
        </div>
      </section>
    </Layout>
  );
}
