import React from "react";
import image from '../../assets/images/home-page-image.avif'
const AuthLayout:React.FC<React.PropsWithChildren> = ({children}) =>{
    return(
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl bg-white shadow-xl rounded-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Left Side - Branding */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white p-10 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">Expense Tracker</h1>
          <p className="text-lg mb-6 max-w-md">
            Track your expenses, set your budget, and manage your finances like a pro. It's fast, intuitive, and completely free.
          </p>
          <img
            src={image}
            alt="Finance Illustration"
            className="rounded-xl shadow-lg max-w-sm w-full mt-4"
          />
        </div>
        {children}
        </div>
        </div>
    )
}

export default AuthLayout;