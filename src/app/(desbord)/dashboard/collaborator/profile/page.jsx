
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
  console.log(session)
  const userData = await getUser(id, token)
  console.log(session, token)
  return (
    <div>
      <UpdetProfile userData={userData}></UpdetProfile>
    </div>
  );
}

