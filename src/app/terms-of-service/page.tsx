import Link from 'next/link';

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 min-h-[calc(100vh-200px)]">
      <h1 className="text-4xl font-mono font-bold text-terminal-green mb-8">
        Terms of Service
      </h1>
      <div className="space-y-6 text-light-grey prose prose-invert max-w-3xl">
        <p>
          <em>Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</em>
        </p>
        <p>
          Welcome to Wrenfield Consulting. These Terms of Service ("Terms") govern your access to and use of our website, products, and services (collectively, the "Services"). Please read these Terms carefully before using our Services.
        </p>
        <p>
          By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use our Services.
        </p>

        <h2 className="text-2xl font-mono text-terminal-green mt-6">1. Use of Services</h2>
        <p>
          You agree to use the Services only for lawful purposes and in accordance with these Terms. You are responsible for all activity that occurs under your account.
        </p>
        <p>
          You may not use the Services in any manner that could disable, overburden, damage, or impair the Services or interfere with any other party's use of the Services.
        </p>

        <h2 className="text-2xl font-mono text-terminal-green mt-6">2. Accounts and Registration</h2>
        <p>
          To access certain features of our Services, you may be required to register for an account. When you register for an account, you agree to provide accurate, current, and complete information. You are responsible for safeguarding your account password and for any activities or actions under your account.
        </p>

        <h2 className="text-2xl font-mono text-terminal-green mt-6">3. Intellectual Property</h2>
        <p>
          The Services and their original content, features, and functionality are and will remain the exclusive property of Wrenfield Consulting and its licensors. The Services are protected by copyright, trademark, and other laws of both the United States and foreign countries.
        </p>

        {/* Add more sections as needed: Payment, Subscription, Termination, Disclaimers, Limitation of Liability, Governing Law, Changes to Terms, Contact Us */}
        <p className="mt-8">
          This is a placeholder terms of service. Please replace this with your full terms of service.
        </p>

        <div className="mt-12">
          <Link href="/" className="text-terminal-green hover:underline">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
