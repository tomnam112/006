import { auth } from "@/app/auth";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const session = await auth();

  if (!session?.user) redirect("/login");
  if (session.user.role !== "ADMIN") redirect("/unauthorized");

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="rounded-xl bg-white p-8 shadow-lg">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <p className="mt-2">เฉพาะ ADMIN เท่านั้น</p>
      </div>
    </main>
  );
}
