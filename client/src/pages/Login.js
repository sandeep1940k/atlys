import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    try {
      navigate('/post')
    } catch (error) {
      console.log(error);
    }
  }
  const handleOpenRegistration = () => {
    try {

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-body">
      <div className="flex flex-col items-center space-y-4">
        <img src="images/image.png" alt="Welcome" className="w-30 h-30 object-cover" />

        <div className="w-full max-w-2xl p-8 space-y-12 bg-bg-card shadow-md rounded-lg border-2 border-gray-500">
          <div>
            <h3 className="text-14px font-semibold text-center text-gray-500">WELCOME BACK</h3>
            <h2 className="text-lg font-bold text-center text-white mt-0">
              Log into your account
            </h2>
          </div>
          <form className="space-y-4 w-430px" onSubmit={handleLogin}>
            <div>
              <label htmlFor="text" className="block text-sm font-medium text-gray-300">
                Email or Username
              </label>
              <input
                id="text"
                type="text"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:bg-gray-700 bg-bg-card"
                placeholder="Enter your email or username"
              />
            </div>
            <div className="relative">
              <div className="flex justify-between items-center">
                <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                  Password
                </label>
                <p className="text-12px text-white">
                  Forgot password?
                </p>
              </div>
              <div className="relative mt-1">
                <input
                  id="password"
                  type="password"
                  required
                  className="block w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm focus:bg-gray-700 bg-bg-card pr-10"
                  placeholder="Enter your password"
                />
                <i className="ri-eye-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"></i>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Login now
              </button>
            </div>
            <p onClick={handleOpenRegistration} className="text-sm text-gray-400 cursor-pointer">
              Not registered yet? <span className="text-white">Register <i className="ri-arrow-right-line"></i></span>
            </p>
          </form>
        </div>
      </div>
    </div>



  );
};

export default Login;
