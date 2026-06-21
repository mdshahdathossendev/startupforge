'use client'
import { authClient } from '@/lib/auth-client';
import { Button, Popover } from '@heroui/react';
import { LayoutDashboard, LogOutIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';


const Popber = () => {
    const router = useRouter()
   const { data: session } = authClient.useSession() 
   console.log(session)
    
    const handellogOut = async() => {
        await authClient.signOut({
  fetchOptions: {
    onSuccess: () => {
      router.push("/login"); 
    },
  },
});
    }
    return (
      <Popover>
        <Button className="w-full bg-white">
         <div className="flex items-center justify-between p-4">
  
  <div className="relative">
    <Image 
      height={200}
      width={200}
      src={session?.user?.image || '/dfeult.page'}
      alt="Profile"
      className="w-12 h-12 rounded-full border-4 border-orange-500 object-cover"
    />

    <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
  </div>

</div>
        </Button>
        <Popover.Content placement="bottom">
          <Popover.Dialog>
            <Popover.Arrow />
          <div className="w-50">
  {/* Profile Image */}
 <div className="flex flex-col items-center">
  {/* Profile Image */}
  <div className="relative">
    <div className="w-20 h-20 rounded-full border-4 border-orange-500 overflow-hidden">
      <img
        src={session?.user?.image}
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Role Badge */}
    <div className="absolute -top-2 left-25 -translate-x-1/2">
      <span className="px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 rounded-full shadow-lg">
        {session?.user?.role}
      </span>
    </div>
  </div>

  <h2 className="mt-2 text-xl font-bold text-gray-800">
    {session?.user?.name}
  </h2>

  <p className="text-gray-500 text-sm">
    {session?.user?.email}
  </p>
</div>

{/* Buttons */}
<div className="mt-5 space-y-3">
  <Link
    href="/dashboard"
    className="flex items-center justify-center gap-2 w-full py-2 bg-orange-500 text-white text-lg font-semibold rounded-xl hover:bg-orange-600 transition"
  >
    <LayoutDashboard></LayoutDashboard> Dashboard
  </Link>

  <button onClick={handellogOut}
    className="flex items-center justify-center gap-2 w-full py-2 bg-red-500 text-white text-lg font-semibold rounded-xl hover:bg-red-600 transition"
  >
    <LogOutIcon></LogOutIcon> Logout
  </button>
</div>
</div>
          </Popover.Dialog>
        </Popover.Content>
      </Popover>
     
    );
};

export default Popber;