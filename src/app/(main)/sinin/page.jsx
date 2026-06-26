'use client'
import { authClient } from "@/lib/auth-client";
import { Button, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { CheckCheck } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const sinupPage = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState("Collaborator");
  const searchParams = useSearchParams();
   const redirect = searchParams.get("redirect");
  const router = useRouter()
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

 
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const userData = {
  name: formData.get("name"),
  email: formData.get("email"),
  password: formData.get("password"),
  role: role,
  image: imageUrl,
  plan: "Free",
};

const { data, error } = await authClient.signUp.email({
  email: userData.email,
  password: userData.password,
  name: userData.name,
  role: userData.role,
  image: userData.image,
  plan: userData.plan,
});
const target = redirect || "/";
router.push(target);
}
const handleGoogleLogin = async () => {
 const data = await authClient.signIn.social({
    provider: "google",
  });
}
    return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-51 via-white to-purple-50 p-4">

    {/* CARD */}
    <div className="w-full max-w-md bg-white/70 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-2xl p-6">

      {/* HEADER */}
      <div className="text-center space-y-2 mb-6">
        <h2 className="text-3xl font-bold">Welcome to Startup Forge</h2>
        <p className="text-gray-500 text-sm">
          Sign in to continue exploring opportunities.
        </p>
      </div>

      {/* GOOGLE BUTTON */}
      <div className="flex justify-center mb-6">
        <Button
          onClick={handleGoogleLogin}
          className="w-full rounded-xl bg-white border shadow-sm hover:shadow-md hover:bg-gray-50 flex items-center justify-center gap-2"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            className="w-5 h-5"
            alt="google"
          />
          <p className="text-black font-medium">Continue with Google</p>
        </Button>
      </div>

      {/* FORM */}
      <Form onSubmit={onSubmit} className="flex flex-col gap-4">

        {/* NAME */}
        <TextField name="name" type="text" isRequired>
          <Label className="text-sm font-medium">Name</Label>
          <Input className="rounded-lg" placeholder="Enter Your name" />
          <FieldError />
        </TextField>

        {/* EMAIL */}
        <TextField name="email" type="email" isRequired>
          <Label className="text-sm font-medium">Email</Label>
          <Input className="rounded-lg" placeholder="Enter Your email" />
          <FieldError />
        </TextField>

        {/* PASSWORD */}
        <TextField name="password" type="password" isRequired>
          <Label className="text-sm font-medium">Password</Label>
          <Input className="rounded-lg" placeholder="Enter your password" />
          <FieldError />
        </TextField>

        {/* IMAGE UPLOAD */}
        <div className="w-full">
          <label
            htmlFor="imageUpload"
            className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
          >
            <p className="text-sm font-medium text-gray-600">
              Click to upload image
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
            <p className="text-center mt-2 text-blue-500 text-sm">
              Uploading...
            </p>
          )}

          {imageUrl && (
            <img
              src={imageUrl}
              className="w-20 h-20 mx-auto mt-3 rounded-full object-cover border"
              alt="upload"
            />
          )}
        </div>

        {/* ROLE SELECT */}
       {/* আপনার স্টেটের লাইনে এটি নিশ্চিত করুন: const [role, setRole] = useState("Collaborator"); */}

<div className="grid grid-cols-2 gap-3">
  {/* Founder Button */}
  <button
    type="button"
    onClick={() => setRole("Founder")}
    className={`p-3 rounded-xl border transition font-medium ${
      role === "Founder"
        ? "bg-indigo-600 text-white shadow-md border-indigo-600"
        : "bg-white hover:bg-gray-50 border-gray-200 text-gray-700"
    }`}
  >
    🚀 Founder
  </button>

  {/* Collaborator Button */}
  <button
    type="button"
    onClick={() => setRole("Collaborator")}
    className={`p-3 rounded-xl border transition font-medium ${
      role === "Collaborator"
        ? "bg-indigo-600 text-white shadow-md border-indigo-600"
        : "bg-white hover:bg-gray-50 border-gray-200 text-gray-700"
    }`}
  >
    🤝 Collaborator
  </button>
</div>

        <input type="hidden" name="role" value={role} />

        {/* BUTTONS */}
        <div className="flex gap-3 mt-2">
          <Button type="submit" className="w-full bg-indigo-600 text-white hover:bg-indigo-700 rounded-xl">
            <CheckCheck className="w-4 h-4 mr-1" />
            Submit
          </Button>

          <Button
            className="w-full rounded-xl"
            type="reset"
            variant="secondary"
          >
            Reset
          </Button>
        </div>
      </Form>
      {/* ALREADY ACCOUNT */}
<div className="text-center mt-4">
  <p className="text-sm text-gray-500">
    Already have an account?
  </p>

  <button
    type="button"
    onClick={() => router.push("/login")}
    className="mt-2 text-indigo-600 font-medium hover:underline"
  >
    Login to your account
  </button>
</div>
    </div>
    
  </div>
);
};

export default sinupPage;