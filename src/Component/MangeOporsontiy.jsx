'use client'
import { Button, Table } from '@heroui/react';
import { Delete, Edit, View } from 'lucide-react';
import React from 'react';
import OporsontiyEdit from './OporsontiyEdit';
import { deleteOpportunity } from '@/lib/action';

const MangeOporsontiy = ({data}) => {
  const handleDelete = async (id) => {
  const result = await deleteOpportunity(id);

  if (result.deletedCount > 0) {
    alert("Deleted Successfully");
  }
};
    return (
        <div>
             <Table className='rounded-sm'>
      <Table.ScrollContainer >
        <Table.Content aria-label="Team members" className="min-w-[600px]">
          <Table.Header className={'bg-amber-500 text-white '}>
            <Table.Column className={'text-white'} isRowHeader>Title</Table.Column>
            <Table.Column className={'text-white'}>Date</Table.Column>
            <Table.Column className={'text-white'}>Status</Table.Column>
          </Table.Header>
          <Table.Body className={'rounded-sm bg-amber-600'}>
          {
            data.map(items => 
              <Table.Row key={items._id}>
              <Table.Cell>{items.role_title}</Table.Cell>
              <Table.Cell>{items.date}</Table.Cell>
              <Table.Cell className={'text-center flex gap-2 justify-center'}>
               <OporsontiyEdit id = {items._id}></OporsontiyEdit>
                <Button  className={'rounded-sm bg-pink-500'}><View></View> View</Button>
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
    );
};

export default MangeOporsontiy;