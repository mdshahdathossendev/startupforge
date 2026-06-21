'use client'
import {Chip, Table} from "@heroui/react";
import Image from "next/image";

export function MangeUser({users}) {
  const hadelRoleCnage = (e) => {
  const userData = {
    role: e.target.value,
  };

  console.log(userData);
};
  const hadelSatesCnage = (e) => {
  const userData = {
    status: e.target.value,
  };

  console.log(userData);
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
     <Image className="h-10 w-10" src={item.image} width={200} height={200} alt="image">

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
              <Table.Cell>{item.role}</Table.Cell>
              <Table.Cell>{item.status}</Table.Cell>
             <Table.Cell>
  <select
    name="roleset"
    onChange={hadelRoleCnage}
    className="w-full px-4 py-2 border rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    defaultValue={item.role}
  >
    <option value="Collaborator">Collaborator</option>
    <option value="Funder">Funder</option>
    <option value="Admin">Admin</option>
  </select>
</Table.Cell>
              <Table.Cell><select
    name="roleset"
    onChange={hadelSatesCnage}
    className="w-full px-4 py-2 border rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    defaultValue={item.role}
  >
    <option value="Collaborator">Unblock</option>
    <option value="Funder">Block</option>
    
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