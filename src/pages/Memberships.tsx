import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Check, Calendar, Shield, Clock, Percent, Heart } from "lucide-react";

const benefits = [
  {
    icon: Calendar,
    title: "Consistent Care",
    description: "Regular maintenance prevents costly repairs and keeps your property looking pristine year-round.",
  },
  {
    icon: Shield,
    title: "Priority Service",
    description: "Members get first access to scheduling and priority response for urgent needs.",
  },
  {
    icon: Percent,
    title: "Better Value",
    description: "Monthly plans cost 20-30% less than booking the same services individually.",
  },
  {
    icon: Clock,
    title: "Set & Forget",
    description: "No more scheduling hassles. We handle everything automatically on your behalf.",
  },
];

const plans = [
  {
    name: "Essential Care",
    price: "$149",
    description: "Perfect entry point for regular property maintenance",
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
    name: "Premium Care",
    price: "$279",
    description: "Our most popular comprehensive maintenance plan",
    popular: true,
    features: [
      "Everything in Essential Care",
      "Monthly pressure washing rotation",
      "Bi-annual roof soft wash",
      "Photo & video property reports",
      "Seasonal snow removal included",
      "Deck/patio deep cleaning",
    ],
    cta: "Start Premium",
  },
  {
    name: "Estate Care",
    price: "$449",
    description: "Full-service care for discerning property owners",
    features: [
      "Everything in Premium Care",
      "Interior window cleaning",
      "Weekly property check-ins",
      "Dedicated account manager",
      "Emergency response priority",
      "Concierge coordination",
      "Annual exterior wood treatment",
    ],
    cta: "Start Estate",
  },
];

const faqs = [
  {
    question: "Can I pause my membership?",
    answer: "Yes, you can pause your membership for up to 3 months per year, perfect for extended travel or seasonal absences.",
  },
  {
    question: "What's the contract term?",
    answer: "Our memberships are month-to-month with no long-term contracts. Cancel anytime with 30 days notice.",
  },
  {
    question: "Are there setup fees?",
    answer: "No setup fees. Your first service is included in your initial monthly payment.",
  },
  {
    question: "Can I upgrade or downgrade?",
    answer: "Absolutely. You can change your plan at any time, effective the following billing cycle.",
  },
];

export default function Memberships() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-primary/5 to-background">
        <div className="container-wide mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Heart className="h-4 w-4" />
              <span>The Smart Way to Care for Your Property</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold mb-6">
              Membership Plans
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Stop worrying about your property's maintenance. Our membership plans deliver consistent, 
              professional care month after month — so your home always looks its best.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 border-y border-border/50 bg-secondary/30">
        <div className="container-wide mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Choose Your Plan</h2>
            <p className="text-muted-foreground text-lg">
              All plans include no contracts, no setup fees, and the flexibility to cancel anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <Card 
                key={plan.name} 
                className={`hover-lift relative ${plan.popular ? 'border-2 border-primary shadow-glow' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-sm font-medium px-6 py-2 rounded-full">
                    Most Popular
                  </div>
                )}
                <CardContent className={`p-8 ${plan.popular ? 'pt-10' : ''}`}>
                  <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
                  
                  <div className="mb-8">
                    <span className="text-sm text-muted-foreground">Starting at</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-semibold text-primary">{plan.price}</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    asChild 
                    variant={plan.popular ? "cta" : "outline"} 
                    className="w-full"
                    size="lg"
                  >
                    <Link to="/book">
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Mountain Properties Need Regular Care */}
      <section className="section-padding bg-secondary/30">
        <div className="container-narrow mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Why Mountain Properties Need Regular Care
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Idaho's beautiful but demanding climate means your property faces unique challenges that require consistent attention.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Pine Pollen & Sap",
                description: "Spring brings heavy pollen and sticky sap that coat windows and surfaces, requiring regular cleaning to prevent permanent staining.",
              },
              {
                title: "Snow & Ice Buildup",
                description: "Winter's snow and ice can damage gutters, stress roofs, and create safety hazards without proper seasonal maintenance.",
              },
              {
                title: "Moss & Algae Growth",
                description: "The moist mountain environment promotes moss and algae growth on roofs and siding, which can cause long-term damage if left unchecked.",
              },
              {
                title: "Wildlife Activity",
                description: "Birds, squirrels, and other wildlife can clog gutters and create messes that need regular attention to prevent damage.",
              },
            ].map((item) => (
              <Card key={item.title} className="hover-lift">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">Membership FAQ</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq) => (
              <Card key={faq.question} className="hover-lift">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-narrow mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Ready to Simplify Your Property Care?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
            Join hundreds of Valley County homeowners who trust us with their property's exterior maintenance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild variant="cta" size="xl">
              <Link to="/book">
                Start Your Membership
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
