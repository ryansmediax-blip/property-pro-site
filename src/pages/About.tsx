import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Award, Users, Heart } from "lucide-react";
import heroImage from "@/assets/hero-cabin.jpg";

const values = [
  {
    icon: Award,
    title: "Quality First",
    description: "We never cut corners. Every service is delivered with attention to detail and professional-grade results.",
  },
  {
    icon: Users,
    title: "Relationship Focused",
    description: "We build long-term relationships with our clients, becoming a trusted part of their property care team.",
  },
  {
    icon: MapPin,
    title: "Local Expertise",
    description: "We understand Valley County's unique climate challenges and tailor our services accordingly.",
  },
  {
    icon: Heart,
    title: "Community Committed",
    description: "We're proud to serve the McCall, Donnelly, and Cascade communities where we live and work.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium text-primary mb-4">About Us</p>
              <h1 className="text-4xl md:text-5xl font-semibold mb-6">
                Your Local Property Care Partner
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Payette Property Prep was founded with a simple mission: to help Valley County 
                property owners maintain beautiful, well-cared-for homes without the hassle.
              </p>
              <p className="text-muted-foreground">
                We understand that whether you're a full-time resident, a vacation homeowner, 
                or a real estate professional, your property deserves consistent, reliable care. 
                That's exactly what we deliver.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-card-hover">
                <img 
                  src={heroImage} 
                  alt="Valley County mountain property" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Our Story</h2>
          </div>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="mb-6">
              Living in Valley County means experiencing some of the most beautiful landscapes in Idaho — 
              and some of the most demanding conditions for property maintenance. From heavy snowfall 
              and pine pollen to moss growth and wildlife, mountain properties face unique challenges 
              that require specialized care.
            </p>
            <p className="mb-6">
              We started Payette Property Prep because we saw too many beautiful homes suffering from 
              neglect — not because owners didn't care, but because they didn't have a reliable, 
              professional service they could count on. Whether it's a vacation cabin that sits empty 
              for months or a luxury estate that deserves constant attention, every property needs 
              someone looking out for it.
            </p>
            <p>
              Today, we're proud to be the trusted property care partner for homeowners and real estate 
              professionals throughout McCall, Donnelly, and Cascade. Our commitment to quality, 
              reliability, and customer service has made us the go-to choice for exterior property 
              maintenance in Valley County.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">What We Stand For</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our values guide everything we do, from how we treat your property to how we build relationships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="hover-lift text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-background border border-border flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <Card className="overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-6" />
                <h2 className="text-3xl font-semibold mb-4">Our Service Area</h2>
                <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                  We proudly serve properties throughout Valley County, Idaho, including:
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  {["McCall", "Donnelly", "Cascade", "Lake Fork", "New Meadows"].map((area) => (
                    <span key={area} className="bg-secondary px-6 py-3 rounded-full text-lg font-medium">
                      {area}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Not sure if we serve your area? Contact us to find out.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Credentials */}
      <section className="section-padding bg-secondary/30">
        <div className="container-narrow mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Licensed & Insured</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover-lift">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Business License</h3>
                <p className="text-sm text-muted-foreground">Fully licensed to operate in Valley County, Idaho</p>
              </CardContent>
            </Card>
            <Card className="hover-lift">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Liability Insurance</h3>
                <p className="text-sm text-muted-foreground">Comprehensive coverage for your peace of mind</p>
              </CardContent>
            </Card>
            <Card className="hover-lift">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Workers' Comp</h3>
                <p className="text-sm text-muted-foreground">Full coverage for our team's protection</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-narrow mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Work With Us?</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            Experience the difference of working with a local team that truly cares about your property.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild variant="hero" size="xl">
              <Link to="/book">
                Book a Service
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="hero-outline" size="xl">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
