'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const serviceDetails = {
  name: 'Targeted Sales Outreach & Pipeline Automation',
  overview: 'We engineer and execute high-precision sales outreach campaigns designed to connect you with your ideal customers. Leveraging advanced automation and personalized messaging, we help build and accelerate your sales pipeline efficiently.',
  keyFeatures: [
    'Ideal Customer Profile (ICP) & Persona Development',
    'Multi-Channel Outreach Strategy (Email, LinkedIn, Calls)',
    'Custom Sequence Design & Copywriting',
    'Sales Automation Platform Setup & Management (e.g., Outreach.io, Salesloft)',
    'Lead List Sourcing & Data Enrichment',
    'Performance Tracking & A/B Testing for Optimization',
    'CRM Integration for Seamless Lead Flow (e.g., Salesforce, HubSpot CRM)',
  ],
  clientOutcomes: [
    'Consistent flow of qualified sales appointments.',
    'Increased sales team productivity and efficiency.',
    'Shorter sales cycles and higher conversion rates.',
    'Scalable outreach capabilities to support growth.',
    'Actionable insights into outreach performance.',
  ],
  cta: {
    text: 'Automate Your Sales Outreach',
    link: '/dashboard/support?subject=New%20Brief:%20Sales%20Outreach%20Campaign&briefType=new_project_brief',
  },
  relatedCaseStudies: [
    { id: 'cs1', title: 'Case Study: Doubling Sales Qualified Leads for Tech Startup', link: '#' },
    { id: 'cs2', title: 'Case Study: Automating Enterprise Sales Development', link: '#' },
  ]
};

export default function SalesOutreachServicePage() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'retainer', label: 'Sales Retainer Dashboard' },
    { id: 'performance', label: 'Sequence Performance' },
    { id: 'assets', label: 'Lists & Templates' },
    { id: 'strategy', label: 'Strategy & Feedback' },
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
                <h3 className="text-xl font-mono text-terminal-green mb-4">Build Your Pipeline</h3>
                <p className='text-sm text-light-gray mb-4'>Ready to connect with more qualified leads? Let us engineer your outreach success.</p>
                <Link href={serviceDetails.cta.link} legacyBehavior>
                  <a className="block w-full text-center font-mono py-3 px-6 rounded-md transition-colors duration-300 bg-terminal-green text-deep-black hover:bg-terminal-green/80 shadow-md hover:shadow-lg">
                    {serviceDetails.cta.text}
                  </a>
                </Link>
              </div>
              
              {serviceDetails.relatedCaseStudies.length > 0 && (
                <div className="bg-charcoal-gray p-6 shadow-lg border border-gray-700/60 rounded-md">
                  <h3 className="text-xl font-mono text-terminal-green/90 mb-4">Impact Stories</h3>
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
            <h2 className="text-2xl font-mono text-terminal-green/90 mb-6">Sales Retainer Dashboard</h2>

            {/* Retainer Activity & Quota */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50">
                <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Retainer Utilization (Current Cycle)</h3>
                <p className="text-light-gray"><span className="font-semibold text-terminal-green/70">Service Hours:</span> 30 / 50 hours used</p>
                <div className="w-full bg-gray-600 rounded-full h-2.5 mt-1 mb-2">
                  <div className="bg-terminal-green h-2.5 rounded-full" style={{ width: `${(30/50)*100}%` }}></div>
                </div>
                <p className="text-light-gray"><span className="font-semibold text-terminal-green/70">Meetings Booked Target:</span> 12 / 20</p>
                <div className="w-full bg-gray-600 rounded-full h-2.5 mt-1">
                  <div className="bg-terminal-green h-2.5 rounded-full" style={{ width: `${(12/20)*100}%` }}></div>
                </div>
                <p className="text-xs text-gray-400 mt-2">Cycle ends: May 31, 2025</p>
              </div>
              <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50">
                <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Scheduled Touchpoints</h3>
                <p className="text-light-gray"><span className="font-semibold text-terminal-green/70">Next Strategy Call:</span> May 25, 2025</p>
                <p className="text-sm text-gray-400 mt-1">Agenda: Review Q2 campaign results, plan Q3 initiatives.</p>
                <a href="#" className="text-xs text-terminal-green hover:underline mt-2 inline-block">View Meeting Agendas & Notes &rarr;</a>
              </div>
            </section>

            {/* Campaign Activity Log */}
            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Recent Campaign Activity & Updates</h3>
              <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50 space-y-4">
                <div className="max-h-80 overflow-y-auto space-y-3 p-3 bg-black/20 rounded-md">
                  {/* Example Logged Message */}
                  <div className="p-3 bg-deep-gray/50 rounded-md border border-gray-600/50">
                    <p className="text-xs text-gray-400"><strong>Sales Ops</strong> - May 17, 2025 - 02:30 PM</p>
                    <p className="text-light-gray/90 text-sm">Launched new A/B test for 'ICP V3 - SaaS Founders' (Subject Line test). Monitoring open rates closely.</p>
                  </div>
                  {/* Example Logged Message 2*/}
                  <div className="p-3 bg-deep-gray/50 rounded-md border border-gray-600/50">
                    <p className="text-xs text-gray-400"><strong>System Automation</strong> - May 16, 2025 - 11:00 AM</p>
                    <p className="text-light-gray/90 text-sm">Processed 500 new leads for 'SMB Growth' sequence. All enrolled successfully.</p>
                  </div>
                   {/* Add more log items here */}
                </div>
                <div className="mt-3 flex gap-3">
                  <textarea placeholder="Post an update or log activity..." rows={2} className="flex-grow p-2 bg-black/30 border border-gray-600 rounded-md text-light-gray placeholder-gray-500 focus:ring-terminal-green focus:border-terminal-green text-sm"></textarea>
                  <button className="self-end py-2 px-4 bg-terminal-green text-deep-black font-mono rounded-md hover:bg-terminal-green/80 transition-colors h-fit text-sm">Post Update</button>
                </div>
              </div>
            </section>

            {/* Recurring Outreach Tasks */}
            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Recurring Outreach Tasks (This Week)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-deep-gray p-3 rounded-md border border-gray-700/50">
                  <label className="flex items-center space-x-2 text-light-gray">
                    <input type="checkbox" className="form-checkbox bg-charcoal-gray border-gray-600 text-terminal-green focus:ring-terminal-green/50" defaultChecked />
                    <span>Daily Monitoring of Active Sequences</span>
                  </label>
                </div>
                <div className="bg-deep-gray p-3 rounded-md border border-gray-700/50">
                  <label className="flex items-center space-x-2 text-light-gray">
                    <input type="checkbox" className="form-checkbox bg-charcoal-gray border-gray-600 text-terminal-green focus:ring-terminal-green/50" />
                    <span>Weekly Performance Metrics Report</span>
                  </label>
                </div>
                <div className="bg-deep-gray p-3 rounded-md border border-gray-700/50">
                  <label className="flex items-center space-x-2 text-light-gray">
                    <input type="checkbox" className="form-checkbox bg-charcoal-gray border-gray-600 text-terminal-green focus:ring-terminal-green/50" defaultChecked/>
                    <span>Lead List Hygiene Check (New Leads)</span>
                  </label>
                </div>
                <div className="bg-deep-gray p-3 rounded-md border border-gray-700/50">
                  <label className="flex items-center space-x-2 text-light-gray">
                    <input type="checkbox" className="form-checkbox bg-charcoal-gray border-gray-600 text-terminal-green focus:ring-terminal-green/50" />
                    <span>A/B Test Idea Generation & Prioritization</span>
                  </label>
                </div>
              </div>
            </section>

            {/* Current Campaign Focus */}
            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Current Campaign Focus Areas</h3>
              <div className="space-y-4">
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50">
                  <h4 className="font-semibold text-terminal-green/90">Campaign: 'Fintech Innovators Q2'</h4>
                  <p className="text-sm text-light-gray/90 mb-1">ICP: Series A+ Fintech companies in North America.</p>
                  <p className="text-sm text-light-gray/90 mb-1">Objective: Book 15 qualified demos by June 30th.</p>
                  <div className="w-full bg-gray-600 rounded-full h-2.5">
                    <div className="bg-terminal-green h-2.5 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Status: Actively Enrolling & Engaging Prospects</p>
                </div>
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50">
                  <h4 className="font-semibold text-terminal-green/90">Campaign: 'Past Client Reactivation H1'</h4>
                  <p className="text-sm text-light-gray/90 mb-1">ICP: Previous clients (2022-2023) with new service potential.</p>
                  <p className="text-sm text-light-gray/90 mb-1">Objective: Schedule 5 re-engagement calls.</p>
                  <div className="w-full bg-gray-600 rounded-full h-2.5">
                    <div className="bg-terminal-green h-2.5 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Status: Initial outreach sequence launched</p>
                </div>
              </div>
            </section>

          </div>
        )}

        {activeTab === 'performance' && (
          <div className="bg-charcoal-gray p-6 shadow-lg border border-gray-700/60 rounded-md space-y-8">
            <h2 className="text-2xl font-mono text-terminal-green/90 mb-4">Sequence Performance</h2>
            
            <div>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Active Sequence Overview</h3>
              <div className="space-y-2 text-light-gray/90 mb-6">
                <p><span className="font-semibold">ICP V1 - Enterprise:</span> Running - 8 Steps, 1500 Prospects Enrolled</p>
                <p><span className="font-semibold">ICP V2 - SMB (A/B Test):</span> Active - Variant A vs. Variant B (Subject Lines)</p>
                <p><span className="font-semibold">Re-engagement Campaign Q2:</span> Paused - List Refresh Pending</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Key Metrics Snapshot (Last 7 Days)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50">
                  <p className="text-sm text-gray-400">Emails Sent</p>
                  <p className="text-2xl font-mono text-terminal-green">1,500</p>
                </div>
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50">
                  <p className="text-sm text-gray-400">Open Rate</p>
                  <p className="text-2xl font-mono text-terminal-green">45%</p>
                </div>
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50">
                  <p className="text-sm text-gray-400">Reply Rate</p>
                  <p className="text-2xl font-mono text-terminal-green">8%</p>
                </div>
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50">
                  <p className="text-sm text-gray-400">Meetings Booked</p>
                  <p className="text-2xl font-mono text-terminal-green">12</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Sequence Funnel Visualization</h3>
              <div className="bg-deep-gray p-6 rounded-md border border-gray-700/50 h-72 flex items-center justify-center">
                <p className="text-gray-500 text-center">[Chart Placeholder: Sequence Performance Funnel - e.g., Sent &gt; Opened &gt; Replied &gt; Meeting]</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">A/B Test Highlight: SMB Sequence</h3>
              <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50">
                <p className="text-light-gray/90"><span className="font-semibold">Test:</span> Subject Line Optimization</p>
                <p className="text-light-gray/90"><span className="font-semibold">Variant A Open Rate:</span> 38%</p>
                <p className="text-light-gray/90"><span className="font-semibold">Variant B Open Rate:</span> 47% (Winner)</p>
                <p className="text-sm text-gray-500 mt-1">Next Step: Roll out Variant B to full SMB list.</p>
              </div>
            </div>
            
            <div>
              <a href="#" className="inline-block mt-4 py-2 px-4 bg-terminal-green/80 text-deep-black font-mono rounded-md hover:bg-terminal-green transition-colors text-sm">
                View Live Sequence Dashboard &rarr;
              </a>
            </div>
          </div>
        )}

        {activeTab === 'assets' && (
          <div className="bg-charcoal-gray p-6 shadow-lg border border-gray-700/60 rounded-md space-y-10">
            <h2 className="text-2xl font-mono text-terminal-green/90 mb-6">Outreach Assets: Lists, Templates & Scripts</h2>

            {/* Asset Library Search Section */}
            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Asset Library</h3>
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <input 
                  type="search" 
                  placeholder="Search assets (e.g., 'Q3 list', 'intro template', 'LinkedIn script')" 
                  className="flex-grow p-2 bg-deep-gray border border-gray-600 rounded-md text-light-gray placeholder-gray-500 focus:ring-terminal-green focus:border-terminal-green text-sm"
                />
                <button className="py-2 px-4 bg-terminal-green/80 text-deep-black font-mono rounded-md hover:bg-terminal-green transition-colors text-sm">
                  Search Assets
                </button>
              </div>
            </section>

            {/* Asset Library Section */}
            <section>
              <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
                <h3 className="text-xl font-mono text-terminal-green/80 mb-3 sm:mb-0">Key Outreach Assets</h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-400">Filter by:</span>
                  <select className="p-2 bg-deep-gray border border-gray-600 rounded-md text-light-gray focus:ring-terminal-green focus:border-terminal-green text-sm">
                    <option value="all">All Types</option>
                    <option value="lists">Contact Lists</option>
                    <option value="templates">Email Templates</option>
                    <option value="scripts">Call/Message Scripts</option>
                    <option value="playbooks">Playbooks</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-3">
                {/* File Item Example 1 */}
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div>
                    <h4 className="font-semibold text-terminal-green/90">Target List - Tech CEOs Q3.csv</h4>
                    <p className="text-xs text-gray-400">Type: Contact List | Records: 1,250 | Last Updated: 2025-05-10</p>
                  </div>
                  <div className="flex gap-2 mt-2 sm:mt-0">
                    <a href="#" className="text-xs py-1 px-2 bg-terminal-green/70 text-deep-black rounded hover:bg-terminal-green/90">View Details</a>
                    <a href="#" className="text-xs py-1 px-2 bg-gray-600 text-light-gray rounded hover:bg-gray-500">Download CSV</a>
                  </div>
                </div>
                {/* File Item Example 2 */}
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div>
                    <h4 className="font-semibold text-terminal-green/90">Email Template - Intro Offer v3.docx</h4>
                    <p className="text-xs text-gray-400">Type: Email Template | Version: 3.0 | For: SMB Sequence</p>
                  </div>
                  <div className="flex gap-2 mt-2 sm:mt-0">
                    <a href="#" className="text-xs py-1 px-2 bg-terminal-green/70 text-deep-black rounded hover:bg-terminal-green/90">Preview</a>
                    <a href="#" className="text-xs py-1 px-2 bg-gray-600 text-light-gray rounded hover:bg-gray-500">Download DOCX</a>
                  </div>
                </div>
                 {/* File Item Example 3 */}
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div>
                    <h4 className="font-semibold text-terminal-green/90">LinkedIn Connection Request Script - Standard.txt</h4>
                    <p className="text-xs text-gray-400">Type: Message Script | Channel: LinkedIn</p>
                  </div>
                  <div className="flex gap-2 mt-2 sm:mt-0">
                    <a href="#" className="text-xs py-1 px-2 bg-terminal-green/70 text-deep-black rounded hover:bg-terminal-green/90">View/Copy</a>
                  </div>
                </div>
              </div>
              <a href="#" className="inline-block mt-4 text-sm text-terminal-green hover:underline">Browse Full Asset Library &rarr;</a>
            </section>

            {/* Asset Preview Section */}
            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Asset Preview</h3>
              <div className="bg-deep-gray p-6 rounded-md border-2 border-dashed border-gray-700/50 min-h-[300px] flex items-center justify-center">
                <p className="text-gray-500 text-center">Select an asset (template, script, list details) to preview its contents or summary here.</p>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'strategy' && (
          <div className="bg-charcoal-gray p-6 shadow-lg border border-gray-700/60 rounded-md space-y-8">
            <h2 className="text-2xl font-mono text-terminal-green/90 mb-4">Strategy & Feedback</h2>
            
            <div>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Overall Outreach Performance Snapshot</h3>
              <div className="bg-deep-gray p-6 rounded-md border border-gray-700/50 min-h-[200px] flex items-center justify-center mb-6">
                <p className="text-gray-500 text-center">[Placeholder: Embedded Dashboard - e.g., Total Pipeline Influenced, Overall Conversion Rates]</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Strategic Discussion Points</h3>
              <div className="space-y-3 text-light-gray/90">
                <div className="bg-deep-gray p-3 rounded-md border border-gray-700/40">
                  <p className="font-semibold">ICP Refinement for Q4:</p>
                  <p className="text-sm">Consider targeting Series B funded tech companies in the FinTech space. Data shows higher engagement.</p>
                  <p className="text-xs text-gray-500 mt-1">Suggested by: Client Lead | Date: 2025-05-17</p>
                </div>
                <div className="bg-deep-gray p-3 rounded-md border border-gray-700/40">
                  <p className="font-semibold">New Message Angle Testing:</p>
                  <p className="text-sm">Propose testing a value proposition focused on cost-saving vs. revenue generation for the next Enterprise sequence.</p>
                  <p className="text-xs text-gray-500 mt-1">Internal Note | Date: 2025-05-16</p>
                </div>
              </div>
              <button className="mt-4 py-2 px-4 bg-terminal-green/70 text-deep-black font-mono rounded-md hover:bg-terminal-green/90 transition-colors text-sm">Add New Discussion Point</button>
            </div>

            <div>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Reports & Documentation</h3>
              <ul className="space-y-1 text-light-gray/90 list-disc list-inside">
                <li><a href="#" className="hover:text-terminal-green underline">Monthly Sales Outreach Performance Review - August.pdf</a></li>
                <li><a href="#" className="hover:text-terminal-green underline">Current ICP Definitions & Personas.docx</a></li>
                <li><a href="#" className="hover:text-terminal-green underline">Sales Automation Playbook v1.2.pdf</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Quick Links</h3>
              <ul className="space-y-1 text-light-gray/90">
                <li><a href="#" className="text-sm hover:text-terminal-green underline">Access SalesLoft/Outreach Platform &rarr;</a></li>
                <li><a href="#" className="text-sm hover:text-terminal-green underline">View CRM Dashboard (Salesforce) &rarr;</a></li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
