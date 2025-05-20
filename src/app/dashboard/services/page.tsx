import React from 'react';
import Link from 'next/link'; // Import Link for navigation

// Placeholder data for active services - in a real app, this would come from an API
const activeServices = [
  {
    id: '1',
    name: 'Project Chimera - Web Dev Suite',
    status: 'Active - Sprint 2 Ongoing',
    detailsLink: '/dashboard/service/web-development/project-chimera', // Example link
    kpi: '95% Task Completion',
  },
  {
    id: '2',
    name: 'Q4 Marketing Intel Matrix',
    status: 'Active - Data Syncing',
    detailsLink: '/dashboard/service/marketing-strategy/q4-campaign',
    kpi: 'Data Integrity: 99.8%',
  },
  {
    id: '3',
    name: 'Sales Outreach Automation - Phase 1',
    status: 'Pending Deployment - Awaiting Client Approval',
    detailsLink: '/dashboard/service/sales-outreach/automation-p1',
    kpi: 'Configuration: 80% Complete',
  },
];

export default function ServicesPage() {
  return (
    <div className="p-6 md:p-8 text-off-white min-h-screen">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-mono text-terminal-green tracking-tight">
          Manage Your Engaged Services
        </h1>
        <p className="text-light-gray mt-1 text-sm md:text-base">
          Oversee active projects, track progress, and access service-specific tools.
        </p>
      </header>

      <div className="mb-12">
        <Link href={{ pathname: '/dashboard/support', query: { briefType: 'new_service_request', subject: 'New Service Inquiry' } }}>
          <button
            type="button"
            className="bg-terminal-green/80 text-deep-black font-mono py-3 px-5 rounded-md hover:bg-terminal-green focus:outline-none focus:ring-2 focus:ring-terminal-green focus:ring-opacity-50 transition-colors duration-300 text-base shadow-md hover:shadow-lg"
          >
            + Request New Service / Consultation
          </button>
        </Link>
      </div>

      {activeServices.length > 0 ? (
        <div className="space-y-6">
          {activeServices.map((service) => (
            <div
              key={service.id}
              className="bg-charcoal-gray p-5 shadow-lg border border-gray-700/60 rounded-md hover:border-terminal-green/70 transition-colors duration-200"
            >
              <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-2">
                <h2 className="text-xl font-mono text-off-white mb-1 sm:mb-0">
                  {service.name}
                </h2>
                <span
                  className={`px-3 py-1 text-xs font-semibold rounded-full whitespace-nowrap mt-1 sm:mt-0 ${service.status.toLowerCase().includes('active') ? 'bg-terminal-green/20 text-terminal-green' : service.status.toLowerCase().includes('pending') ? 'bg-yellow-500/20 text-yellow-400' : 'bg-gray-600/30 text-gray-300'}
                  `}
                >
                  {service.status.split(' - ')[0]} {/* Show only 'Active' or 'Pending Deployment' etc. */}
                </span>
              </div>
              <p className="text-sm text-gray-400 mb-1 italic">{service.status.includes(' - ') ? service.status.split(' - ').slice(1).join(' - ') : ''}</p>
              <p className="text-sm text-terminal-green/80 mb-3">Key Metric: <span className='text-off-white font-semibold'>{service.kpi}</span></p>
              <div className="flex flex-wrap gap-3 mt-4">
                <Link href={service.detailsLink}>
                  <button
                    type="button"
                    className="text-sm bg-charcoal-gray border border-terminal-green/50 text-terminal-green font-mono py-2 px-3 rounded-md hover:bg-terminal-green/20 focus:outline-none focus:ring-2 focus:ring-terminal-green focus:ring-opacity-50 transition-colors duration-300 shadow-sm hover:shadow-md"
                  >
                    View Details & Tools
                  </button>
                </Link>
                {/* Example additional actions - these would link to specific functionalities */}
                <button
                    type="button"
                    className="text-sm bg-charcoal-gray border border-light-gray/30 text-light-gray font-mono py-2 px-3 rounded-md hover:bg-light-gray/10 focus:outline-none focus:ring-2 focus:ring-light-gray focus:ring-opacity-50 transition-colors duration-300 shadow-sm hover:shadow-md"
                  >
                    Access Reports
                </button>
                 <button
                    type="button"
                    className="text-sm bg-charcoal-gray border border-light-gray/30 text-light-gray font-mono py-2 px-3 rounded-md hover:bg-light-gray/10 focus:outline-none focus:ring-2 focus:ring-light-gray focus:ring-opacity-50 transition-colors duration-300 shadow-sm hover:shadow-md"
                  >
                    Manage Configuration
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-10 bg-charcoal-gray border border-gray-700/60 rounded-md shadow-lg">
          <svg className="mx-auto h-12 w-12 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <h3 className="mt-2 text-xl font-mono text-off-white">No Active Services</h3>
          <p className="mt-1 text-sm text-gray-400">
            Get started by requesting a new service or consultation.
          </p>
          <div className="mt-6">
            <Link href={{ pathname: '/dashboard/support', query: { briefType: 'new_service_request', subject: 'Initial Service Inquiry' } }}>
                <button
                    type="button"
                    className="bg-terminal-green/80 text-deep-black font-mono py-2 px-4 rounded-md hover:bg-terminal-green focus:outline-none focus:ring-2 focus:ring-terminal-green focus:ring-opacity-50 transition-colors duration-300 text-sm shadow-md hover:shadow-lg"
                >
                    Request a Service
                </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
