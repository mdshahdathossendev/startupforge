'use client'
import { authClient } from "@/lib/auth-client";
import {Button, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import { CheckCheck } from 'lucide-react';
import { useState } from "react";
const sinupPage = () => {
    const [imageUrl, setImageUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [role, setRole] = useState("Founder")
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
    const onSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = {
         name: formData.get('name'),
         email: formData.get('email'),
         password: formData.get('password'),
         role: formData.get('role'),
         image: imageUrl,
         plan:'Free'
    }
  const { data, error } = await authClient.signUp.email(userData);
    console.log(data, error)
  console.log(userData);
  };
    return (
      <div className='w-100 mx-auto backdrop-blur-md bg-white/30 border-gray-200 border-2 mt-8 rounded-lg py-8'>
        <div className='text-center space-y-2'>
           
            <h2 className='text-3xl font-bold px-2'>Welcome to Startup Forge</h2>
            <p> Sign in to  continue exploring opportunities.</p>
        </div>
          <Form className="flex w-80 flex-col gap-4 mx-auto mt-8 " onSubmit={onSubmit}>
        <TextField name='name' type='text'
        isRequired
      >
        <Label>Name</Label>
        <Input className={'rounded-sm '} placeholder="Enter Your name" />
        <FieldError />
      </TextField>
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
      >
        <Label>Email</Label>
        <Input className={'rounded-sm '} placeholder="Enter Your email" />
        <FieldError />
      </TextField>
      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
      >
        <Label>Password</Label>
        <Input className={'rounded-sm '}  placeholder="Enter your password" />
        
        <FieldError />
      </TextField>
      <div className="w-full">
  <label
    htmlFor="imageUpload"
    className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition-all duration-300"
  >
    <svg
      className="w-10 h-10 mb-3 text-gray-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M7 16a4 4 0 01-.88-7.903A5 5 0 0115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
      />
    </svg>

    <p className="text-sm font-medium text-gray-700">
      Click to upload image
    </p>

    <p className="text-xs text-gray-500 mt-1">
      PNG, JPG, JPEG (Max 5MB)
    </p>
  </label>

  <input
    id="imageUpload"
    type="file"
    accept="image/*"
    onChange={handleImageUpload}
    className="hidden"
  />

  {loading && (
    <p className="text-center mt-3 text-blue-500 animate-pulse">
      Uploading...
    </p>
  )}

  {imageUrl && (
    <div className="mt-4 flex justify-center">
      <img
        src={imageUrl}
        alt="Uploaded"
        className="w-28 h-28 rounded-xl object-cover border shadow-md"
      />
    </div>
  )}
</div>
<div className="w-full">
  <label className="block mb-2 text-sm font-medium">
    Select Your Role
  </label>

  <div className="grid grid-cols-2 gap-3">
    <button
      type="button"
      onClick={() => setRole("Founder")}
      className={`p-4 rounded-xl border transition-all font-semibold ${
        role === "Founder"
          ? "bg-amber-500 text-white"
          : "bg-white text-gray-700 border-gray-300 hover:border-gray-500"
      }`}
    >
      🚀 Founder
    </button>

    <button
      type="button"
      onClick={() => setRole("Collaborator")}
      className={`rounded-xl border transition-all font-semibold ${
        role === "Collaborator"
          ? "bg-amber-500 text-white"
          : "bg-white text-gray-700 border-gray-300 hover:border-gray-500"
      }`}
    >
      🤝 Collaborator
    </button>
  </div>

  <input type="hidden" name="role" value={role} />
</div>
      <div className="flex gap-2 ">
        <Button className={'w-full rounded-sm'} type="submit">
          <CheckCheck></CheckCheck>
          Submit
        </Button>
        <Button className={'w-full rounded-sm'} type="reset" variant="secondary">
          Reset
        </Button>
      </div>
    </Form>
      </div>
    );
};

export default sinupPage;