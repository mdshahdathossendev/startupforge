'use client'
import { updateProfile } from "@/lib/action";
import {Chip, Table} from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function MangeUser({users}) {
  const router = useRouter()
  const hadelRoleCnage = (e, id) => {
  const role = e.target.value;

  const userData = {
    role,
  };
  updateProfile(id, userData)
  router.refresh()
};
  const hadelSatesCnage = (e, id) => {
 const status = e.target.value;

  const userData = {
    status,
  };
  console.log(userData)
  updateProfile(id, userData)
   router.refresh()
};
  console.log(users)
  return (
     <Table variant="secondary">
      <Table.ScrollContainer>
        <Table.Content aria-label="Team members" className="min-w-[600px]">
          <Table.Header className={'text-center'}>
            <Table.Column className={'text-center'} isRowHeader>User</Table.Column>
            <Table.Column className={'text-center'}>Role</Table.Column>
            <Table.Column className={'text-center'}>Status</Table.Column>
            <Table.Column className={'text-center'}>Action</Table.Column>
            <Table.Column className={'text-center'}>Action</Table.Column>
          </Table.Header>
          <Table.Body>
            {
              users.map(item => 
                <Table.Row key={item._id}>
              <Table.Cell>
                <div className="flex items-center gap-5 ">
     <Image className="h-10 border w-10 rounded-full" src={item.image} width={200} height={200} alt="image">

     </Image>

      <div>
        <h2 className="text-sm font-medium text-[#222]">
         {item.name}
        </h2>
        <p className="text-[#6f6f7a]">
          {item.email}
        </p>
      </div>
    </div>
              </Table.Cell>
              <Table.Cell className={'text-center'}>
  <span
    className={`px-3 py-1 rounded-full text-sm font-medium ${
      item.role === "admin"
        ? "bg-red-100 text-red-600"
        : item.role === "Founder"
        ? "bg-green-100 text-green-600"
        : "bg-blue-100 text-blue-600"
    }`}
  >
    {item.role}
  </span>
</Table.Cell>
             <Table.Cell className={'text-center'}>
  <span
    className={`px-3 py-1 rounded-full text-sm font-medium ${
      item.status === "Block"
        ? "bg-red-100 text-red-600"
        : "bg-blue-100 text-blue-600"
    }`}
  >
    {item.status}
  </span>
</Table.Cell>
             <Table.Cell className={'text-center'}>
  <select
    name="roleset"
    onChange={(e) => hadelRoleCnage(e, item._id)}
    className="w-full px-4 py-2 border rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    defaultValue={item.role}
  >
    <option value="Collaborator">Collaborator</option>
    <option value="Founder">Funder</option>
    <option value="admin">Admin</option>
  </select>
</Table.Cell>
              <Table.Cell className={'text-center'}><select
    name="statusset"
    onChange={(e)=> hadelSatesCnage(e, item._id)}
    className="w-full px-4 py-2 border rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    defaultValue={item.status}
  >
    <option value="Unblock">Unblock</option>
    <option value="Block">Block</option>
    
  </select></Table.Cell>
            </Table.Row>
              )
            }
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
}