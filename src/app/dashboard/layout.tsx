import React from 'react';
import Link from 'next/link'; // Import Link for navigation
import Image from 'next/image'; // Import Image for logo

// Define the navigation items for the sidebar based on the wireframe
const sidebarNavItems = [
  { name: 'Overview', href: '/dashboard', icon: '📊' }, // Example icon
  { name: 'My Services', href: '/dashboard/services', icon: '🛠️' },
  { name: 'My Resources', href: '/dashboard/resources', icon: '📚' },
  { name: 'Support / Submit Brief', href: '/dashboard/support', icon: '💬' },
  { name: 'Upgrade Plan', href: '/dashboard/upgrade', icon: '🚀' },
];

const bottomSidebarNavItems = [
  { name: 'Settings / Account', href: '/dashboard/account', icon: '⚙️' },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-deep-black text-off-white selection:bg-terminal-green selection:text-deep-black">
      {/* Sidebar */}
      <aside className="w-72 bg-charcoal-gray p-5 flex flex-col border-r border-gray-700/60 shadow-2xl">
        {/* Sidebar Header with Logo and Title */}
        <div className="mb-8 flex items-center space-x-3 px-2">
          <Image
            src="/assets/wrenfieldlogo.png" // Using the same logo as Navbar
            alt="Wrenfield Dashboard Logo"
            width={36} 
            height={36}
          />
          <h2 className="text-2xl font-mono text-terminal-green font-semibold tracking-wider">Wrenfield Consulting</h2>
        </div>

        {/* Navigation Links */}
        <nav className="flex-grow space-y-1.5">
          {sidebarNavItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="group flex items-center space-x-3 px-3 py-2.5 rounded-md text-light-grey hover:bg-gray-700/70 hover:text-terminal-green transition-all duration-200 ease-in-out transform hover:translate-x-1"
            >
              {/* <span className="text-lg">{item.icon}</span> Example Icon Usage */}
              <span className="font-medium text-sm tracking-wide">{item.name}</span>
            </Link>
          ))}
        </nav>

        {/* Bottom Navigation Links (Settings/Account) */}
        <div className="mt-auto space-y-1.5">
          {bottomSidebarNavItems.map((item) => (
             <Link 
             key={item.name} 
             href={item.href} 
             className="group flex items-center space-x-3 px-3 py-2.5 rounded-md text-light-grey hover:bg-gray-700/70 hover:text-terminal-green transition-all duration-200 ease-in-out transform hover:translate-x-1"
           >
             {/* <span className="text-lg">{item.icon}</span> */}
             <span className="font-medium text-sm tracking-wide">{item.name}</span>
           </Link>
          ))}
          {/* Logout Button */}
          <button 
            className="w-full group flex items-center space-x-3 px-3 py-2.5 rounded-md text-light-grey hover:bg-red-800/70 hover:text-off-white transition-all duration-200 ease-in-out transform hover:translate-x-1 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            {/* <span className="text-lg">🚪</span> Example Icon Usage */}
            <span className="font-medium text-sm tracking-wide">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main content area */}
      <main className="flex-1 p-6 md:p-8 lg:p-10 overflow-y-auto">
        {/* Scanline and Noise effect container for main content */}
        <div className="relative h-full w-full">
          {/* Optional: Re-apply scanline/noise here if you want it only in the content pane and not sidebar */}
          {/* <div className="scanline-effect"></div> */}
          {/* <div className="noise-effect"></div> */}          
          {children} {/* This is where the page content will be injected */}
        </div>
      </main>
    </div>
  );
}
