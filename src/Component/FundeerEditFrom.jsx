"use client";

import { updateStartup } from "@/lib/action";
import { authClient } from "@/lib/auth-client";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import { Pencil } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function FounderEditFrom({data}) {
    const router = useRouter()
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
              router.refresh()
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

    <input
      className="border p-3 rounded-lg w-full"
      type="file"
      accept="image/*"
      onChange={handleImageUpload}
    />

    {loading && <p>Uploading...</p>}

    {(imageUrl || data?.logo) && (
      <Image width={200} height={200}
        src={imageUrl || data?.logo}
        alt="Uploaded"
        className="w-32 h-32 object-cover rounded-lg mt-4"
      />
    )}
  </div>

  <TextField
    className="w-full"
    name="startup_name"
    defaultValue={data?.startup_name || ""}
  >
    <Label>Startup Name</Label>
    <Input placeholder="Enter startup name" />
  </TextField>

  <TextField
    className="w-full"
    name="industry"
    defaultValue={data?.industry || ""}
  >
    <Label>Industry</Label>
    <Input placeholder="Enter industry" />
  </TextField>

  <div>
    <Label className="block mb-2">Funding Stage</Label>

    <select
      name="funding_stage"
      defaultValue={data?.funding_stage || ""}
      className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500"
    >
      <option value="">Select Funding Stage</option>
      <option value="Bootstrapped">Bootstrapped</option>
      <option value="Pre-Seed">Pre-Seed</option>
      <option value="Seed">Seed</option>
      <option value="Series A">Series A</option>
      <option value="Series B">Series B</option>
    </select>
  </div>

  <TextField
    className="w-full"
    name="description"
    defaultValue={data?.description || ""}
  >
    <Label>Description</Label>
    <Input placeholder="Enter description" />
  </TextField>

  <Modal.Footer>
    <Button slot="close" variant="secondary">
      Cancel
    </Button>

    <Button slot="close" type="submit">
      Save Changes
    </Button>
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