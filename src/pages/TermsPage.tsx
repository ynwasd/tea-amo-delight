import Layout from "@/components/layout/Layout";

const TermsPage = () => (
  <Layout>
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-display text-4xl font-bold">Terms of Service</h1>
      </div>
    </section>
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-3xl prose prose-sm font-body">
        <p className="text-muted-foreground"><em>Last updated: February 2026</em></p>
        <h2 className="font-display">1. Acceptance of Terms</h2>
        <p className="text-foreground">By accessing or using the Tea Amo website and services, you agree to be bound by these Terms of Service.</p>
        <h2 className="font-display">2. Orders & Payments</h2>
        <p className="text-foreground">All orders are subject to availability. Prices are listed on our menu and may change without notice. Payment is processed through our third-party delivery partners or in-store.</p>
        <h2 className="font-display">3. Rewards Program</h2>
        <p className="text-foreground">The Tea Amo Rewards program is subject to its own terms. Points have no cash value and may expire after 12 months of inactivity.</p>
        <h2 className="font-display">4. Intellectual Property</h2>
        <p className="text-foreground">All content, logos, and branding on this website are property of Tea Amo and may not be used without written permission.</p>
        <h2 className="font-display">5. Limitation of Liability</h2>
        <p className="text-foreground">Tea Amo is not liable for any indirect or consequential damages arising from use of our services or website.</p>
        <h2 className="font-display">6. Contact</h2>
        <p className="text-foreground">Questions about these terms? Reach us at hello@teaamosanmarcos.com.</p>
      </div>
    </section>
  </Layout>
);

export default TermsPage;
