"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
 import { UploadCloud } from "lucide-react";
export default function CreateProduct() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (formData) => {
    try {
      setLoading(true);

      // Upload image to imgbb
      const imageFile = formData.image[0];

      const imageData = new FormData();
      imageData.append("image", imageFile);

      const imageRes = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
        {
          method: "POST",
          body: imageData,
        }
      );

      const imageResult = await imageRes.json();

      if (!imageResult.success) {
        throw new Error("Image upload failed");
      }

      const imageUrl = imageResult.data.url;

      // Prepare final payload
      const payload = {
        name: formData.name,
        price: Number(formData.price),
        description: formData.description,
        image: imageUrl,
      };

      // Save to database
      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

  

      reset();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
<div>
  <label className="block mb-2 font-medium text-gray-700">
    Product Image
  </label>

  <label className="flex flex-col items-center justify-center h-44 w-full border-2 border-dashed border-gray-300 rounded-2xl cursor-pointer hover:border-amber-500 transition">
    <UploadCloud size={50} className="text-gray-400 mb-3" />

    <span className="text-gray-500 font-medium">
      Upload Product Image
    </span>

    <span className="text-sm text-gray-400 mt-1">
      JPG, PNG, WEBP
    </span>

    <input
      type="file"
      accept="image/*"
      className="hidden"
      {...register("image", {
        required: "Image is required",
      })}
    />
  </label>

  {errors.image && (
    <p className="text-red-500 text-sm mt-2">
      {errors.image.message}
    </p>
  )}
</div>
  );
}