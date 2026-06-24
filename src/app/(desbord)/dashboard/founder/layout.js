import { auth } from "@/lib/auth"; // তোমার auth config
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const Layout = async ({ children }) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });


  if (!session) {
    redirect("/login");
  }

  
  if (session.user.role !== "founder") {
    redirect("/");
  }

  return (
    <div>
      {children}
    </div>
  );
};

export default Layout;