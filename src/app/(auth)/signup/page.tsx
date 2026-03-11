"use client";

import { Button, Form, Input, theme } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaApple, FaArrowLeft } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

interface SignupFormValues {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  agree: boolean;
}

type Role = "customer" | "professional";

const Signup: React.FC = () => {
  const router = useRouter();
  const [form] = Form.useForm<SignupFormValues>();
  const { token } = theme.useToken();
  const [selectedRole, setSelectedRole] = useState<Role>("customer");

  const isLoading = false;

  const onFinish = async (values: SignupFormValues): Promise<void> => {
    try {
      console.log("Signup form values:", { ...values, role: selectedRole });
      setTimeout(() => {
        router.push("/login");
      }, 500);
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  const handleBack = (): void => {
    router.back();
  };

  const handleGoogleSignup = (): void => {
    console.log("Google signup clicked");
    // Integrate Google OAuth here
  };

  const handleAppleSignup = (): void => {
    console.log("Apple signup clicked");
    // Integrate Apple OAuth here
  };

  const inputStyle = {
    backgroundColor: token.colorBgContainer,
    color: token.colorText,
    height: 48,
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center px-4 bg-white dark:bg-gray-900 transition-colors pt-20 my-12">
      <div className="shadow-2xl dark:shadow-gray-800/50 rounded-2xl w-full max-w-xl p-8 md:p-16 -mt-25 relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-colors">
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="absolute top-4 left-4 text-gray-600 dark:text-gray-400 hover:opacity-70 focus:outline-none transition-opacity"
          aria-label="Go Back"
        >
          <FaArrowLeft size={24} />
        </button>

        {/* Header */}
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center">
            Create a new Account
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center">
            Please enter your information to create account
          </p>
        </div>

        {/* Social Signup Buttons */}
        <div className="flex flex-col gap-3 mb-6">
          <button
            onClick={handleGoogleSignup}
            className="w-full flex items-center justify-center gap-3 border border-gray-200 dark:border-gray-600 rounded-xl py-3 px-4 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-all text-gray-800 dark:text-white font-medium text-sm shadow-sm"
          >
            <FcGoogle size={20} />
            Continue with Google
          </button>

          <button
            onClick={handleAppleSignup}
            className="w-full flex items-center justify-center gap-3 border border-gray-200 dark:border-gray-600 rounded-xl py-3 px-4 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-all text-gray-800 dark:text-white font-medium text-sm shadow-sm"
          >
            <FaApple size={20} className="text-gray-900 dark:text-white" />
            Continue with Apple
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-px bg-gray-200 dark:bg-gray-600" />
          <span className="text-xs text-gray-400 font-medium">or</span>
          <div className="flex-1 h-px bg-gray-200 dark:bg-gray-600" />
        </div>

        {/* Signup Form */}
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          className="space-y-1"
        >
          {/* Name */}
          <Form.Item
            label={
              <span className="font-semibold text-gray-900 dark:text-white text-sm">
                Username
              </span>
            }
            name="name"
            rules={[
              { required: true, message: "Please enter your name" },
              { min: 2, message: "Name must be at least 2 characters" },
            ]}
          >
            <Input
              placeholder="Enter name here"
              size="large"
              style={inputStyle}
              className="rounded-xl bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600"
            />
          </Form.Item>

          {/* Email */}
          <Form.Item
            label={
              <span className="font-semibold text-gray-900 dark:text-white text-sm">
                Email
              </span>
            }
            name="email"
            rules={[
              { type: "email", message: "Please enter a valid email address" },
              { required: true, message: "Please enter your email" },
            ]}
          >
            <Input
              placeholder="Esteban_schiller@gmail.com"
              size="large"
              style={inputStyle}
              className="rounded-xl bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600"
            />
          </Form.Item>

          {/* Phone */}
          <Form.Item
            label={
              <span className="font-semibold text-gray-900 dark:text-white text-sm">
                Phone
              </span>
            }
            name="phone"
            rules={[
              { required: true, message: "Please enter your phone number" },
              {
                pattern: /^[0-9+\-\s()]{7,15}$/,
                message: "Please enter a valid phone number",
              },
            ]}
          >
            <Input
              placeholder="Enter phone"
              size="large"
              style={inputStyle}
              className="rounded-xl bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600"
            />
          </Form.Item>

          {/* Password */}
          <Form.Item
            label={
              <span className="font-semibold text-gray-900 dark:text-white text-sm">
                Password
              </span>
            }
            name="password"
            rules={[
              { required: true, message: "Please enter your password" },
              { min: 6, message: "Password must be at least 6 characters" },
            ]}
            hasFeedback
          >
            <Input.Password
              placeholder="Enter Password"
              size="large"
              style={inputStyle}
              className="rounded-xl bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600"
            />
          </Form.Item>

          <Form.Item<SignupFormValues>
            label={
              <span className="font-semibold text-gray-900 dark:text-white transition-colors">
                Confirm Password
              </span>
            }
            name="confirmPassword"
            dependencies={["password"]}
            hasFeedback
            rules={[
              { required: true, message: "Please confirm your password" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Passwords do not match"));
                },
              }),
            ]}
          >
            <Input.Password
              placeholder="Confirm your password"
              size="large"
              className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 transition-colors"
              style={{
                backgroundColor: token.colorBgContainer,
                color: token.colorText,
              }}
            />
          </Form.Item>

          {/* Role Selector */}
          <Form.Item
            label={
              <span className="font-semibold text-gray-900 dark:text-white text-sm">
                Select Your Role
              </span>
            }
          >
            <div className="flex flex-col gap-3">
              {/* Customer Option */}
              <button
                type="button"
                onClick={() => setSelectedRole("customer")}
                className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl border-2 transition-all ${
                  selectedRole === "customer"
                    ? "border-amber-400 bg-amber-50 dark:bg-amber-900/20"
                    : "border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 hover:border-gray-300"
                }`}
              >
                <span
                  className={`font-medium text-sm ${
                    selectedRole === "customer"
                      ? "text-amber-700 dark:text-amber-400"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Customer
                </span>
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                    selectedRole === "customer"
                      ? "border-amber-500 bg-amber-500"
                      : "border-gray-300 dark:border-gray-500"
                  }`}
                >
                  {selectedRole === "customer" && (
                    <div className="w-2 h-2 rounded-full bg-white" />
                  )}
                </div>
              </button>

              {/* Professional Option */}
              <button
                type="button"
                onClick={() => setSelectedRole("professional")}
                className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl border-2 transition-all ${
                  selectedRole === "professional"
                    ? "border-amber-400 bg-amber-50 dark:bg-amber-900/20"
                    : "border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 hover:border-gray-300"
                }`}
              >
                <span
                  className={`font-medium text-sm ${
                    selectedRole === "professional"
                      ? "text-amber-700 dark:text-amber-400"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Professional
                </span>
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                    selectedRole === "professional"
                      ? "border-amber-500 bg-amber-500"
                      : "border-gray-300 dark:border-gray-500"
                  }`}
                >
                  {selectedRole === "professional" && (
                    <div className="w-2 h-2 rounded-full bg-white" />
                  )}
                </div>
              </button>
            </div>
          </Form.Item>

          {/* Submit */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              loading={isLoading}
              className="w-full font-bold text-base transition-all hover:scale-[1.02]"
              style={{
                height: 52,
                backgroundColor: "#F59E0B",
                borderColor: "#F59E0B",
              }}
            >
              {isLoading ? "Creating Account..." : "Sign Up"}
            </Button>
          </Form.Item>

          {/* Login Link */}
          <p className="text-center pt-2 text-gray-700 dark:text-gray-300 text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-primary font-bold underline">
              Login
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
