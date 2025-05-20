'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const serviceDetails = {
  name: 'SOP Development & Integrated System Architecture',
  overview: 'We specialize in developing comprehensive Standard Operating Procedures (SOPs) and architecting integrated digital systems that drive efficiency, ensure consistency, and provide a solid foundation for scaling your business operations effectively.',
  keyFeatures: [
    'Thorough Business Process Auditing & Documentation',
    'Custom SOP Manual Creation (Digital & Print-Ready)',
    'Workflow Design & Optimization for Key Business Functions',
    'System Integration Strategy & Implementation (e.g., CRM, ERP, Project Management Tools)',
    'Knowledge Base & Internal Wiki Development',
    'Employee Training Programs for SOPs & System Usage',
    'Continuous Process Improvement & SOP Updates',
    'Technology Stack Audit & Optimization Recommendations',
  ],
  clientOutcomes: [
    'Standardized processes leading to consistent quality and output.',
    'Reduced errors and operational inefficiencies.',
    'Faster onboarding and training for new team members.',
    'Improved inter-departmental collaboration and communication.',
    'Scalable operations prepared for business growth.',
    'Enhanced knowledge management and retention within the organization.',
    'Clear guidelines for compliance and risk management.',
  ],
  cta: {
    text: 'Build Your Operational Framework',
    link: '/dashboard/support?subject=New%20Brief:%20SOP%20%26%20System%20Building&briefType=new_project_brief',
  },
  relatedCaseStudies: [
    { id: 'cs1', title: 'Case Study: SOP Implementation for a Remote First Company', link: '#' },
    { id: 'cs2', title: 'Case Study: Integrating Disparate Systems for a Logistics Firm', link: '#' },
  ]
};

export default function SopSystemBuildingServicePage() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'retainer', label: 'SOP & System Retainer' },
    { id: 'sops', label: 'SOPs & Documentation' },
    { id: 'architecture', label: 'System Architecture' },
    { id: 'implementation', label: 'Implementation & Training' },
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
              {/* Project Status & Milestones Section */}
              <section className="bg-charcoal-gray p-6 shadow-lg border border-gray-700/60 rounded-md">
                <h2 className="text-2xl font-mono text-terminal-green/90 mb-4">Project Status & Key Milestones</h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-base font-medium text-terminal-green">Overall Progress</span>
                      <span className="text-sm font-medium text-terminal-green">Phase: SOP Drafting</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-3.5">
                      <div className="bg-terminal-green h-3.5 rounded-full" style={{ width: "45%" }}></div>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">Target Completion: September 30, 2025</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-mono text-terminal-green/80 mb-2">Key Milestones:</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center"><span className="w-4 h-4 mr-2 bg-terminal-green rounded-full inline-block"></span>Discovery & Audit - <span className="text-gray-400 ml-1">Completed</span></li>
                      <li className="flex items-center"><span className="w-4 h-4 mr-2 bg-terminal-green animate-pulse rounded-full inline-block"></span>SOP Drafting (Sales & Ops) - <span className="text-gray-400 ml-1">In Progress</span></li>
                      <li className="flex items-center"><span className="w-4 h-4 mr-2 bg-gray-500 rounded-full inline-block"></span>System Configuration - <span className="text-gray-400 ml-1">Pending</span></li>
                      <li className="flex items-center"><span className="w-4 h-4 mr-2 bg-gray-500 rounded-full inline-block"></span>Training & Rollout - <span className="text-gray-400 ml-1">Pending</span></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-mono text-terminal-green/80 mb-2">Quick Links:</h3>
                    <div className="flex flex-wrap gap-2">
                      <a href="#sops" onClick={() => setActiveTab('sops')} className="text-xs py-1 px-3 bg-deep-gray border border-gray-600 rounded-full hover:bg-gray-700 hover:text-terminal-green transition-colors">SOP Document Hub</a>
                      <a href="#" className="text-xs py-1 px-3 bg-deep-gray border border-gray-600 rounded-full hover:bg-gray-700 hover:text-terminal-green transition-colors">Project Plan (Notion)</a>
                      <a href="#" className="text-xs py-1 px-3 bg-deep-gray border border-gray-600 rounded-full hover:bg-gray-700 hover:text-terminal-green transition-colors">Communication Channel (Slack)</a>
                    </div>
                  </div>
                </div>
              </section>

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
                <h3 className="text-xl font-mono text-terminal-green mb-4">Systematize for Success</h3>
                <p className='text-sm text-light-gray mb-4'>Ready to build a robust operational backbone for your business? Let\'s design your systems and SOPs.</p>
                <Link href={serviceDetails.cta.link} legacyBehavior>
                  <a className="block w-full text-center font-mono py-3 px-6 rounded-md transition-colors duration-300 bg-terminal-green text-deep-black hover:bg-terminal-green/80 shadow-md hover:shadow-lg">
                    {serviceDetails.cta.text}
                  </a>
                </Link>
              </div>
              
              {serviceDetails.relatedCaseStudies.length > 0 && (
                <div className="bg-charcoal-gray p-6 shadow-lg border border-gray-700/60 rounded-md">
                  <h3 className="text-xl font-mono text-terminal-green/90 mb-4">Operational Blueprints</h3>
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
            <h2 className="text-2xl font-mono text-terminal-green/90 mb-6">SOP & System Retainer Overview</h2>

            {/* Retainer Focus & Activity */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50">
                <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Retainer Engagement (Current Cycle)</h3>
                <p className="text-light-gray"><span className="font-semibold text-terminal-green/70">Support Hours:</span> 18 / 30 hours used</p>
                <div className="w-full bg-gray-600 rounded-full h-2.5 mt-1 mb-2">
                  <div className="bg-terminal-green h-2.5 rounded-full" style={{ width: `${(18/30)*100}%` }}></div>
                </div>
                <p className="text-light-gray"><span className="font-semibold text-terminal-green/70">Focus Systems:</span> CRM SOPs, Internal Knowledge Base</p>
                <p className="text-xs text-gray-400 mt-2">Next cycle review: August 1, 2025</p>
              </div>
              <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50">
                <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Review & Update Cadence</h3>
                <p className="text-light-gray"><span className="font-semibold text-terminal-green/70">Next SOP Batch Review:</span> June 20, 2025</p>
                <p className="text-sm text-gray-400 mt-1">Focus: Sales & Marketing SOPs Refresh</p>
                <a href="#" className="text-xs text-terminal-green hover:underline mt-2 inline-block">View SOP Update Schedule &rarr;</a>
              </div>
            </section>

            {/* Activity Log & Communications */}
            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Activity Log & Communications</h3>
              <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50 space-y-4">
                <div className="max-h-80 overflow-y-auto space-y-3 p-3 bg-black/20 rounded-md">
                  {/* Example Logged Message */}
                  <div className="p-3 bg-deep-gray/50 rounded-md border border-gray-600/50">
                    <p className="text-xs text-gray-400"><strong>Consultant</strong> - May 18, 2025 - 03:15 PM</p>
                    <p className="text-light-gray/90 text-sm">Published: New 'Client Offboarding SOP v1.0'. Available in the SOP Hub.</p>
                  </div>
                  <div className="p-3 bg-deep-gray/50 rounded-md border border-gray-600/50">
                    <p className="text-xs text-gray-400"><strong>Training Lead</strong> - May 15, 2025 - 10:00 AM</p>
                    <p className="text-light-gray/90 text-sm">Training: Conducted CRM Advanced Features session for Sales Team. Recording available.</p>
                  </div>
                   {/* Add more log items here */}
                </div>
                <div className="mt-3 flex gap-3">
                  <textarea placeholder="Post an update, log activity, or ask a question..." rows={2} className="flex-grow p-2 bg-black/30 border border-gray-600 rounded-md text-light-gray placeholder-gray-500 focus:ring-terminal-green focus:border-terminal-green text-sm"></textarea>
                  <button className="self-end py-2 px-4 bg-terminal-green text-deep-black font-mono rounded-md hover:bg-terminal-green/80 transition-colors h-fit text-sm">Post</button>
                </div>
              </div>
            </section>

            {/* Meeting Scheduler Section */}
            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Meeting Scheduler</h3>
              <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50">
                <h4 className="font-semibold text-terminal-green/90 mb-2">Upcoming Meetings:</h4>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="text-light-gray">June 5, 2025 - 10:00 AM: Weekly Sync - SOP Review</li>
                  <li className="text-light-gray">June 12, 2025 - 02:00 PM: System Integration Checkpoint</li>
                </ul>
                <button className="py-2 px-4 bg-terminal-green/80 text-deep-black font-mono rounded-md hover:bg-terminal-green transition-colors text-sm">
                  Schedule New Meeting (Placeholder)
                </button>
              </div>
            </section>

            {/* System Health & Adoption Metrics */}
            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">System Health & Adoption</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50">
                  <p className="text-sm text-gray-400">SOPs Awaiting Review</p>
                  <p className="text-2xl font-mono text-terminal-green">3</p>
                  <p className="text-xs text-gray-500">Status: On Track for Q2 Review</p>
                </div>
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50">
                  <p className="text-sm text-gray-400">Knowledge Base Uptime</p>
                  <p className="text-2xl font-mono text-terminal-green">99.98%</p>
                  <p className="text-xs text-gray-500">(Last 30 Days)</p>
                </div>
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50">
                  <p className="text-sm text-gray-400">New Feature Adoption Rate</p>
                  <p className="text-2xl font-mono text-terminal-green">75%</p>
                  <p className="text-xs text-gray-500">(CRM Update v4.2)</p>
                </div>
              </div>
            </section>

            {/* Key Action Items & Reviews */}
            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Key Action Items & Reviews</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-deep-gray p-3 rounded-md border border-gray-700/50">
                  <label className="flex items-center space-x-2 text-light-gray">
                    <input type="checkbox" className="form-checkbox bg-charcoal-gray border-gray-600 text-terminal-green focus:ring-terminal-green/50" defaultChecked />
                    <span>Quarterly SOP Audit (All Depts)</span>
                  </label>
                </div>
                <div className="bg-deep-gray p-3 rounded-md border border-gray-700/50">
                  <label className="flex items-center space-x-2 text-light-gray">
                    <input type="checkbox" className="form-checkbox bg-charcoal-gray border-gray-600 text-terminal-green focus:ring-terminal-green/50" />
                    <span>Annual System Access & Permissions Review</span>
                  </label>
                </div>
                <div className="bg-deep-gray p-3 rounded-md border border-gray-700/50">
                  <label className="flex items-center space-x-2 text-light-gray">
                    <input type="checkbox" className="form-checkbox bg-charcoal-gray border-gray-600 text-terminal-green focus:ring-terminal-green/50" defaultChecked />
                    <span>Monthly User Feedback Collection (Systems)</span>
                  </label>
                </div>
                <div className="bg-deep-gray p-3 rounded-md border border-gray-700/50">
                  <label className="flex items-center space-x-2 text-light-gray">
                    <input type="checkbox" className="form-checkbox bg-charcoal-gray border-gray-600 text-terminal-green focus:ring-terminal-green/50" />
                    <span>Technology Stack Obsolescence Check</span>
                  </label>
                </div>
              </div>
            </section>

          </div>
        )}

        {activeTab === 'sops' && (
          <div className="bg-charcoal-gray p-6 shadow-lg border border-gray-700/60 rounded-md space-y-8">
            <h2 className="text-2xl font-mono text-terminal-green/90 mb-6">SOPs & Documentation Hub</h2>

            {/* Knowledge Base Section */}
            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Knowledge Base & Central Repository</h3>
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <input 
                  type="search" 
                  placeholder="Quick Search Knowledge Base (e.g., 'onboarding checklist')" 
                  className="flex-grow p-2 bg-deep-gray border border-gray-600 rounded-md text-light-gray placeholder-gray-500 focus:ring-terminal-green focus:border-terminal-green text-sm"
                />
                <button className="py-2 px-4 bg-terminal-green/80 text-deep-black font-mono rounded-md hover:bg-terminal-green transition-colors text-sm">
                  Search
                </button>
              </div>
              <a href="#" className="inline-block text-sm text-terminal-green hover:underline">Access Full Knowledge Base / Internal Wiki &rarr;</a>
            </section>

            {/* Document Management Section */}
            <section>
              <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
                <h3 className="text-xl font-mono text-terminal-green/80 mb-3 sm:mb-0">Document Library</h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-400">Filter by:</span>
                  <select className="p-2 bg-deep-gray border border-gray-600 rounded-md text-light-gray focus:ring-terminal-green focus:border-terminal-green text-sm">
                    <option value="all">All Types</option>
                    <option value="sop">SOPs</option>
                    <option value="process_flow">Process Flows</option>
                    <option value="guide">Guides & Manuals</option>
                    <option value="template">Templates</option>
                    <option value="architecture_diagram">Architecture Diagrams</option>
                    <option value="training_material">Training Materials</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-3">
                {/* Document Item Example 1 */}
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div>
                    <h4 className="font-semibold text-terminal-green/90">Client Onboarding Process</h4>
                    <p className="text-xs text-gray-400">Category: SOP | Version: 2.3 | Last Updated: 2025-05-15</p>
                  </div>
                  <div className="flex gap-2 mt-2 sm:mt-0">
                    <a href="#" className="text-xs py-1 px-2 bg-terminal-green/70 text-deep-black rounded hover:bg-terminal-green/90">View</a>
                    <a href="#" className="text-xs py-1 px-2 bg-gray-600 text-light-gray rounded hover:bg-gray-500">History</a>
                  </div>
                </div>
                {/* Document Item Example 2 */}
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div>
                    <h4 className="font-semibold text-terminal-green/90">Content Creation Workflow</h4>
                    <p className="text-xs text-gray-400">Category: Process Flow | Version: 1.1 | Last Updated: 2025-04-28</p>
                  </div>
                  <div className="flex gap-2 mt-2 sm:mt-0">
                    <a href="#" className="text-xs py-1 px-2 bg-terminal-green/70 text-deep-black rounded hover:bg-terminal-green/90">View</a>
                    <a href="#" className="text-xs py-1 px-2 bg-gray-600 text-light-gray rounded hover:bg-gray-500">Download</a>
                  </div>
                </div>
                {/* Document Item Example 3 (Guide) */}
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div>
                    <h4 className="font-semibold text-terminal-green/90">System Backup & Recovery Guide</h4>
                    <p className="text-xs text-gray-400">Category: Guide | Version: 1.0 | Last Updated: 2025-03-10</p>
                  </div>
                  <div className="flex gap-2 mt-2 sm:mt-0">
                    <a href="#" className="text-xs py-1 px-2 bg-terminal-green/70 text-deep-black rounded hover:bg-terminal-green/90">View</a>
                  </div>
                </div>
                {/* Document Item Example 4 (Architecture Diagram) */}
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div>
                    <h4 className="font-semibold text-terminal-green/90">Current Tech Stack Diagram v1.2.png</h4>
                    <p className="text-xs text-gray-400">Category: Architecture Diagram | Version: 1.2 | Last Updated: 2025-05-01</p>
                  </div>
                  <div className="flex gap-2 mt-2 sm:mt-0">
                    <a href="#" className="text-xs py-1 px-2 bg-terminal-green/70 text-deep-black rounded hover:bg-terminal-green/90">View Diagram</a>
                    <a href="#" className="text-xs py-1 px-2 bg-gray-600 text-light-gray rounded hover:bg-gray-500">Download PNG</a>
                  </div>
                </div>
                {/* Document Item Example 5 (Training Material) */}
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div>
                    <h4 className="font-semibold text-terminal-green/90">CRM Advanced Features Training Deck.pdf</h4>
                    <p className="text-xs text-gray-400">Category: Training Material | For: Sales Team | Created: 2025-05-14</p>
                  </div>
                  <div className="flex gap-2 mt-2 sm:mt-0">
                    <a href="#" className="text-xs py-1 px-2 bg-terminal-green/70 text-deep-black rounded hover:bg-terminal-green/90">Open Slides</a>
                    <a href="#" className="text-xs py-1 px-2 bg-gray-600 text-light-gray rounded hover:bg-gray-500">Download PDF</a>
                  </div>
                </div>
              </div>
              <a href="#" className="inline-block mt-4 text-sm text-terminal-green hover:underline">View All Documents &rarr;</a>
            </section>

            {/* Document Preview/Viewer Section */}
            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Document Preview</h3>
              <div className="bg-deep-gray p-6 rounded-md border-2 border-dashed border-gray-700/50 min-h-[300px] flex items-center justify-center">
                <p className="text-gray-500 text-center">Select a document from the library to preview its content here.<br/>(Placeholder for embedded document viewer or content preview)</p>
              </div>
            </section>

          </div>
        )}

        {activeTab === 'architecture' && (
          <div className="bg-charcoal-gray p-6 shadow-lg border border-gray-700/60 rounded-md space-y-6">
            <h2 className="text-2xl font-mono text-terminal-green/90 mb-4">System Architecture Overview</h2>
            <p className="text-light-gray">
              This section provides a conceptual overview of the system architecture, including data flow models and integration strategies.
              Detailed diagrams, specific plans, and technical documentation (e.g., Tech Stack Diagram, Integration Plans, Access Matrices) are managed within the 
              <a href="#sops" onClick={() => setActiveTab('sops')} className="text-terminal-green hover:underline font-semibold">SOPs & Documentation Hub</a>.
            </p>
            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Conceptual Data Flow</h3>
              <div className="bg-deep-gray p-6 rounded-md border-2 border-dashed border-gray-700/50 min-h-[200px] flex items-center justify-center">
                <p className="text-gray-500 text-center">(Placeholder for high-level data flow diagram or description)</p>
              </div>
            </section>
            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Key Integration Points</h3>
              <ul className="list-disc list-inside text-light-gray/90 pl-4 space-y-1">
                <li>CRM &lt;-&gt; Email Marketing Platform</li>
                <li>ERP &lt;-&gt; Inventory Management System</li>
                <li>Project Management Tool &lt;-&gt; Client Communication Portal</li>
              </ul>
              <p className="text-xs text-gray-400 mt-2">Refer to specific integration plans in the Document Hub for details.</p>
            </section>
          </div>
        )}

        {activeTab === 'implementation' && (
          <div className="bg-charcoal-gray p-6 shadow-lg border border-gray-700/60 rounded-md space-y-6">
            <h2 className="text-2xl font-mono text-terminal-green/90 mb-4">Implementation & Training</h2>
            <p className="text-light-gray">
              This section tracks project rollout plans, training initiatives, user adoption metrics, and feedback. 
              For a consolidated view of overall project status and milestones, please see the 
              <a href="#overview" onClick={() => setActiveTab('overview')} className="text-terminal-green hover:underline font-semibold">Overview tab</a>.
            </p>
            <div className="mt-4 space-y-3">
              <p className="text-light-gray/90"><strong>Phase 1 Rollout (New PM Tool):</strong> August 15th, 2025</p>
              <ul className="list-disc list-inside text-light-gray/90">
                <li><a href="#" className="hover:text-terminal-green underline">Training Module 1: Basic Navigation</a></li>
                <li><a href="#" className="hover:text-terminal-green underline">User Feedback Survey (Post-Training)</a></li>
              </ul>
              <p className="text-light-gray/90">Adoption Rate: 75% (Target: 90%)</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
