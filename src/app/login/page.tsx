import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
      <div className="w-full max-w-md p-8 space-y-6 bg-charcoal-gray rounded-lg shadow-xl">
        <h1 className="text-3xl font-mono font-bold text-terminal-green text-center">
          Access Your Wrenfield Dashboard
        </h1>
        <form className="space-y-6">
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
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {/* Placeholder for 'Remember me' checkbox */}
            </div>
            <div className="text-sm">
              <Link href="#" className="font-medium text-terminal-green hover:underline">
                Forgot your password?
              </Link>
            </div>
          </div>
          <div>
            <button 
              type="submit" 
              className="w-full px-4 py-2.5 text-lg font-semibold text-deep-black bg-terminal-green rounded-md hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-terminal-green focus:ring-offset-2 focus:ring-offset-charcoal-gray transition-all transform hover:scale-105"
            >
              Log In
            </button>
          </div>
        </form>
        <p className="text-sm text-center text-light-grey">
          Don't have an account?{' '}
          <Link href="/signup" className="font-medium text-terminal-green hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
