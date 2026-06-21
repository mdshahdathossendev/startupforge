import { Table } from '@heroui/react';
import React from 'react';

const Application = ({data}) => {
    return (
          <Table variant="secondary">
      <Table.ScrollContainer>
        <Table.Content aria-label="Team members" className="min-w-[600px]">
          <Table.Header className={'rounded-sm bg-amber-500'}>
            <Table.Column className={'rounded-sm bg-amber-500 text-white'} isRowHeader>Opportunity Name</Table.Column>
            <Table.Column className={'rounded-sm bg-amber-500 text-white'}>Startup Name</Table.Column>
            <Table.Column className={'rounded-sm bg-amber-500 text-white'}>Applied Date</Table.Column>
            <Table.Column className={'rounded-sm bg-amber-500 text-white'}>Status</Table.Column>
          </Table.Header>
          <Table.Body>
            {
                data.map(itmes => <Table.Row key={itmes._id}>
              <Table.Cell>{itmes.job_title}</Table.Cell>
              <Table.Cell>{itmes.startup_name}</Table.Cell>
              <Table.Cell>
  {new Date(itmes.applied_at).toLocaleDateString()}
</Table.Cell>
             <Table.Cell
  className={
    itmes.status === "Accepted"
      ? "text-green-600 font-semibold"
      : itmes.status === "Pending"
      ? "text-yellow-500 font-semibold"
      : "text-red-600 font-semibold"
  }
>
  {itmes.status}
</Table.Cell>
            </Table.Row>)
            }
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
    );
};

export default Application;