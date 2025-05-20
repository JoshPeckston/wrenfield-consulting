import React from 'react';
import Link from 'next/link';

// Placeholder data for existing tickets - in a real app, this would come from an API
const existingTickets = [
  {
    id: 'TICKET-001',
    subject: 'Inquiry about Web Dev Suite scalability',
    status: 'Resolved',
    lastUpdate: '2025-05-15',
    link: '#',
  },
  {
    id: 'TICKET-002',
    subject: 'Issue with Marketing Intel Matrix data sync',
    status: 'In Progress',
    lastUpdate: '2025-05-17',
    link: '#',
  },
  {
    id: 'BRIEF-003',
    subject: 'New Request: AI Agent for Customer Service',
    status: 'Awaiting Review',
    lastUpdate: '2025-05-16',
    link: '#',
  },
];

export default function SupportPage({ searchParams }: { searchParams?: { briefType?: string; subject?: string } }) {
  // Example: Use searchParams to pre-fill a form if linked from elsewhere
  const initialSubject = searchParams?.subject || '';
  const initialBriefType = searchParams?.briefType || 'general_support';

  return (
    <div className="p-6 md:p-8 text-off-white min-h-screen">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-mono text-terminal-green tracking-tight">
          Support Center & Brief Submission
        </h1>
        <p className="text-light-gray mt-1 text-sm md:text-base">
          Get assistance, report issues, or submit detailed briefs for new projects and tasks.
        </p>
      </header>

      {/* Submit New Brief/Ticket Section */}
      <section className="mb-12 bg-charcoal-gray p-6 shadow-lg border border-gray-700/60 rounded-md">
        <h2 className="text-2xl font-mono text-terminal-green/90 mb-4">
          Submit a New Brief / Ticket
        </h2>
        <p className="text-light-gray mb-4 text-sm">
          For new project requirements, feature requests, or technical support, please provide as much detail as possible. We'll use this information to route your request appropriately.
        </p>
        {/* This would ideally lead to a dedicated form page or modal */}
        {/* For now, a simple form placeholder: */}
        <form className="space-y-4">
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-terminal-green/80 mb-1">Subject / Title</label>
            <input type="text" name="subject" id="subject" defaultValue={initialSubject} className="w-full p-2.5 bg-deep-black border border-gray-600/80 rounded-md text-off-white placeholder-gray-500 focus:ring-1 focus:ring-terminal-green focus:border-terminal-green outline-none transition-colors" placeholder="e.g., New Landing Page Design, Bug Report: Login Issue" />
          </div>
          <div>
            <label htmlFor="briefType" className="block text-sm font-medium text-terminal-green/80 mb-1">Type of Request</label>
            <select id="briefType" name="briefType" defaultValue={initialBriefType} className="w-full p-2.5 bg-deep-black border border-gray-600/80 rounded-md text-off-white focus:ring-1 focus:ring-terminal-green focus:border-terminal-green outline-none transition-colors">
              <option value="new_project_brief">New Project Brief</option>
              <option value="new_service_request">New Service Request</option>
              <option value="technical_support">Technical Support</option>
              <option value="billing_inquiry">Billing Inquiry</option>
              <option value="general_feedback">General Feedback/Inquiry</option>
            </select>
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-terminal-green/80 mb-1">Detailed Description</label>
            <textarea id="description" name="description" rows={6} className="w-full p-2.5 bg-deep-black border border-gray-600/80 rounded-md text-off-white placeholder-gray-500 focus:ring-1 focus:ring-terminal-green focus:border-terminal-green outline-none transition-colors" placeholder="Please describe your requirements, issue, or question in detail..."></textarea>
          </div>
          <div>
            <label htmlFor="attachment" className="block text-sm font-medium text-terminal-green/80 mb-1">Attach Files (Optional)</label>
            <input type="file" name="attachment" id="attachment" className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-terminal-green/20 file:text-terminal-green hover:file:bg-terminal-green/30" />
          </div>
          <button
            type="submit" // This is a placeholder, actual submission logic needed
            className="bg-terminal-green text-deep-black font-mono py-2.5 px-6 rounded-md hover:bg-terminal-green/80 focus:outline-none focus:ring-2 focus:ring-terminal-green focus:ring-opacity-50 transition-colors duration-300 text-base shadow-md hover:shadow-lg"
          >
            Submit Request
          </button>
        </form>
      </section>

      {/* Existing Tickets Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-mono text-terminal-green/90 mb-4 border-b border-gray-700/60 pb-2">
          Your Submitted Briefs & Tickets
        </h2>
        {existingTickets.length > 0 ? (
          <div className="space-y-3">
            {existingTickets.map((ticket) => (
              <Link key={ticket.id} href={ticket.link} legacyBehavior>
                <a className="block bg-charcoal-gray p-4 shadow-md border border-gray-700/40 rounded-md hover:border-terminal-green/50 transition-colors duration-200">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                    <h3 className="text-off-white font-medium mb-1 sm:mb-0">{ticket.subject} <span className="text-xs text-gray-400">({ticket.id})</span></h3>
                    <span
                      className={`px-2.5 py-0.5 text-xs font-semibold rounded-full whitespace-nowrap ${ticket.status === 'Resolved' ? 'bg-gray-500/30 text-gray-300' : ticket.status === 'In Progress' ? 'bg-blue-500/20 text-blue-400' : 'bg-yellow-500/20 text-yellow-400'}
                      `}
                    >
                      {ticket.status}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Last Updated: {ticket.lastUpdate}</p>
                </a>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-gray-400 italic bg-charcoal-gray p-4 rounded-md border border-gray-700/40">You have no active or past support tickets/briefs.</p>
        )}
      </section>

      {/* Quick FAQ & Contact */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-charcoal-gray p-6 shadow-lg border border-gray-700/60 rounded-md">
          <h3 className="text-xl font-mono text-terminal-green/90 mb-3">Quick Links & FAQ</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="text-light-gray hover:text-terminal-green">How to submit an effective project brief?</Link></li>
            <li><Link href="#" className="text-light-gray hover:text-terminal-green">What are the support hours?</Link></li>
            <li><Link href="#" className="text-light-gray hover:text-terminal-green">Billing and invoice questions</Link></li>
          </ul>
        </div>
        <div className="bg-charcoal-gray p-6 shadow-lg border border-gray-700/60 rounded-md">
          <h3 className="text-xl font-mono text-terminal-green/90 mb-3">Direct Contact</h3>
          <p className="text-sm text-light-gray mb-1">Account Manager: <span className="text-off-white">[Client's Account Manager Name]</span></p>
          <p className="text-sm text-light-gray mb-1">Email: <a href="mailto:support@wrenfield.com" className="text-terminal-green hover:underline">support@wrenfield.com</a></p>
          <p className="text-sm text-light-gray">Phone: <span className="text-off-white">[Support Phone Number]</span></p>
        </div>
      </section>
    </div>
  );
}
