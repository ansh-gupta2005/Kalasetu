"use client";

import { useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { useTheme } from "../../components/ThemeContext";
import Link from "next/link";

export default function Login() {
  const { darkMode } = useTheme();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!email || !password) {
    alert("Please fill all fields");
    return;
  }

  try {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    if (data.success) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      alert("Login Successful!");

      window.location.href = "/products";
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
            Welcome Back
          </h1>

          <p className="text-center mt-2 mb-8 text-gray-500">
            Login to KalaSetu
          </p>

          <form
            onSubmit={handleLogin}
            className="space-y-5"
          >

            <div>

              <label className="font-semibold">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                className="w-full mt-2 p-3 rounded-lg border text-black"
              />

            </div>

            <div>

              <label className="font-semibold">
                Password
              </label>

              <input
                type={
                  showPassword ? "text" : "password"
                }
                placeholder="Enter Password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                className="w-full mt-2 p-3 rounded-lg border text-black"
              />

            </div>

            <div className="flex items-center gap-2">

              <input
                type="checkbox"
                checked={showPassword}
                onChange={() =>
                  setShowPassword(!showPassword)
                }
              />

              <span>Show Password</span>

            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold"
            >
              Login
            </button>

          </form>

          <p className="text-center mt-6">
  Don't have an account?{" "}
  <Link
    href="/register"
    className="text-orange-500 font-semibold hover:underline"
  >
    Register
  </Link>
</p>

        </div>

      </section>

      <Footer />

    </div>
  );
}