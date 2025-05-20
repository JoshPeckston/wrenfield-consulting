import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 min-h-[calc(100vh-200px)]"> {/* Adjust min-h as needed based on nav/footer height */}
      <h1 className="text-4xl font-mono font-bold text-terminal-green mb-8">
        Privacy Policy
      </h1>
      <div className="space-y-6 text-light-grey prose prose-invert max-w-3xl">
        <p>
          <em>Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</em>
        </p>
        <p>
          Welcome to Wrenfield Consulting. This Privacy Policy outlines how we collect, use, protect, and handle your personal information. By accessing or using our website and services, you agree to the terms of this Privacy Policy.
        </p>
        
        <h2 className="text-2xl font-mono text-terminal-green mt-6">Information We Collect</h2>
        <p>
          We may collect personal information that you voluntarily provide to us, such as your name, email address, phone number, company information, and payment details when you:
        </p>
        <ul>
          <li>Sign up for our services or create an account.</li>
          <li>Contact us through our website or customer support.</li>
          <li>Subscribe to our newsletters or promotional materials.</li>
          <li>Participate in surveys or provide feedback.</li>
        </ul>
        <p>
          We may also automatically collect certain information when you visit our website, such as your IP address, browser type, operating system, referring URLs, and information about your usage of our site through cookies and similar technologies.
        </p>

        <h2 className="text-2xl font-mono text-terminal-green mt-6">How We Use Your Information</h2>
        <p>
          Your information is used to:
        </p>
        <ul>
          <li>Provide, operate, and maintain our services.</li>
          <li>Process your transactions and manage your account.</li>
          <li>Communicate with you, including responding to your inquiries and providing customer support.</li>
          <li>Send you technical notices, updates, security alerts, and administrative messages.</li>
          <li>Personalize and improve your experience on our website.</li>
          <li>Monitor and analyze trends, usage, and activities in connection with our services.</li>
          <li>For marketing purposes, such as sending you information about new services or promotions, where permitted by law.</li>
        </ul>

        {/* Add more sections as needed: Data Sharing, Data Security, Your Rights, Cookies, Changes to Policy, Contact Us */}
        <p className="mt-8">
          This is a placeholder privacy policy. Please replace this with your full privacy policy.
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
