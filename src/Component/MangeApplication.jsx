'use client'
import { updateApplication } from '@/lib/action';
import { Table } from '@heroui/react';
import { useRouter } from 'next/navigation';


const MangeApplication = ({data}) => {
  const router = useRouter()
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
              <Table.Cell>{items.applicant_email}</Table.Cell>
             <Table.Cell>
  <span
    className={`px-2 py-1 rounded-full text-white text-sm ${
      items.status === "Pending"
        ? "bg-yellow-500"
        : items.status === "Accepted"
        ? "bg-green-500"
        : items.status === "Rejected"
        ? "bg-red-500"
        : "bg-gray-500"
    }`}
  >
    {items.status}
  </span>
</Table.Cell>
             <Table.Cell>
  <div className="flex gap-2">
    <button
    onClick={async () => {
  await updateApplication(items._id, "Accepted");
  router.refresh();
}}
      className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600"
    >
      Accept
    </button>

    <button
     onClick={()=> {updateApplication(items._id, "Rejected");router.refresh();}}
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

export default MangeApplication;