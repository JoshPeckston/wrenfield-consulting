'use client';
import React, { useState } from 'react';
import Link from 'next/link';

// Placeholder data for the service - in a real app, this would come from a CMS or API
const serviceDetails = {
  name: 'Web Development & Engineering',
  overview: 'We design, build, and scale cutting-edge web applications and digital platforms tailored to your specific business objectives. From complex enterprise solutions to sleek, high-conversion marketing sites, our engineering prowess ensures robust, scalable, and secure digital assets.',
  keyFeatures: [
    'Custom Web Application Development (React, Next.js, Node.js, Python)',
    'Enterprise Platform Engineering & System Architecture',
    'E-commerce Solutions & Payment Gateway Integrations',
    'API Development & Third-Party Service Integrations',
    'Headless CMS Implementation & Content Strategy',
    'Performance Optimization & Scalability Engineering',
    'Ongoing Maintenance, Security Audits & Support Packages',
  ],
  clientOutcomes: [
    'Accelerated time-to-market for new digital products.',
    'Enhanced user engagement and conversion rates.',
    'Scalable infrastructure ready for future growth.',
    'Improved operational efficiency through custom workflows.',
    'Secure and reliable platforms protecting your data and users.',
  ],
  cta: {
    text: 'Discuss Your Web Project',
    link: '/dashboard/support?subject=New%20Brief:%20Web%20Development%20Project&briefType=new_project_brief',
  },
  relatedCaseStudies: [
    { id: 'cs1', title: 'Case Study: Enterprise SaaS Platform for FinTech', link: '#' },
    { id: 'cs2', title: 'Case Study: High-Traffic E-commerce Site Launch', link: '#' },
  ]
};

export default function WebDevelopmentServicePage() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'tracker', label: 'Project Tracker' },
    { id: 'files', label: 'Files & Deliverables' },
    { id: 'communication', label: 'Communication' },
  ];

  return (
    <div className="p-6 md:p-8 text-off-white min-h-screen">
      {/* Header Section (remains above tabs) */}
      <header className="mb-8">
        <Link href="/dashboard/services" legacyBehavior>
          <a className="text-sm text-terminal-green hover:underline mb-2 inline-block">
            &larr; Back to My Services
          </a>
        </Link>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-mono text-terminal-green tracking-tight">
          {serviceDetails.name}
        </h1>
        <p className="text-light-gray mt-2 text-base md:text-lg max-w-3xl">
          {serviceDetails.overview}
        </p>
      </header>

      {/* Tab Navigation */}
      <nav className="mb-8 border-b border-gray-700">
        <ul className="flex flex-wrap -mb-px">
          {tabs.map(tab => (
            <li key={tab.id} className="mr-1">
              <button
                onClick={() => setActiveTab(tab.id)}
                className={`inline-block py-3 px-4 text-sm font-mono rounded-t-lg transition-colors duration-150 
                            ${activeTab === tab.id 
                              ? 'border-b-2 border-terminal-green text-terminal-green bg-charcoal-gray/30'
                              : 'text-gray-400 hover:text-terminal-green/80 hover:border-gray-500/70 border-transparent border-b-2'}`}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <main className="lg:col-span-2 space-y-8">
              <section className="bg-charcoal-gray p-6 shadow-lg border border-gray-700/60 rounded-md">
                <h2 className="text-2xl font-mono text-terminal-green/90 mb-4">
                  Key Features & Capabilities
                </h2>
                <ul className="space-y-2 text-light-gray list-disc list-inside">
                  {serviceDetails.keyFeatures.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </section>

              <section className="bg-charcoal-gray p-6 shadow-lg border border-gray-700/60 rounded-md">
                <h2 className="text-2xl font-mono text-terminal-green/90 mb-4">
                  Expected Client Outcomes
                </h2>
                <ul className="space-y-2 text-light-gray list-disc list-inside">
                  {serviceDetails.clientOutcomes.map((outcome, index) => (
                    <li key={index}>{outcome}</li>
                  ))}
                </ul>
              </section>
            </main>

            <aside className="lg:col-span-1 space-y-6">
              <div className="bg-charcoal-gray p-6 shadow-lg border border-terminal-green/30 rounded-md">
                <h3 className="text-xl font-mono text-terminal-green mb-4">Engage Our Experts</h3>
                <p className='text-sm text-light-gray mb-4'>Ready to start building or need to scale your existing web infrastructure? Let's connect.</p>
                <Link href={serviceDetails.cta.link} legacyBehavior>
                  <a className="block w-full text-center font-mono py-3 px-6 rounded-md transition-colors duration-300 bg-terminal-green text-deep-black hover:bg-terminal-green/80 shadow-md hover:shadow-lg">
                    {serviceDetails.cta.text}
                  </a>
                </Link>
              </div>
              
              {serviceDetails.relatedCaseStudies.length > 0 && (
                <div className="bg-charcoal-gray p-6 shadow-lg border border-gray-700/60 rounded-md">
                  <h3 className="text-xl font-mono text-terminal-green/90 mb-4">Relevant Case Studies</h3>
                  <ul className="space-y-2">
                    {serviceDetails.relatedCaseStudies.map(cs => (
                      <li key={cs.id}>
                        <Link href={cs.link} legacyBehavior>
                          <a className="text-light-gray hover:text-terminal-green hover:underline text-sm">
                            {cs.title} &rarr;
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        )}

        {activeTab === 'tracker' && (
          <div className="bg-charcoal-gray p-6 shadow-lg border border-gray-700/60 rounded-md space-y-10">
            <h2 className="text-2xl font-mono text-terminal-green/90 mb-6">Web Development Project Dashboard</h2>

            {/* Project Health & Quick Links */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Current Phase & Status</h3>
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50">
                  <p className="text-light-gray"><span className="font-semibold text-terminal-green/70">Current Phase:</span> Design & Prototyping</p>
                  <p className="text-light-gray"><span className="font-semibold text-terminal-green/70">Overall Progress:</span> 35%</p>
                  <div className="w-full bg-gray-600 rounded-full h-2.5 mt-2">
                    <div className="bg-terminal-green h-2.5 rounded-full" style={{ width: '35%' }}></div>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Next Milestone: Initial Prototype Review</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Staging & Demo Environments</h3>
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50 space-y-2">
                  <a href="#" className="block text-sm text-terminal-green hover:underline">Staging Server &rarr;</a>
                  <a href="#" className="block text-sm text-terminal-green hover:underline">Latest Demo Build (v0.3.1) &rarr;</a>
                  <p className="text-xs text-gray-500">Credentials in shared vault.</p>
                </div>
              </div>
            </section>

            {/* Milestones & Phased Progress */}
            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Milestone Tracker & Timeline</h3>
              <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50 space-y-3 mb-4">
                {/* Milestone Item Example */}
                <div className="flex justify-between items-center p-2 border-b border-gray-700/30">
                  <span className="text-light-gray">Phase 1: Discovery & Planning</span>
                  <span className="text-xs py-1 px-2 bg-green-500/30 text-green-300 rounded-full">Completed</span>
                </div>
                <div className="flex justify-between items-center p-2 border-b border-gray-700/30">
                  <span className="text-light-gray">Phase 2: Design & Prototyping</span>
                  <span className="text-xs py-1 px-2 bg-blue-500/30 text-blue-300 rounded-full">In Progress</span>
                </div>
                <div className="flex justify-between items-center p-2 border-b border-gray-700/30">
                  <span className="text-light-gray">Phase 3: Development</span>
                  <span className="text-xs py-1 px-2 bg-gray-500/30 text-gray-300 rounded-full">To Do</span>
                </div>
                <div className="flex justify-between items-center p-2">
                  <span className="text-light-gray">Phase 4: Testing & QA</span>
                  <span className="text-xs py-1 px-2 bg-gray-500/30 text-gray-300 rounded-full">To Do</span>
                </div>
              </div>
              <div className="bg-deep-gray p-6 rounded-md border-2 border-dashed border-gray-700/50 min-h-[200px] flex items-center justify-center">
                <p className="text-gray-500 text-center">Placeholder for interactive Gantt Chart / Project Timeline visualization.</p>
              </div>
            </section>

            {/* Task Management */}
            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Task Management</h3>
              <div className="bg-deep-gray p-6 rounded-md border-2 border-dashed border-gray-700/50 min-h-[300px] flex items-center justify-center">
                <p className="text-gray-500 text-center">Placeholder for embedded Kanban Board (e.g., Trello, Jira) or task list.</p>
              </div>
            </section>
            
            {/* Key Deliverables Section */}
            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Key Deliverables</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Deliverable Card Example */}
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50">
                  <h4 className="font-semibold text-terminal-green/90">Project Proposal & Scope</h4>
                  <p className="text-xs text-gray-400 mb-1">Status: Approved</p>
                  <a href="#" className="text-xs text-terminal-green hover:underline">View Document &rarr;</a>
                </div>
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50">
                  <h4 className="font-semibold text-terminal-green/90">UI/UX Wireframes (High-Fidelity)</h4>
                  <p className="text-xs text-gray-400 mb-1">Status: In Review</p>
                  <a href="#" className="text-xs text-terminal-green hover:underline">Access Figma Link &rarr;</a>
                </div>
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50">
                  <h4 className="font-semibold text-terminal-green/90">Initial Backend API Specs</h4>
                  <p className="text-xs text-gray-400 mb-1">Status: Drafted</p>
                  <a href="#" className="text-xs text-terminal-green hover:underline">Read Specs &rarr;</a>
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-4">Full list of files and version history available in the 'Files & Deliverables' tab.</p>
            </section>

          </div>
        )}

        {activeTab === 'files' && (
          <div className="bg-charcoal-gray p-6 shadow-lg border border-gray-700/60 rounded-md space-y-10">
            <h2 className="text-2xl font-mono text-terminal-green/90 mb-6">Files & Deliverables Repository</h2>

            {/* Document Repository Access & Search Section */}
            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Document Library Access</h3>
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <input 
                  type="search" 
                  placeholder="Search Files (e.g., 'wireframe', 'contract', 'report')" 
                  className="flex-grow p-2 bg-deep-gray border border-gray-600 rounded-md text-light-gray placeholder-gray-500 focus:ring-terminal-green focus:border-terminal-green text-sm"
                />
                <button className="py-2 px-4 bg-terminal-green/80 text-deep-black font-mono rounded-md hover:bg-terminal-green transition-colors text-sm">
                  Search Files
                </button>
              </div>
              <a href="#" className="inline-block text-sm text-terminal-green hover:underline">Access Full Version History & Archive &rarr;</a>
            </section>

            {/* Document Library Section */}
            <section>
              <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
                <h3 className="text-xl font-mono text-terminal-green/80 mb-3 sm:mb-0">Key Project Deliverables & Documents</h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-400">Filter by:</span>
                  <select className="p-2 bg-deep-gray border border-gray-600 rounded-md text-light-gray focus:ring-terminal-green focus:border-terminal-green text-sm">
                    <option value="all">All Types</option>
                    <option value="design">Design Assets</option>
                    <option value="technical">Technical Docs</option>
                    <option value="reports">Reports</option>
                    <option value="proposals">Proposals & Contracts</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-3">
                {/* File Item Example 1 */}
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div>
                    <h4 className="font-semibold text-terminal-green/90">Final UI/UX Wireframes (v2.1)</h4>
                    <p className="text-xs text-gray-400">Type: Design Asset (Figma) | Uploaded: 2025-06-15</p>
                  </div>
                  <div className="flex gap-2 mt-2 sm:mt-0">
                    <a href="#" className="text-xs py-1 px-2 bg-terminal-green/70 text-deep-black rounded hover:bg-terminal-green/90">Open in Figma</a>
                    <a href="#" className="text-xs py-1 px-2 bg-gray-600 text-light-gray rounded hover:bg-gray-500">Download PDF</a>
                  </div>
                </div>
                {/* File Item Example 2 */}
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div>
                    <h4 className="font-semibold text-terminal-green/90">Backend API Documentation (v1.3)</h4>
                    <p className="text-xs text-gray-400">Type: Technical Doc (Markdown) | Last Updated: 2025-07-01</p>
                  </div>
                  <div className="flex gap-2 mt-2 sm:mt-0">
                    <a href="#" className="text-xs py-1 px-2 bg-terminal-green/70 text-deep-black rounded hover:bg-terminal-green/90">View Docs</a>
                    <a href="#" className="text-xs py-1 px-2 bg-gray-600 text-light-gray rounded hover:bg-gray-500">Export as PDF</a>
                  </div>
                </div>
                {/* File Item Example 3 */}
                 <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div>
                    <h4 className="font-semibold text-terminal-green/90">Project Proposal & SOW (Approved)</h4>
                    <p className="text-xs text-gray-400">Type: Proposal (PDF) | Signed: 2025-03-10</p>
                  </div>
                  <div className="flex gap-2 mt-2 sm:mt-0">
                    <a href="#" className="text-xs py-1 px-2 bg-terminal-green/70 text-deep-black rounded hover:bg-terminal-green/90">View Document</a>
                  </div>
                </div>
              </div>
              <a href="#" className="inline-block mt-4 text-sm text-terminal-green hover:underline">Browse All Files & Deliverables &rarr;</a>
            </section>

            {/* Document Preview Section */}
            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">File Preview</h3>
              <div className="bg-deep-gray p-6 rounded-md border-2 border-dashed border-gray-700/50 min-h-[300px] flex items-center justify-center">
                <p className="text-gray-500 text-center">Select a file to preview its contents or details here.</p>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'communication' && (
          <div className="bg-charcoal-gray p-6 shadow-lg border border-gray-700/60 rounded-md space-y-10">
            <h2 className="text-2xl font-mono text-terminal-green/90 mb-6">Communication & Scheduling</h2>

            {/* Communication Log/Chat Section */}
            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Project Updates & Chat</h3>
              <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50 space-y-4">
                <div className="max-h-96 overflow-y-auto space-y-3 p-3 bg-black/20 rounded-md">
                  {/* Example Logged Message */}
                  <div className="p-3 bg-deep-gray/50 rounded-md border border-gray-600/50">
                    <p className="text-xs text-gray-400"><strong>Project Manager</strong> - 2025-07-15 10:30 AM</p>
                    <p className="text-light-gray/90">Backend API integration for user authentication is complete. Frontend team to begin integration next week. Updated timeline is available in 'Files & Deliverables'.</p>
                  </div>
                  {/* Example Logged Message 2*/}
                  <div className="p-3 bg-deep-gray/50 rounded-md border border-gray-600/50">
                    <p className="text-xs text-gray-400"><strong>Lead Developer</strong> - 2025-07-14 02:15 PM</p>
                    <p className="text-light-gray/90">Encountered a minor challenge with the payment gateway sandbox. Resolved now. No impact on timeline.</p>
                  </div>
                </div>
                <div className="mt-4 flex gap-3">
                  <textarea placeholder="Type your message or update here..." rows={3} className="flex-grow p-2 bg-black/30 border border-gray-600 rounded-md text-light-gray placeholder-gray-500 focus:ring-terminal-green focus:border-terminal-green text-sm"></textarea>
                  <button className="self-end py-2 px-4 bg-terminal-green text-deep-black font-mono rounded-md hover:bg-terminal-green/80 transition-colors h-fit">Send Message</button>
                </div>
                <p className="text-xs text-gray-500 text-center">Placeholder for full embedded Chat (e.g., Slack channel feed) or formal Communication Log.</p>
              </div>
            </section>

            {/* Meeting Scheduler Section */}
            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Meeting Scheduler</h3>
              <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50 space-y-3">
                <p className="text-light-gray/90"><span className="font-semibold text-terminal-green/70">Next Scheduled Check-in:</span> July 22nd, 2025 - Agenda: Sprint Review & Planning.</p>
                <div className="bg-deep-gray p-6 rounded-md border-2 border-dashed border-gray-700/50 min-h-[200px] flex flex-col items-center justify-center">
                  <p className="text-gray-500 text-center mb-4">Placeholder for embedded Meeting Scheduler (e.g., Calendly).</p>
                  <button className="py-2 px-4 bg-terminal-green text-deep-black font-mono rounded-md hover:bg-terminal-green/80 transition-colors">
                    Schedule New Meeting / View Calendar
                  </button>
                </div>
                <a href="#" className="text-xs text-terminal-green hover:underline mt-2 inline-block">View Past Meeting Agendas & Recordings &rarr;</a>
              </div>
            </section>

          </div>
        )}
      </div>
    </div>
  );
}
