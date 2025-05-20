import React from 'react';
import Link from 'next/link';

// Placeholder data for resources - in a real app, this would come from an API or CMS
const resourceCategories = [
  {
    name: 'Documentation & Guides',
    items: [
      { id: 'doc1', title: 'Wrenfield Platform User Manual v2.1', type: 'PDF', link: '#' },
      { id: 'doc2', title: 'Best Practices for Sales Outreach Sequences', type: 'Article', link: '#' },
      { id: 'doc3', title: 'AI Agent Builder: Quick Start Guide', type: 'Web', link: '#' },
    ],
  },
  {
    name: 'Templates & SOPs',
    items: [
      { id: 'temp1', title: 'Project Brief Template', type: 'DOCX', link: '#' },
      { id: 'temp2', title: 'Monthly Marketing Report Template', type: 'XLSX', link: '#' },
      { id: 'temp3', title: 'Standard Operating Procedure (SOP) for Client Onboarding', type: 'PDF', link: '#' },
    ],
  },
  {
    name: 'Recommended Tools & Software',
    items: [
      { id: 'tool1', title: 'CRM Solution: ExampleCRM', type: 'Link', link: '#' },
      { id: 'tool2', title: 'Analytics Platform: InsightDash', type: 'Link', link: '#' },
      { id: 'tool3', title: 'Productivity Suite: TaskMaster Pro', type: 'Link', link: '#' },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <div className="p-6 md:p-8 text-off-white min-h-screen">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-mono text-terminal-green tracking-tight">
          Resource & Knowledge Hub
        </h1>
        <p className="text-light-gray mt-1 text-sm md:text-base">
          Access curated documentation, templates, tools, and insights to enhance your operations.
        </p>
      </header>

      {/* Placeholder for Search/Filter Bar */}
      <div className="mb-10">
        <input
          type="search"
          placeholder="Search resources (e.g., 'CRM guide', 'marketing template')..."
          className="w-full p-3 bg-charcoal-gray border border-gray-700/60 rounded-md text-off-white placeholder-gray-500 focus:ring-2 focus:ring-terminal-green focus:border-terminal-green outline-none transition-colors"
        />
        {/* Add filter buttons/dropdowns here if needed */}
      </div>

      <div className="space-y-10">
        {resourceCategories.map((category) => (
          <section key={category.name}>
            <h2 className="text-2xl font-mono text-terminal-green/90 mb-4 border-b border-gray-700/60 pb-2">
              {category.name}
            </h2>
            {category.items.length > 0 ? (
              <ul className="space-y-3">
                {category.items.map((item) => (
                  <li key={item.id} className="bg-charcoal-gray p-4 shadow-md border border-gray-700/40 rounded-md hover:border-terminal-green/50 transition-colors duration-200 flex justify-between items-center">
                    <div>
                      <Link href={item.link} legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer" className="text-off-white hover:text-terminal-green font-medium">
                          {item.title}
                        </a>
                      </Link>
                      <span className="ml-2 text-xs bg-gray-600/50 text-gray-300 px-2 py-0.5 rounded-full">
                        {item.type}
                      </span>
                    </div>
                    <Link href={item.link} legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer" className="text-sm text-terminal-green/70 hover:text-terminal-green font-mono">
                            Access &#x2192;
                        </a>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400 italic">No resources available in this category yet.</p>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
