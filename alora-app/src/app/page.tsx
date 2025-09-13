import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-menstrual via-follicular to-luteal bg-clip-text text-transparent">
          Alora
        </h1>
        <p className="text-xl mb-8">
          Your personalized menstrual cycle wellness companion
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <Link href="/dashboard" className="card flex flex-col items-center justify-center p-8 hover:scale-105 transition-transform">
            <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
            <p>Track your cycle, log symptoms, and get personalized recommendations</p>
          </Link>
          
          <Link href="/about" className="card flex flex-col items-center justify-center p-8 hover:scale-105 transition-transform">
            <h2 className="text-2xl font-semibold mb-4">About Alora</h2>
            <p>Learn how Alora helps you optimize your well-being throughout your cycle</p>
          </Link>
        </div>
      </div>
    </div>
  );
}