"use client";
import toast from "react-hot-toast";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import Loader from "../../components/ui/Loader";
import Modal from "../../components/ui/Modal";
import Toast from "../../components/ui/Toast";


import { useState } from "react";

export default function ShowcasePage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">
        UI Component Showcase
      </h1>

      <Button>
        Click Me
      </Button>

      <Input
        label="Email"
        placeholder="Enter your email"
      />

      <button
        onClick={() => setOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Open Modal
      </button>
      <button
  onClick={() =>
    toast.success("Toast working!")
  }
>
  Show Toast
</button>

      <Modal
        isOpen={open}
        title="Sample Modal"
      >
        <p>This is a modal component.</p>

        <button
          onClick={() => setOpen(false)}
          className="bg-red-500 text-white px-3 py-2 rounded mt-2"
        >
          Close
        </button>
      </Modal>

      <Loader />

      <Toast />
    </div>
  );
}