import { authModalState } from "@/atoms/authModalAtom";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { toast } from "react-toastify";
type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
    const setAuthModalState = useSetRecoilState(authModalState);
    const handleClick = (type: "login" | "register" | "forgotPassword") => {
        setAuthModalState((prev) => ({ ...prev, type }));
    };
    const [inputs, setInputs] = useState({ email: "", password: "" });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!inputs.email || !inputs.password)
            return alert("Please fill all fields");
        try {
        } catch (error: any) {
            toast.error(error.message, {
                position: "top-center",
                autoClose: 3000,
                theme: "dark",
            });
        }
    };

    return (
        <form className="space-y-6 px-6 pb-4" onSubmit={handleLogin}>
            <h3 className="text-2xl font-medium text-black">
                Sign in to LeetCode
            </h3>
            <div>
                <label
                    htmlFor="email"
                    className="text-sm font-medium block mb-2 text-gray-600"
                >
                    Your Email
                </label>
                <input
                    onChange={handleInputChange}
                    type="email"
                    name="email"
                    id="email"
                    className="
            border-2 outline-none sm:text-sm rounded-lg focus:ring-gray-500 focus:border-gray-900 block w-full p-2.5
            bg-gray-50 border-gray-400 placeholder-gray-400 text-white
        "
                    placeholder="name@company.com"
                />
            </div>
            <div>
                <label
                    htmlFor="password"
                    className="text-sm font-medium block mb-2 text-gray-600"
                >
                    Your Password
                </label>
                <input
                    onChange={handleInputChange}
                    type="password"
                    name="password"
                    id="password"
                    className="
                    border-2 outline-none sm:text-sm rounded-lg focus:ring-gray-500 focus:border-gray-900 block w-full p-2.5
                    bg-gray-50 border-gray-400 placeholder-gray-400 text-white
        "
                    placeholder="********"
                />
            </div>

            <button
                type="submit"
                className="w-full text-white focus:ring-blue-300 font-medium rounded-lg
                text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s
            "
            >
                Log In{" "}
            </button>
            <button
                className="flex w-full justify-end"
                onClick={() => handleClick("forgotPassword")}
            >
                <a
                    href="#"
                    className="text-sm block text-brand-orange hover:underline w-full text-right"
                >
                    Forgot Password?
                </a>
            </button>
            <div className="text-sm font-medium text-gray-600">
                Not Registered?{" "}
                <a
                    href="#"
                    className="text-blue-700 hover:underline"
                    onClick={() => handleClick("register")}
                >
                    Create account
                </a>
            </div>
        </form>
    );
};
export default Login;
