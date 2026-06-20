import { Table } from '@heroui/react';
import React from 'react';

const MangeApplication = ({data}) => {
    return (
        <Table>
      <Table.ScrollContainer>
        <Table.Content aria-label="Team members" className="min-w-[600px]">
          <Table.Header>
            <Table.Column isRowHeader>Job Title</Table.Column>
            <Table.Column>Application Email</Table.Column>
            <Table.Column>Status</Table.Column>
            <Table.Column>Action</Table.Column>
          </Table.Header>
          <Table.Body>
           {
            data.map(items => 
                 <Table.Row key={items._id}>
              <Table.Cell>{items.job_title}</Table.Cell>
              <Table.Cell>{applicant_email}</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>michael@acme.com</Table.Cell>
            </Table.Row>
            )
           }
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
    );
};

export default MangeApplication;