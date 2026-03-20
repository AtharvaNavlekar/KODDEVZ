import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-bg text-text-primary flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-6 max-w-7xl mx-auto w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms & Conditions</h1>
        <div className="prose prose-neutral dark:prose-invert max-w-none text-text-secondary">
          <p className="text-sm mb-8">Last Updated: March 20, 2026</p>

          <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">1. Agreement to Terms</h2>
          <p>
            By accessing our website or engaging KODDEVZ for web development services, you agree to be bound by these Terms of Service.
          </p>

          <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">2. Scope of Work & Deliverables</h2>
          <p>
            All development, design, and consulting services will be outlined in a specific Project Proposal or Statement of Work (SOW) signed by both parties. Any requests outside the SOW will be subject to additional fees ("Scope Creep").
          </p>

          <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">3. Intellectual Property (IP) Rights</h2>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Client Ownership:</strong> Upon full and final payment, the client owns the final compiled code, visual design, and written content specific to their project.</li>
            <li><strong>Agency Ownership:</strong> KODDEVZ retains full ownership of our "Background Technology" (pre-existing code modules, custom frameworks, and internal development tools used to build the site). We grant the client a non-exclusive license to use this Background Technology as integrated into their final product.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">4. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, KODDEVZ shall not be liable for any indirect, incidental, or consequential damages, including lost profits, data loss, or business interruption arising from the use or inability to use our delivered software. Our total liability shall not exceed the total amount paid by the client for the specific project in question.
          </p>

          <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">5. Client Responsibilities</h2>
          <p>
            The client agrees to provide all necessary materials (text, images, branding) in a timely manner. Delays in client feedback may result in timeline extensions and storage fees.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
