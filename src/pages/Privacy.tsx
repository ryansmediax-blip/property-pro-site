import { Layout } from "@/components/layout/Layout";

export default function Privacy() {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <h1 className="text-4xl font-semibold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p className="text-foreground font-medium">
              Last Updated: December 2024
            </p>

            <p>
              Payette Property Prep ("we," "our," or "us") respects your privacy and is committed to protecting 
              the personal information you share with us. This Privacy Policy explains how we collect, use, and 
              safeguard your information.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contact Information:</strong> Name, email address, phone number, and property address</li>
              <li><strong>Service Information:</strong> Details about services requested, property characteristics, and service history</li>
              <li><strong>Payment Information:</strong> Billing address and payment method details (processed securely through our payment providers)</li>
              <li><strong>Communications:</strong> Records of correspondence between you and our team</li>
              <li><strong>Property Documentation:</strong> Photos and videos of your property taken during service visits (with consent)</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process payments and send service confirmations</li>
              <li>Communicate with you about appointments, updates, and promotions</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Document property conditions and service completion</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share information with:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service Providers:</strong> Companies that help us process payments, send communications, or provide other business services</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information against unauthorized 
              access, alteration, disclosure, or destruction. However, no method of transmission over the Internet 
              is 100% secure.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information (subject to legal requirements)</li>
              <li>Opt out of marketing communications</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Cookies and Tracking</h2>
            <p>
              Our website may use cookies and similar technologies to enhance your experience and analyze site 
              usage. You can control cookie settings through your browser preferences.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under 18 years of age. We do not knowingly collect 
              personal information from children.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of significant changes 
              by posting the new policy on our website with an updated effective date.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or your personal information, please contact us:
            </p>
            <p>
              <strong>Email:</strong> payettepropertyprep@gmail.com<br />
              <strong>Phone:</strong> 208-991-6297
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
