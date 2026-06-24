'use client'
import React from 'react';

import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import { CheckCheck } from 'lucide-react';
import { div } from 'framer-motion/client';
import { authClient } from '@/lib/auth-client';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
const sinupPage = () => {
  const router = useRouter
  const searchParams = useSearchParams();
     const redirect = searchParams.get("redirect");
    const onSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { data, error } = await authClient.signIn.email({
    email:formData.get('email'),
    password: formData.get('password'),
    callbackURL: redirect || "/",
});
console.log(data, error)
  };
 const handleGoogleLogin = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
    callbackURL: redirect || "/",
  });
};
    return (
      <div className='w-100 mx-auto backdrop-blur-md bg-white/30 border-gray-200 border-2 mt-8 rounded-lg py-8'>
        <div className='text-center space-y-2'>
            <h2 className='text-blue-600 text-3xl font-bold'>Startup <span className='text-amber-600'>Forge</span></h2>
            <h2 className='text-4xl font-bold'>Welcome Back</h2>
            <p> Sing in Your Account</p>
        </div>
         <div className="flex justify-center mt-6">
        <Button
          onClick={handleGoogleLogin}
          className="w-80 rounded-sm bg-white border hover:bg-gray-100 flex items-center gap-2"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            className="w-5 h-5"
            alt="google"
          />
         <p className="text-black"> Continue with Google</p>
        </Button>
      </div>

          <Form className="flex w-80 flex-col gap-4 mx-auto mt-8 " onSubmit={onSubmit}>
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
    {/* ALREADY ACCOUNT */}
<div className="text-center mt-4">
  <p className="text-sm text-gray-500">
    No Cariate Account
  </p>

 <Link href={'/sinin'}>
  <button
    type="button"
    className="mt-2 text-indigo-600 font-medium hover:underline"
  >
    Regstion to your account
  </button>
 </Link>
</div>
      </div>
    );
};

export default sinupPage;