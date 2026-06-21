"use client";

import { updateProfile } from "@/lib/action";
import { authClient } from "@/lib/auth-client";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import { Pencil } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function UpdetProfileset() {
    const router = useRouter()
    const { data: session } = authClient.useSession();
      const id = session?.user?.id;
         const onSubmit = async (e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const userDataFrom = {
              name: formData.get("name"),
              email: formData.get("email"),
              phone: formData.get("phone"),
              location: formData.get("location"),
              bio: formData.get("bio"),
              skill: formData.get("skill"),
              logo: imageUrl,
            };
          console.log(userDataFrom)
          updateProfile(id, userDataFrom)
            router.refresh();
        }
      const [imageUrl, setImageUrl] = useState("");
      const [loading, setLoading] = useState(false);
         const handleImageUpload = async (e) => {
        const file = e.target.files[0];
    
        if (!file) return;
    
        const formData = new FormData();
        formData.append("image", file);
    
        try {
          setLoading(true);
    
          const response = await fetch(
            `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
            {
              method: "POST",
              body: formData,
            }
          );
    
          const data = await response.json();
    
          if (data.success) {
            setImageUrl(data.data.url);
          }
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };
  return (
    <Modal>
      <Button className={'bg-blue-500 text-white px-10 rounded-sm'} variant="Primary"><Pencil></Pencil> Edit</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Edit Your Startup</Modal.Heading>
              
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                    <div>
         <label className="block mb-2 font-medium">
             Upload Logo
            </label>
      <input className="border p-3 rounded-lg"
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
      />

      {loading && <p>Uploading...</p>}

      {imageUrl && (
        <img
          src={imageUrl}
          alt="Uploaded"
          className="w-32 h-32 object-cover rounded-lg mt-4"
        />
      )}
    </div>
                  <TextField className="w-full" name="name" type="text" variant="secondary">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField className="w-full" name="email" type="email" variant="secondary">
                    <Label>Email</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField className="w-full" name="phone" type="number" variant="secondary">
                    <Label>Phone</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField className="w-full" name="location" variant="secondary">
                    <Label>Location</Label>
                    <Input placeholder="Enter your message" />
                  </TextField>
                  <TextField className="w-full" name="bio" variant="secondary">
                    <Label>Add Bio</Label>
                    <Input placeholder="Enter your message" />
                  </TextField>
                  <TextField className="w-full" name="skill" variant="secondary">
                    <Label>Add Skill</Label>
                    <Input placeholder="Enter your message" />
                  </TextField>
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
}