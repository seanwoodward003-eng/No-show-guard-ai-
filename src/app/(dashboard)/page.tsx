export default function Dashboard() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-8">Welcome back</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <p className="text-sm text-gray-500">Appointments Today</p>
          <p className="text-4xl font-semibold mt-2">12</p>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <p className="text-sm text-gray-500">No-Show Rate This Month</p>
          <p className="text-4xl font-semibold mt-2 text-green-600">8%</p>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <p className="text-sm text-gray-500">Revenue Protected</p>
          <p className="text-4xl font-semibold mt-2">£1,240</p>
        </div>
      </div>
    </div>
  );
}