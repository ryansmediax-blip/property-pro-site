import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    title: "Services & Scheduling",
    faqs: [
      {
        question: "What services do you offer?",
        answer: "We offer comprehensive exterior property care including window cleaning (exterior and interior), pressure washing (siding, decks, patios, driveways), gutter cleaning, seasonal snow removal, and property check-in services with photo/video documentation.",
      },
      {
        question: "How do I schedule a service?",
        answer: "You can book directly through our website, call us at 208-991-6297, or email payettepropertyprep@gmail.com. We typically respond within 24 hours and can often accommodate same-week appointments for one-time services.",
      },
      {
        question: "Do you offer emergency services?",
        answer: "Yes, we offer priority emergency response for membership clients. For non-members, we do our best to accommodate urgent needs based on availability. Storm damage cleanups and urgent pre-listing prep are common emergency requests.",
      },
      {
        question: "What areas do you serve?",
        answer: "We serve all of Valley County, Idaho, including McCall, Donnelly, Cascade, Lake Fork, and New Meadows. If you're unsure whether we serve your area, please contact us.",
      },
      {
        question: "How far in advance should I book?",
        answer: "For one-time services, we recommend booking at least 1-2 weeks in advance, especially during peak seasons (spring and fall). Membership clients have priority scheduling and can typically book on shorter notice.",
      },
    ],
  },
  {
    title: "Pricing & Payments",
    faqs: [
      {
        question: "How is pricing determined?",
        answer: "Pricing is based on property size, service complexity, and frequency. We provide transparent 'starting at' prices on our website, and all quotes are provided upfront before any work begins. There are never surprise charges.",
      },
      {
        question: "Do you offer free estimates?",
        answer: "Yes, we provide free estimates for all services. For most properties, we can provide an accurate quote based on property details you share. For larger or more complex projects, we may schedule a brief on-site assessment.",
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept credit/debit cards, ACH bank transfers, and checks. Membership clients can set up automatic monthly billing for convenience. We also offer invoicing for real estate professionals and property managers.",
      },
      {
        question: "Are your prices negotiable?",
        answer: "Our prices are competitive and reflect the quality of service we provide. However, we offer discounts for recurring memberships (save 20-30%), multi-property accounts, and agent partnership programs.",
      },
    ],
  },
  {
    title: "Memberships",
    faqs: [
      {
        question: "What's included in a membership?",
        answer: "Memberships include scheduled recurring services, priority scheduling, discounted rates (20-30% savings), photo/video property reports, and dedicated account support. Higher-tier plans include additional services like snow removal, interior windows, and weekly property check-ins.",
      },
      {
        question: "Is there a contract or commitment?",
        answer: "No long-term contracts. All memberships are month-to-month. You can cancel anytime with 30 days notice. We're confident you'll stay because of our quality, not because of a contract.",
      },
      {
        question: "Can I pause my membership?",
        answer: "Yes, you can pause your membership for up to 3 months per year. This is perfect for extended travel or seasonal absences. Just give us notice before your next billing cycle.",
      },
      {
        question: "Can I upgrade or downgrade my plan?",
        answer: "Absolutely. You can change your plan at any time, and the change will take effect on your next billing cycle. Our team can help you choose the right plan for your needs.",
      },
      {
        question: "What happens if I'm not satisfied with a service?",
        answer: "Your satisfaction is guaranteed. If you're not completely happy with any service, contact us within 48 hours and we'll return to make it right at no additional cost.",
      },
    ],
  },
  {
    title: "Seasonal Services",
    faqs: [
      {
        question: "When is snow removal available?",
        answer: "Snow removal services are available from November through April, depending on conditions. This includes driveway and walkway clearing, roof snow removal, and de-icing treatments.",
      },
      {
        question: "How quickly can you respond after a snowfall?",
        answer: "Membership clients receive priority response, typically within 24-48 hours of significant snowfall. We monitor weather conditions and proactively reach out to schedule services during storm events.",
      },
      {
        question: "Do you offer winterization services?",
        answer: "Yes, we offer fall preparation services including gutter cleanouts, exterior cleaning before winter, and can coordinate with other vendors for plumbing winterization and other needs.",
      },
    ],
  },
  {
    title: "Property Access & Safety",
    faqs: [
      {
        question: "Do I need to be home during service?",
        answer: "No, you don't need to be present. Many of our clients are vacation homeowners. We just need clear access to the service areas. You can provide a lockbox code or arrange other secure access methods.",
      },
      {
        question: "Are you insured?",
        answer: "Yes, we carry comprehensive general liability insurance and workers' compensation coverage. Certificates of insurance are available upon request.",
      },
      {
        question: "How do you handle my property?",
        answer: "We treat every property with respect and care. Our team follows strict protocols to protect your home, landscaping, and belongings. We use professional-grade equipment and eco-friendly products when possible.",
      },
      {
        question: "What about my pets?",
        answer: "Please let us know if you have pets on the property. We'll take appropriate precautions and coordinate with you to ensure everyone's safety and comfort during our service visits.",
      },
    ],
  },
];

export default function FAQ() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-narrow mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Find answers to common questions about our services, pricing, and policies. 
            Can't find what you're looking for? Contact us directly.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          {faqCategories.map((category, categoryIndex) => (
            <div key={category.title} className={categoryIndex > 0 ? "mt-12" : ""}>
              <h2 className="text-2xl font-semibold mb-6">{category.title}</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {category.faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`${categoryIndex}-${index}`}
                    className="bg-card border border-border rounded-lg px-6 data-[state=open]:shadow-card"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-4">
                      <span className="font-medium pr-4">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section-padding bg-secondary/30">
        <div className="container-narrow mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Still Have Questions?</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            We're here to help. Reach out to our team and we'll get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="hero-outline" size="xl">
              <a href="tel:208-991-6297">Call 208-991-6297</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
