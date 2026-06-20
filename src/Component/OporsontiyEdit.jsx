'use client'
import { updateOpportunity } from '@/lib/action';
import { getDetlesOpportunities } from '@/lib/data';
import { Button, Input, Label, Modal, Surface, TextField } from '@heroui/react';
import { Pencil } from 'lucide-react';
import React from 'react';

const OporsontiyEdit = ({id}) => {
    const onSubmit = async (e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const userData = {
                  role_title: formData.get("role_title"),
                  required_skills: formData.get("required_skills"),
                  work_type: formData.get("work_type"),
                  commitment_level: formData.get("commitment_level"),
                };
                console.log(userData)
               const result = await updateOpportunity(id, userData) ;
                   
            }
            
    return (
        <Modal>
              <Button className={'bg-blue-500 text-white px-10 rounded-sm'} variant="Primary"><Pencil></Pencil>Edits</Button>
              <Modal.Backdrop>
                <Modal.Container placement="auto">
                  <Modal.Dialog className="sm:max-w-md">
                    <Modal.CloseTrigger />
                    <Modal.Header>
                      <Modal.Heading>Edit Your Startup</Modal.Heading>
                      
                    </Modal.Header>
                    <Modal.Body className="p-6">
                      <Surface variant="default">
                        <form onSubmit={onSubmit}  className="flex flex-col gap-4">
                          <TextField className="w-full" name="role_title" type="text" variant="secondary">
                            <Label>Role Title</Label>
                            <Input placeholder="Enter your name" />
                          </TextField>
                          <TextField className="w-full" name="required_skills" type="text" variant="secondary">
                            <Label>Required Skills</Label>
                            <Input placeholder="Enter your name" />
                          </TextField>
                            <Label>Work Type</Label>
                           <select
                      name="work_type"
                      className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500"
                    >
                       <option value="">Select Work Type</option>
            <option value="Remote">Remote</option>
            <option value="On-site">On-site</option>
            <option value="Hybrid">Hybrid</option>
                    </select>
                        
                            <Label>Commitment Level</Label>
                         <select
            name="commitment_level"
            className="w-full border rounded-xl px-4 py-3"
          >
            <option value="">Select Commitment</option>
            <option value="Part-time">Part-time</option>
            <option value="Full-time">Full-time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
          </select>
                         
                          <Modal.Footer>
                      <Button slot="close" variant="secondary">
                        Cancel
                      </Button>
                      <Button slot= 'close' type="submit">Send Message</Button>
                    </Modal.Footer>
                        </form>
                      </Surface>
                    </Modal.Body>
                  </Modal.Dialog>
                </Modal.Container>
              </Modal.Backdrop>
            </Modal>
    );
};

export default OporsontiyEdit;