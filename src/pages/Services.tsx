import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Droplets, Sparkles, Home, Wind, Snowflake, Camera } from "lucide-react";

const services = [
  {
    id: "windows",
    icon: Sparkles,
    title: "Window Cleaning",
    description: "Crystal-clear windows that maximize your mountain views. We offer both exterior and interior (partial) cleaning services.",
    features: ["Exterior window cleaning", "Interior cleaning available", "Screen cleaning", "Track & sill detailing"],
    starting: "$75",
  },
  {
    id: "pressure-washing",
    icon: Droplets,
    title: "Pressure Washing",
    description: "Restore your property's surfaces to their original beauty. Perfect for siding, decks, patios, driveways, and walkways.",
    features: ["Siding & exterior walls", "Decks & patios", "Concrete driveways", "Walkways & stairs"],
    starting: "$150",
  },
  {
    id: "gutters",
    icon: Wind,
    title: "Gutter Cleaning",
    description: "Keep your gutters flowing freely and protect your home from water damage. Essential for Idaho's variable weather.",
    features: ["Full gutter cleanout", "Downspout clearing", "Debris removal", "Flow testing"],
    starting: "$100",
  },
  {
    id: "snow",
    icon: Snowflake,
    title: "Snow Removal",
    description: "Seasonal service to keep your property accessible and safe during Idaho winters. Available November through April.",
    features: ["Driveway clearing", "Walkway shoveling", "Roof snow removal", "De-icing treatment"],
    starting: "$75",
    seasonal: true,
  },
  {
    id: "check-ins",
    icon: Camera,
    title: "Property Check-ins",
    description: "Peace of mind for vacation homeowners. Regular property inspections with photo and video documentation.",
    features: ["Visual inspections", "Photo/video reports", "Issue identification", "Coordination with services"],
    starting: "$50",
    addon: true,
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-wide mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6">
              Our Services
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Comprehensive exterior property care tailored to the unique needs of Valley County homes. 
              From routine maintenance to seasonal services, we keep your property looking its best year-round.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild variant="hero" size="lg">
                <Link to="/book">Book a Service</Link>
              </Button>
              <Button asChild variant="hero-outline" size="lg">
                <Link to="/memberships">View Memberships</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} id={service.id} className="hover-lift group relative overflow-hidden">
                {service.seasonal && (
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground text-xs font-medium px-3 py-1 rounded-full">
                    Seasonal
                  </div>
                )}
                {service.addon && (
                  <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    Add-on
                  </div>
                )}
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <p className="text-xs text-muted-foreground">Starting at</p>
                      <p className="text-xl font-semibold text-primary">{service.starting}</p>
                    </div>
                    <Button asChild variant="outline" size="sm">
                      <Link to="/book">
                        Book
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Quote CTA */}
      <section className="section-padding bg-secondary/30">
        <div className="container-narrow mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Need Something Custom?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Every property is unique. Contact us for a personalized quote tailored to your specific needs and property size.
          </p>
          <Button asChild variant="cta" size="xl">
            <Link to="/contact">
              Request Custom Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
