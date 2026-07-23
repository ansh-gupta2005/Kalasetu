"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { useTheme } from "../../components/ThemeContext";

export default function Register() {
  const { darkMode } = useTheme();
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Registration Successful!");

        setName("");
        setEmail("");
        setPassword("");

        router.push("/login");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Server Error");
    }
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode
          ? "bg-gray-950 text-white"
          : "bg-gray-100 text-black"
      }`}
    >
      <Navbar />

      <section className="flex justify-center items-center py-16 px-5">
        <div
          className={`w-full max-w-md rounded-2xl shadow-xl p-8 ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h1 className="text-4xl font-bold text-center">
            Create Account
          </h1>

          <p className="text-center mt-2 mb-8 text-gray-500">
            Register for KalaSetu
          </p>

          <form onSubmit={handleRegister} className="space-y-5">

            <div>
              <label className="font-semibold">
                Name
              </label>

              <input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-2 p-3 rounded-lg border text-black"
              />
            </div>

            <div>
              <label className="font-semibold">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-2 p-3 rounded-lg border text-black"
              />
            </div>

            <div>
              <label className="font-semibold">
                Password
              </label>

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-2 p-3 rounded-lg border text-black"
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />

              <span>Show Password</span>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold"
            >
              Register
            </button>

          </form>

          <p className="text-center mt-6">
            Already have an account?

            <span
              onClick={() => router.push("/login")}
              className="text-green-600 cursor-pointer ml-2 font-semibold"
            >
              Login
            </span>
          </p>

        </div>
      </section>

      <Footer />
    </div>
  );
}