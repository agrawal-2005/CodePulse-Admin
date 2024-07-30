import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";

function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const create = async (data) => {
    setError("");
    try {
      const newUser = await authService.createAccount(data);
      if (newUser) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(login(userData));
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 border border-gray-300">
        <div className="mb-6 flex flex-col items-center">
          <Logo width="60px" height="60px" borderRadius="50%" /> {/* Rounded logo */}
          <h2 className="text-2xl font-bold text-gray-800 mt-4">
            Create an Account
          </h2>
          <p className="text-base text-gray-600 mt-2">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 hover:underline"
            >
              Sign In
            </Link>
          </p>
          {error && <p className="text-red-600 mt-4 text-center">{error}</p>}
        </div>

        <form onSubmit={handleSubmit(create)} className="space-y-6">
          <div className="space-y-4">
            <Input
              label="Full Name"
              placeholder="Enter your full name"
              {...register("name", { required: "Full name is required" })}
              className="border border-gray-300 rounded-md p-3 w-full"
              error={errors.name?.message}
            />
            <Input
              label="Email"
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Email address must be valid",
                },
              })}
              className="border border-gray-300 rounded-md p-3 w-full"
              error={errors.email?.message}
            />
            <Input
              label="Password"
              placeholder="Enter your password"
              type="password"
              {...register("password", { required: "Password is required" })}
              className="border border-gray-300 rounded-md p-3 w-full"
              error={errors.password?.message}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Create Account
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
