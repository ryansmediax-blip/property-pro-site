import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ArrowRight, Sparkles, Shield, Clock, Home, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-cabin.jpg";
const features = [{
  icon: Sparkles,
  title: "Pristine Exteriors",
  description: "Crystal-clear windows, spotless siding, and gleaming surfaces that showcase your property's true beauty."
}, {
  icon: Shield,
  title: "Licensed & Insured",
  description: "Full coverage and professional liability insurance for your complete peace of mind."
}, {
  icon: Clock,
  title: "Reliable Scheduling",
  description: "Consistent service you can count on, whether you're home or away."
}, {
  icon: Home,
  title: "Local Expertise",
  description: "Deep understanding of Valley County's unique climate and property care needs."
}];
const services = ["Window Cleaning", "Pressure Washing", "Gutter Cleaning", "Snow Removal", "Property Check-ins"];
export default function Index() {
  return <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Luxury mountain cabin in Idaho wilderness" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/20" />
        </div>

        <div className="relative z-10 container-wide mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-primary mb-4 animate-fade-in">
              Valley County's Premier Property Care
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6 animate-fade-in animation-delay-200">
              Your Property,{" "}
              <span className="text-primary">Perfectly Prepared</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 animate-fade-in animation-delay-400">
              Premium exterior cleaning and maintenance for luxury homes and vacation properties 
              in McCall, Donnelly, and Cascade. Set it and forget it with our monthly membership plans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-600">
              <Button asChild variant="hero" size="xl">
                <Link to="/memberships">
                  View Memberships
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="hero-outline" size="xl">
                <Link to="/book">Book a Service</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-secondary/50 border-y border-border/50">
        <div className="container-wide mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="text-center">
              <p className="text-3xl font-semibold text-primary">100+</p>
              <p className="text-sm text-muted-foreground">Properties Served</p>
            </div>
            <div className="hidden md:block h-12 w-px bg-border" />
            <div className="text-center">
              <p className="text-3xl font-semibold text-primary">5★</p>
              <p className="text-sm text-muted-foreground">Customer Rating</p>
            </div>
            <div className="hidden md:block h-12 w-px bg-border" />
            <div className="text-center">
              <p className="text-3xl font-semibold text-primary">Local</p>
              <p className="text-sm text-muted-foreground">Valley County Based</p>
            </div>
            <div className="hidden md:block h-12 w-px bg-border" />
            <div className="text-center">
              <p className="text-3xl font-semibold text-primary">Insured</p>
              <p className="text-sm text-muted-foreground">Fully Licensed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-32 md:py-40 bg-primary overflow-hidden">
        <div className="relative container-wide mx-auto px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center max-w-4xl mx-auto mb-20 md:mb-28">
            <p className="text-primary-foreground/70 text-lg md:text-xl font-medium mb-4 tracking-wide">
              Why Property Owners Trust Us
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground leading-tight tracking-tight">
              Built for the mountain lifestyle.{" "}
              <span className="text-primary-foreground">
                Designed for excellence.
              </span>
            </h2>
          </div>

          {/* Feature grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
            {features.map((feature, index) => <div key={feature.title} className="group relative p-8 md:p-6 rounded-3xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:border-primary-foreground/20 transition-all duration-500 hover:bg-primary-foreground/10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <feature.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-primary-foreground mb-3 tracking-tight">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-primary-foreground/70 text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>)}
          </div>

          {/* Bottom accent */}
          <div className="mt-20 md:mt-28 text-center">
            <p className="text-primary-foreground/70 text-lg">
              Trusted by <span className="text-primary-foreground font-medium">100+ property owners</span> across Valley County
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Complete Exterior Care
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                From sparkling windows to pristine driveways, we handle every aspect of your 
                property's exterior maintenance so you can enjoy your Idaho retreat worry-free.
              </p>
              <ul className="grid grid-cols-2 gap-4 mb-8">
                {services.map(service => <li key={service} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{service}</span>
                  </li>)}
              </ul>
              <Button asChild variant="default" size="lg">
                <Link to="/services">
                  Explore All Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-card-hover">
                <img alt="Property exterior being serviced" className="w-full h-full object-cover border" src="/lovable-uploads/86f4f8ef-2f0d-49bf-a706-42e11d88747f.jpg" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-card border border-border">
                <p className="text-sm text-muted-foreground">Starting from</p>
                <p className="text-2xl font-semibold text-primary">$149/month</p>
                <p className="text-sm text-muted-foreground">membership plans</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership CTA */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <Card className="bg-primary text-primary-foreground overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                  Set It & Forget It
                </h2>
                <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
                  Join our monthly membership program and never worry about your property's exterior again. 
                  Consistent care, predictable pricing, and complete peace of mind.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button asChild variant="cta" size="xl">
                    <Link to="/memberships">
                      View Membership Plans
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild size="xl" className="bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
                    <Link to="/contact">Request Custom Quote</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground text-lg">
              Trusted by homeowners and real estate professionals across Valley County.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[{
            quote: "The best decision I made for my vacation home. I never have to worry about the property looking neglected when I arrive.",
            author: "Sarah M.",
            title: "McCall Homeowner"
          }, {
            quote: "Their listing prep service is incredible. My properties photograph beautifully and sell faster. True professionals.",
            author: "Michael R.",
            title: "Real Estate Agent"
          }, {
            quote: "Reliable, thorough, and reasonably priced. They understand the challenges of mountain property maintenance.",
            author: "Jennifer & Tom K.",
            title: "Donnelly Residents"
          }].map((testimonial, index) => <Card key={index} className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => <svg key={i} className="w-5 h-5 text-accent fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>)}
                  </div>
                  <p className="text-foreground mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="container-narrow mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            Book your first service today or contact us for a custom quote tailored to your property's needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild variant="hero" size="xl">
              <Link to="/book">
                Book Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="hero-outline" size="xl">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>;
}