import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, Check, ArrowRight, ArrowLeft, Zap, Star, Home, Ruler, Crown, Building2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Homeowner package definitions with pricing tiers
const homeownerPackages: Record<string, {
  name: string;
  icon: typeof Zap;
  popular?: boolean;
  services: string[];
  pricingTiers: { maxSqft: number; price: number }[];
}> = {
  base: {
    name: "Base",
    icon: Zap,
    services: [
      "Monthly exterior window cleaning",
      "Property check-ins",
    ],
    pricingTiers: [
      { maxSqft: 1200, price: 180 },
      { maxSqft: 2400, price: 280 },
      { maxSqft: 3600, price: 380 },
      { maxSqft: 5000, price: 480 },
    ],
  },
  summit: {
    name: "Summit",
    icon: Star,
    popular: true,
    services: [
      "Monthly exterior window cleaning",
      "Property check-ins",
      "Entry way snow removal",
      "Video property reports with walkthrough",
      "48hr response guarantee",
    ],
    pricingTiers: [
      { maxSqft: 1200, price: 300 },
      { maxSqft: 2400, price: 400 },
      { maxSqft: 3600, price: 500 },
      { maxSqft: 5000, price: 600 },
    ],
  },
};

// Agent package definitions
const agentPackages: Record<string, {
  name: string;
  icon: typeof Zap;
  popular?: boolean;
  highlighted?: boolean;
  price: number;
  priceNote: string;
  description: string;
  services: string[];
  annualValue: string;
}> = {
  base: {
    name: "Base",
    icon: Zap,
    price: 299,
    priceNote: "/month",
    description: "6 listing preps per year",
    services: [
      "Full exterior window cleaning",
      "6 Listing Prep credits annually",
      "Use credits anytime within 12 months",
      "48hr priority scheduling",
      "Photo-ready guarantee",
      "$50/listing (vs $75 one-time)",
    ],
    annualValue: "$450 value",
  },
  summit: {
    name: "Summit",
    icon: Star,
    highlighted: true,
    price: 499,
    priceNote: "/month",
    description: "12 listing preps per year",
    services: [
      "Full exterior window cleaning",
      "12 Listing Prep credits annually",
      "Use credits anytime within 12 months",
      "24hr rush scheduling included",
      "Photo-ready guarantee",
      "$42/listing (vs $75 one-time)",
      "Rollover unused credits (up to 3)",
    ],
    annualValue: "$900 value",
  },
  enterprise: {
    name: "Enterprise",
    icon: Crown,
    popular: true,
    price: 799,
    priceNote: "/month",
    description: "24 listing preps per year",
    services: [
      "Full exterior window cleaning",
      "24 Listing Prep credits annually",
      "Use credits anytime within 12 months",
      "Same-day rush available",
      "Photo-ready guarantee",
      "$33/listing (vs $75 one-time)",
      "Rollover unused credits (up to 6)",
      "Dedicated account manager",
      "Co-branded marketing materials",
      "Ideal for brokerages & teams",
    ],
    annualValue: "$1,800 value",
  },
};

type HomeownerPackageType = "base" | "summit" | null;
type AgentPackageType = "base" | "summit" | "enterprise" | null;
type CustomerType = "homeowner" | "agent";

const timeSlots = [
  "Morning (8am - 12pm)",
  "Afternoon (12pm - 4pm)",
  "Flexible (Any time)",
];

function calculateHomeownerPrice(packageType: HomeownerPackageType, sqft: number): number | null {
  if (!packageType || !sqft) return null;
  const pkg = homeownerPackages[packageType];
  for (const tier of pkg.pricingTiers) {
    if (sqft <= tier.maxSqft) {
      return tier.price;
    }
  }
  return pkg.pricingTiers[pkg.pricingTiers.length - 1].price;
}

function getSqftTierLabel(sqft: number): string {
  if (sqft <= 1200) return "Up to 1,200 sq ft";
  if (sqft <= 2400) return "Up to 2,400 sq ft";
  if (sqft <= 3600) return "Up to 3,600 sq ft";
  return "Up to 5,000 sq ft";
}

export default function Book() {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  
  const [customerType, setCustomerType] = useState<CustomerType>("homeowner");
  const [step, setStep] = useState(1);
  const [selectedHomeownerPackage, setSelectedHomeownerPackage] = useState<HomeownerPackageType>(null);
  const [selectedAgentPackage, setSelectedAgentPackage] = useState<AgentPackageType>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    address: "",
    squareFootage: "",
    preferredDate: "",
    preferredTime: "",
    notes: "",
    paymentPreference: "online",
  });

  // Check URL params for pre-selected package and skip to step 2
  useEffect(() => {
    const type = searchParams.get("type");
    const pkg = searchParams.get("package");
    
    if (type === "agent") {
      setCustomerType("agent");
      if (pkg === "base" || pkg === "summit" || pkg === "enterprise") {
        setSelectedAgentPackage(pkg);
        setStep(2);
      }
    } else {
      if (pkg === "base" || pkg === "summit") {
        setSelectedHomeownerPackage(pkg);
        setStep(2);
      }
    }
  }, [searchParams]);

  const calculatedHomeownerPrice = calculateHomeownerPrice(
    selectedHomeownerPackage, 
    parseInt(formData.squareFootage) || 0
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: customerType === "agent" ? "Partnership Request Submitted!" : "Membership Request Submitted!",
      description: "We'll contact you within 24 hours to confirm your membership.",
    });
    // Reset form
    setStep(1);
    setSelectedHomeownerPackage(null);
    setSelectedAgentPackage(null);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      address: "",
      squareFootage: "",
      preferredDate: "",
      preferredTime: "",
      notes: "",
      paymentPreference: "online",
    });
  };

  const getPageTitle = () => {
    if (customerType === "agent" && selectedAgentPackage) {
      return `${agentPackages[selectedAgentPackage].name} Partnership`;
    }
    if (customerType === "homeowner" && selectedHomeownerPackage) {
      return `${homeownerPackages[selectedHomeownerPackage].name} Membership`;
    }
    return "Choose Your Plan";
  };

  const getPageSubtitle = () => {
    if (customerType === "agent" && selectedAgentPackage) {
      return "Review your package details and complete your application.";
    }
    if (customerType === "homeowner" && selectedHomeownerPackage) {
      return "Enter your property details to see your monthly price.";
    }
    return "Select a membership plan to get started.";
  };

  const getStepLabels = () => {
    if (customerType === "agent") {
      return ["Select Package", "Review Package", "Your Info", "Confirm"];
    }
    return ["Select Plan", "Property Details", "Your Info", "Confirm"];
  };

  const stepLabels = getStepLabels();

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-narrow mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-secondary text-muted-foreground text-sm font-medium px-4 py-2 rounded-full mb-6">
            {customerType === "agent" ? (
              <>
                <Building2 className="h-4 w-4" />
                <span>Real Estate Professional</span>
              </>
            ) : (
              <>
                <Home className="h-4 w-4" />
                <span>Homeowner</span>
              </>
            )}
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            {getPageTitle()}
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            {getPageSubtitle()}
          </p>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 border-b border-border">
        <div className="container-narrow mx-auto px-6">
          <div className="flex justify-between items-center">
            {stepLabels.map((label, index) => (
              <div key={label} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full text-sm font-medium transition-colors ${
                  step > index + 1 
                    ? "bg-primary text-primary-foreground" 
                    : step === index + 1 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-secondary text-muted-foreground"
                }`}>
                  {step > index + 1 ? <Check className="h-5 w-5" /> : index + 1}
                </div>
                <span className={`ml-2 text-sm hidden sm:block ${step === index + 1 ? "font-medium" : "text-muted-foreground"}`}>
                  {label}
                </span>
                {index < 3 && (
                  <div className={`hidden sm:block w-16 lg:w-24 h-0.5 mx-4 ${step > index + 1 ? "bg-primary" : "bg-border"}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Steps */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Select Package */}
            {step === 1 && customerType === "homeowner" && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-semibold mb-6 text-center">Which plan is right for you?</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-3xl mx-auto">
                  {(Object.keys(homeownerPackages) as HomeownerPackageType[]).filter(Boolean).map((pkgKey) => {
                    const pkg = homeownerPackages[pkgKey!];
                    const Icon = pkg.icon;
                    return (
                      <Card 
                        key={pkgKey}
                        className={`cursor-pointer transition-all hover-lift relative ${
                          selectedHomeownerPackage === pkgKey 
                            ? "border-2 border-primary shadow-lg" 
                            : "hover:border-primary/30"
                        } ${pkg.popular ? "ring-2 ring-primary/20" : ""}`}
                        onClick={() => setSelectedHomeownerPackage(pkgKey)}
                      >
                        {pkg.popular && (
                          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-medium px-4 py-1 rounded-full">
                            Most Popular
                          </div>
                        )}
                        <CardContent className="p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                              <Icon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-xl">{pkg.name}</h3>
                              <p className="text-sm text-muted-foreground">Starting at ${pkg.pricingTiers[0].price}/mo</p>
                            </div>
                            <div className={`ml-auto w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                              selectedHomeownerPackage === pkgKey 
                                ? "bg-primary border-primary" 
                                : "border-border"
                            }`}>
                              {selectedHomeownerPackage === pkgKey && (
                                <Check className="h-4 w-4 text-primary-foreground" />
                              )}
                            </div>
                          </div>
                          
                          <div className="border-t border-border pt-4">
                            <p className="text-sm font-medium text-muted-foreground mb-3">What's included:</p>
                            <ul className="space-y-2">
                              {pkg.services.map((service) => (
                                <li key={service} className="flex items-start gap-2 text-sm">
                                  <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                                  <span>{service}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
                <div className="flex justify-center">
                  <Button 
                    type="button"
                    variant="hero"
                    size="lg"
                    disabled={!selectedHomeownerPackage}
                    onClick={() => setStep(2)}
                  >
                    Continue
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 1: Agent Package Selection (if not pre-selected) */}
            {step === 1 && customerType === "agent" && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-semibold mb-6 text-center">Which package fits your needs?</h2>
                <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-5xl mx-auto">
                  {(Object.keys(agentPackages) as AgentPackageType[]).filter(Boolean).map((pkgKey) => {
                    const pkg = agentPackages[pkgKey!];
                    const Icon = pkg.icon;
                    return (
                      <Card 
                        key={pkgKey}
                        className={`cursor-pointer transition-all hover-lift relative ${
                          selectedAgentPackage === pkgKey 
                            ? "border-2 border-primary shadow-lg" 
                            : "hover:border-primary/30"
                        } ${pkg.highlighted ? "ring-2 ring-primary/20" : ""}`}
                        onClick={() => setSelectedAgentPackage(pkgKey)}
                      >
                        {pkg.highlighted && (
                          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-medium px-4 py-1 rounded-full">
                            Recommended
                          </div>
                        )}
                        {pkg.popular && !pkg.highlighted && (
                          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-medium px-4 py-1 rounded-full">
                            For Teams
                          </div>
                        )}
                        <CardContent className="p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                              <Icon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-xl">{pkg.name}</h3>
                              <p className="text-sm text-muted-foreground">${pkg.price}{pkg.priceNote}</p>
                            </div>
                            <div className={`ml-auto w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                              selectedAgentPackage === pkgKey 
                                ? "bg-primary border-primary" 
                                : "border-border"
                            }`}>
                              {selectedAgentPackage === pkgKey && (
                                <Check className="h-4 w-4 text-primary-foreground" />
                              )}
                            </div>
                          </div>
                          
                          <p className="text-sm text-muted-foreground mb-4">{pkg.description}</p>
                          
                          <div className="border-t border-border pt-4">
                            <p className="text-sm font-medium text-muted-foreground mb-3">What's included:</p>
                            <ul className="space-y-2">
                              {pkg.services.slice(0, 5).map((service) => (
                                <li key={service} className="flex items-start gap-2 text-sm">
                                  <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                                  <span>{service}</span>
                                </li>
                              ))}
                              {pkg.services.length > 5 && (
                                <li className="text-sm text-muted-foreground">
                                  +{pkg.services.length - 5} more benefits
                                </li>
                              )}
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
                <div className="flex justify-center">
                  <Button 
                    type="button"
                    variant="hero"
                    size="lg"
                    disabled={!selectedAgentPackage}
                    onClick={() => setStep(2)}
                  >
                    Continue
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2: Homeowner Property Details */}
            {step === 2 && customerType === "homeowner" && selectedHomeownerPackage && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-semibold mb-2 text-center">Property Details</h2>
                <p className="text-muted-foreground text-center mb-8">
                  Enter your address and square footage to calculate your exact price.
                </p>
                
                {/* Selected Package Summary */}
                <Card className="mb-8 max-w-xl mx-auto bg-secondary/30">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      {(() => {
                        const Icon = homeownerPackages[selectedHomeownerPackage].icon;
                        return (
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                        );
                      })()}
                      <div>
                        <h3 className="font-semibold">{homeownerPackages[selectedHomeownerPackage].name} Plan</h3>
                        <p className="text-sm text-muted-foreground">Monthly membership</p>
                      </div>
                    </div>
                    <ul className="space-y-1">
                      {homeownerPackages[selectedHomeownerPackage].services.map((service) => (
                        <li key={service} className="flex items-center gap-2 text-sm">
                          <Check className="h-3.5 w-3.5 text-primary" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <div className="max-w-xl mx-auto space-y-6 mb-8">
                  <div className="space-y-2">
                    <Label htmlFor="address" className="flex items-center gap-2">
                      <Home className="h-4 w-4" />
                      Property Address *
                    </Label>
                    <Input 
                      id="address" 
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                      placeholder="123 Lake View Dr, McCall, ID"
                      className="text-lg py-6"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="sqft" className="flex items-center gap-2">
                      <Ruler className="h-4 w-4" />
                      Approximate Square Footage *
                    </Label>
                    <Input 
                      id="sqft" 
                      type="number"
                      required
                      min="100"
                      max="10000"
                      value={formData.squareFootage}
                      onChange={(e) => setFormData({...formData, squareFootage: e.target.value})}
                      placeholder="e.g. 2000"
                      className="text-lg py-6"
                    />
                    <p className="text-sm text-muted-foreground">
                      Don't know your exact square footage? An estimate is fine!
                    </p>
                  </div>

                  {/* Price Display */}
                  {calculatedHomeownerPrice && (
                    <Card className="border-primary bg-primary/5">
                      <CardContent className="p-6 text-center">
                        <p className="text-sm text-muted-foreground mb-1">Your Monthly Price</p>
                        <div className="flex items-baseline justify-center gap-1">
                          <span className="text-5xl font-bold text-primary">${calculatedHomeownerPrice}</span>
                          <span className="text-muted-foreground">/month</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                          {getSqftTierLabel(parseInt(formData.squareFootage))} • {homeownerPackages[selectedHomeownerPackage].name} Plan
                        </p>
                        {parseInt(formData.squareFootage) > 5000 && (
                          <p className="text-sm text-amber-600 mt-2">
                            For properties over 5,000 sq ft, we'll provide a custom quote.
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  )}
                </div>

                <div className="flex justify-between max-w-xl mx-auto">
                  <Button 
                    type="button"
                    variant="outline"
                    size="lg"
                    onClick={() => setStep(1)}
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                  <Button 
                    type="button"
                    variant="hero"
                    size="lg"
                    disabled={!formData.address || !formData.squareFootage}
                    onClick={() => setStep(3)}
                  >
                    Continue
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2: Agent Package Review */}
            {step === 2 && customerType === "agent" && selectedAgentPackage && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-semibold mb-2 text-center">Your {agentPackages[selectedAgentPackage].name} Package</h2>
                <p className="text-muted-foreground text-center mb-8">
                  Review your package details below.
                </p>
                
                {/* Package Details */}
                <Card className="mb-8 max-w-2xl mx-auto">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        {(() => {
                          const Icon = agentPackages[selectedAgentPackage].icon;
                          return (
                            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                              <Icon className="h-7 w-7 text-primary" />
                            </div>
                          );
                        })()}
                        <div>
                          <h3 className="font-semibold text-2xl">{agentPackages[selectedAgentPackage].name} Package</h3>
                          <p className="text-muted-foreground">{agentPackages[selectedAgentPackage].description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-4xl font-bold text-primary">${agentPackages[selectedAgentPackage].price}</p>
                        <p className="text-muted-foreground">{agentPackages[selectedAgentPackage].priceNote}</p>
                      </div>
                    </div>
                    
                    <div className="bg-secondary/50 rounded-xl p-6 mb-6">
                      <p className="text-sm font-medium text-muted-foreground mb-4">Everything included in this package:</p>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {agentPackages[selectedAgentPackage].services.map((service) => (
                          <li key={service} className="flex items-start gap-2 text-sm">
                            <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm bg-primary/5 rounded-lg p-4 border border-primary/20">
                      <span className="font-medium">Annual Value</span>
                      <span className="text-primary font-semibold">{agentPackages[selectedAgentPackage].annualValue}</span>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex justify-between max-w-2xl mx-auto">
                  <Button 
                    type="button"
                    variant="outline"
                    size="lg"
                    onClick={() => setStep(1)}
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                  <Button 
                    type="button"
                    variant="hero"
                    size="lg"
                    onClick={() => setStep(3)}
                  >
                    Continue to Application
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Contact Details - Homeowner */}
            {step === 3 && customerType === "homeowner" && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-semibold mb-6">Your Information</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input 
                      id="name" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="John Smith"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="(208) 555-0123"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="date">Preferred Start Date</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="date" 
                        type="date"
                        className="pl-10"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Preferred Service Time</Label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <select
                        id="time"
                        className="w-full h-11 pl-10 pr-4 rounded-lg border border-input bg-background text-sm"
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
                      >
                        <option value="">Select a time...</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>{slot}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Textarea 
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => setFormData({...formData, notes: e.target.value})}
                      placeholder="Any special instructions, access codes, or details we should know..."
                      rows={4}
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  <Button 
                    type="button"
                    variant="outline"
                    size="lg"
                    onClick={() => setStep(2)}
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                  <Button 
                    type="button"
                    variant="hero"
                    size="lg"
                    disabled={!formData.name || !formData.email || !formData.phone}
                    onClick={() => setStep(4)}
                  >
                    Continue
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Contact Details - Agent */}
            {step === 3 && customerType === "agent" && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-semibold mb-6">Your Information</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input 
                      id="name" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Brokerage / Company</Label>
                    <Input 
                      id="company" 
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      placeholder="XYZ Realty"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="jane@xyzrealty.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="(208) 555-0123"
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="notes">Tell us about your needs</Label>
                    <Textarea 
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => setFormData({...formData, notes: e.target.value})}
                      placeholder="How many listings do you typically have? Any specific service areas or requirements?"
                      rows={4}
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  <Button 
                    type="button"
                    variant="outline"
                    size="lg"
                    onClick={() => setStep(2)}
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                  <Button 
                    type="button"
                    variant="hero"
                    size="lg"
                    disabled={!formData.name || !formData.email || !formData.phone}
                    onClick={() => setStep(4)}
                  >
                    Continue
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 4: Confirm - Homeowner */}
            {step === 4 && customerType === "homeowner" && selectedHomeownerPackage && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-semibold mb-6">Review & Confirm</h2>
                <Card className="mb-8">
                  <CardContent className="p-6 space-y-6">
                    {/* Package & Price Summary */}
                    <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          {(() => {
                            const Icon = homeownerPackages[selectedHomeownerPackage].icon;
                            return (
                              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                <Icon className="h-6 w-6 text-primary" />
                              </div>
                            );
                          })()}
                          <div>
                            <h3 className="font-semibold text-lg">{homeownerPackages[selectedHomeownerPackage].name} Membership</h3>
                            <p className="text-sm text-muted-foreground">Monthly plan</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-3xl font-bold text-primary">${calculatedHomeownerPrice}</p>
                          <p className="text-sm text-muted-foreground">/month</p>
                        </div>
                      </div>
                      <div className="border-t border-border pt-4">
                        <p className="text-sm font-medium text-muted-foreground mb-2">Services included:</p>
                        <ul className="grid gap-1">
                          {homeownerPackages[selectedHomeownerPackage].services.map((service) => (
                            <li key={service} className="flex items-center gap-2 text-sm">
                              <Check className="h-4 w-4 text-primary" />
                              {service}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Property Info */}
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-2">Property</h3>
                      <p className="font-medium">{formData.address}</p>
                      <p className="text-sm text-muted-foreground">{formData.squareFootage} sq ft</p>
                    </div>

                    {/* Contact Info */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground mb-2">Contact</h3>
                        <p className="font-medium">{formData.name}</p>
                        <p className="text-sm text-muted-foreground">{formData.email}</p>
                        <p className="text-sm text-muted-foreground">{formData.phone}</p>
                      </div>
                      {(formData.preferredDate || formData.preferredTime) && (
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground mb-2">Preferred Schedule</h3>
                          <p className="text-sm">
                            {formData.preferredDate && new Date(formData.preferredDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                            {formData.preferredDate && formData.preferredTime && <br />}
                            {formData.preferredTime}
                          </p>
                        </div>
                      )}
                    </div>

                    {formData.notes && (
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground mb-2">Notes</h3>
                        <p className="text-sm">{formData.notes}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                <div className="flex justify-between">
                  <Button 
                    type="button"
                    variant="outline"
                    size="lg"
                    onClick={() => setStep(3)}
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                  <Button 
                    type="submit"
                    variant="hero"
                    size="lg"
                  >
                    Submit Request
                    <Check className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 4: Confirm - Agent */}
            {step === 4 && customerType === "agent" && selectedAgentPackage && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-semibold mb-6">Review & Confirm</h2>
                <Card className="mb-8">
                  <CardContent className="p-6 space-y-6">
                    {/* Package Summary */}
                    <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          {(() => {
                            const Icon = agentPackages[selectedAgentPackage].icon;
                            return (
                              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                <Icon className="h-6 w-6 text-primary" />
                              </div>
                            );
                          })()}
                          <div>
                            <h3 className="font-semibold text-lg">{agentPackages[selectedAgentPackage].name} Partnership</h3>
                            <p className="text-sm text-muted-foreground">{agentPackages[selectedAgentPackage].description}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-3xl font-bold text-primary">${agentPackages[selectedAgentPackage].price}</p>
                          <p className="text-sm text-muted-foreground">{agentPackages[selectedAgentPackage].priceNote}</p>
                        </div>
                      </div>
                      <div className="border-t border-border pt-4">
                        <p className="text-sm font-medium text-muted-foreground mb-2">Services included:</p>
                        <ul className="grid md:grid-cols-2 gap-1">
                          {agentPackages[selectedAgentPackage].services.map((service) => (
                            <li key={service} className="flex items-center gap-2 text-sm">
                              <Check className="h-4 w-4 text-primary" />
                              {service}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground mb-2">Contact</h3>
                        <p className="font-medium">{formData.name}</p>
                        {formData.company && <p className="text-sm text-muted-foreground">{formData.company}</p>}
                        <p className="text-sm text-muted-foreground">{formData.email}</p>
                        <p className="text-sm text-muted-foreground">{formData.phone}</p>
                      </div>
                    </div>

                    {formData.notes && (
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground mb-2">Additional Information</h3>
                        <p className="text-sm">{formData.notes}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                <div className="flex justify-between">
                  <Button 
                    type="button"
                    variant="outline"
                    size="lg"
                    onClick={() => setStep(3)}
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                  <Button 
                    type="submit"
                    variant="hero"
                    size="lg"
                  >
                    Submit Application
                    <Check className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container-narrow mx-auto text-center px-6">
          <h3 className="text-xl font-semibold mb-3">Have questions?</h3>
          <p className="text-muted-foreground mb-6">
            {customerType === "agent" 
              ? "Want to discuss a custom partnership? We'd love to chat."
              : "Not sure which plan is right for you? We're happy to help."}
          </p>
          <Button variant="outline" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
