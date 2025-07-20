import React from "react";
import { Link } from "react-router";
import AuthLayout from "../../components/layouts/AuthLayout";
import { UserCircleIcon } from '@heroicons/react/24/solid'

const SignUp:React.FC = () =>{

  return (
  <AuthLayout>

        {/* Right Side - Sign Up Form */}
     <div className="p-10 flex items-center justify-center">
  <div className="w-full max-w-md">
    <h2 className="text-2xl font-semibold text-center mb-6">Create Account</h2>

    {/* Photo input centered at top inside the box */}
    <div className="mb-8 flex flex-col items-center">
      <label htmlFor="photo" className="block text-sm font-medium text-gray-900 mb-2">
        Photo
      </label>
      <div className="flex items-center gap-x-3">
        <UserCircleIcon aria-hidden="true" className="h-12 w-12 text-gray-300" />
        <button
          type="button"
          className="rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
        >
          Change
        </button>
      </div>
    </div>

    <form className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Jane Smith"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="jane@smith.com"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <input
          id="password"
          type="password"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
          Confirm Password
        </label>
        <input
          id="confirmPassword"
          type="password"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors"
      >
        Sign Up
      </button>
    </form>

    <p className="text-center text-sm text-gray-600 mt-6">
      Already have an account?{" "}
      <Link to="/login" className="text-indigo-600 hover:underline">
        Log in
      </Link>
    </p>
  </div>
</div>

    </AuthLayout>
  );
}





export default SignUp;