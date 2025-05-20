'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const serviceDetails = {
  name: 'Custom AI Agent & Automation Solutions',
  overview: 'We design and build intelligent AI agents to automate complex tasks, enhance customer interactions, and unlock new levels of operational efficiency. From conversational AI to data processing bots, we tailor solutions to your specific needs.',
  keyFeatures: [
    'Conversational AI & Chatbot Development (e.g., for Customer Support, Lead Gen)',
    'Task Automation Agents (e.g., Data Entry, Report Generation, Process Automation)',
    'AI-Powered Data Analysis & Insights Agents',
    'Integration with Existing Systems & APIs (CRMs, ERPs, Databases)',
    'Natural Language Processing (NLP) & Understanding (NLU) Solutions',
    'Machine Learning Model Integration for Agent Intelligence',
    'Ongoing Agent Monitoring, Maintenance & Performance Optimization',
  ],
  clientOutcomes: [
    'Significant reduction in manual effort and operational costs.',
    '24/7 availability for customer support or automated tasks.',
    'Improved accuracy and consistency in processes.',
    'Enhanced customer engagement and satisfaction.',
    'Faster data processing and insights generation.',
    'Scalable solutions that grow with your business demands.',
  ],
  cta: {
    text: 'Develop Your AI Agent Strategy',
    link: '/dashboard/support?subject=New%20Brief:%20AI%20Agent%20Development&briefType=new_project_brief',
  },
  relatedCaseStudies: [
    { id: 'cs1', title: 'Case Study: AI Chatbot for E-commerce Customer Service', link: '#' },
    { id: 'cs2', title: 'Case Study: Automating Financial Reporting with AI Agents', link: '#' },
  ]
};

export default function AIAgentBuildersServicePage() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'development', label: 'Agent Development' },
    { id: 'retainer', label: 'AI Retainer Hub' },
    { id: 'knowledge', label: 'Knowledge Base & Files' },
    { id: 'performance', label: 'Performance & Logs' },
  ];
  console.log('Rendering AIAgentBuildersServicePage, activeTab:', activeTab);
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
                <h3 className="text-xl font-mono text-terminal-green mb-4">Automate & Innovate</h3>
                <p className='text-sm text-light-gray mb-4'>Ready to leverage AI for your business? Let\'s build your intelligent automation solution.</p>
                <Link href={serviceDetails.cta.link} legacyBehavior>
                  <a className="block w-full text-center font-mono py-3 px-6 rounded-md transition-colors duration-300 bg-terminal-green text-deep-black hover:bg-terminal-green/80 shadow-md hover:shadow-lg">
                    {serviceDetails.cta.text}
                  </a>
                </Link>
              </div>
              
              {serviceDetails.relatedCaseStudies.length > 0 && (
                <div className="bg-charcoal-gray p-6 shadow-lg border border-gray-700/60 rounded-md">
                  <h3 className="text-xl font-mono text-terminal-green/90 mb-4">AI Success Stories</h3>
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
        {activeTab === 'development' && (
          <div className="bg-charcoal-gray p-6 shadow-lg border border-gray-700/60 rounded-md space-y-10">
            <h2 className="text-2xl font-mono text-terminal-green/90 mb-6">AI Agent Development Dashboard</h2>

            {/* AI Initiative Overview, Test Environments & Quick Links */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Current Initiative</h3>
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50 h-full">
                  <p className="text-light-gray"><span className="font-semibold text-terminal-green/70">Focus Agent:</span> SupportBot v2.0</p>
                  <p className="text-light-gray"><span className="font-semibold text-terminal-green/70">Overall Progress:</span> 60%</p>
                  <div className="w-full bg-gray-600 rounded-full h-2.5 mt-2">
                    <div className="bg-terminal-green h-2.5 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Next: User Acceptance Testing (UAT)</p>
                </div>
              </div>
              <div className="md:col-span-1">
                <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Test Environments</h3>
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50 space-y-2 h-full">
                  <a href="#" className="block text-sm text-terminal-green hover:underline">SupportBot v2.0 - Staging &rarr;</a>
                  <a href="#" className="block text-sm text-terminal-green hover:underline">SalesAssist (Alpha) - Sandbox &rarr;</a>
                  <p className="text-xs text-gray-500">Access protocols in project wiki.</p>
                </div>
              </div>
              <div className="md:col-span-1">
                <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Quick Links & Tools</h3>
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50 space-y-2 h-full">
                  <a href="#" className="block text-sm text-terminal-green hover:underline">Project Git Repository &rarr;</a>
                  <a href="#" className="block text-sm text-terminal-green hover:underline">AI Platform Console &rarr;</a>
                  <a href="#" className="block text-sm text-terminal-green hover:underline">Vector DB Management &rarr;</a>
                  <a href="#" className="block text-sm text-terminal-green hover:underline">API Documentation &rarr;</a>
                </div>
              </div>
            </section>

            {/* Development Roadmap & Milestones */}
            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Development Roadmap & Milestones</h3>
              <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50 space-y-3 mb-4">
                <div className="flex justify-between items-center p-2 border-b border-gray-700/30">
                  <span className="text-light-gray">Phase 1: Use Case Definition & Design</span>
                  <span className="text-xs py-1 px-2 bg-green-500/30 text-green-300 rounded-full">Completed</span>
                </div>
                <div className="flex justify-between items-center p-2 border-b border-gray-700/30">
                  <span className="text-light-gray">Phase 2: Data Collection & Preparation</span>
                  <span className="text-xs py-1 px-2 bg-green-500/30 text-green-300 rounded-full">Completed</span>
                </div>
                <div className="flex justify-between items-center p-2 border-b border-gray-700/30">
                  <span className="text-light-gray">Phase 3: Model Development & Training</span>
                  <span className="text-xs py-1 px-2 bg-blue-500/30 text-blue-300 rounded-full">In Progress</span>
                </div>
                <div className="flex justify-between items-center p-2 border-b border-gray-700/30">
                  <span className="text-light-gray">Phase 4: Integration & Testing</span>
                  <span className="text-xs py-1 px-2 bg-gray-500/30 text-gray-300 rounded-full">To Do</span>
                </div>
                <div className="flex justify-between items-center p-2">
                  <span className="text-light-gray">Phase 5: Deployment & Monitoring</span>
                  <span className="text-xs py-1 px-2 bg-gray-500/30 text-gray-300 rounded-full">To Do</span>
                </div>
              </div>
              <div className="bg-deep-gray p-6 rounded-md border-2 border-dashed border-gray-700/50 min-h-[200px] flex items-center justify-center">
                <p className="text-gray-500 text-center">Placeholder for AI Project Lifecycle / Gantt Chart visualization.</p>
              </div>
            </section>

            {/* Feature Backlog & Task Management */}
            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Next Steps & Action Items</h3>
              <div className="bg-deep-gray p-6 rounded-md border-2 border-dashed border-gray-700/50 min-h-[300px] flex items-center justify-center">
                <p className="text-gray-500 text-center">Placeholder for Agent Feature Kanban Board or Task List.</p>
              </div>
            </section>
          </div>
        )}
        {activeTab === 'retainer' && (
          <div className="bg-charcoal-gray p-6 shadow-lg border border-gray-700/60 rounded-md space-y-10">
            <h2 className="text-2xl font-mono text-terminal-green/90 mb-6">AI Retainer & Support Hub</h2>
            
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50">
                <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Retainer Activity</h3>
                <p className="text-light-gray"><span className="font-semibold text-terminal-green/70">Hours Used (Current Cycle):</span> 8 / 15 hours</p>
                <div className="w-full bg-gray-600 rounded-full h-2.5 mt-1 mb-2">
                  <div className="bg-terminal-green h-2.5 rounded-full" style={{ width: `${(8/15)*100}%` }}></div>
                </div>
                <p className="text-light-gray"><span className="font-semibold text-terminal-green/70">Focus Areas:</span> SupportBot Optimization, New Intent Training</p>
                <p className="text-xs text-gray-400 mt-2">Cycle ends: July 31, 2025</p>
              </div>
              <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50">
                <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Key Contacts & Support</h3>
                <p className="text-light-gray"><span className="font-semibold text-terminal-green/70">Account Manager:</span> Ada Lovelace</p>
                <p className="text-light-gray"><span className="font-semibold text-terminal-green/70">Lead AI Engineer:</span> Alan Turing</p>
                <a href="#" className="text-xs text-terminal-green hover:underline mt-2 inline-block">Submit Support Ticket &rarr;</a>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Meeting Scheduler & Cadence</h3>
              <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50 space-y-3">
                <p className="text-light-gray/90"><span className="font-semibold text-terminal-green/70">Next Strategy Call:</span> July 10, 2025 - Topic: Q3 AI Roadmap Planning.</p>
                <div className="bg-deep-gray p-6 rounded-md border-2 border-dashed border-gray-700/50 min-h-[200px] flex flex-col items-center justify-center">
                  <p className="text-gray-500 text-center mb-4">Placeholder for embedded Meeting Scheduler (e.g., Calendly).</p>
                  <button className="py-2 px-4 bg-terminal-green text-deep-black font-mono rounded-md hover:bg-terminal-green/80 transition-colors">
                    Schedule/View Calls
                  </button>
                </div>
                <a href="#" className="text-xs text-terminal-green hover:underline mt-2 inline-block">View Past Meeting Notes & Agendas &rarr;</a>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Communication Log & Updates</h3>
              <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50">
                <div className="max-h-60 overflow-y-auto space-y-3 text-sm">
                  <p><span className="font-semibold text-terminal-green/70">[2025-07-05]</span> Weekly Summary Sent. Key highlights: SupportBot intent accuracy up by 5%.</p>
                  <p><span className="font-semibold text-terminal-green/70">[2025-07-01]</span> Retainer cycle started. Focus on fine-tuning SalesAssist prompts.</p>
                  <p><span className="font-semibold text-terminal-green/70">[2025-06-28]</span> Action Item: Client to provide new FAQ dataset for SupportBot retraining.</p>
                </div>
                <div className="mt-3 bg-deep-gray p-6 rounded-md border-2 border-dashed border-gray-700/50 min-h-[150px] flex items-center justify-center">
                  <p className="text-gray-500 text-center">Placeholder for Integrated Chat / Secure Messaging with Wrenfield Labs.</p>
                </div>
              </div>
            </section>
          </div>
        )}
        {activeTab === 'knowledge' && (
          <div className="bg-charcoal-gray p-6 shadow-lg border border-gray-700/60 rounded-md space-y-10">
            <h2 className="text-2xl font-mono text-terminal-green/90 mb-6">AI Knowledge Base & File Repository</h2>

            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Knowledge Base Sources</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50">
                  <h4 className="text-lg font-mono text-terminal-green/70 mb-2">SupportBot Training Data</h4>
                  <ul className="list-disc list-inside text-sm space-y-1 text-light-gray/90">
                    <li>FAQ Dataset (v3.2) - Last Updated: 2025-06-15</li>
                    <li>Product Documentation (Current Release)</li>
                    <li>Historical Support Tickets (Anonymized)</li>
                  </ul>
                  <button className="mt-3 text-xs py-1 px-2 bg-terminal-green/70 text-deep-black rounded hover:bg-terminal-green/90">Add New Source</button>
                </div>
                <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50">
                  <h4 className="text-lg font-mono text-terminal-green/70 mb-2">SalesAssist Prompt Library</h4>
                  <ul className="list-disc list-inside text-sm space-y-1 text-light-gray/90">
                    <li>Lead Qualification Prompts (v1.5)</li>
                    <li>Objection Handling Prompts (v2.1)</li>
                    <li>Product Demo Follow-up Sequences</li>
                  </ul>
                  <button className="mt-3 text-xs py-1 px-2 bg-terminal-green/70 text-deep-black rounded hover:bg-terminal-green/90">Add New Source</button>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Agent & Project File Repository</h3>
              <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
                <input 
                  type="search" 
                  placeholder="Search files (e.g., 'model_v2.pkl', 'API_specs.pdf')" 
                  className="w-full sm:w-auto flex-grow p-2 bg-deep-gray border border-gray-600 rounded-md text-light-gray placeholder-gray-500 focus:ring-terminal-green focus:border-terminal-green text-sm mb-2 sm:mb-0"
                />
                <button className="py-2 px-4 bg-terminal-green/80 text-deep-black font-mono rounded-md hover:bg-terminal-green transition-colors text-sm whitespace-nowrap">
                  Upload File
                </button>
              </div>
              <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50 min-h-[250px]">
                <p className="text-gray-400 text-sm mb-2">Showing 2 of 10 files. <a href='#' className='text-terminal-green hover:underline'>Browse All &rarr;</a></p>
                <div className="bg-charcoal-gray p-3 rounded-md border border-gray-600/50 flex justify-between items-center mb-2">
                  <div>
                    <p className="text-light-gray font-medium">SupportBot_v2_Architecture.pdf</p>
                    <p className="text-xs text-gray-500">Type: Document | Size: 5.1MB | Uploaded: 2025-05-12</p>
                  </div>
                  <div>
                    <a href="#" className="text-xs py-1 px-2 bg-terminal-green/70 text-deep-black rounded hover:bg-terminal-green/90 mr-1">View</a>
                    <a href="#" className="text-xs py-1 px-2 bg-gray-600 text-light-gray rounded hover:bg-gray-500">Download</a>
                  </div>
                </div>
                <div className="bg-charcoal-gray p-3 rounded-md border border-gray-600/50 flex justify-between items-center mb-2">
                  <div>
                    <p className="text-light-gray font-medium">intent_classification_model_final.joblib</p>
                    <p className="text-xs text-gray-500">Type: Model File | Size: 150MB | Uploaded: 2025-05-18</p>
                  </div>
                  <div>
                    <a href="#" className="text-xs py-1 px-2 bg-gray-600 text-light-gray rounded hover:bg-gray-500">Download</a>
                  </div>
                </div>
                <p className="text-gray-500 text-center mt-4">Further placeholder for detailed file browser and version history.</p>
              </div>
              <div className="mt-6 bg-deep-gray p-6 rounded-md border-2 border-dashed border-gray-700/50 min-h-[200px] flex items-center justify-center">
                <p className="text-gray-500 text-center">Placeholder for Document Preview Pane or Model Details Display.</p>
              </div>
            </section>
          </div>
        )}
        {activeTab === 'performance' && (
          <div className="bg-charcoal-gray p-6 shadow-lg border border-gray-700/60 rounded-md space-y-10">
            <h2 className="text-2xl font-mono text-terminal-green/90 mb-6">Agent Performance & Operational Logs</h2>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50">
                <h3 className="text-xl font-mono text-terminal-green/80 mb-3">SupportBot - Live Performance</h3>
                <p className="text-light-gray"><span className="font-semibold text-terminal-green/70">Intent Accuracy:</span> 92.5%</p>
                <p className="text-light-gray"><span className="font-semibold text-terminal-green/70">Resolution Rate:</span> 78%</p>
                <p className="text-light-gray"><span className="font-semibold text-terminal-green/70">Avg. Handle Time:</span> 2m 15s</p>
                <p className="text-xs text-gray-400 mt-2">Data from last 24 hours.</p>
              </div>
              <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50">
                <h3 className="text-xl font-mono text-terminal-green/80 mb-3">SalesAssist - Engagement Metrics</h3>
                <p className="text-light-gray"><span className="font-semibold text-terminal-green/70">Conversations Initiated:</span> 120</p>
                <p className="text-light-gray"><span className="font-semibold text-terminal-green/70">Leads Qualified:</span> 35</p>
                <p className="text-light-gray"><span className="font-semibold text-terminal-green/70">Demo Bookings Influenced:</span> 12</p>
                <p className="text-xs text-gray-400 mt-2">Data from last 7 days.</p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">Performance Monitoring & Alerting</h3>
              <div className="bg-deep-gray p-6 rounded-md border-2 border-dashed border-gray-700/50 min-h-[250px] flex items-center justify-center">
                <p className="text-gray-500 text-center">Placeholder for embedded Performance Charts / Grafana Dashboard.</p>
              </div>
              <div className="mt-4 bg-deep-gray p-4 rounded-md border border-gray-700/50">
                <h4 className="text-lg font-mono text-terminal-green/70 mb-2">Recent Alerts</h4>
                <ul className="list-disc list-inside text-sm space-y-1 text-light-gray/90">
                  <li><span className="text-yellow-400">[Warning]</span> SupportBot latency &gt; 500ms (2025-07-18 10:30 UTC)</li>
                  <li><span className="text-red-500">[Critical]</span> SalesAssist API connection failed (2025-07-17 23:15 UTC) - Resolved</li>
                </ul>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-mono text-terminal-green/80 mb-3">System & Interaction Logs</h3>
              <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
                <select className="w-full sm:w-auto p-2 bg-deep-gray border border-gray-600 rounded-md text-light-gray focus:ring-terminal-green focus:border-terminal-green text-sm mb-2 sm:mb-0">
                  <option value="supportbot">SupportBot Logs</option>
                  <option value="salesassist">SalesAssist Logs</option>
                  <option value="system">System Event Logs</option>
                </select>
                <input 
                  type="search" 
                  placeholder="Search logs (e.g., 'error', 'user_id:123')" 
                  className="w-full sm:w-auto flex-grow p-2 bg-deep-gray border border-gray-600 rounded-md text-light-gray placeholder-gray-500 focus:ring-terminal-green focus:border-terminal-green text-sm ml-0 sm:ml-2"
                />
              </div>
              <div className="bg-deep-gray p-4 rounded-md border border-gray-700/50 min-h-[300px] max-h-[400px] overflow-y-auto font-mono text-xs">
                <p><span className="text-terminal-green/70">[2025-07-18 14:05:12]</span> <span className="text-blue-400">[SupportBot]</span> INFO: New conversation started. Session ID: xyz789</p>
                <p><span className="text-terminal-green/70">[2025-07-18 14:05:15]</span> <span className="text-blue-400">[SupportBot]</span> DEBUG: Intent recognized: 'billing_query', Confidence: 0.98</p>
                <p><span className="text-terminal-green/70">[2025-07-18 14:05:18]</span> <span className="text-red-400">[SupportBot]</span> ERROR: Failed to retrieve customer data for user_id: 456. API timeout.</p>
                <p><span className="text-terminal-green/70">[2025-07-18 14:06:00]</span> <span className="text-cyan-400">[SalesAssist]</span> INFO: Lead 'john.doe@example.com' engaged.</p>
                <p className="text-gray-500">... more log entries ...</p>
              </div>
            </section>
          </div>
        )}

      </div>
    </div>
  );
}
