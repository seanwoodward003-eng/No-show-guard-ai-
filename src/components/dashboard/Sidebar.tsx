export default function Sidebar() {
  return (
    <div className="w-64 bg-white border-r h-screen p-6">
      <div className="text-xl font-bold mb-8">NoShowGuard</div>
      <nav className="space-y-2">
        <a href="/dashboard" className="block px-4 py-2 rounded-lg bg-blue-50 text-blue-600">Dashboard</a>
        <a href="/dashboard/appointments" className="block px-4 py-2 rounded-lg hover:bg-gray-100">Appointments</a>
        <a href="/dashboard/analytics" className="block px-4 py-2 rounded-lg hover:bg-gray-100">Analytics</a>
        <a href="/dashboard/settings" className="block px-4 py-2 rounded-lg hover:bg-gray-100">Settings</a>
      </nav>
    </div>
  );
}