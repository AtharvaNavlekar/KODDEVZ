import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export function RefundPolicy() {
  return (
    <div className="min-h-screen bg-bg text-text-primary flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-6 max-w-7xl mx-auto w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Refund Policy</h1>
        <div className="prose prose-neutral dark:prose-invert max-w-none text-text-secondary">
          <p className="text-sm mb-8">Last Updated: March 20, 2026</p>
          
          <p className="mb-8">
            Because KODDEVZ offers bespoke, labor-intensive digital services, our refund policy is strictly structured to protect the time invested by our engineering and design teams.
          </p>

          <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">1. Initial Deposits</h2>
          <p>
            All projects require a non-refundable upfront deposit (typically 40-50% of the total project cost) to secure our team's time and commence the Discovery and Design phases. This deposit is strictly non-refundable once work has begun.
          </p>

          <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">2. Milestone Payments</h2>
          <p>
            Payments made at agreed-upon milestones (e.g., "Design Approval" or "Development Beta") are non-refundable. By approving a milestone and making a payment, the client acknowledges satisfaction with the work completed up to that point.
          </p>

          <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">3. Project Cancellation</h2>
          <p>
            If a client chooses to terminate a project before completion, they must provide written notice. The client will be invoiced for any unbilled hours or completed work that exceeds the initial deposit. No completed code or design assets will be transferred until all outstanding balances are settled.
          </p>

          <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">4. Digital Products/Retainers</h2>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Monthly maintenance retainers can be cancelled with a 30-day written notice; partial months are not refunded.</li>
            <li>Any downloadable templates or digital assets purchased directly from the site are strictly non-refundable.</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
