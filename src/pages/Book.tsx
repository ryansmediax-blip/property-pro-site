import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, Check, ArrowRight, ArrowLeft, Zap, Star, Home, Ruler } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Package definitions with pricing tiers
const packages: Record<string, {
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

type PackageType = "base" | "summit" | null;

const timeSlots = [
  "Morning (8am - 12pm)",
  "Afternoon (12pm - 4pm)",
  "Flexible (Any time)",
];

function calculatePrice(packageType: PackageType, sqft: number): number | null {
  if (!packageType || !sqft) return null;
  const pkg = packages[packageType];
  for (const tier of pkg.pricingTiers) {
    if (sqft <= tier.maxSqft) {
      return tier.price;
    }
  }
  // Over 5000 sqft - return highest tier price (they should contact us)
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
  
  const [step, setStep] = useState(1);
  const [selectedPackage, setSelectedPackage] = useState<PackageType>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    squareFootage: "",
    preferredDate: "",
    preferredTime: "",
    notes: "",
    paymentPreference: "online",
  });

  // Check URL params for pre-selected package and skip to step 2
  useEffect(() => {
    const pkg = searchParams.get("package");
    if (pkg === "base" || pkg === "summit") {
      setSelectedPackage(pkg);
      setStep(2); // Skip directly to property details
    }
  }, [searchParams]);

  const calculatedPrice = calculatePrice(
    selectedPackage, 
    parseInt(formData.squareFootage) || 0
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Membership Request Submitted!",
      description: "We'll contact you within 24 hours to confirm your membership.",
    });
    // Reset form
    setStep(1);
    setSelectedPackage(null);
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      squareFootage: "",
      preferredDate: "",
      preferredTime: "",
      notes: "",
      paymentPreference: "online",
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-narrow mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            {selectedPackage ? `${packages[selectedPackage].name} Membership` : "Choose Your Plan"}
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            {selectedPackage 
              ? "Enter your property details to see your monthly price."
              : "Select a membership plan to get started."}
          </p>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 border-b border-border">
        <div className="container-narrow mx-auto px-6">
          <div className="flex justify-between items-center">
            {["Select Plan", "Property Details", "Your Info", "Confirm"].map((label, index) => (
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
            {step === 1 && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-semibold mb-6 text-center">Which plan is right for you?</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-3xl mx-auto">
                  {(Object.keys(packages) as PackageType[]).filter(Boolean).map((pkgKey) => {
                    const pkg = packages[pkgKey!];
                    const Icon = pkg.icon;
                    return (
                      <Card 
                        key={pkgKey}
                        className={`cursor-pointer transition-all hover-lift relative ${
                          selectedPackage === pkgKey 
                            ? "border-2 border-primary shadow-lg" 
                            : "hover:border-primary/30"
                        } ${pkg.popular ? "ring-2 ring-primary/20" : ""}`}
                        onClick={() => setSelectedPackage(pkgKey)}
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
                              selectedPackage === pkgKey 
                                ? "bg-primary border-primary" 
                                : "border-border"
                            }`}>
                              {selectedPackage === pkgKey && (
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
                    disabled={!selectedPackage}
                    onClick={() => setStep(2)}
                  >
                    Continue
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2: Property Details */}
            {step === 2 && selectedPackage && (
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
                        const Icon = packages[selectedPackage].icon;
                        return (
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                        );
                      })()}
                      <div>
                        <h3 className="font-semibold">{packages[selectedPackage].name} Plan</h3>
                        <p className="text-sm text-muted-foreground">Monthly membership</p>
                      </div>
                    </div>
                    <ul className="space-y-1">
                      {packages[selectedPackage].services.map((service) => (
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
                  {calculatedPrice && (
                    <Card className="border-primary bg-primary/5">
                      <CardContent className="p-6 text-center">
                        <p className="text-sm text-muted-foreground mb-1">Your Monthly Price</p>
                        <div className="flex items-baseline justify-center gap-1">
                          <span className="text-5xl font-bold text-primary">${calculatedPrice}</span>
                          <span className="text-muted-foreground">/month</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                          {getSqftTierLabel(parseInt(formData.squareFootage))} • {packages[selectedPackage].name} Plan
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

            {/* Step 3: Contact Details */}
            {step === 3 && (
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

            {/* Step 4: Confirm */}
            {step === 4 && selectedPackage && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-semibold mb-6">Review & Confirm</h2>
                <Card className="mb-8">
                  <CardContent className="p-6 space-y-6">
                    {/* Package & Price Summary */}
                    <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          {(() => {
                            const Icon = packages[selectedPackage].icon;
                            return (
                              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                <Icon className="h-6 w-6 text-primary" />
                              </div>
                            );
                          })()}
                          <div>
                            <h3 className="font-semibold text-lg">{packages[selectedPackage].name} Membership</h3>
                            <p className="text-sm text-muted-foreground">Monthly plan</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-3xl font-bold text-primary">${calculatedPrice}</p>
                          <p className="text-sm text-muted-foreground">/month</p>
                        </div>
                      </div>
                      <div className="border-t border-border pt-4">
                        <p className="text-sm font-medium text-muted-foreground mb-2">Services included:</p>
                        <ul className="grid gap-1">
                          {packages[selectedPackage].services.map((service) => (
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
          </form>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container-narrow mx-auto text-center px-6">
          <h3 className="text-xl font-semibold mb-3">Have questions?</h3>
          <p className="text-muted-foreground mb-6">
            Not sure which plan is right for you? We're happy to help.
          </p>
          <Button variant="outline" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
