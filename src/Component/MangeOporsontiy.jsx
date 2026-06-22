'use client'
import { Button, Table } from '@heroui/react';
import { Delete, Edit, View } from 'lucide-react';
import React, { useState } from 'react';
import OporsontiyEdit from './OporsontiyEdit';
import { deleteOpportunity } from '@/lib/action';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import DeleteToast from '@/lib/delettos';

const MangeOporsontiy = ({data}) => {
  const [showDeleteToast, setShowDeleteToast] = useState(false);
  const router = useRouter()
  const handleDelete = async (id) => {
  const result = await deleteOpportunity(id);
  setShowDeleteToast(true)
  setTimeout(() => {
    setShowDeleteToast(false);
  }, 3000);
  router.refresh()
};
    return (
       <>
       {showDeleteToast && (
  <DeleteToast
    message="Your item Delete Sucessfull"
    onCancel={() => setShowDeleteToast(false)}
  />
)}
        <div>
             <Table className='rounded-sm'>
      <Table.ScrollContainer >
        <Table.Content aria-label="Team members" className="min-w-[600px]">
          <Table.Header className={'bg-amber-500 text-white '}>
            <Table.Column className={'text-white text-center'} isRowHeader>Title</Table.Column>
            <Table.Column className={'text-white text-center'}>Date</Table.Column>
            <Table.Column className={'text-white text-center'}>Work Type</Table.Column>
            <Table.Column className={'text-white text-center'}>Skills</Table.Column>
            <Table.Column className={'text-white text-center'}>Action</Table.Column>
          </Table.Header>
          <Table.Body>
          {
            data.map(items => 
              <Table.Row key={items._id}>
              <Table.Cell>{items.role_title}</Table.Cell>
              <Table.Cell>{items.date}</Table.Cell>
              <Table.Cell>{items.work_type}</Table.Cell>
              <Table.Cell>{items.required_skills}</Table.Cell>
              <Table.Cell className={'text-center flex gap-2 justify-center'}>
               <OporsontiyEdit items={items}></OporsontiyEdit>
                <Link href={`/opportunitiess/${items._id}`}>
  <Button className="rounded-sm bg-pink-500">
    View
  </Button>
</Link>
                <Button onClick={()=> handleDelete(items._id)}  className={'rounded-sm bg-red-600'}><Delete></Delete>  Delete</Button>
              </Table.Cell>
            </Table.Row>
            )
          }
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
        </div>
       </>
    );
};

export default MangeOporsontiy;