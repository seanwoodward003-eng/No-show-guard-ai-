export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h1 className="text-6xl font-bold tracking-tight text-gray-900 mb-6">
          Never lose another appointment again
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          AI that predicts no-shows, sends smart reminders, offers incentives, and auto-fills cancelled slots.
        </p>
        <div className="flex justify-center gap-4">
          <a href="/sign-up" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-medium">
            Start Free Trial
          </a>
          <a href="#features" className="border border-gray-300 hover:bg-gray-50 px-8 py-4 rounded-xl text-lg font-medium">
            See how it works
          </a>
        </div>
      </div>
    </div>
  );
}