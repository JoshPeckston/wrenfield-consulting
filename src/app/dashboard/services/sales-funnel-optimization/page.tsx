'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const serviceDetails = {
  name: 'Sales Funnel Design & Conversion Optimization',
  overview: 'We architect and refine high-performance sales funnels that guide prospects seamlessly from awareness to conversion. By analyzing user behavior and A/B testing critical touchpoints, we maximize your lead-to-customer conversion rates and overall marketing ROI.',
  keyFeatures: [
    'Full-Funnel Strategy & Mapping (TOFU, MOFU, BOFU)',
    'Landing Page Design & Optimization',
    'Lead Magnet Creation & Offer Positioning',
    'Email Nurturing Sequence Development',
    'Conversion Rate Optimization (CRO) for Key Pages',
    'A/B Testing & Multivariate Testing of Funnel Elements',
    'Analytics & Performance Tracking for Funnel Stages',
    'Integration with Marketing Automation & CRM Platforms',
  ],
  clientOutcomes: [
    'Increased lead generation and higher quality leads.',
    'Improved conversion rates at each stage of the funnel.',
    'Reduced customer acquisition costs (CAC).',
    'Enhanced customer journey and user experience.',
    'Greater return on investment (ROI) from marketing spend.',
    'Actionable data insights for continuous funnel improvement.',
  ],
  cta: {
    text: 'Optimize Your Conversion Funnels',
    link: '/dashboard/support?subject=New%20Brief:%20Sales%20Funnel%20Optimization&briefType=new_project_brief',
  },
  relatedCaseStudies: [
    { id: 'cs1', title: 'Case Study: Tripling Webinar Sign-ups with Funnel Redesign', link: '#' },
    { id: 'cs2', title: 'Case Study: Improving E-commerce Checkout Conversion by 40%', link: '#' },
  ]
};

export default function SalesFunnelOptimizationServicePage() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'projectHub', label: 'Project Hub' }, // New tab for project-specific common elements
    { id: 'retainer', label: 'Funnel Retainer Hub' }, // Will be enhanced for communication/scheduling
    { id: 'performance', label: 'Funnel Performance' },
    { id: 'assets', label: 'Assets & Experiments' }, // Will be enhanced for file repository
    { id: 'strategy', label: 'Strategy & Insights' },
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
                <h3 className="text-xl font-mono text-terminal-green mb-4">Maximize Conversions</h3>
                <p className='text-sm text-light-gray mb-4'>Ready to turn more prospects into customers? Let\'s engineer your high-converting sales funnels.</p>
                <Link href={serviceDetails.cta.link} legacyBehavior>
                  <a className="block w-full text-center font-mono py-3 px-6 rounded-md transition-colors duration-300 bg-terminal-green text-deep-black hover:bg-terminal-green/80 shadow-md hover:shadow-lg">
                    {serviceDetails.cta.text}
                  </a>
                </Link>
              </div>
              
              {serviceDetails.relatedCaseStudies.length > 0 && (
                <div className="bg-charcoal-gray p-6 shadow-lg border border-gray-700/60 rounded-md">
                  <h3 className="text-xl font-mono text-terminal-green/90 mb-4">Funnel Successes</h3>
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

        {/* Placeholder for New Project Hub Tab Content - to be inserted before retainer tab */}
        {activeTab === 'projectHub' && (
          <div className="bg-charcoal-gray p-6 shadow-lg border border-gray-700/60 rounded-md space-y-10">
            <h2 className="text-2xl font-mono text-terminal-green/90 mb-6">Funnel Optimization Project Dashboard</h2>

            {/* Project Health & Quick Links */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Current Project Status</h3>
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50">
                  <p className="text-light-gray"><span className="font-semibold text-terminal-green/70">Focus Project:</span> New Lead Gen Funnel Build</p>
                  <p className="text-light-gray"><span className="font-semibold text-terminal-green/70">Overall Progress:</span> 25%</p>
                  <div className="w-full bg-gray-600 rounded-full h-2.5 mt-2">
                    <div className="bg-terminal-green h-2.5 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Next Milestone: Landing Page Wireframes Review</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Quick Links & Tools</h3>
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50 space-y-2">
                  <a href="#" className="block text-sm text-terminal-green hover:underline">Analytics Dashboard (GA4) &rarr;</a>
                  <a href="#" className="block text-sm text-terminal-green hover:underline">A/B Testing Platform (e.g., VWO) &rarr;</a>
                  <a href="#" className="block text-sm text-terminal-green hover:underline">CRM Integration Link &rarr;</a>
                  <a href="#" className="block text-sm text-terminal-green hover:underline">Heatmap & Session Recording Tool &rarr;</a>
                </div>
              </div>
            </section>

            {/* Milestones & Phased Progress */}
            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Key Milestones & Timeline</h3>
              <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50 space-y-3 mb-4">
                <div className="flex justify-between items-center p-2 border-b border-gray-700/30">
                  <span className="text-light-gray">Phase 1: Strategy & Planning</span>
                  <span className="text-xs py-1 px-2 bg-green-500/30 text-green-300 rounded-full">Completed</span>
                </div>
                <div className="flex justify-between items-center p-2 border-b border-gray-700/30">
                  <span className="text-light-gray">Phase 2: Design & Wireframing</span>
                  <span className="text-xs py-1 px-2 bg-blue-500/30 text-blue-300 rounded-full">In Progress</span>
                </div>
                <div className="flex justify-between items-center p-2 border-b border-gray-700/30">
                  <span className="text-light-gray">Milestone: Landing Page Wireframes Review</span>
                  <span className="text-xs py-1 px-2 bg-gray-500/30 text-gray-300 rounded-full">Upcoming</span>
                </div>
                <div className="flex justify-between items-center p-2">
                  <span className="text-light-gray">Phase 3: Development & Integration</span>
                  <span className="text-xs py-1 px-2 bg-gray-500/30 text-gray-300 rounded-full">To Do</span>
                </div>
              </div>
              <div className="bg-deep-gray p-6 rounded-md border-2 border-dashed border-gray-700/50 min-h-[200px] flex items-center justify-center">
                <p className="text-gray-500 text-center">Placeholder for interactive Gantt Chart / Project Timeline.</p>
              </div>
            </section>

            {/* Task Management / Next Steps */}
            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Next Steps & Action Items</h3>
              <div className="bg-deep-gray p-6 rounded-md border-2 border-dashed border-gray-700/50 min-h-[300px] flex items-center justify-center">
                <p className="text-gray-500 text-center">Placeholder for Kanban Board or Task List for this funnel project.</p>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'retainer' && (
          <div className="bg-charcoal-gray p-6 shadow-lg border border-gray-700/60 rounded-md space-y-10">
            <h2 className="text-2xl font-mono text-terminal-green/90 mb-6">Funnel Retainer Hub</h2>

            {/* Retainer Engagement & Focus */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50">
                <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Retainer Activity (Current Cycle)</h3>
                <p className="text-light-gray"><span className="font-semibold text-terminal-green/70">CRO Points Used:</span> 12 / 20 points</p>
                <div className="w-full bg-gray-600 rounded-full h-2.5 mt-1 mb-2">
                  <div className="bg-terminal-green h-2.5 rounded-full" style={{ width: `${(12/20)*100}%` }}></div>
                </div>
                <p className="text-light-gray"><span className="font-semibold text-terminal-green/70">Focus Funnels:</span> SaaS Trial Funnel, Webinar Registration</p>
                <p className="text-xs text-gray-400 mt-2">Cycle ends: July 15, 2025</p>
              </div>
              <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50">
                <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Strategy & Review Cadence</h3>
                <p className="text-light-gray"><span className="font-semibold text-terminal-green/70">Next Strategy Call:</span> June 28, 2025</p>
                <p className="text-sm text-gray-400 mt-1">Topic: Review Q2 Test Results & Plan Q3 Initiatives</p>
                <a href="#" className="text-xs text-terminal-green hover:underline mt-2 inline-block">Access Meeting Notes & Agenda &rarr;</a>
              </div>
            </section>

            {/* Enhanced Meeting Scheduler Section - Integrating common element */}
            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Meeting Scheduler & Cadence</h3>
              <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50 space-y-3">
                <p className="text-light-gray/90"><span className="font-semibold text-terminal-green/70">Next Strategy Call:</span> June 28, 2025 - Topic: Review Q2 Test Results & Plan Q3 Initiatives.</p>
                <div className="bg-deep-gray p-6 rounded-md border-2 border-dashed border-gray-700/50 min-h-[200px] flex flex-col items-center justify-center">
                  <p className="text-gray-500 text-center mb-4">Placeholder for embedded Meeting Scheduler (e.g., Calendly).</p>
                  <button className="py-2 px-4 bg-terminal-green text-deep-black font-mono rounded-md hover:bg-terminal-green/80 transition-colors">
                    Schedule/Reschedule Call / View Calendar
                  </button>
                </div>
                <a href="#" className="text-xs text-terminal-green hover:underline mt-2 inline-block">View All Past Meeting Notes & Recordings &rarr;</a>
              </div>
            </section>

            {/* Communication Log/Chat Section - Integrating common element */}
            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Communication Log / Chat</h3>
              <div className="bg-deep-gray p-6 rounded-md border-2 border-dashed border-gray-700/50 min-h-[300px] flex items-center justify-center">
                <p className="text-gray-500 text-center">Placeholder for Communication Log or Embedded Chat for retainer discussions.</p>
              </div>
            </section>

            {/* A/B Testing & Optimization Log */}
            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">A/B Testing & Optimization Log</h3>
              <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50 max-h-96 overflow-y-auto">
                <ul className="space-y-3 text-sm">
                  <li className="border-b border-gray-700/30 pb-2">
                    <span className="font-semibold text-terminal-green/70">June 05, 2025:</span> <span className="text-light-gray">A/B Test Concluded: 'Homepage CTA Button Color' - Green variant showed +15% CVR. Implemented.</span>
                  </li>
                  <li className="border-b border-gray-700/30 pb-2">
                    <span className="font-semibold text-terminal-green/70">May 28, 2025:</span> <span className="text-light-gray">Optimization: Simplified checkout form fields. Initial data shows -5% cart abandonment.</span>
                  </li>
                  <li className="border-b border-gray-700/30 pb-2">
                    <span className="font-semibold text-terminal-green/70">May 20, 2025:</span> <span className="text-light-gray">A/B Test Launched: 'Webinar Landing Page Headline Variations (3 variants)'.</span>
                  </li>
                  <li>
                    <span className="font-semibold text-terminal-green/70">May 12, 2025:</span> <span className="text-light-gray">Analysis: Identified drop-off point in SaaS trial email sequence. Planning revision.</span>
                  </li>
                  {/* Add more log items here */}
                </ul>
              </div>
            </section>

            {/* Funnel Performance KPIs (Retainer View) */}
            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Key Funnel Performance Trends</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50">
                  <p className="text-sm text-gray-400">Overall Funnel CVR (MoM)</p>
                  <p className="text-2xl font-mono text-terminal-green">+2.5% <span className="text-sm text-green-400">(↑)</span></p>
                  <p className="text-xs text-gray-500">Current: 7.8%</p>
                </div>
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50">
                  <p className="text-sm text-gray-400">Cost Per Acquisition (CPA)</p>
                  <p className="text-2xl font-mono text-terminal-green">$45.50 <span className="text-sm text-green-400">(↓ 8%)</span></p>
                  <p className="text-xs text-gray-500">Target: &lt; $50</p>
                </div>
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50">
                  <p className="text-sm text-gray-400">Lead Velocity Rate (Weekly)</p>
                  <p className="text-2xl font-mono text-terminal-green">120 Leads <span className="text-sm text-red-400">(↓ 5%)</span></p>
                  <p className="text-xs text-gray-500">Previous: 126 Leads</p>
                </div>
              </div>
            </section>

            {/* Scheduled Optimization Tasks */}
            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Recurring Optimization Schedule</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-deep-gray p-3 rounded-md border border-gray-700/50">
                  <label className="flex items-center space-x-2 text-light-gray">
                    <input type="checkbox" className="form-checkbox bg-charcoal-gray border-gray-600 text-terminal-green focus:ring-terminal-green/50" defaultChecked />
                    <span>Monthly Funnel Walkthrough & Health Check</span>
                  </label>
                </div>
                <div className="bg-deep-gray p-3 rounded-md border border-gray-700/50">
                  <label className="flex items-center space-x-2 text-light-gray">
                    <input type="checkbox" className="form-checkbox bg-charcoal-gray border-gray-600 text-terminal-green focus:ring-terminal-green/50" defaultChecked />
                    <span>Bi-Weekly A/B Test Performance Review</span>
                  </label>
                </div>
                <div className="bg-deep-gray p-3 rounded-md border border-gray-700/50">
                  <label className="flex items-center space-x-2 text-light-gray">
                    <input type="checkbox" className="form-checkbox bg-charcoal-gray border-gray-600 text-terminal-green focus:ring-terminal-green/50" />
                    <span>Quarterly Strategic Deep-Dive & Roadmap</span>
                  </label>
                </div>
                <div className="bg-deep-gray p-3 rounded-md border border-gray-700/50">
                  <label className="flex items-center space-x-2 text-light-gray">
                    <input type="checkbox" className="form-checkbox bg-charcoal-gray border-gray-600 text-terminal-green focus:ring-terminal-green/50" />
                    <span>Ad Creative Refresh Cycle Check</span>
                  </label>
                </div>
              </div>
            </section>

          </div>
        )}

        {activeTab === 'performance' && (
          <div className="bg-charcoal-gray p-6 shadow-lg border border-gray-700/60 rounded-md">
            <h2 className="text-2xl font-mono text-terminal-green/90 mb-4">Funnel Performance</h2>
            <p className="text-light-gray">Placeholder for sales funnel analytics, conversion rates per stage (TOFU, MOFU, BOFU), lead velocity, and ROI tracking.</p>
            <div className="mt-6 space-y-4">
              <div>
                <h3 className="text-lg font-mono text-terminal-green/80">Current Funnel: 'Product Launch Q3'</h3>
                <p className="text-light-gray/90">TOFU Visitors: 12,000 | MOFU Leads: 850 | BOFU Sales: 65</p>
              </div>
              <div>
                <h3 className="text-lg font-mono text-terminal-green/80">Key Conversion Rates:</h3>
                <ul className="list-disc list-inside text-light-gray/90">
                  <li>Landing Page Opt-in: 25%</li>
                  <li>Webinar Attendance: 40%</li>
                  <li>Sales Page Conversion: 15%</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'assets' && (
          // This tab will be enhanced to serve as the File Repository for funnel assets

          <div className="bg-charcoal-gray p-6 shadow-lg border border-gray-700/60 rounded-md space-y-8">
            <h2 className="text-2xl font-mono text-terminal-green/90 mb-6">Funnel Assets & Experiment Documentation Hub</h2>

            {/* Asset Search Section */}
            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Central Asset Library</h3>
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <input 
                  type="search" 
                  placeholder="Quick Search Assets (e.g., 'landing page v2', 'onboarding email')" 
                  className="flex-grow p-2 bg-deep-gray border border-gray-600 rounded-md text-light-gray placeholder-gray-500 focus:ring-terminal-green focus:border-terminal-green text-sm"
                />
                <button className="py-2 px-4 bg-terminal-green/80 text-deep-black font-mono rounded-md hover:bg-terminal-green transition-colors text-sm">
                  Search Assets
                </button>
              </div>
              <a href="#" className="inline-block text-sm text-terminal-green hover:underline">Access Full Asset Library &rarr;</a>
            </section>

            {/* Asset Library Section */}
            <section>
              <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
                <h3 className="text-xl font-mono text-terminal-green/80 mb-3 sm:mb-0">Key Funnel Assets & Experiment Docs</h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-400">Filter by:</span>
                  <select className="p-2 bg-deep-gray border border-gray-600 rounded-md text-light-gray focus:ring-terminal-green focus:border-terminal-green text-sm">
                    <option value="all">All Types</option>
                    <option value="landingPage">Landing Pages</option>
                    <option value="emailSequence">Email Sequences</option>
                    <option value="adCreative">Ad Creatives</option>
                    <option value="abTestPlan">A/B Test Plans</option>
                    <option value="analysisReport">Analysis Reports</option>
                    <option value="funnelMap">Funnel Maps</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-3">
                {/* Asset Item Example 1 */}
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div>
                    <h4 className="font-semibold text-terminal-green/90">SaaS Trial Landing Page - Version 3.1 (Live)</h4>
                    <p className="text-xs text-gray-400">Type: Landing Page | Purpose: SaaS Conversion | Last Modified: 2025-06-10</p>
                  </div>
                  <div className="flex gap-2 mt-2 sm:mt-0">
                    <a href="#" className="text-xs py-1 px-2 bg-terminal-green/70 text-deep-black rounded hover:bg-terminal-green/90">View Live</a>
                    <a href="#" className="text-xs py-1 px-2 bg-gray-600 text-light-gray rounded hover:bg-gray-500">Preview</a>
                    <a href="#" className="text-xs py-1 px-2 bg-gray-600 text-light-gray rounded hover:bg-gray-500">History</a>
                  </div>
                </div>
                {/* Asset Item Example 2 */}
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div>
                    <h4 className="font-semibold text-terminal-green/90">Onboarding Email Sequence - Welcome Series</h4>
                    <p className="text-xs text-gray-400">Type: Email Sequence | Status: Active | Last Modified: 2025-05-20</p>
                  </div>
                  <div className="flex gap-2 mt-2 sm:mt-0">
                    <a href="#" className="text-xs py-1 px-2 bg-terminal-green/70 text-deep-black rounded hover:bg-terminal-green/90">View Sequence</a>
                    <a href="#" className="text-xs py-1 px-2 bg-gray-600 text-light-gray rounded hover:bg-gray-500">Edit Content</a>
                    <a href="#" className="text-xs py-1 px-2 bg-gray-600 text-light-gray rounded hover:bg-gray-500">Performance Stats</a>
                  </div>
                </div>
                {/* Asset Item Example 3 */}
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div>
                    <h4 className="font-semibold text-terminal-green/90">Q3 Ad Creative Set - Facebook Campaign 'SummerPromo'</h4>
                    <p className="text-xs text-gray-400">Type: Ad Creative | Platform: Facebook | Last Modified: 2025-06-01</p>
                  </div>
                  <div className="flex gap-2 mt-2 sm:mt-0">
                    <a href="#" className="text-xs py-1 px-2 bg-terminal-green/70 text-deep-black rounded hover:bg-terminal-green/90">Preview Creatives</a>
                    <a href="#" className="text-xs py-1 px-2 bg-gray-600 text-light-gray rounded hover:bg-gray-500">View Performance</a>
                  </div>
                </div>
                 {/* Asset Item Example 4 */}
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div>
                    <h4 className="font-semibold text-terminal-green/90">A/B Test Plan: Homepage Headline (June 2025)</h4>
                    <p className="text-xs text-gray-400">Type: A/B Test Plan | Status: Active | Document: PDF</p>
                  </div>
                  <div className="flex gap-2 mt-2 sm:mt-0">
                    <a href="#" className="text-xs py-1 px-2 bg-terminal-green/70 text-deep-black rounded hover:bg-terminal-green/90">View Plan</a>
                    <a href="#" className="text-xs py-1 px-2 bg-gray-600 text-light-gray rounded hover:bg-gray-500">Results (Pending)</a>
                  </div>
                </div>
              </div>
              <a href="#" className="inline-block mt-4 text-sm text-terminal-green hover:underline">Browse All Funnel Assets & Docs &rarr;</a>
            </section>

            {/* Asset Preview Section */}
            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Asset/Document Preview</h3>
              <div className="bg-deep-gray p-6 rounded-md border-2 border-dashed border-gray-700/50 min-h-[300px] flex items-center justify-center">
                <p className="text-gray-500 text-center">Select an asset or document to preview its contents here.<br/>(e.g., image preview, document viewer, link to live page)</p>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'strategy' && (
          <div className="bg-charcoal-gray p-6 shadow-lg border border-gray-700/60 rounded-md">
            <h2 className="text-2xl font-mono text-terminal-green/90 mb-4">Strategy & Insights</h2>
            <p className="text-light-gray">Placeholder for funnel maps, customer journey documentation, user behavior analysis, and strategic optimization discussions.</p>
            <div className="mt-4 space-y-3">
              <p className="text-light-gray/90"><strong>Current Focus:</strong> Improving MOFU to BOFU conversion. Hypothesis: Offer a limited-time discount.</p>
              <a href="#" className="text-terminal-green hover:underline">View Current Funnel Map</a>
              <button className="ml-4 py-2 px-4 bg-terminal-green text-deep-black font-mono rounded-md hover:bg-terminal-green/80 transition-colors">Propose New Test</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
