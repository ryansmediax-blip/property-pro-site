import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets, Sparkles, Wind, Snowflake, Camera, Check } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Window Cleaning",
    description: "Crystal-clear exterior windows that maximize your mountain views.",
    starting: "$75",
  },
  {
    icon: Droplets,
    title: "Pressure Washing",
    description: "Restore siding, decks, patios, driveways, and walkways.",
    starting: "$150",
  },
  {
    icon: Wind,
    title: "Gutter Cleaning",
    description: "Keep gutters flowing and protect your home from water damage.",
    starting: "$100",
  },
  {
    icon: Snowflake,
    title: "Snow Removal",
    description: "Driveways, walkways, and roofs cleared safely. Nov-April.",
    starting: "$75",
    seasonal: true,
  },
  {
    icon: Camera,
    title: "Property Check-ins",
    description: "Regular inspections with photo/video documentation.",
    starting: "$50",
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-wide mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6">
              Our Services
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Professional exterior care for Valley County properties. 
              Book individually or save with a membership.
            </p>
          </div>
        </div>
      </section>

      {/* Services List - Clean & Simple */}
      <section className="py-16">
        <div className="container-wide mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-6">
            {services.map((service) => (
              <div 
                key={service.title}
                className="flex items-center justify-between p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all group"
              >
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-lg">{service.title}</h3>
                      {service.seasonal && (
                        <span className="text-xs bg-accent/20 text-accent-foreground px-2 py-0.5 rounded-full">
                          Seasonal
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-xs text-muted-foreground">From</p>
                  <p className="text-xl font-semibold text-primary">{service.starting}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Push */}
      <section className="py-20 bg-primary">
        <div className="container-wide mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary-foreground/70 font-medium mb-4">The Smarter Choice</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-primary-foreground mb-6">
              Why Book Once When You Can{" "}
              <span className="text-primary-foreground">
                Save 20-30%
              </span>{" "}
              With a Membership?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">
              Members get priority scheduling, automatic service, and significant savings 
              compared to booking individual services.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              {[
                "No scheduling hassle",
                "Priority booking",
                "Cancel anytime",
              ].map((benefit) => (
                <div key={benefit} className="flex items-center justify-center gap-2 text-primary-foreground">
                  <Check className="h-5 w-5 text-primary-foreground" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            <Button asChild size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <Link to="/memberships">
                View Membership Plans
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Book CTA */}
      <section className="py-16 bg-background">
        <div className="container-narrow mx-auto px-6 lg:px-8 text-center">
          <h3 className="text-xl font-semibold mb-3">Need a One-Time Service?</h3>
          <p className="text-muted-foreground mb-6">
            We're happy to help with individual jobs too.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild variant="cta">
              <Link to="/book">
                Book a Service
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/contact">Request Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
