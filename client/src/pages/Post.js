import React, { useState } from 'react';
const Post = () => {
    const [isRegistrationPopupOpen, setIsRegistrationPopupOpen] = useState(false);
    const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);

    const handleRegistrationPopup = () => {
        setIsRegistrationPopupOpen(!isRegistrationPopupOpen);  // Toggle popup visibility
    };
    const handleLoginPopup = () => {
        setIsLoginPopupOpen(!isLoginPopupOpen);  // Toggle popup visibility
    };
    const handleLogin = () => {
        try {
            handleLoginPopup();
        } catch (error) {

        }
    }
    const handleRegistration = () => {
        try {
            handleRegistrationPopup()
        } catch (error) {

        }
    }
    const handleOpenLoginRegistration = () => {
        try {
            handleRegistrationPopup()
            handleLoginPopup()
        } catch (error) {

        }
    }

    return (
        <div className="min-h-screen p-6 w-70p">
            <div className="p-4 rounded-lg shadow-lg mb-6">
                <h1 className="text-gray-300 font-medium text-3xl mb-2">Hello Jane</h1>
                <p className="text-gray-500 text-l">
                    How are you doing today? Would you like to share something with the community &#x1F917;
                </p>
            </div>

            <div onClick={handleRegistrationPopup} className="bg-bg-card p-4 rounded-lg shadow-lg mb-6 border-2 border-border-card">
                <h3 className="text-gray-300 text-xl mb-4 mt-2 ml-2 font-medium">Create post</h3>
                <div className="mb-4 relative">
                    <input
                        type="text"
                        placeholder="How are you feeling today?"
                        className="w-full rounded-md p-8 pl-16 text-l text-gray-900 bg-bg-body"
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                        <img src='images/message.png' className='w-5' alt='message'/>
                    </div>
                </div>
                <div className="flex justify-end">
                    <button
                        type="button"
                        className="bg-blue-500 text-white px-8 py-2 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Post
                    </button>
                </div>
            </div>



            {/* Example Posts */}
            <div onClick={handleRegistrationPopup} className="bg-bg-card p-4 rounded-lg shadow-lg mb-6 border-2 border-border-card">
                <div className="flex items-center mb-4">
                    <img
                        src="/images/profile-1.JPG"
                        alt="Profile"
                        className="w-10 h-10 rounded-full mr-3"
                    />
                    <div className="flex-grow">
                        <h3 className="text-white font-semibold">Theresa Webb</h3>
                        <p className="text-gray-500 text-sm">5 mins ago</p>
                    </div>
                    <div className="ml-auto">
                        <button className="text-gray-500 hover:text-gray-300 focus:outline-none">
                            <img src='images/three-dots.png' className='w-5 transform rotate-90' alt='option' />
                        </button>
                    </div>
                </div>

                <div className="relative mb-4">
                    <div className="w-full rounded-md px-14 py-4 text-gray-400 bg-bg-body break-words">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </div>

                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white text-sm">
                        &#x1F44B;
                    </div>
                </div>

                <div className="flex items-center text-gray-400">
                    <i className="ri-chat-4-line text-xl mr-2"></i>
                    <p className="text-sm">24 comments</p>
                </div>
            </div>

            <div onClick={handleRegistrationPopup} className="bg-bg-card p-4 rounded-lg shadow-lg mb-6 border-2 border-border-card">
                <div className="flex items-center mb-4">
                    <img
                        src="/images/profile-1.JPG"
                        alt="Profile"
                        className="w-10 h-10 rounded-full mr-3"
                    />
                    <div className="flex-grow">
                        <h3 className="text-white font-semibold">Marvin McKinney</h3>
                        <p className="text-gray-500 text-sm">8 mins ago . Edited</p>
                    </div>
                    <div className="ml-auto">
                        <button className="text-gray-500 hover:text-gray-300 focus:outline-none">
                            <img src='images/three-dots.png' className='w-5 transform rotate-90' alt='option'/>
                        </button>
                    </div>
                </div>

                <div className="relative mb-4">
                    <div className="w-full rounded-md px-14 py-4 text-gray-400 bg-bg-body break-words">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </div>

                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white text-sm">
                        &#x1F61E;
                    </div>
                </div>

                <div className="flex items-center text-gray-400">
                    <i className="ri-chat-4-line text-xl mr-2"></i>
                    <p className="text-sm">24 comments</p>
                </div>
            </div>

            {/* Popup */}
            {isRegistrationPopupOpen && (
                <div className="fixed inset-0 bg-bg-card bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">
                    <div className="relative bg-bg-card p-2 rounded-lg shadow-lg border">
                        <div className="w-430px max-w-md p-8 space-y-12 bg-bg-card shadow-md rounded-lg">
                            <div>
                                <h3 className="text-12px font-semibold text-center text-gray-400">SIGN UP</h3>
                                <h2 className="text-lg font-bold text-center text-white mt-0">
                                    Create an account to continue
                                </h2>

                            </div>


                            <form className="space-y-4" onSubmit={handleRegistration}>
                                <div>
                                    <label for="email" className="block text-sm font-medium text-white">
                                        Email
                                    </label>

                                    <input id="email" type="email" required className="mt-1 block w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm focus:bg-gray-700 bg-gray-700" placeholder='Enter your email' />

                                </div>
                                <div>
                                    <label for="username" className="block text-sm font-medium text-white">
                                        Username
                                    </label>

                                    <input id="username" type="text" required className="mt-1 block w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm focus:bg-gray-700 bg-gray-700" placeholder='Choose a perferred username' />

                                </div>
                                <div className="relative">
                                    <div className="flex justify-between items-center">
                                        <label for="password" className="block text-sm font-medium text-white">Password</label>
                                    </div>
                                    <div className="relative mt-1">
                                        <input id="password" type="password" required className="block w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm focus:bg-gray-700 bg-gray-700 pr-10" placeholder='Choose a strong password' />
                                        <i className="ri-eye-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"></i>
                                    </div>
                                </div>


                                <div>
                                    <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Continue</button>
                                </div>
                                <p onClick={handleOpenLoginRegistration} className="text-sm text-gray-400 cursor-pointer">Already have an account? <span className='text-white'>Login <i className="ri-arrow-right-line"></i></span></p>

                            </form>
                        </div>
                        <button
                            onClick={handleRegistrationPopup}
                            className="absolute top-2 right-2 bg-black text-white w-8 h-8 rounded-full flex items-center justify-center focus:outline-none"
                        >
                            <i className="ri-close-line text-xl"></i>
                        </button>
                    </div>
                </div>
            )}
            {isLoginPopupOpen && (
                <div className="fixed inset-0 bg-bg-card bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">
                    <div className="relative bg-bg-card p-2 rounded-lg shadow-lg border">
                        <div className="w-430px max-w-md p-8 space-y-12 bg-bg-card shadow-md rounded-lg">
                            <div>
                                <h3 className="text-12px font-semibold text-center text-gray-400">WELCOME BACK</h3>
                                <h2 className="text-lg font-bold text-center text-white mt-0">
                                    Log into your account
                                </h2>

                            </div>


                            <form className="space-y-4" onSubmit={handleLogin}>
                                <div>
                                    <label for="text" className="block text-sm font-medium text-white">
                                        Email or Username
                                    </label>

                                    <input id="text" type="text" required className="mt-1 block w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm focus:bg-gray-700 bg-gray-700" placeholder='Enter your email or username' />

                                </div>
                                <div className="relative">
                                    <div className="flex justify-between items-center">
                                        <label for="password" className="block text-sm font-medium text-white">Password</label>
                                        <p className="text-12px text-white">Forgot password?</p>
                                    </div>
                                    <div className="relative mt-1">
                                        <input id="password" type="password" required className="block w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm focus:bg-gray-700 bg-gray-700 pr-10" placeholder='Enter your password' />
                                        <i className="ri-eye-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"></i>
                                    </div>
                                </div>


                                <div>
                                    <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Login now</button>
                                </div>
                                <p onClick={handleOpenLoginRegistration} className="text-sm text-gray-400 cursor-pointer">Not registered yet? <span className='text-white'>Register <i className="ri-arrow-right-line"></i></span></p>

                            </form>
                        </div>
                        <button
                            onClick={handleLoginPopup}
                            className="absolute top-2 right-2 bg-black text-white w-8 h-8 rounded-full flex items-center justify-center focus:outline-none"
                        >
                            <i className="ri-close-line text-xl"></i>
                        </button>
                    </div>
                </div>
            )}




        </div>
    );
};

export default Post;
