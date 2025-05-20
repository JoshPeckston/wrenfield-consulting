import React from 'react';
import Link from 'next/link';

// Placeholder data - in a real app, this would come from user context or API
const userProfile = {
  name: 'Operator Name',
  email: 'operator@example.com',
  company: 'Client Organization LLC',
  memberSince: '2024-01-15',
};

const subscriptionDetails = {
  currentPlan: 'Professional Ops Tier',
  status: 'Active',
  nextBillingDate: '2025-06-01',
  paymentMethod: 'Visa **** **** **** 1234',
};

export default function AccountPage() {
  return (
    <div className="p-6 md:p-8 text-off-white min-h-screen">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-mono text-terminal-green tracking-tight">
          Account Management
        </h1>
        <p className="text-light-gray mt-1 text-sm md:text-base">
          Manage your profile information, security settings, and subscription details.
        </p>
      </header>

      <div className="space-y-10">
        {/* Profile Information Section */}
        <section className="bg-charcoal-gray p-6 shadow-lg border border-gray-700/60 rounded-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-mono text-terminal-green/90">
              Profile Information
            </h2>
            <button className="text-sm bg-gray-600/40 text-terminal-green hover:bg-gray-500/60 font-mono py-1.5 px-4 rounded-md transition-colors">
              Edit Profile
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 text-sm">
            <div>
              <label className="block text-gray-400">Full Name</label>
              <p className="text-off-white">{userProfile.name}</p>
            </div>
            <div>
              <label className="block text-gray-400">Email Address</label>
              <p className="text-off-white">{userProfile.email}</p>
            </div>
            <div>
              <label className="block text-gray-400">Company / Organization</label>
              <p className="text-off-white">{userProfile.company}</p>
            </div>
            <div>
              <label className="block text-gray-400">Member Since</label>
              <p className="text-off-white">{userProfile.memberSince}</p>
            </div>
          </div>
        </section>

        {/* Security Settings Section */}
        <section className="bg-charcoal-gray p-6 shadow-lg border border-gray-700/60 rounded-md">
          <h2 className="text-2xl font-mono text-terminal-green/90 mb-4">
            Security Settings
          </h2>
          <div className="space-y-3">
            <div>
              <button className="text-off-white hover:text-terminal-green transition-colors w-full text-left p-3 bg-deep-black border border-gray-600/80 rounded-md">
                Change Password
              </button>
            </div>
            <div>
              <button className="text-off-white hover:text-terminal-green transition-colors w-full text-left p-3 bg-deep-black border border-gray-600/80 rounded-md">
                Manage Two-Factor Authentication (2FA)
              </button>
            </div>
            {/* Add more security options like API keys management if needed */}
          </div>
        </section>

        {/* Billing & Subscription Section */}
        <section className="bg-charcoal-gray p-6 shadow-lg border border-gray-700/60 rounded-md">
          <h2 className="text-2xl font-mono text-terminal-green/90 mb-4">
            Billing & Subscription
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 text-sm mb-6">
            <div>
              <label className="block text-gray-400">Current Plan</label>
              <p className="text-off-white">{subscriptionDetails.currentPlan} ({subscriptionDetails.status})</p>
            </div>
            <div>
              <label className="block text-gray-400">Next Billing Date</label>
              <p className="text-off-white">{subscriptionDetails.nextBillingDate}</p>
            </div>
            <div>
              <label className="block text-gray-400">Payment Method</label>
              <p className="text-off-white">{subscriptionDetails.paymentMethod}</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/dashboard/upgrade" legacyBehavior>
              <a className="block text-center font-mono py-2.5 px-5 rounded-md transition-colors duration-300 bg-terminal-green text-deep-black hover:bg-terminal-green/80 shadow-md w-full sm:w-auto">
                Manage Subscription / Upgrade
              </a>
            </Link>
            <button className="text-terminal-green hover:text-terminal-green/80 font-mono py-2.5 px-5 rounded-md transition-colors duration-300 bg-gray-600/40 hover:bg-gray-500/60 shadow-md w-full sm:w-auto">
              View Billing History
            </button>
             <button className="text-off-white hover:text-terminal-green font-mono py-2.5 px-5 rounded-md transition-colors duration-300 bg-deep-black border border-gray-600/80 hover:border-terminal-green/70 shadow-md w-full sm:w-auto">
              Update Payment Method
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}
