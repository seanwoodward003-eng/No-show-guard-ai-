'use client';

import { Card } from '@/components/ui/card';
import { Calendar, TrendingUp, Users, DollarSign } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900">Welcome to NoShowGuard</h1>
        <p className="text-gray-600 mt-2">Protecting your revenue from no-shows</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Appointments Today</p>
              <p className="text-4xl font-semibold mt-2">12</p>
            </div>
            <Calendar className="w-10 h-10 text-blue-600" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">No-Show Rate</p>
              <p className="text-4xl font-semibold mt-2 text-green-600">9%</p>
            </div>
            <TrendingUp className="w-10 h-10 text-green-600" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Revenue Protected</p>
              <p className="text-4xl font-semibold mt-2">£1,840</p>
            </div>
            <DollarSign className="w-10 h-10 text-purple-600" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">This Month</p>
              <p className="text-4xl font-semibold mt-2 text-emerald-600">£8,240</p>
            </div>
            <Users className="w-10 h-10 text-emerald-600" />
          </div>
        </Card>
      </div>
    </div>
  );
}