'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const serviceDetails = {
  name: 'Strategic Marketing & Brand Amplification',
  overview: 'We craft and execute data-driven marketing strategies that elevate your brand, engage your target audience, and drive measurable growth. From digital campaigns to content ecosystems, we build a commanding market presence for your business.',
  keyFeatures: [
    'Comprehensive Digital Marketing Strategy (SEO, SEM, PPC)',
    'Content Creation & Distribution (Blogs, Video, Social Media)',
    'Brand Development & Positioning',
    'Marketing Automation & CRM Integration (e.g., HubSpot, Marketo)',
    'Performance Analytics & Reporting Dashboards',
    'Social Media Management & Community Engagement',
    'Email Marketing Campaigns & Nurturing Sequences',
  ],
  clientOutcomes: [
    'Increased brand visibility and market share.',
    'Higher quality lead generation and customer acquisition.',
    'Improved customer loyalty and lifetime value.',
    'Data-backed insights for continuous campaign optimization.',
    'Consistent brand messaging across all channels.',
  ],
  cta: {
    text: 'Strategize Your Marketing Approach',
    link: '/dashboard/support?subject=New%20Brief:%20Marketing%20Strategy&briefType=new_project_brief',
  },
  relatedCaseStudies: [
    { id: 'cs1', title: 'Case Study: B2B SaaS Lead Gen Campaign', link: '#' },
    { id: 'cs2', title: 'Case Study: D2C Brand Launch Success', link: '#' },
  ]
};

export default function MarketingServicePage() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'tracker', label: 'Campaign Tracker' }, 
    { id: 'retainer', label: 'Retainer Dashboard' },
    { id: 'files', label: 'Assets & Reports' }, 
    { id: 'communication', label: 'Communication Hub' }, 
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
                <h3 className="text-xl font-mono text-terminal-green mb-4">Amplify Your Brand</h3>
                <p className='text-sm text-light-gray mb-4'>Ready to boost your market presence? Let our marketing experts craft your success story.</p>
                <Link href={serviceDetails.cta.link} legacyBehavior>
                  <a className="block w-full text-center font-mono py-3 px-6 rounded-md transition-colors duration-300 bg-terminal-green text-deep-black hover:bg-terminal-green/80 shadow-md hover:shadow-lg">
                    {serviceDetails.cta.text}
                  </a>
                </Link>
              </div>
              
              {serviceDetails.relatedCaseStudies.length > 0 && (
                <div className="bg-charcoal-gray p-6 shadow-lg border border-gray-700/60 rounded-md">
                  <h3 className="text-xl font-mono text-terminal-green/90 mb-4">Success Stories</h3>
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
            <h2 className="text-2xl font-mono text-terminal-green/90 mb-6">Campaign Tracker & Management</h2>
            
            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Active Campaigns Status</h3>
              <div className="space-y-2 text-light-gray/90 bg-deep-gray p-4 rounded-md border border-gray-700/50">
                <p><span className="font-semibold">Q3 Lead Generation:</span> Running - Target Met: 75%</p>
                <p><span className="font-semibold">Summer Brand Awareness:</span> Paused - Pending Creative Approval</p>
                <p><span className="font-semibold">New Product Launch Teaser:</span> Planning Phase</p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Key Metrics Snapshot (Last 30 Days)</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50">
                  <p className="text-sm text-gray-400">Total Impressions</p>
                  <p className="text-2xl font-mono text-terminal-green">1.2M</p>
                </div>
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50">
                  <p className="text-sm text-gray-400">Total Clicks</p>
                  <p className="text-2xl font-mono text-terminal-green">25K</p>
                </div>
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50">
                  <p className="text-sm text-gray-400">Leads Generated</p>
                  <p className="text-2xl font-mono text-terminal-green">350</p>
                </div>
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50">
                  <p className="text-sm text-gray-400">Conversion Rate</p>
                  <p className="text-2xl font-mono text-terminal-green">1.4%</p>
                </div>
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50">
                  <p className="text-sm text-gray-400">Ad Spend</p>
                  <p className="text-2xl font-mono text-terminal-green">$5,200</p>
                </div>
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50">
                  <p className="text-sm text-gray-400">Cost Per Lead</p>
                  <p className="text-2xl font-mono text-terminal-green">$14.86</p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Campaign Tasks & Action Items</h3>
              <div className="bg-deep-gray p-6 rounded-md border-2 border-dashed border-gray-700/50 min-h-[300px] flex items-center justify-center">
                <p className="text-gray-500 text-center">Placeholder for Kanban Board (e.g., Ad Creative Development, Landing Page Optimization, A/B Test Setup).</p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Performance Trends</h3>
              <div className="bg-deep-gray p-6 rounded-md border border-gray-700/50 h-64 flex items-center justify-center">
                <p className="text-gray-500 text-center">[Chart Placeholder: Leads Generated Over Time - Line Chart]</p>
              </div>
            </section>
            
            <section>
              <a href="#" className="inline-block mt-2 py-2 px-4 bg-terminal-green/80 text-deep-black font-mono rounded-md hover:bg-terminal-green transition-colors text-sm">
                View Live Campaign Dashboard &rarr;
              </a>
            </section>
          </div>
        )}

        {activeTab === 'retainer' && (
          <div className="bg-charcoal-gray p-6 shadow-lg border border-gray-700/60 rounded-md space-y-10">
            <h2 className="text-2xl font-mono text-terminal-green/90 mb-6">Retainer Dashboard</h2>

            {/* Retainer Status & Check-ins */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50">
                <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Retainer Utilization</h3>
                <p className="text-light-gray"><span className="font-semibold text-terminal-green/70">Current Period:</span> May 2025</p>
                <p className="text-2xl font-mono text-terminal-green mt-1">22 / 40 <span className="text-sm text-gray-400">hours used</span></p>
                <div className="w-full bg-gray-600 rounded-full h-2.5 mt-2">
                  <div className="bg-terminal-green h-2.5 rounded-full" style={{ width: `${(22/40)*100}%` }}></div>
                </div>
                <p className="text-xs text-gray-400 mt-1">Renews June 1, 2025</p>
              </div>
              <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50">
                <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Scheduled Check-ins</h3>
                <p className="text-light-gray"><span className="font-semibold text-terminal-green/70">Next Check-in:</span> May 28, 2025 - 10:00 AM PST</p>
                <p className="text-sm text-gray-400 mt-1">Topic: Q2 Campaign Review & Q3 Planning</p>
                <a href="#" className="text-xs text-terminal-green hover:underline mt-2 inline-block">View Meeting Agenda &rarr;</a>
              </div>
            </section>

            {/* Activity Log */}
            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Recent Activity & Updates</h3>
              <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50 space-y-4">
                <div className="max-h-80 overflow-y-auto space-y-3 p-3 bg-black/20 rounded-md">
                  {/* Example Logged Message */}
                  <div className="p-3 bg-deep-gray/50 rounded-md border border-gray-600/50">
                    <p className="text-xs text-gray-400"><strong>Marketing Lead</strong> - May 17, 2025 - 02:30 PM</p>
                    <p className="text-light-gray/90 text-sm">Published May content calendar blog posts (3). Performance metrics will be tracked starting next week.</p>
                  </div>
                  {/* Example Logged Message 2*/}
                  <div className="p-3 bg-deep-gray/50 rounded-md border border-gray-600/50">
                    <p className="text-xs text-gray-400"><strong>Analyst</strong> - May 16, 2025 - 11:00 AM</p>
                    <p className="text-light-gray/90 text-sm">Analyzed weekly social media engagement report. Sent summary to client.</p>
                  </div>
                   {/* Add more log items here */}
                </div>
                <div className="mt-3 flex gap-3">
                  <textarea placeholder="Post an update or add to log..." rows={2} className="flex-grow p-2 bg-black/30 border border-gray-600 rounded-md text-light-gray placeholder-gray-500 focus:ring-terminal-green focus:border-terminal-green text-sm"></textarea>
                  <button className="self-end py-2 px-4 bg-terminal-green text-deep-black font-mono rounded-md hover:bg-terminal-green/80 transition-colors h-fit text-sm">Post Update</button>
                </div>
              </div>
            </section>

            {/* Recurring Task Checklists */}
            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Recurring Tasks (Current Cycle)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-deep-gray p-3 rounded-md border border-gray-700/50">
                  <label className="flex items-center space-x-2 text-light-gray">
                    <input type="checkbox" className="form-checkbox bg-charcoal-gray border-gray-600 text-terminal-green focus:ring-terminal-green/50" defaultChecked />
                    <span>Weekly SEO Performance Audit</span>
                  </label>
                </div>
                <div className="bg-deep-gray p-3 rounded-md border border-gray-700/50">
                  <label className="flex items-center space-x-2 text-light-gray">
                    <input type="checkbox" className="form-checkbox bg-charcoal-gray border-gray-600 text-terminal-green focus:ring-terminal-green/50" />
                    <span>Bi-Weekly Analytics Report Compilation</span>
                  </label>
                </div>
                <div className="bg-deep-gray p-3 rounded-md border border-gray-700/50">
                  <label className="flex items-center space-x-2 text-light-gray">
                    <input type="checkbox" className="form-checkbox bg-charcoal-gray border-gray-600 text-terminal-green focus:ring-terminal-green/50" defaultChecked />
                    <span>Monthly Content Strategy Review</span>
                  </label>
                </div>
                <div className="bg-deep-gray p-3 rounded-md border border-gray-700/50">
                  <label className="flex items-center space-x-2 text-light-gray">
                    <input type="checkbox" className="form-checkbox bg-charcoal-gray border-gray-600 text-terminal-green focus:ring-terminal-green/50" />
                    <span>Social Media Scheduling (Next 7 Days)</span>
                  </label>
                </div>
              </div>
            </section>

            {/* Ongoing Initiatives (Compact Timelines) */}
            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Ongoing Initiatives</h3>
              <div className="space-y-4">
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50">
                  <h4 className="font-semibold text-terminal-green/90">Q2/Q3 Brand Awareness Push</h4>
                  <p className="text-sm text-light-gray/90 mb-1">Focus: Increase organic reach by 20%.</p>
                  <div className="w-full bg-gray-600 rounded-full h-2.5">
                    <div className="bg-terminal-green h-2.5 rounded-full" style={{ width: '66%' }}></div>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Timeline: April - September 2025 (Currently Month 2 of 6)</p>
                </div>
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50">
                  <h4 className="font-semibold text-terminal-green/90">Website SEO Enhancement Project</h4>
                  <p className="text-sm text-light-gray/90 mb-1">Focus: Improve SERP rankings for 10 key terms.</p>
                  <div className="w-full bg-gray-600 rounded-full h-2.5">
                    <div className="bg-terminal-green h-2.5 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Timeline: May - July 2025 (Technical Audit Complete)</p>
                </div>
              </div>
            </section>

          </div>
        )}

        {activeTab === 'files' && (
          <div className="bg-charcoal-gray p-6 shadow-lg border border-gray-700/60 rounded-md space-y-10">
            <h2 className="text-2xl font-mono text-terminal-green/90 mb-6">Marketing Assets, Reports & Data Hub</h2>

            {/* Document Repository Access & Search Section */}
            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Asset & Report Library</h3>
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <input 
                  type="search" 
                  placeholder="Search (e.g., 'Q3 report', 'brand guidelines', 'ad creative')" 
                  className="flex-grow p-2 bg-deep-gray border border-gray-600 rounded-md text-light-gray placeholder-gray-500 focus:ring-terminal-green focus:border-terminal-green text-sm"
                />
                <button className="py-2 px-4 bg-terminal-green/80 text-deep-black font-mono rounded-md hover:bg-terminal-green transition-colors text-sm">
                  Search Library
                </button>
              </div>
            </section>

            {/* Document Library Section */}
            <section>
              <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
                <h3 className="text-xl font-mono text-terminal-green/80 mb-3 sm:mb-0">Key Assets & Reports</h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-400">Filter by:</span>
                  <select className="p-2 bg-deep-gray border border-gray-600 rounded-md text-light-gray focus:ring-terminal-green focus:border-terminal-green text-sm">
                    <option value="all">All Types</option>
                    <option value="reports">Performance Reports</option>
                    <option value="assets">Creative Assets</option>
                    <option value="strategy">Strategy Docs</option>
                    <option value="data">Data Exports</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-3">
                {/* File Item Example 1 */}
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div>
                    <h4 className="font-semibold text-terminal-green/90">Monthly Performance Report - August.pdf</h4>
                    <p className="text-xs text-gray-400">Type: Performance Report | Uploaded: 2025-09-02</p>
                  </div>
                  <div className="flex gap-2 mt-2 sm:mt-0">
                    <a href="#" className="text-xs py-1 px-2 bg-terminal-green/70 text-deep-black rounded hover:bg-terminal-green/90">View</a>
                    <a href="#" className="text-xs py-1 px-2 bg-gray-600 text-light-gray rounded hover:bg-gray-500">Download</a>
                  </div>
                </div>
                {/* File Item Example 2 */}
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div>
                    <h4 className="font-semibold text-terminal-green/90">Approved Ad Creatives - Q3.zip</h4>
                    <p className="text-xs text-gray-400">Type: Creative Asset (ZIP) | Last Updated: 2025-07-20</p>
                  </div>
                  <div className="flex gap-2 mt-2 sm:mt-0">
                    <a href="#" className="text-xs py-1 px-2 bg-terminal-green/70 text-deep-black rounded hover:bg-terminal-green/90">Preview Contents</a>
                    <a href="#" className="text-xs py-1 px-2 bg-gray-600 text-light-gray rounded hover:bg-gray-500">Download ZIP</a>
                  </div>
                </div>
                 {/* File Item Example 3 */}
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div>
                    <h4 className="font-semibold text-terminal-green/90">Brand Guidelines v2.1.pdf</h4>
                    <p className="text-xs text-gray-400">Type: Strategy Doc (PDF) | Version: 2.1</p>
                  </div>
                  <div className="flex gap-2 mt-2 sm:mt-0">
                    <a href="#" className="text-xs py-1 px-2 bg-terminal-green/70 text-deep-black rounded hover:bg-terminal-green/90">View Guidelines</a>
                  </div>
                </div>
              </div>
              <a href="#" className="inline-block mt-4 text-sm text-terminal-green hover:underline">Browse Full Asset & Report Library &rarr;</a>
            </section>

            {/* Document Preview Section */}
            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Asset/Report Preview</h3>
              <div className="bg-deep-gray p-6 rounded-md border-2 border-dashed border-gray-700/50 min-h-[300px] flex items-center justify-center">
                <p className="text-gray-500 text-center">Select an asset or report to preview its details or contents here.</p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Quick Access: Data & Analytics</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50">
                  <h4 className="font-semibold text-terminal-green/90 mb-2">Embedded Analytics Snapshot</h4>
                  <div className="bg-black/20 p-6 rounded-md min-h-[150px] flex items-center justify-center">
                     <p className="text-gray-500 text-center text-sm">[Placeholder: Embedded Dashboard - e.g., Google Data Studio / Tableau Snapshot]</p>
                  </div>
                </div>
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50">
                  <h4 className="font-semibold text-terminal-green/90 mb-2">External Data Sources</h4>
                  <ul className="space-y-2 text-light-gray/90">
                    <li><a href="#" className="text-sm hover:text-terminal-green underline flex items-center"><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='w-4 h-4 mr-1.5'><path fillRule='evenodd' d='M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h11.5a.75.75 0 00.75-.75v-8.5a.75.75 0 00-.75-.75H4.25zM3.5 6.25a2.25 2.25 0 012.25-2.25h9.5a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-9.5a2.25 2.25 0 01-2.25-2.25v-7.5z' clipRule='evenodd' /></svg>Google Analytics Dashboard &rarr;</a></li>
                    <li><a href="#" className="text-sm hover:text-terminal-green underline flex items-center"><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='w-4 h-4 mr-1.5'><path fillRule='evenodd' d='M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h11.5a.75.75 0 00.75-.75v-8.5a.75.75 0 00-.75-.75H4.25zM3.5 6.25a2.25 2.25 0 012.25-2.25h9.5a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-9.5a2.25 2.25 0 01-2.25-2.25v-7.5z' clipRule='evenodd' /></svg>Facebook Ads Manager &rarr;</a></li>
                    <li><a href="#" className="text-sm hover:text-terminal-green underline flex items-center"><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='w-4 h-4 mr-1.5'><path fillRule='evenodd' d='M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h11.5a.75.75 0 00.75-.75v-8.5a.75.75 0 00-.75-.75H4.25zM3.5 6.25a2.25 2.25 0 012.25-2.25h9.5a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-9.5a2.25 2.25 0 01-2.25-2.25v-7.5z' clipRule='evenodd' /></svg>HubSpot Marketing Hub &rarr;</a></li>
                  </ul>
                </div>
              </div>
            </section>

          </div>
        )}

        {activeTab === 'communication' && (
          <div className="bg-charcoal-gray p-6 shadow-lg border border-gray-700/60 rounded-md">
            <h2 className="text-2xl font-mono text-terminal-green/90 mb-4">Communication Hub</h2>
            <p className="text-light-gray">Placeholder for discussions, strategy feedback, and campaign updates.</p>
            <div className="mt-4 space-y-3">
              <p className="text-light-gray/90"><strong>Client Feedback (2025-05-15):</strong> Please provide an update on the SEO keyword rankings for the new blog posts.</p>
              <button className="py-2 px-4 bg-terminal-green text-deep-black font-mono rounded-md hover:bg-terminal-green/80 transition-colors">Reply / New Message</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
