import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(authLogin(userData));
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 border border-gray-200">
        <div className="flex justify-center mb-6">
          <Logo width="60px" height='60px' borderRadius="50%" /> {/* Rounded logo */}
        </div>
        <h2 className="text-2xl font-bold text-center text-gray-800">Sign In</h2>
        <p className="text-center text-gray-600 mt-1">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>
        {error && <p className="text-red-600 text-center mt-4">{error}</p>}
        <form onSubmit={handleSubmit(login)} className="mt-6">
          <div className="space-y-4">
            <Input
              label="Email"
              placeholder="Enter your email"
              type="email"
              className="w-full"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Invalid email address",
                },
              })}
              error={errors.email?.message}
            />
            <Input
              label="Password"
              placeholder="Enter your password"
              type="password"
              className="w-full"
              {...register("password", {
                required: "Password is required",
              })}
              error={errors.password?.message}
            />
            <Button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
            >
              Sign In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
