import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

async function getUserRole() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return session?.user?.role || null;
}

export default async function DashboardPage() {
  const role = await getUserRole();

  if (!role) {
    redirect("/login");
  }

  const routes = {
    Founder: "/dashboard/founder/overview",
    Collaborator: "/dashboard/collaborator/overview",
    admin: "/dashboard/admin/overview",
  };

  redirect(routes[role] || "/login");
}