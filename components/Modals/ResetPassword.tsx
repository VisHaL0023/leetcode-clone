import React, { useState } from "react";
type ResetPasswordProps = {};

const ResetPassword: React.FC<ResetPasswordProps> = () => {
    const [email, setEmail] = useState("");

    const handleReset = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <form
            className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8"
            onSubmit={handleReset}
        >
            <h3 className="text-2xl font-medium  text-black">Reset Password</h3>
            <p className="text-sm text-gray-800 ">
                Forgotten your password? Enter your e-mail address below, and
                we&apos;ll send you an e-mail allowing you to reset it.
            </p>
            <div>
                <label
                    htmlFor="email"
                    className="text-sm font-medium block mb-2 text-gray-500"
                >
                    Your email
                </label>
                <input
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    className="border-2 outline-none sm:text-sm rounded-lg focus:ring-gray-500 focus:border-gray-900 block w-full p-2.5
                    bg-gray-50 border-gray-400 placeholder-gray-400 text-black"
                    placeholder="name@company.com"
                />
            </div>

            <button
                type="submit"
                className={`w-full text-white  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                bg-brand-orange hover:bg-brand-orange-s `}
            >
                Reset Password
            </button>
        </form>
    );
};
export default ResetPassword;
