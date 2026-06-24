'use client'
import { authClient } from "@/lib/auth-client";
import { Button, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { CheckCheck } from "lucide-react";
import { useState } from "react";

const sinupPage = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState("Founder");

  // ✅ IMAGE UPLOAD
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

    const { data, error } = await authClient.signUp.email(userData);

    console.log(data, error);
    console.log(userData);
  };
const handleGoogleLogin = async () => {
 const data = await authClient.signIn.social({
    provider: "google",
  });
}

  return (
    <div className="w-100 mx-auto backdrop-blur-md bg-white/30 border-gray-200 border-2 mt-8 rounded-lg py-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold px-2">Welcome to Startup Forge</h2>
        <p>Sign in to continue exploring opportunities.</p>
      </div>

      {/* ✅ GOOGLE BUTTON */}
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

      {/* FORM */}
      <Form
        className="flex w-80 flex-col gap-4 mx-auto mt-8"
        onSubmit={onSubmit}
      >
        {/* NAME */}
        <TextField name="name" type="text" isRequired>
          <Label>Name</Label>
          <Input placeholder="Enter Your name" />
          <FieldError />
        </TextField>

        {/* EMAIL */}
        <TextField
          name="email"
          type="email"
          isRequired
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
          }}
        >
          <Label>Email</Label>
          <Input placeholder="Enter Your email" />
          <FieldError />
        </TextField>

        {/* PASSWORD */}
        <TextField
          name="password"
          type="password"
          isRequired
          minLength={8}
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Must contain uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Must contain number";
            }
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <FieldError />
        </TextField>

        {/* IMAGE UPLOAD */}
        <div className="w-full">
          <label
            htmlFor="imageUpload"
            className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100"
          >
            <p className="text-sm font-medium">Click to upload image</p>
          </label>

          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />

          {loading && (
            <p className="text-center mt-2 text-blue-500">Uploading...</p>
          )}

          {imageUrl && (
            <img
              src={imageUrl}
              className="w-24 h-24 mx-auto mt-3 rounded-lg object-cover"
              alt="upload"
            />
          )}
        </div>

        {/* ROLE SELECT */}
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setRole("Founder")}
            className={`p-3 rounded-xl border ${
              role === "Founder"
                ? "bg-amber-500 text-white"
                : "bg-white"
            }`}
          >
            🚀 Founder
          </button>

          <button
            type="button"
            onClick={() => setRole("Collaborator")}
            className={`p-3 rounded-xl border ${
              role === "Collaborator"
                ? "bg-amber-500 text-white"
                : "bg-white"
            }`}
          >
            🤝 Collaborator
          </button>
        </div>

        <input type="hidden" name="role" value={role} />

        {/* BUTTONS */}
        <div className="flex gap-2">
          <Button className="w-full" type="submit">
            <CheckCheck /> Submit
          </Button>

          <Button className="w-full" type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default sinupPage;