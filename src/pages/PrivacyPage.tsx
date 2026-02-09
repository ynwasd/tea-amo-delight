import Layout from "@/components/layout/Layout";

const PrivacyPage = () => (
  <Layout>
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-display text-4xl font-bold">Privacy Policy</h1>
      </div>
    </section>
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-3xl prose prose-sm font-body">
        <p className="text-muted-foreground"><em>Last updated: February 2026</em></p>
        <h2 className="font-display">1. Information We Collect</h2>
        <p className="text-foreground">We collect information you provide directly, such as your name, email, and phone number when you sign up for rewards, place an order, or contact us. We may also collect usage data through cookies and analytics tools.</p>
        <h2 className="font-display">2. How We Use Your Information</h2>
        <p className="text-foreground">We use your information to process orders, manage your rewards account, send promotional communications (with your consent), and improve our services.</p>
        <h2 className="font-display">3. Data Sharing</h2>
        <p className="text-foreground">We do not sell your personal data. We may share information with service providers who help us operate (payment processors, delivery platforms) under strict confidentiality agreements.</p>
        <h2 className="font-display">4. Your Rights</h2>
        <p className="text-foreground">You may request access to, correction of, or deletion of your personal data at any time by contacting us at hello@teaamosanmarcos.com.</p>
        <h2 className="font-display">5. Contact</h2>
        <p className="text-foreground">For privacy-related inquiries, email us at hello@teaamosanmarcos.com.</p>
      </div>
    </section>
  </Layout>
);

export default PrivacyPage;
