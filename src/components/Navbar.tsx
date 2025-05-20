import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-charcoal-gray text-off-white p-8 border-b border-gray-700/50"> 
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Title */}
        <Link href="/" className="flex items-center space-x-3 group">
          <Image
            src="/assets/wrenfieldlogo.png" 
            alt="Wrenfield Consulting Logo"
            width={50} 
            height={50} 
            className="group-hover:opacity-80 transition-opacity duration-200" 
          />
          <h1 className="text-3xl font-mono font-bold group-hover:text-terminal-green transition-colors duration-200">
            Wrenfield Consulting
          </h1>
        </Link>

        {/* Reverted Navigation Links */}
        <div className="flex items-center space-x-6">
          <Link href="/" className="hover:text-terminal-green transition-colors duration-200">Home</Link>
          <Link href="/#services" className="hover:text-terminal-green transition-colors duration-200">Services</Link>
          <Link href="/#pricing" className="hover:text-terminal-green transition-colors duration-200">Pricing</Link>
          <Link href="/#case-studies" className="hover:text-terminal-green transition-colors duration-200">Case Studies</Link>
          <Link
            href="/signup"
            className="bg-terminal-green text-deep-black px-4 py-2 rounded hover:bg-opacity-80 text-sm font-semibold transition-all transform hover:scale-105"
          >
            Sign Up
          </Link>
          <Link href="/dashboard" className="hover:text-terminal-green text-sm transition-colors duration-200">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
