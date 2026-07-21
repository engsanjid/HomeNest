"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function UpdateProperty() {
  const router = useRouter();
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/details/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProperty(data?.result || data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedData = {
      propertyName: form.propertyName.value,
      description: form.description.value,
      category: form.category.value,
      price: parseFloat(form.price.value),
      location: form.location.value,
      image: form.image.value,
    };

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/property/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          Swal.fire({
            title: "Updated!",
            text: "Your property has been updated successfully.",
            icon: "success",
            confirmButtonColor: "#3085d6",
          });
          router.push(`/details/${id}`);
        } else {
          Swal.fire("Error!", "Update failed.", "error");
        }
      })
      .catch(() =>
        Swal.fire("Error!", "Server error, please try again later.", "error")
      );
  };

  if (loading || !property) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-base-200 rounded-lg shadow-lg mt-10">
      <h2 className="text-3xl font-bold text-primary mb-6 text-center">
        ✏️ Update Property
      </h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="label">Property Name</label>
          <input
            name="propertyName"
            defaultValue={property.propertyName}
            className="input input-bordered w-full"
            placeholder="Property Name"
            required
          />
        </div>

        <div>
          <label className="label">Description</label>
          <textarea
            name="description"
            defaultValue={property.description}
            className="textarea textarea-bordered w-full"
            placeholder="Description"
            required
          ></textarea>
        </div>

        <div>
          <label className="label">Category</label>
          <select
            name="category"
            defaultValue={property.category}
            className="select select-bordered w-full"
            required
          >
            <option value="Rent">Rent</option>
            <option value="Sale">Sale</option>
            <option value="Commercial">Commercial</option>
            <option value="Land">Land</option>
          </select>
        </div>

        <div>
          <label className="label">Price</label>
          <input
            name="price"
            type="number"
            defaultValue={property.price}
            className="input input-bordered w-full"
            placeholder="Price"
            required
          />
        </div>

        <div>
          <label className="label">Location</label>
          <input
            name="location"
            defaultValue={property.location}
            className="input input-bordered w-full"
            placeholder="Location"
            required
          />
        </div>

        <div>
          <label className="label">Image URL</label>
          <input
            name="image"
            defaultValue={property.image}
            className="input input-bordered w-full"
            placeholder="Image URL"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="label">User Name</label>
            <input
              type="text"
              value={property.userName || "Unknown"}
              readOnly
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">User Email</label>
            <input
              type="email"
              value={property.userEmail || "Unknown"}
              readOnly
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary w-full mt-4">
          Update Property
        </button>
      </form>
    </div>
  );
}