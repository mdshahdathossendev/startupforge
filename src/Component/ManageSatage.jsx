'use client'
import { updateStartupData } from '@/lib/action';
import { Table } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const ManageSatage = ({data}) => {
    return (
        <Table>
              <Table.ScrollContainer>
                <Table.Content aria-label="Team members" className="min-w-[600px]">
                  <Table.Header>
                    <Table.Column isRowHeader>Job Title</Table.Column>
                    <Table.Column>Industry</Table.Column>
                    <Table.Column>Status</Table.Column>
                    <Table.Column>Action</Table.Column>
                  </Table.Header>
                  <Table.Body>
                   {
                    data.map(items => 
                         <Table.Row key={items._id}>
                
                      <Table.Cell>{items.startup_name}</Table.Cell>
                      <Table.Cell>{items.industry}</Table.Cell>
                     <Table.Cell>
          <span
            className={`px-2 py-1 rounded-full text-white text-sm ${
              items.stats === "Pending"
                ? "bg-yellow-500"
                : items.stats === "Approved"
                ? "bg-green-500"
                : items.stats === "Rejected"
                ? "bg-red-500"
                : "bg-gray-500"
            }`}
          >
            {items.stats}
          </span>
        </Table.Cell>
                     <Table.Cell>
          <div className="flex gap-2">
            <button
            onClick={()=> updateStartupData(items._id, "Approved")}
              className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              Accept
            </button>
        
            <button
             onClick={()=> updateStartupData(items._id, "Rejected")}
              className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Reject
            </button>
          </div>
        </Table.Cell>
                    </Table.Row>
                    )
                   }
                  </Table.Body>
                </Table.Content>
              </Table.ScrollContainer>
            </Table>
    );
};

export default ManageSatage;