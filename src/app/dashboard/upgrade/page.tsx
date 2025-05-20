import React from 'react';
import Link from 'next/link';

// Placeholder data for upgrade plans - in a real app, this would come from an API
const upgradePlans = [
  {
    name: 'Standard Access Tier',
    price: 'Contact Us',
    features: [
      'Access to Core Service Modules',
      'Standard Support (Email & Chat)',
      'Monthly Performance Reports',
      'Resource Hub Access',
    ],
    ctaLink: '/dashboard/support?subject=Inquiry%20about%20Standard%20Access%20Tier&briefType=new_service_request',
    ctaText: 'Inquire About Standard',
  },
  {
    name: 'Professional Ops Tier',
    price: 'Custom Quote',
    features: [
      'All Standard Tier Features',
      'Dedicated Account Manager',
      'Priority Support (24/7 Hotline)',
      'Custom Analytics & Dashboards',
      'Early Access to New Tools',
      'Proactive Strategy Sessions',
    ],
    ctaLink: '/dashboard/support?subject=Inquiry%20about%20Professional%20Ops%20Tier&briefType=new_service_request',
    ctaText: 'Request Pro Quote',
    highlight: true,
  },
  {
    name: 'Enterprise & Custom Solutions',
    price: 'Bespoke Pricing',
    features: [
      'Fully Tailored Service Packages',
      'Dedicated Engineering & Ops Team',
      'On-Site Support Options',
      'Custom Integrations & API Access',
      'Full System Audits & Optimization',
      'Bespoke AI Agent Development',
    ],
    ctaLink: '/dashboard/support?subject=Inquiry%20about%20Enterprise/Custom%20Solution&briefType=new_project_brief',
    ctaText: 'Discuss Custom Solution',
  },
];

export default function UpgradePage() {
  return (
    <div className="p-6 md:p-8 text-off-white min-h-screen">
      <header className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-mono text-terminal-green tracking-tight">
          Elevate Your Operational Capacity
        </h1>
        <p className="text-light-gray mt-2 text-base md:text-lg max-w-2xl mx-auto">
          Unlock enhanced capabilities, dedicated support, and advanced tools by upgrading your service tier or exploring bespoke solutions tailored to your unique operational demands.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {upgradePlans.map((plan, index) => (
          <div
            key={index}
            className={`bg-charcoal-gray p-6 shadow-xl border rounded-lg flex flex-col ${plan.highlight ? 'border-terminal-green' : 'border-gray-700/60'}`}
          >
            <h2 className={`text-2xl font-mono mb-1 ${plan.highlight ? 'text-terminal-green' : 'text-terminal-green/80'}`}>{plan.name}</h2>
            <p className={`text-3xl font-semibold mb-5 ${plan.highlight ? 'text-off-white' : 'text-gray-300'}`}>{plan.price}</p>
            
            <ul className="space-y-2 text-sm text-light-gray mb-6 flex-grow">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <svg className={`w-4 h-4 mr-2 mt-1 flex-shrink-0 ${plan.highlight ? 'text-terminal-green' : 'text-terminal-green/70'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <Link href={plan.ctaLink} legacyBehavior>
              <a className={`block w-full text-center font-mono py-3 px-6 rounded-md transition-colors duration-300 text-base shadow-md hover:shadow-lg ${plan.highlight ? 'bg-terminal-green text-deep-black hover:bg-terminal-green/80' : 'bg-gray-600/40 text-terminal-green hover:bg-gray-500/60'}`}>
                {plan.ctaText}
              </a>
            </Link>
          </div>
        ))}
      </div>

      <section className="mt-16 text-center bg-charcoal-gray p-8 rounded-lg border border-gray-700/60 shadow-xl">
        <h2 className="text-2xl md:text-3xl font-mono text-terminal-green mb-3">Need a Tailored Solution?</h2>
        <p className="text-light-gray mb-6 max-w-xl mx-auto">
          If your requirements go beyond our standard tiers, or if you need a completely bespoke engagement, our specialists are ready to design a custom package for you.
        </p>
        <Link href="/dashboard/support?subject=Custom%20Solution%20Inquiry&briefType=new_project_brief" legacyBehavior>
          <a className="bg-steel-blue text-off-white font-mono py-3 px-8 rounded-md hover:bg-steel-blue/80 focus:outline-none focus:ring-2 focus:ring-steel-blue focus:ring-opacity-50 transition-colors duration-300 text-lg shadow-md hover:shadow-lg">
            Contact Us for Customization
          </a>
        </Link>
      </section>
    </div>
  );
}
