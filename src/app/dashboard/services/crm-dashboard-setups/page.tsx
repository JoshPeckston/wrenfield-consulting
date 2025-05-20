'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const serviceDetails = {
  name: 'CRM Implementation & Custom Dashboard Solutions',
  overview: 'We configure, customize, and deploy Customer Relationship Management (CRM) systems and build intuitive data dashboards that provide actionable insights. Transform your data into a strategic asset and empower your teams with the tools they need for success.',
  keyFeatures: [
    'CRM Platform Selection & Strategy (e.g., Salesforce, HubSpot, Zoho)',
    'Custom CRM Configuration & Workflow Automation',
    'Data Migration & Integration with Other Business Systems',
    'Custom Dashboard Design & Development (e.g., Tableau, Power BI, Google Data Studio)',
    'Real-time Data Visualization & Reporting Solutions',
    'User Training & Adoption Programs for CRM & Dashboards',
    'Ongoing Support & Optimization for CRM/Dashboard Performance',
  ],
  clientOutcomes: [
    'Streamlined sales, marketing, and customer service processes.',
    'A unified view of customer data and interactions (360-degree view).',
    'Improved data accuracy and accessibility for decision-making.',
    'Enhanced team productivity and collaboration.',
    'Clear visibility into key performance indicators (KPIs).',
    'Higher user adoption rates for new systems.',
  ],
  cta: {
    text: 'Implement Your Data Solution',
    link: '/dashboard/support?subject=New%20Brief:%20CRM%20or%20Dashboard%20Setup&briefType=new_project_brief',
  },
  relatedCaseStudies: [
    { id: 'cs1', title: 'Case Study: Salesforce Implementation for a Sales Team', link: '#' },
    { id: 'cs2', title: 'Case Study: Executive KPI Dashboard for Retail Chain', link: '#' },
  ]
};

export default function CrmDashboardSetupsServicePage() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'config', label: 'Configuration & Design' },
    { id: 'collaborationHub', label: 'Collaboration Hub' }, // New Tab
    { id: 'integrations', label: 'Integrations & Data' },
    { id: 'support', label: 'Training & Support' },
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
                <h3 className="text-xl font-mono text-terminal-green mb-4">Unlock Your Data</h3>
                <p className='text-sm text-light-gray mb-4'>Ready to harness the power of your data? Let\'s build your custom CRM and dashboard solutions.</p>
                <Link href={serviceDetails.cta.link} legacyBehavior>
                  <a className="block w-full text-center font-mono py-3 px-6 rounded-md transition-colors duration-300 bg-terminal-green text-deep-black hover:bg-terminal-green/80 shadow-md hover:shadow-lg">
                    {serviceDetails.cta.text}
                  </a>
                </Link>
              </div>
              
              {serviceDetails.relatedCaseStudies.length > 0 && (
                <div className="bg-charcoal-gray p-6 shadow-lg border border-gray-700/60 rounded-md">
                  <h3 className="text-xl font-mono text-terminal-green/90 mb-4">Data-Driven Wins</h3>
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

        {activeTab === 'collaborationHub' && (
          <div className="bg-charcoal-gray p-6 shadow-lg border border-gray-700/60 rounded-md space-y-10">
            <h2 className="text-2xl font-mono text-terminal-green/90 mb-6">Collaboration Hub</h2>

            {/* Meeting Scheduler Section */}
            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Meeting Scheduler</h3>
              <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50 space-y-3">
                <p className="text-light-gray/90"><span className="font-semibold text-terminal-green/70">Next Scheduled Project Sync:</span> August 5th, 2025 - Agenda: Review UAT Feedback.</p>
                <div className="bg-deep-gray p-6 rounded-md border-2 border-dashed border-gray-700/50 min-h-[200px] flex flex-col items-center justify-center">
                  <p className="text-gray-500 text-center mb-4">Placeholder for embedded Meeting Scheduler (e.g., Calendly).</p>
                  <button className="py-2 px-4 bg-terminal-green text-deep-black font-mono rounded-md hover:bg-terminal-green/80 transition-colors">
                    Schedule New Meeting / View Calendar
                  </button>
                </div>
                <a href="#" className="text-xs text-terminal-green hover:underline mt-2 inline-block">View Past Meeting Notes & Recordings &rarr;</a>
              </div>
            </section>

            {/* Communication Log/Chat Section */}
            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Communication Log / Chat</h3>
              <div className="bg-deep-gray p-6 rounded-md border-2 border-dashed border-gray-700/50 min-h-[300px] flex items-center justify-center">
                <p className="text-gray-500 text-center">Placeholder for Communication Log or Embedded Chat Interface for this project.</p>
              </div>
            </section>

            {/* General File Repository Section */}
            <section>
              <h2 className="text-2xl font-mono text-terminal-green/90 mb-6">Project Documents & Files</h2>
                {/* Document Repository Access & Search Section */}
                <section className="mb-8">
                  <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Central Document Library</h3>
                  <div className="flex flex-col sm:flex-row gap-4 mb-4">
                    <input 
                      type="search" 
                      placeholder="Search Project Documents (e.g., 'meeting notes', 'status report')" 
                      className="flex-grow p-2 bg-deep-gray border border-gray-600 rounded-md text-light-gray placeholder-gray-500 focus:ring-terminal-green focus:border-terminal-green text-sm"
                    />
                    <button className="py-2 px-4 bg-terminal-green/80 text-deep-black font-mono rounded-md hover:bg-terminal-green transition-colors text-sm">
                      Search Documents
                    </button>
                  </div>
                  <a href="#" className="inline-block text-sm text-terminal-green hover:underline">Access Full Project Repository &rarr;</a>
                </section>

                {/* Document Library Section */}
                <section className="mb-8">
                  <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
                    <h3 className="text-xl font-mono text-terminal-green/80 mb-3 sm:mb-0">Key Project Files</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-400">Filter by:</span>
                      <select className="p-2 bg-deep-gray border border-gray-600 rounded-md text-light-gray focus:ring-terminal-green focus:border-terminal-green text-sm">
                        <option value="all">All Categories</option>
                        <option value="meetingNotes">Meeting Notes</option>
                        <option value="reports">Status Reports</option>
                        <option value="presentations">Presentations</option>
                        <option value="archive">Archived</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {/* Document Item Example 1 */}
                    <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                      <div>
                        <h4 className="font-semibold text-terminal-green/90">Project Kick-off Meeting Minutes - 2025-04-15</h4>
                        <p className="text-xs text-gray-400">Category: Meeting Notes | Uploaded: 2025-04-16</p>
                      </div>
                      <div className="flex gap-2 mt-2 sm:mt-0">
                        <a href="#" className="text-xs py-1 px-2 bg-terminal-green/70 text-deep-black rounded hover:bg-terminal-green/90">View</a>
                        <a href="#" className="text-xs py-1 px-2 bg-gray-600 text-light-gray rounded hover:bg-gray-500">Download</a>
                      </div>
                    </div>
                    {/* Document Item Example 2 */}
                    <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                      <div>
                        <h4 className="font-semibold text-terminal-green/90">Weekly Status Report - Wk ending 2025-07-25</h4>
                        <p className="text-xs text-gray-400">Category: Status Reports | Submitted by: Project Manager</p>
                      </div>
                      <div className="flex gap-2 mt-2 sm:mt-0">
                        <a href="#" className="text-xs py-1 px-2 bg-terminal-green/70 text-deep-black rounded hover:bg-terminal-green/90">View Report</a>
                      </div>
                    </div>
                  </div>
                  <a href="#" className="inline-block mt-4 text-sm text-terminal-green hover:underline">Browse All Project Files &rarr;</a>
                </section>

                {/* Document Preview Section */}
                <section>
                  <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Document Preview</h3>
                  <div className="bg-deep-gray p-6 rounded-md border-2 border-dashed border-gray-700/50 min-h-[300px] flex items-center justify-center">
                    <p className="text-gray-500 text-center">Select a document to preview its contents here.</p>
                  </div>
                </section>
            </section>

          </div>
        )}

        {activeTab === 'config' && (
          <div className="bg-charcoal-gray p-6 shadow-lg border border-gray-700/60 rounded-md space-y-10">
            <h2 className="text-2xl font-mono text-terminal-green/90 mb-6">CRM/Dashboard Implementation Dashboard</h2>

            {/* Project Status & Access Links */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Current Project Focus</h3>
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50">
                  <p className="text-light-gray"><span className="font-semibold text-terminal-green/70">Project:</span> Enterprise CRM Overhaul (Salesforce)</p>
                  <p className="text-light-gray"><span className="font-semibold text-terminal-green/70">Overall Progress:</span> 45%</p>
                  <div className="w-full bg-gray-600 rounded-full h-2.5 mt-2">
                    <div className="bg-terminal-green h-2.5 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Next: Core Object Configuration Sign-off</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Sandbox & Preview Links</h3>
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50 space-y-2">
                  <a href="#" className="block text-sm text-terminal-green hover:underline">CRM Sandbox (UAT Environment) &rarr;</a>
                  <a href="#" className="block text-sm text-terminal-green hover:underline">Sales KPI Dashboard Preview (v1.2) &rarr;</a>
                  <p className="text-xs text-gray-500">Access credentials in project documentation.</p>
                </div>
              </div>
            </section>

            {/* Implementation Roadmap & Milestones */}
            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Implementation Roadmap & Milestones</h3>
              <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50 space-y-3 mb-4">
                <div className="flex justify-between items-center p-2 border-b border-gray-700/30">
                  <span className="text-light-gray">Phase 1: Requirements Gathering & Analysis</span>
                  <span className="text-xs py-1 px-2 bg-green-500/30 text-green-300 rounded-full">Completed</span>
                </div>
                <div className="flex justify-between items-center p-2 border-b border-gray-700/30">
                  <span className="text-light-gray">Phase 2: System Design & Configuration</span>
                  <span className="text-xs py-1 px-2 bg-blue-500/30 text-blue-300 rounded-full">In Progress</span>
                </div>
                <div className="flex justify-between items-center p-2 border-b border-gray-700/30">
                  <span className="text-light-gray">Phase 3: Data Migration & Cleansing</span>
                  <span className="text-xs py-1 px-2 bg-gray-500/30 text-gray-300 rounded-full">To Do</span>
                </div>
                <div className="flex justify-between items-center p-2 border-b border-gray-700/30">
                  <span className="text-light-gray">Phase 4: Dashboard Development</span>
                  <span className="text-xs py-1 px-2 bg-gray-500/30 text-gray-300 rounded-full">To Do</span>
                </div>
                <div className="flex justify-between items-center p-2 border-b border-gray-700/30">
                  <span className="text-light-gray">Phase 5: User Acceptance Testing (UAT)</span>
                  <span className="text-xs py-1 px-2 bg-gray-500/30 text-gray-300 rounded-full">To Do</span>
                </div>
                <div className="flex justify-between items-center p-2">
                  <span className="text-light-gray">Phase 6: Go-Live & Post-Implementation Support</span>
                  <span className="text-xs py-1 px-2 bg-gray-500/30 text-gray-300 rounded-full">To Do</span>
                </div>
              </div>
              <div className="bg-deep-gray p-6 rounded-md border-2 border-dashed border-gray-700/50 min-h-[200px] flex items-center justify-center">
                <p className="text-gray-500 text-center">Placeholder for interactive Project Timeline / Gantt Chart.</p>
              </div>
            </section>

            {/* Configuration & Design Tasks */}
            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Configuration Tasks / Design Iterations</h3>
              <div className="bg-deep-gray p-6 rounded-md border-2 border-dashed border-gray-700/50 min-h-[300px] flex items-center justify-center">
                <p className="text-gray-500 text-center">Placeholder for Kanban Board (e.g., Custom Object Setup, Workflow Rules, Dashboard Widget Design).</p>
              </div>
            </section>
            
            {/* Key Deliverables & Artifacts */}
            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Key Deliverables & Design Artifacts</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50">
                  <h4 className="font-semibold text-terminal-green/90">Business Requirements Document (BRD)</h4>
                  <p className="text-xs text-gray-400 mb-1">Version: 2.1 | Approved</p>
                  <a href="#" className="text-xs text-terminal-green hover:underline">View BRD &rarr;</a>
                </div>
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50">
                  <h4 className="font-semibold text-terminal-green/90">CRM Configuration Specification</h4>
                  <p className="text-xs text-gray-400 mb-1">Version: 1.5 | In Review</p>
                  <a href="#" className="text-xs text-terminal-green hover:underline">Access Document &rarr;</a>
                </div>
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50">
                  <h4 className="font-semibold text-terminal-green/90">Sales Dashboard Mockup (Final)</h4>
                  <p className="text-xs text-gray-400 mb-1">Version: 3.0 | Approved for Dev</p>
                  <a href="#" className="text-xs text-terminal-green hover:underline">View Figma Link &rarr;</a>
                </div>
                 <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50">
                  <h4 className="font-semibold text-terminal-green/90">Data Migration Plan</h4>
                  <p className="text-xs text-gray-400 mb-1">Version: 1.0 | Draft</p>
                  <a href="#" className="text-xs text-terminal-green hover:underline">Review Plan &rarr;</a>
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-4">Data mapping and integration details are in the 'Integrations & Data' tab.</p>
            </section>

          </div>
        )}

        {activeTab === 'integrations' && (
          <div className="bg-charcoal-gray p-6 shadow-lg border border-gray-700/60 rounded-md">
            <h2 className="text-2xl font-mono text-terminal-green/90 mb-4">Integrations & Data</h2>
            <p className="text-light-gray">Placeholder for tracking connected systems (e.g., ERP, Marketing Automation), data sources, data migration status, and API documentation.</p>
            <ul className="mt-4 space-y-2 text-light-gray/90">
              <li>Connected System: Marketo (Sync Active)</li>
              <li>Data Source: Legacy CRM Export (Migration 75% Complete)</li>
              <li>API Documentation: <a href="#" className="hover:text-terminal-green underline">Internal API for Sales Data</a></li>
            </ul>
          </div>
        )}

        {activeTab === 'support' && (
          <div className="bg-charcoal-gray p-6 shadow-lg border border-gray-700/60 rounded-md">
            <h2 className="text-2xl font-mono text-terminal-green/90 mb-4">Training & Support</h2>
            <p className="text-light-gray">Placeholder for user training materials, onboarding schedules, support ticket system, and FAQ documentation.</p>
            <div className="mt-4 space-y-3">
              <p className="text-light-gray/90"><strong>Next Training Session:</strong> Salesforce for Sales Team - July 28th, 2025</p>
              <ul className="list-disc list-inside text-light-gray/90">
                <li><a href="#" className="hover:text-terminal-green underline">Salesforce User Guide.pdf</a></li>
                <li><a href="#" className="hover:text-terminal-green underline">Dashboard KPI Definitions.docx</a></li>
              </ul>
              <button className="py-2 px-4 bg-terminal-green text-deep-black font-mono rounded-md hover:bg-terminal-green/80 transition-colors">Submit Support Ticket</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
