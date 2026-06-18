'use client'
import React from 'react';

import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import { CheckCheck } from 'lucide-react';
import { div } from 'framer-motion/client';
import { authClient } from '@/lib/auth-client';
const sinupPage = () => {
    const onSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { data, error } = await authClient.signIn.email({
    email:formData.get('email'),
    password: formData.get('password'),
    callbackURL: "/",
});
console.log(data, error)
  };
    return (
      <div className='w-100 mx-auto backdrop-blur-md bg-white/30 border-gray-200 border-2 mt-8 rounded-lg py-8'>
        <div className='text-center space-y-2'>
            <h2 className='text-blue-600 text-3xl font-bold'>Startup <span className='text-amber-600'>Forge</span></h2>
            <h2 className='text-4xl font-bold'>Welcome Back</h2>
            <p> Sing in Your Account</p>
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
      </div>
    );
};

export default sinupPage;