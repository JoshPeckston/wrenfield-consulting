import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-black text-light-grey py-8 border-t border-gray-700/50">
      <div className="container mx-auto px-4 text-center md:flex md:justify-between md:items-center">
        <p className="text-sm mb-4 md:mb-0">
          &copy; {currentYear} Wrenfield Consulting. All rights reserved.
        </p>
        <div className="space-x-6">
          <Link href="/privacy-policy" className="text-sm hover:text-terminal-green transition-colors duration-200">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="text-sm hover:text-terminal-green transition-colors duration-200">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
