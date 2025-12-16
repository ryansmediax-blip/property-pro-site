import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, Check, ArrowRight, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const services = [
  { id: "windows", name: "Window Cleaning", price: "From $75" },
  { id: "pressure", name: "Pressure Washing", price: "From $150" },
  { id: "roof", name: "Roof Washing", price: "From $200" },
  { id: "gutters", name: "Gutter Cleaning", price: "From $100" },
  { id: "snow", name: "Snow Removal", price: "From $75" },
  { id: "checkins", name: "Property Check-ins", price: "From $50" },
];

const frequencies = [
  { id: "once", name: "One-Time Service", description: "Single service visit" },
  { id: "monthly", name: "Monthly (Recommended)", description: "Best value, consistent care", recommended: true },
  { id: "bimonthly", name: "Bi-Monthly", description: "Every other month" },
  { id: "quarterly", name: "Quarterly", description: "Every 3 months" },
];

const timeSlots = [
  "Morning (8am - 12pm)",
  "Afternoon (12pm - 4pm)",
  "Flexible (Any time)",
];

export default function Book() {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [frequency, setFrequency] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    preferredDate: "",
    preferredTime: "",
    notes: "",
    paymentPreference: "online",
  });

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Request Submitted!",
      description: "We'll contact you within 24 hours to confirm your appointment.",
    });
    // Reset form
    setStep(1);
    setSelectedServices([]);
    setFrequency("");
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
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
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">Book a Service</h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Schedule your service in just a few steps. We'll confirm your appointment within 24 hours.
          </p>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 border-b border-border">
        <div className="container-narrow mx-auto px-6">
          <div className="flex justify-between items-center">
            {["Select Services", "Frequency", "Details", "Confirm"].map((label, index) => (
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
            {/* Step 1: Select Services */}
            {step === 1 && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-semibold mb-6">What services do you need?</h2>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {services.map((service) => (
                    <Card 
                      key={service.id}
                      className={`cursor-pointer transition-all hover-lift ${
                        selectedServices.includes(service.id) 
                          ? "border-2 border-primary" 
                          : "hover:border-primary/30"
                      }`}
                      onClick={() => handleServiceToggle(service.id)}
                    >
                      <CardContent className="p-6 flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">{service.name}</h3>
                          <p className="text-sm text-muted-foreground">{service.price}</p>
                        </div>
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          selectedServices.includes(service.id) 
                            ? "bg-primary border-primary" 
                            : "border-border"
                        }`}>
                          {selectedServices.includes(service.id) && (
                            <Check className="h-4 w-4 text-primary-foreground" />
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="flex justify-end">
                  <Button 
                    type="button"
                    variant="hero"
                    size="lg"
                    disabled={selectedServices.length === 0}
                    onClick={() => setStep(2)}
                  >
                    Continue
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2: Frequency */}
            {step === 2 && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-semibold mb-6">How often do you need service?</h2>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {frequencies.map((freq) => (
                    <Card 
                      key={freq.id}
                      className={`cursor-pointer transition-all hover-lift relative ${
                        frequency === freq.id 
                          ? "border-2 border-primary" 
                          : "hover:border-primary/30"
                      }`}
                      onClick={() => setFrequency(freq.id)}
                    >
                      {freq.recommended && (
                        <div className="absolute -top-2 right-4 bg-accent text-accent-foreground text-xs font-medium px-3 py-1 rounded-full">
                          Best Value
                        </div>
                      )}
                      <CardContent className="p-6 flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">{freq.name}</h3>
                          <p className="text-sm text-muted-foreground">{freq.description}</p>
                        </div>
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          frequency === freq.id 
                            ? "bg-primary border-primary" 
                            : "border-border"
                        }`}>
                          {frequency === freq.id && (
                            <Check className="h-4 w-4 text-primary-foreground" />
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="flex justify-between">
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
                    disabled={!frequency}
                    onClick={() => setStep(3)}
                  >
                    Continue
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Details */}
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
                    <Label htmlFor="address">Property Address *</Label>
                    <Input 
                      id="address" 
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                      placeholder="123 Lake View Dr, McCall, ID"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="date">Preferred Date</Label>
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
                    <Label htmlFor="time">Preferred Time</Label>
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
                    disabled={!formData.name || !formData.email || !formData.phone || !formData.address}
                    onClick={() => setStep(4)}
                  >
                    Continue
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 4: Confirm */}
            {step === 4 && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-semibold mb-6">Review & Confirm</h2>
                <Card className="mb-8">
                  <CardContent className="p-6 space-y-6">
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-2">Selected Services</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedServices.map((id) => {
                          const service = services.find(s => s.id === id);
                          return (
                            <span key={id} className="bg-secondary px-3 py-1 rounded-full text-sm">
                              {service?.name}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-2">Frequency</h3>
                      <p>{frequencies.find(f => f.id === frequency)?.name}</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground mb-2">Contact</h3>
                        <p className="font-medium">{formData.name}</p>
                        <p className="text-sm text-muted-foreground">{formData.email}</p>
                        <p className="text-sm text-muted-foreground">{formData.phone}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground mb-2">Property</h3>
                        <p className="text-sm">{formData.address}</p>
                      </div>
                    </div>
                    {(formData.preferredDate || formData.preferredTime) && (
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground mb-2">Preferred Schedule</h3>
                        <p className="text-sm">
                          {formData.preferredDate && new Date(formData.preferredDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                          {formData.preferredDate && formData.preferredTime && " • "}
                          {formData.preferredTime}
                        </p>
                      </div>
                    )}
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-3">Payment Preference</h3>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="radio" 
                            name="payment" 
                            value="online"
                            checked={formData.paymentPreference === "online"}
                            onChange={(e) => setFormData({...formData, paymentPreference: e.target.value})}
                            className="w-4 h-4 text-primary"
                          />
                          <span className="text-sm">Pay Online</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="radio" 
                            name="payment" 
                            value="invoice"
                            checked={formData.paymentPreference === "invoice"}
                            onChange={(e) => setFormData({...formData, paymentPreference: e.target.value})}
                            className="w-4 h-4 text-primary"
                          />
                          <span className="text-sm">Request Invoice</span>
                        </label>
                      </div>
                    </div>
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
                    variant="cta"
                    size="lg"
                  >
                    Submit Booking Request
                    <Check className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </form>

          {/* Custom Quote Option */}
          <div className="mt-12 text-center pt-8 border-t border-border">
            <p className="text-muted-foreground mb-4">
              Need something different? We're happy to create a custom solution.
            </p>
            <Button asChild variant="outline">
              <a href="/contact">Request Custom Quote</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
