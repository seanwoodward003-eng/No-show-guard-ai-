import { UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b pb-6">
      <h1 className="text-3xl font-semibold">Dashboard</h1>
      <UserButton />
    </header>
  );
}