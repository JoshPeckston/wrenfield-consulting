'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const serviceDetails = {
  name: 'Business Management & Operational Support',
  overview: 'We provide strategic business management support to streamline your operations, enhance productivity, and implement robust systems for sustainable growth. From process optimization to change management, we help you build a resilient and efficient organization.',
  keyFeatures: [
    'Business Process Analysis & Re-engineering',
    'Standard Operating Procedure (SOP) Development & Implementation',
    'Project Management & Program Oversight',
    'Change Management & Organizational Development',
    'Performance Metrics & KPI Dashboard Setup',
    'Supply Chain & Logistics Optimization',
    'Fractional COO/Operations Management Services',
  ],
  clientOutcomes: [
    'Improved operational efficiency and reduced overhead.',
    'Clear, documented processes for consistency and scalability.',
    'Successful execution of strategic projects and initiatives.',
    'Smoother adoption of new technologies and workflows.',
    'Data-driven decision-making capabilities.',
    'Enhanced organizational resilience and adaptability.',
  ],
  cta: {
    text: 'Optimize Your Operations',
    link: '/dashboard/support?subject=New%20Brief:%20Business%20Management%20Support&briefType=new_project_brief',
  },
  relatedCaseStudies: [
    { id: 'cs1', title: 'Case Study: Streamlining Operations for a Growth-Stage Company', link: '#' },
    { id: 'cs2', title: 'Case Study: Implementing New ERP System Across Enterprise', link: '#' },
  ]
};

export default function BusinessManagementServicePage() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'retainer', label: 'Management Retainer Overview' },
    { id: 'initiatives', label: 'Initiatives Tracker' },
    { id: 'docs', label: 'Documents & SOPs' },
    { id: 'consultation', label: 'Consultation Hub' },
  ];

  return (
    <div className="p-6 md:p-8 text-off-white min-h-screen">
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
                <h3 className="text-xl font-mono text-terminal-green mb-4">Streamline & Scale</h3>
                <p className='text-sm text-light-gray mb-4'>Ready to enhance efficiency and build for growth? Partner with our operations experts.</p>
                <Link href={serviceDetails.cta.link} legacyBehavior>
                  <a className="block w-full text-center font-mono py-3 px-6 rounded-md transition-colors duration-300 bg-terminal-green text-deep-black hover:bg-terminal-green/80 shadow-md hover:shadow-lg">
                    {serviceDetails.cta.text}
                  </a>
                </Link>
              </div>
              
              {serviceDetails.relatedCaseStudies.length > 0 && (
                <div className="bg-charcoal-gray p-6 shadow-lg border border-gray-700/60 rounded-md">
                  <h3 className="text-xl font-mono text-terminal-green/90 mb-4">Operational Wins</h3>
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

        {activeTab === 'retainer' && (
          <div className="bg-charcoal-gray p-6 shadow-lg border border-gray-700/60 rounded-md space-y-10">
            <h2 className="text-2xl font-mono text-terminal-green/90 mb-6">Management Retainer Overview</h2>

            {/* Retainer Scope & Engagement */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50">
                <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Retainer Engagement (Current Cycle)</h3>
                <p className="text-light-gray"><span className="font-semibold text-terminal-green/70">Advisory Hours:</span> 25 / 40 hours used</p>
                <div className="w-full bg-gray-600 rounded-full h-2.5 mt-1 mb-2">
                  <div className="bg-terminal-green h-2.5 rounded-full" style={{ width: `${(25/40)*100}%` }}></div>
                </div>
                <p className="text-light-gray"><span className="font-semibold text-terminal-green/70">Key Focus Areas:</span> Q2 Process Audit, Leadership Team Coaching, SOP Framework.</p>
                <p className="text-xs text-gray-400 mt-2">Cycle renewal: July 1, 2025</p>
              </div>
              <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50">
                <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Strategic Review Cadence</h3>
                <p className="text-light-gray"><span className="font-semibold text-terminal-green/70">Next Strategic Review:</span> June 10, 2025</p>
                <p className="text-sm text-gray-400 mt-1">Topics: Review Process Audit findings, Q3 Roadmap Planning.</p>
                <a href="#" className="text-xs text-terminal-green hover:underline mt-2 inline-block">Access Review Materials &rarr;</a>
              </div>
            </section>

            {/* Key Performance Indicators (KPI) Snapshot */}
            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">KPI Snapshot (Relevant to Retainer Focus)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50">
                  <p className="text-sm text-gray-400">Avg. Sales Cycle Length</p>
                  <p className="text-2xl font-mono text-terminal-green">45 Days <span className="text-sm text-red-400">(↑ 5%)</span></p>
                  <p className="text-xs text-gray-500">Target: &lt; 40 Days</p>
                </div>
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50">
                  <p className="text-sm text-gray-400">Employee Productivity Score</p>
                  <p className="text-2xl font-mono text-terminal-green">8.2/10 <span className="text-sm text-green-400">(↑ 0.5)</span></p>
                  <p className="text-xs text-gray-500">Target: &gt; 8.5</p>
                </div>
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50">
                  <p className="text-sm text-gray-400">Operational Cost Reduction</p>
                  <p className="text-2xl font-mono text-terminal-green">$5.2k <span className="text-sm text-green-400">(YTD)</span></p>
                  <p className="text-xs text-gray-500">Q2 Target: $7.5k</p>
                </div>
              </div>
            </section>

            {/* Activity & Deliverables Log */}
            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Activity & Deliverables Log</h3>
              <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50 max-h-96 overflow-y-auto">
                <ul className="space-y-3 text-sm">
                  <li className="border-b border-gray-700/30 pb-2">
                    <span className="font-semibold text-terminal-green/70">May 15, 2025:</span> <span className="text-light-gray">Workshop: Sales Process Mapping (Output: Draft Process Flow).</span>
                  </li>
                  <li className="border-b border-gray-700/30 pb-2">
                    <span className="font-semibold text-terminal-green/70">May 12, 2025:</span> <span className="text-light-gray">Delivered: Q1 Financial Performance Review & Recommendations.</span>
                  </li>
                  <li className="border-b border-gray-700/30 pb-2">
                    <span className="font-semibold text-terminal-green/70">May 10, 2025:</span> <span className="text-light-gray">Coaching Session: Leadership Team (Focus: Change Management).</span>
                  </li>
                  <li>
                    <span className="font-semibold text-terminal-green/70">May 05, 2025:</span> <span className="text-light-gray">Consultation: SOP Framework Design for HR Department.</span>
                  </li>
                  {/* Add more log items here */}
                </ul>
              </div>
            </section>

            {/* Recurring Support & Advisory Tasks */}
            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Recurring Support Schedule</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-deep-gray p-3 rounded-md border border-gray-700/50">
                  <label className="flex items-center space-x-2 text-light-gray">
                    <input type="checkbox" className="form-checkbox bg-charcoal-gray border-gray-600 text-terminal-green focus:ring-terminal-green/50" defaultChecked />
                    <span>Weekly Operational Check-in Call (Mon 10 AM)</span>
                  </label>
                </div>
                <div className="bg-deep-gray p-3 rounded-md border border-gray-700/50">
                  <label className="flex items-center space-x-2 text-light-gray">
                    <input type="checkbox" className="form-checkbox bg-charcoal-gray border-gray-600 text-terminal-green focus:ring-terminal-green/50" />
                    <span>Bi-Weekly KPI Dashboard Review & Report</span>
                  </label>
                </div>
                <div className="bg-deep-gray p-3 rounded-md border border-gray-700/50">
                  <label className="flex items-center space-x-2 text-light-gray">
                    <input type="checkbox" className="form-checkbox bg-charcoal-gray border-gray-600 text-terminal-green focus:ring-terminal-green/50" />
                    <span>Monthly Strategic Advisory Session (1st Fri)</span>
                  </label>
                </div>
                <div className="bg-deep-gray p-3 rounded-md border border-gray-700/50">
                  <label className="flex items-center space-x-2 text-light-gray">
                    <input type="checkbox" className="form-checkbox bg-charcoal-gray border-gray-600 text-terminal-green focus:ring-terminal-green/50" defaultChecked />
                    <span>Quarterly Business Review (QBR) Prep</span>
                  </label>
                </div>
              </div>
            </section>

          </div>
        )}

        {activeTab === 'initiatives' && (
          <div className="bg-charcoal-gray p-6 shadow-lg border border-gray-700/60 rounded-md space-y-10">
            <h2 className="text-2xl font-mono text-terminal-green/90 mb-6">Business Initiatives Dashboard</h2>

            {/* Initiative Health & Quick Links */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Current Initiative Status</h3>
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50">
                  <p className="text-light-gray"><span className="font-semibold text-terminal-green/70">Focus Initiative:</span> Q3 Sales Process Optimization</p>
                  <p className="text-light-gray"><span className="font-semibold text-terminal-green/70">Overall Progress:</span> 45%</p>
                  <div className="w-full bg-gray-600 rounded-full h-2.5 mt-2">
                    <div className="bg-terminal-green h-2.5 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Next Major Review: Sales SOP Draft Review</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Quick Links & Tools</h3>
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50 space-y-2">
                  <a href="#" className="block text-sm text-terminal-green hover:underline">Project Management Portal &rarr;</a>
                  <a href="#" className="block text-sm text-terminal-green hover:underline">Shared Process Maps (Lucidchart) &rarr;</a>
                  <a href="#" className="block text-sm text-terminal-green hover:underline">Performance Analytics Dashboard &rarr;</a>
                  <p className="text-xs text-gray-500">Access credentials in shared vault.</p>
                </div>
              </div>
            </section>

            {/* Milestones & Phased Progress */}
            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Key Milestones & Timeline</h3>
              <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50 space-y-3 mb-4">
                <div className="flex justify-between items-center p-2 border-b border-gray-700/30">
                  <span className="text-light-gray">Phase 1: Discovery & Analysis</span>
                  <span className="text-xs py-1 px-2 bg-green-500/30 text-green-300 rounded-full">Completed</span>
                </div>
                <div className="flex justify-between items-center p-2 border-b border-gray-700/30">
                  <span className="text-light-gray">Phase 2: Process Design & SOP Draft</span>
                  <span className="text-xs py-1 px-2 bg-blue-500/30 text-blue-300 rounded-full">In Progress</span>
                </div>
                <div className="flex justify-between items-center p-2 border-b border-gray-700/30">
                  <span className="text-light-gray">Milestone: Sales SOP Draft Review (July 25th, 2025)</span>
                  <span className="text-xs py-1 px-2 bg-gray-500/30 text-gray-300 rounded-full">Upcoming</span>
                </div>
                <div className="flex justify-between items-center p-2 border-b border-gray-700/30">
                  <span className="text-light-gray">Milestone: Change Management Plan Presentation (August 5th, 2025)</span>
                  <span className="text-xs py-1 px-2 bg-gray-500/30 text-gray-300 rounded-full">Upcoming</span>
                </div>
                <div className="flex justify-between items-center p-2">
                  <span className="text-light-gray">Phase 3: Implementation & Training</span>
                  <span className="text-xs py-1 px-2 bg-gray-500/30 text-gray-300 rounded-full">To Do</span>
                </div>
              </div>
              <div className="bg-deep-gray p-6 rounded-md border-2 border-dashed border-gray-700/50 min-h-[200px] flex items-center justify-center">
                <p className="text-gray-500 text-center">Placeholder for interactive Gantt Chart / Initiative Timeline visualization.</p>
              </div>
            </section>

            {/* Task Management / Next Steps */}
            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Next Steps & Action Items</h3>
              <div className="bg-deep-gray p-6 rounded-md border-2 border-dashed border-gray-700/50 min-h-[300px] flex items-center justify-center">
                <p className="text-gray-500 text-center">Placeholder for embedded Kanban Board (e.g., Trello, Asana) or detailed task list for current initiatives.</p>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'docs' && (
          // This tab serves as the File Repository
          <div className="bg-charcoal-gray p-6 shadow-lg border border-gray-700/60 rounded-md space-y-8">
            <h2 className="text-2xl font-mono text-terminal-green/90 mb-6">Business Documents & SOPs Hub</h2>

            {/* Document Repository Access & Search Section */}
            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Central Document Repository</h3>
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <input 
                  type="search" 
                  placeholder="Quick Search Documents (e.g., 'HR policy', 'Q3 report')" 
                  className="flex-grow p-2 bg-deep-gray border border-gray-600 rounded-md text-light-gray placeholder-gray-500 focus:ring-terminal-green focus:border-terminal-green text-sm"
                />
                <button className="py-2 px-4 bg-terminal-green/80 text-deep-black font-mono rounded-md hover:bg-terminal-green transition-colors text-sm">
                  Search Documents
                </button>
              </div>
              <a href="#" className="inline-block text-sm text-terminal-green hover:underline">Access Full Document Repository &rarr;</a>
            </section>

            {/* Document Library Section */}
            <section>
              <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
                <h3 className="text-xl font-mono text-terminal-green/80 mb-3 sm:mb-0">Key Documents & SOPs</h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-400">Filter by:</span>
                  <select className="p-2 bg-deep-gray border border-gray-600 rounded-md text-light-gray focus:ring-terminal-green focus:border-terminal-green text-sm">
                    <option value="all">All Categories</option>
                    <option value="policy">Policies</option>
                    <option value="sop">SOPs</option>
                    <option value="template">Templates</option>
                    <option value="report">Reports</option>
                    <option value="guide">Guidelines</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-3">
                {/* Document Item Example 1 */}
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div>
                    <h4 className="font-semibold text-terminal-green/90">Employee Handbook 2025</h4>
                    <p className="text-xs text-gray-400">Category: Policy | Version: 3.1 | Last Modified: 2025-05-01</p>
                  </div>
                  <div className="flex gap-2 mt-2 sm:mt-0">
                    <a href="#" className="text-xs py-1 px-2 bg-terminal-green/70 text-deep-black rounded hover:bg-terminal-green/90">View</a>
                    <a href="#" className="text-xs py-1 px-2 bg-gray-600 text-light-gray rounded hover:bg-gray-500">Download</a>
                  </div>
                </div>
                {/* Document Item Example 2 */}
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div>
                    <h4 className="font-semibold text-terminal-green/90">Financial Reporting SOP</h4>
                    <p className="text-xs text-gray-400">Category: SOP | Status: Approved | Last Modified: 2025-04-18</p>
                  </div>
                  <div className="flex gap-2 mt-2 sm:mt-0">
                    <a href="#" className="text-xs py-1 px-2 bg-terminal-green/70 text-deep-black rounded hover:bg-terminal-green/90">View</a>
                    <a href="#" className="text-xs py-1 px-2 bg-gray-600 text-light-gray rounded hover:bg-gray-500">History</a>
                  </div>
                </div>
                {/* Document Item Example 3 */}
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div>
                    <h4 className="font-semibold text-terminal-green/90">Quarterly Business Review (QBR) Template</h4>
                    <p className="text-xs text-gray-400">Category: Template | Version: 1.5 | Last Modified: 2025-03-20</p>
                  </div>
                  <div className="flex gap-2 mt-2 sm:mt-0">
                    <a href="#" className="text-xs py-1 px-2 bg-terminal-green/70 text-deep-black rounded hover:bg-terminal-green/90">Use Template</a>
                    <a href="#" className="text-xs py-1 px-2 bg-gray-600 text-light-gray rounded hover:bg-gray-500">Details</a>
                  </div>
                </div>
                 {/* Document Item Example 4 */}
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div>
                    <h4 className="font-semibold text-terminal-green/90">Annual Operations Report 2024</h4>
                    <p className="text-xs text-gray-400">Category: Report | Status: Published | Last Modified: 2025-02-10</p>
                  </div>
                  <div className="flex gap-2 mt-2 sm:mt-0">
                    <a href="#" className="text-xs py-1 px-2 bg-terminal-green/70 text-deep-black rounded hover:bg-terminal-green/90">View Report</a>
                  </div>
                </div>
              </div>
              <a href="#" className="inline-block mt-4 text-sm text-terminal-green hover:underline">Browse All Business Documents &rarr;</a>
            </section>

            {/* Document Preview Section */}
            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Document Preview</h3>
              <div className="bg-deep-gray p-6 rounded-md border-2 border-dashed border-gray-700/50 min-h-[300px] flex items-center justify-center">
                <p className="text-gray-500 text-center">Select a document to preview its contents here.<br/>(e.g., embedded PDF viewer, rich text preview)</p>
              </div>
            </section>

          </div>
        )}

        {activeTab === 'consultation' && (
          <div className="bg-charcoal-gray p-6 shadow-lg border border-gray-700/60 rounded-md space-y-10">
            <h2 className="text-2xl font-mono text-terminal-green/90 mb-6">Consultation & Communication Hub</h2>

            {/* Meeting Scheduler Section */}
            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Meeting Scheduler</h3>
              <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50 space-y-3">
                <p className="text-light-gray/90"><span className="font-semibold text-terminal-green/70">Next Scheduled Meeting:</span> July 20th, 2025 - Agenda: Review Q2 KPIs.</p>
                <div className="bg-deep-gray p-6 rounded-md border-2 border-dashed border-gray-700/50 min-h-[200px] flex flex-col items-center justify-center">
                  <p className="text-gray-500 text-center mb-4">Placeholder for embedded Meeting Scheduler (e.g., Calendly).</p>
                  <button className="py-2 px-4 bg-terminal-green text-deep-black font-mono rounded-md hover:bg-terminal-green/80 transition-colors">
                    Request Ad-hoc Meeting / View Calendar
                  </button>
                </div>
                <a href="#" className="text-xs text-terminal-green hover:underline mt-2 inline-block">View Past Meeting Notes & Recordings &rarr;</a>
              </div>
            </section>

            {/* Communication Log/Chat Section */}
            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Communication Log / Chat</h3>
              <div className="bg-deep-gray p-6 rounded-md border-2 border-dashed border-gray-700/50 min-h-[300px] flex items-center justify-center">
                <p className="text-gray-500 text-center">Placeholder for Communication Log or Embedded Chat Interface (e.g., Slack channel feed, direct message history).</p>
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
