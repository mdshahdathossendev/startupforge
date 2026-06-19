"use client";

import { updateStartup } from "@/lib/action";
import { authClient } from "@/lib/auth-client";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import { Pencil } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function FounderEditFrom() {
    const router = useRouter
    const { data: session } = authClient.useSession();
      const email = session?.user?.email;
         const onSubmit = async (e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const userData = {
              startup_name: formData.get("startup_name"),
              industry: formData.get("industry"),
              funding_stage: formData.get("funding_stage"),
              description: formData.get("description"),
              logo: imageUrl,
            };
           const result = await updateStartup(email, userData);
                router.push("/dashboard/founder/my-startup");
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
                  <TextField className="w-full" name="startup_name" type="text" variant="secondary">
                    <Label>Startup Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField className="w-full" name="industry" type="text" variant="secondary">
                    <Label>Industry</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField className="w-full" name="phone" type="tel" variant="secondary">
                    <Label>Funding Stage</Label>
                   <select
              name="funding_stage"
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="">Select Funding Stage</option>
              <option value="Bootstrapped">Bootstrapped</option>
              <option value="Pre-Seed">Pre-Seed</option>
              <option value="Seed">Seed</option>
              <option value="Series A">Series A</option>
              <option value="Series B">Series B</option>
            </select>
                  </TextField>
                  <TextField className="w-full" name="description" variant="secondary">
                    <Label>Description:</Label>
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