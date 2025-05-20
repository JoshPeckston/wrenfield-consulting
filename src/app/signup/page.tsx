import Link from 'next/link';

export default function SignUpPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
      <div className="w-full max-w-md p-8 space-y-6 bg-charcoal-gray rounded-lg shadow-xl">
        <h1 className="text-3xl font-mono font-bold text-terminal-green text-center">
          Create Your Wrenfield Account
        </h1>
        <form className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-light-grey mb-1">
              Full Name
            </label>
            <input 
              type="text" 
              name="fullName" 
              id="fullName" 
              className="w-full px-3 py-2 bg-deep-black border border-gray-700 rounded-md text-off-white focus:outline-none focus:ring-2 focus:ring-terminal-green focus:border-transparent transition-all"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-light-grey mb-1">
              Email Address
            </label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              className="w-full px-3 py-2 bg-deep-black border border-gray-700 rounded-md text-off-white focus:outline-none focus:ring-2 focus:ring-terminal-green focus:border-transparent transition-all"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-light-grey mb-1">
              Password
            </label>
            <input 
              type="password" 
              name="password" 
              id="password" 
              className="w-full px-3 py-2 bg-deep-black border border-gray-700 rounded-md text-off-white focus:outline-none focus:ring-2 focus:ring-terminal-green focus:border-transparent transition-all"
              placeholder="••••••••"
            />
          </div>
          <div>
            <button 
              type="submit" 
              className="w-full px-4 py-2.5 text-lg font-semibold text-deep-black bg-terminal-green rounded-md hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-terminal-green focus:ring-offset-2 focus:ring-offset-charcoal-gray transition-all transform hover:scale-105"
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className="text-sm text-center text-light-grey">
          Already have an account?{' '}
          <Link href="/login" className="font-medium text-terminal-green hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}
