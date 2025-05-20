import React from 'react';
import Link from 'next/link';

export default function DashboardOverviewPage() {
  return (
    <div className="p-6 md:p-8 text-off-white min-h-screen">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-mono text-terminal-green tracking-tight">
          Overview / Status
        </h1>
        <p className="text-light-gray mt-1 text-sm md:text-base">
          Summary of active tools, updates and system alerts.
        </p>
      </header>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Service Cards */}
        <Link href="/dashboard/services/web-development" legacyBehavior>
          <a className="block bg-charcoal-gray p-6 shadow-lg border border-gray-700/60 rounded-md hover:border-terminal-green/70 transition-colors duration-300 lg:col-span-1">
            <h2 className="text-xl font-mono text-terminal-green mb-3">Web Dev</h2>
            <p className="text-sm text-light-gray">Custom applications, enterprise platforms, e-commerce, and more.</p>
            <span className="mt-3 inline-block text-xs text-terminal-green/80 hover:text-terminal-green">View Details &rarr;</span>
          </a>
        </Link>

        <Link href="/dashboard/services/marketing" legacyBehavior>
          <a className="block bg-charcoal-gray p-6 shadow-lg border border-gray-700/60 rounded-md hover:border-terminal-green/70 transition-colors duration-300 lg:col-span-1">
            <h2 className="text-xl font-mono text-terminal-green mb-3">Marketing</h2>
            <p className="text-sm text-light-gray">Strategic campaigns, brand building, digital presence optimization.</p>
            <span className="mt-3 inline-block text-xs text-terminal-green/80 hover:text-terminal-green">View Details &rarr;</span>
          </a>
        </Link>

        <Link href="/dashboard/services/sales-outreach" legacyBehavior>
          <a className="block bg-charcoal-gray p-6 shadow-lg border border-gray-700/60 rounded-md hover:border-terminal-green/70 transition-colors duration-300 lg:col-span-1">
            <h2 className="text-xl font-mono text-terminal-green mb-3">Sales Outreach</h2>
            <p className="text-sm text-light-gray">Targeted lead generation, sequence automation, pipeline development.</p>
            <span className="mt-3 inline-block text-xs text-terminal-green/80 hover:text-terminal-green">View Details &rarr;</span>
          </a>
        </Link>

        <Link href="/dashboard/services/business-management" legacyBehavior>
          <a className="block bg-charcoal-gray p-6 shadow-lg border border-gray-700/60 rounded-md hover:border-terminal-green/70 transition-colors duration-300 lg:col-span-1">
            <h2 className="text-xl font-mono text-terminal-green mb-3">Business Management Support</h2>
            <p className="text-sm text-light-gray">Operational streamlining, process automation, strategic advisory.</p>
            <span className="mt-3 inline-block text-xs text-terminal-green/80 hover:text-terminal-green">View Details &rarr;</span>
          </a>
        </Link>

        <Link href="/dashboard/services/ai-agent-builders" legacyBehavior>
          <a className="block bg-charcoal-gray p-6 shadow-lg border border-gray-700/60 rounded-md hover:border-terminal-green/70 transition-colors duration-300 lg:col-span-1">
            <h2 className="text-xl font-mono text-terminal-green mb-3">AI Agent Builders</h2>
            <p className="text-sm text-light-gray">Custom AI agents for automation, support, and advanced analytics.</p>
            <span className="mt-3 inline-block text-xs text-terminal-green/80 hover:text-terminal-green">View Details &rarr;</span>
          </a>
        </Link>

        <Link href="/dashboard/services/crm-dashboard-setups" legacyBehavior>
          <a className="block bg-charcoal-gray p-6 shadow-lg border border-gray-700/60 rounded-md hover:border-terminal-green/70 transition-colors duration-300 lg:col-span-1">
            <h2 className="text-xl font-mono text-terminal-green mb-3">CRM/Dashboard Setups</h2>
            <p className="text-sm text-light-gray">Tailored CRM implementations and insightful data dashboards.</p>
            <span className="mt-3 inline-block text-xs text-terminal-green/80 hover:text-terminal-green">View Details &rarr;</span>
          </a>
        </Link>

        <Link href="/dashboard/services/sales-funnel-optimization" legacyBehavior>
          <a className="block bg-charcoal-gray p-6 shadow-lg border border-gray-700/60 rounded-md hover:border-terminal-green/70 transition-colors duration-300 lg:col-span-1">
            <h2 className="text-xl font-mono text-terminal-green mb-3">Sales Funnel Optimization</h2>
            <p className="text-sm text-light-gray">Design and optimize high-conversion sales and marketing funnels.</p>
            <span className="mt-3 inline-block text-xs text-terminal-green/80 hover:text-terminal-green">View Details &rarr;</span>
          </a>
        </Link>

        <Link href="/dashboard/services/sop-system-building" legacyBehavior>
          <a className="block bg-charcoal-gray p-6 shadow-lg border border-gray-700/60 rounded-md hover:border-terminal-green/70 transition-colors duration-300 lg:col-span-1">
            <h2 className="text-xl font-mono text-terminal-green mb-3">SOP + System Building</h2>
            <p className="text-sm text-light-gray">Develop robust SOPs and integrated systems for operational excellence.</p>
            <span className="mt-3 inline-block text-xs text-terminal-green/80 hover:text-terminal-green">View Details &rarr;</span>
          </a>
        </Link>

        {/* Upgrade to Pro Card */} 
        <div className="bg-charcoal-gray p-6 shadow-lg border border-gray-700/60 rounded-md hover:border-terminal-green/70 transition-colors duration-300 flex flex-col items-center justify-center text-center lg:col-span-1">
          <span className="text-4xl mb-3" role="img" aria-label="lock icon">🔒</span>
          <h2 className="text-xl font-mono text-terminal-green mb-2">Upgrade to Pro</h2>
          <p className="text-sm text-light-gray">Unlock more features</p>
          <button type="button" className="mt-4 bg-terminal-green/80 text-deep-black font-mono py-2 px-4 rounded-md text-sm hover:bg-terminal-green focus:outline-none focus:ring-2 focus:ring-terminal-green focus:ring-opacity-50 transition-colors duration-300">
            LEARN MORE
          </button>
        </div>

        {/* System Alerts Card (can be made more prominent or moved if needed) */}
        <div className="bg-charcoal-gray p-6 shadow-lg border border-gray-700/60 rounded-md hover:border-terminal-green/70 transition-colors duration-300 md:col-span-2 lg:col-span-3">
          <h2 className="text-xl font-mono text-terminal-green mb-3">System Alerts</h2>
          <ul className="space-y-2 text-sm">
            <li className="text-light-gray"><span className="text-terminal-green/70">[INFO]</span> Scheduled maintenance on 2025-05-15 02:00 UTC.</li>
            <li className="text-yellow-400/80"><span className="text-yellow-400/70">[WARN]</span> Approaching storage quota for 'Project Alpha'.</li>
            <li className="text-light-gray">No critical alerts.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
