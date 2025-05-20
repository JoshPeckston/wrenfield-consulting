import Image from "next/image";
import GlitchText from "@/components/GlitchText";

export default function HomePage() {
  return (
    <main className="min-h-screen p-8 md:p-12 lg:p-24 space-y-16">
      <header className="text-center py-16 md:py-24 space-y-6">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-mono font-bold tracking-tight text-off-white">
          <GlitchText text="We build systems" /> <span className="block sm:inline"><GlitchText text="so you can build business."/></span>
        </h1>
        <p className="text-lg md:text-xl text-light-grey max-w-3xl mx-auto">
          From strategic web platforms to automated outreach and streamlined operations, Wrenfield delivers the clarity and digital tools you need to scale effectively.
        </p>
        <div>
          <a 
            href="#pricing"
            className="inline-block bg-terminal-green text-deep-black px-8 py-3 text-lg font-semibold rounded hover:bg-opacity-80 transition-colors duration-300 ease-in-out transform hover:scale-105"
          >
            See Plans
          </a>
        </div>
      </header>

      <section id="philosophy" className="space-y-6 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-mono text-terminal-green uppercase tracking-wider text-center">
          // Our Core Tenet: Engineered Clarity.
        </h2>
        <div className="space-y-4 text-light-grey text-md md:text-lg max-w-3xl mx-auto text-center">
          <p>
            In a world saturated with complexity, we deliver engineered clarity. We believe robust systems are born from precise understanding and intentional design.
          </p>
          <p>
            Our mission is to equip your business with meticulously crafted digital infrastructure, enabling you to operate with confidence and execute with strategic force. No noise, just signal.
          </p>
        </div>
      </section>

      <section id="services" className="space-y-6 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-mono text-terminal-green uppercase tracking-wider text-center">
          // Breakdown of Services
        </h2>
        <ul className="space-y-3 list-none text-light-grey text-md md:text-lg max-w-2xl mx-auto">
          <li className="flex items-start">
            <span className="text-terminal-green mr-3 mt-1">●</span>
            <span>
              <strong className="text-off-white">Web Development</strong> – sites that are functional, fast, and easy to manage
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-terminal-green mr-3 mt-1">●</span>
            <span>
              <strong className="text-off-white">Sales Outreach</strong> – lead systems that bring consistent opportunities
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-terminal-green mr-3 mt-1">●</span>
            <span>
              <strong className="text-off-white">Marketing & Messaging</strong> – brand clarity, written strategy, content flow
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-terminal-green mr-3 mt-1">●</span>
            <span>
              <strong className="text-off-white">Business Operations</strong> – structure, SOPs, backend support
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-terminal-green mr-3 mt-1">●</span>
            <span>
              <strong className="text-off-white">Dashboards & AI Tools</strong> – custom interfaces and automation in development
            </span>
          </li>
        </ul>
      </section>

      <section id="pricing" className="space-y-8 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-mono text-terminal-green uppercase tracking-wider text-center">
          // Subscription Tiers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Tier 1: Basic */}
          <div className="border border-charcoal-gray p-6 rounded-lg space-y-4 bg-charcoal-gray bg-opacity-30 hover:border-terminal-green transition-all duration-300">
            <h3 className="text-xl font-mono text-off-white">Basic Access</h3>
            <p className="text-3xl font-bold text-terminal-green">$XX <span className="text-sm font-normal text-light-grey">/mo</span></p>
            <ul className="space-y-2 text-light-grey text-sm">
              <li><span className="text-terminal-green mr-2">●</span> Core SOPs & PDFs</li>
              <li><span className="text-terminal-green mr-2">●</span> CRM Setup Templates</li>
              <li><span className="text-terminal-green mr-2">●</span> Community Access</li>
              <li><span className="text-terminal-green mr-2">●</span> Foundational Tools</li>
            </ul>
            <button className="w-full bg-terminal-green text-deep-black py-2 px-4 rounded hover:bg-opacity-80 font-semibold">
              Choose Basic
            </button>
          </div>

          {/* Tier 2: Pro (Highlight) */}
          <div className="border-2 border-terminal-green p-6 rounded-lg space-y-4 bg-charcoal-gray bg-opacity-50 ring-2 ring-terminal-green ring-opacity-50 transform scale-105">
            <h3 className="text-xl font-mono text-off-white">Pro Operator</h3>
            <p className="text-3xl font-bold text-terminal-green">$XXX <span className="text-sm font-normal text-light-grey">/mo</span></p>
            <ul className="space-y-2 text-light-grey text-sm">
              <li><span className="text-terminal-green mr-2">●</span> All Basic Features</li>
              <li><span className="text-terminal-green mr-2">●</span> Advanced Funnel Systems</li>
              <li><span className="text-terminal-green mr-2">●</span> Custom Dashboard Setup</li>
              <li><span className="text-terminal-green mr-2">●</span> AI Agent Integration</li>
              <li><span className="text-terminal-green mr-2">●</span> Priority Support</li>
            </ul>
            <button className="w-full bg-terminal-green text-deep-black py-2 px-4 rounded hover:bg-opacity-80 font-semibold">
              Choose Pro
            </button>
          </div>

          {/* Tier 3: Operator */}
          <div className="border border-charcoal-gray p-6 rounded-lg space-y-4 bg-charcoal-gray bg-opacity-30 hover:border-terminal-green transition-all duration-300">
            <h3 className="text-xl font-mono text-off-white">Full Operator</h3>
            <p className="text-3xl font-bold text-terminal-green">$XXXX <span className="text-sm font-normal text-light-grey">/mo</span></p>
            <ul className="space-y-2 text-light-grey text-sm">
              <li><span className="text-terminal-green mr-2">●</span> All Pro Features</li>
              <li><span className="text-terminal-green mr-2">●</span> Services-on-Demand Credits</li>
              <li><span className="text-terminal-green mr-2">●</span> Monthly Strategy Call</li>
              <li><span className="text-terminal-green mr-2">●</span> Full Custom Tool Suite</li>
            </ul>
            <button className="w-full bg-terminal-green text-deep-black py-2 px-4 rounded hover:bg-opacity-80 font-semibold">
              Choose Operator
            </button>
          </div>
        </div>
      </section>

      <section id="case-studies" className="space-y-6 py-12 md:py-16 bg-charcoal-gray bg-opacity-20">
        <h2 className="text-2xl md:text-3xl font-mono text-terminal-green uppercase tracking-wider text-center">
          // Results & Testimonials
        </h2>
        <div className="max-w-3xl mx-auto text-center text-light-grey">
          <p className="italic">
            "Working with Wrenfield transformed our operations. Their systems gave us the clarity and efficiency we desperately needed."
          </p>
          <p className="mt-2 text-sm text-gray-400">- A Satisfied Operator</p>
          {/* More testimonials can be added here */}
          <div className="mt-8">
            <a 
              href="#case-studies" 
              className="text-terminal-green hover:underline font-semibold"
            >
              Explore More Case Studies
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 text-center bg-deep-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-off-white mb-6">
            Ready to Engineer Your Advantage?
          </h2>
          <p className="text-lg md:text-xl text-light-grey max-w-2xl mx-auto mb-8">
            Stop wrestling with disjointed tools and unclear processes. It's time for a system designed for clarity, built for scale.
          </p>
          <div className="space-x-0 md:space-x-4 space-y-4 md:space-y-0">
            <a 
              href="/signup" 
              className="inline-block bg-terminal-green text-deep-black px-8 py-3 text-lg font-semibold rounded hover:bg-opacity-80 transition-colors duration-300 ease-in-out transform hover:scale-105"
            >
              Sign Up Now
            </a>
            <a 
              href="#pricing"
              className="inline-block bg-transparent border-2 border-terminal-green text-terminal-green px-8 py-3 text-lg font-semibold rounded hover:bg-terminal-green hover:text-deep-black transition-colors duration-300 ease-in-out transform hover:scale-105"
            >
              Explore Plans
            </a>
          </div>
        </div>
      </section>

      <section className="space-y-4 pt-12 pb-24 md:pt-16 md:pb-32 text-center">
        <h2 className="text-2xl md:text-3xl font-mono text-terminal-green uppercase tracking-wider">
          // Who We Work With
        </h2>
        <p className="text-md md:text-lg text-light-grey max-w-xl mx-auto">
          We work with operators, builders, service providers, and business owners.
          <br />
          This is not a startup. It’s a syndicate that builds results.
        </p>
      </section>

      {/* Placeholder for future subtle animations/UI elements */}
      {/* e.g., <div className="fixed bottom-4 right-4 h-1 w-1 bg-terminal-green animate-pulse"></div> */}
    </main>
  );
}
