
import { getUser } from "@/lib/data";
import UpdetProfile from "@/Component/UpdetProfile";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export default async function ProfileSection() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const id = session?.user?.id;
  const token = session.session.token
 
  const userData = await getUser(id, token)
 
  return (
    <div>
      <UpdetProfile userData={userData}></UpdetProfile>
    </div>
  );
}

