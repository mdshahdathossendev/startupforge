import { Button, Table } from '@heroui/react';
import React from 'react';

const MangeOporsontiy = ({data}) => {
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
              <Table.Cell className={'text-center'}>
                <Button>Edit</Button>
                <Button>View</Button>
                <Button>Delete</Button>
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