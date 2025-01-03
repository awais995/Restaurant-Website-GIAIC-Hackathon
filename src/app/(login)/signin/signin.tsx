import Image from "next/image";

export default function Signin() {
    return (
      <div className="flex items-center justify-center min-h-screen py-20 bg-gray-100">
        <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
          <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800">Sign In</h2>
          <form>
           
            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full px-4 py-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
  
            {/* Password Input */}
            <div className="mb-4">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
  
            {/* Remember Me Checkbox */}
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                Remember me?
              </label>
            </div>
  
            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              Sign In
            </button>
          </form>
  
          {/* Forgot Password */}
          <div className="mt-4 text-center">
            <a href="#" className="text-sm text-orange-500 hover:underline">
              Forgot password?
            </a>
          </div>
  
          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="w-full border-gray-300" />
            <span className="px-2 text-sm text-gray-500">OR</span>
            <hr className="w-full border-gray-300" />
          </div>
  
          {/* Sign Up with Google */}
          <button
            type="button"
            className="flex items-center justify-center w-full px-4 py-2 mb-2 text-gray-700 bg-gray-100 border rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <Image
              src="/google.png"
              alt="Google"
              width={20}
              height={20}
              className="w-5 h-5 mr-2"
            />
            Sign in with Google
          </button>
  
          {/* Sign Up with Apple */}
          <button
            type="button"
            className="flex items-center justify-center w-full px-4 py-2 text-gray-700 bg-gray-100 border rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <Image
              src="/apple.png"
              alt="Apple"
              width={20}
              height={20}
              className="w-5 h-5 mr-2"
            />
            Sign up with Apple
          </button>
        </div>
      </div>
    );
  }