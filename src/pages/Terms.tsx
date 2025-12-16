import { Layout } from "@/components/layout/Layout";

export default function Terms() {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <h1 className="text-4xl font-semibold mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p className="text-foreground font-medium">
              Last Updated: December 2024
            </p>

            <p>
              Welcome to Payette Property Prep. By using our services, you agree to these terms. 
              Please read them carefully.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Services</h2>
            <p>
              Payette Property Prep provides exterior property maintenance services including but not limited to 
              window cleaning, pressure washing, roof washing, gutter cleaning, snow removal, and property check-in 
              services in Valley County, Idaho.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Service Agreements</h2>
            <p>
              All services are provided based on quotes agreed upon prior to service commencement. Prices may vary 
              based on property size, condition, and specific service requirements. We reserve the right to adjust 
              pricing if actual conditions differ significantly from what was described during the quoting process.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Scheduling & Cancellation</h2>
            <p>
              Appointments can be rescheduled or cancelled with at least 24 hours notice at no charge. 
              Cancellations with less than 24 hours notice may be subject to a cancellation fee. We reserve 
              the right to reschedule services due to weather conditions or other circumstances beyond our control.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Membership Terms</h2>
            <p>
              Membership plans are billed monthly with no long-term contracts. Members may cancel with 30 days 
              written notice. Membership benefits apply only to the property specified at enrollment. Memberships 
              may be paused for up to 3 months per calendar year.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Payment Terms</h2>
            <p>
              Payment is due upon completion of service unless other arrangements have been made. We accept 
              credit/debit cards, ACH transfers, and checks. Late payments may be subject to a late fee. 
              Accounts more than 30 days past due may be referred to collections.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Property Access</h2>
            <p>
              Clients are responsible for ensuring clear access to service areas. Any access codes, keys, or 
              special instructions should be provided in advance. We are not responsible for delays caused by 
              access issues.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Liability</h2>
            <p>
              Payette Property Prep carries general liability insurance and workers' compensation coverage. 
              We exercise reasonable care in performing services. However, we are not liable for pre-existing 
              damage, normal wear and tear, or damage resulting from defective conditions of property fixtures.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">8. Satisfaction Guarantee</h2>
            <p>
              We stand behind our work. If you're not satisfied with any service, please contact us within 
              48 hours of service completion and we will return to address your concerns at no additional cost.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">9. Changes to Terms</h2>
            <p>
              We may update these terms from time to time. We will notify active clients of significant changes. 
              Continued use of our services constitutes acceptance of updated terms.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">10. Contact</h2>
            <p>
              Questions about these terms? Contact us at:
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
