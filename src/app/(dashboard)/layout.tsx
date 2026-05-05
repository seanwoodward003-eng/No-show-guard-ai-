import { UserButton } from "@clerk/nextjs";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard-container flex">
      {/* Sidebar will go here later */}
      <div className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold">NoShowGuard AI</h1>
          <UserButton afterSignOutUrl="/" />
        </header>
        {children}
      </div>
    </div>
  );
}