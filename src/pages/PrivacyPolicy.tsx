import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-bg text-text-primary flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-6 max-w-7xl mx-auto w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-neutral dark:prose-invert max-w-none text-text-secondary">
          <p className="text-sm mb-8">Last Updated: March 20, 2026</p>

          <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">1. Introduction</h2>
          <p>
            KODDEVZ ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website koddevz.com or engage our digital services.
          </p>

          <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">2. Data We Collect</h2>
          <p>We only collect data necessary to provide our services:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Identity & Contact Data:</strong> Name, email address, phone number, and company name (collected via contact forms).</li>
            <li><strong>Technical Data:</strong> IP address, browser type, time zone, and operating system (collected automatically via analytics).</li>
          </ul>

          <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">3. How We Use Your Data</h2>
          <p>We use your data solely to:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Provide quotes and communicate regarding web development projects.</li>
            <li>Improve our website functionality and user experience.</li>
            <li>Comply with legal obligations.</li>
          </ul>
          <p className="mt-4">We do not sell, rent, or trade your personal data to third parties.</p>

          <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">4. Cookies & Tracking</h2>
          <p>
            We use essential cookies to ensure site functionality. You may disable non-essential analytics cookies via your browser settings or our cookie consent banner.
          </p>

          <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">5. Your Rights (GDPR/DPDP Compliance)</h2>
          <p>
            Depending on your location, you have the right to request access to, correction of, or deletion of your personal data. To exercise these rights, contact us at: <a href="mailto:hello@koddevz.com" className="text-accent-blue hover:underline">hello@koddevz.com</a>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
