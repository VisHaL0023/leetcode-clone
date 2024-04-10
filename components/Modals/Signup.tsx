import { authModalState } from "@/atoms/authModalAtom";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { toast } from "react-toastify";

type SignupProps = {};

const Signup: React.FC<SignupProps> = () => {
    const setAuthModalState = useSetRecoilState(authModalState);
    const handleClick = () => {
        setAuthModalState((prev) => ({ ...prev, type: "login" }));
    };
    const [inputs, setInputs] = useState({
        email: "",
        displayName: "",
        password: "",
    });
    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!inputs.email || !inputs.password || !inputs.displayName)
            return alert("Please fill all fields");
        try {
            toast.loading("Creating your account", {
                position: "top-center",
                toastId: "loadingToast",
            });
        } catch (error: any) {
            toast.error(error.message, { position: "top-center" });
        } finally {
            toast.dismiss("loadingToast");
        }
    };

    return (
        <form className="space-y-6 px-6 pb-4" onSubmit={handleRegister}>
            <h3 className="text-2xl font-medium text-black">
                Register to LeetCode
            </h3>
            <div>
                <label
                    htmlFor="email"
                    className="text-sm font-medium block mb-2 text-gray-600"
                >
                    Email
                </label>
                <input
                    onChange={handleChangeInput}
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
                    htmlFor="displayName"
                    className="text-sm font-medium block mb-2 text-gray-600"
                >
                    Display Name
                </label>
                <input
                    onChange={handleChangeInput}
                    type="displayName"
                    name="displayName"
                    id="displayName"
                    className="
                    border-2 outline-none sm:text-sm rounded-lg focus:ring-gray-500 focus:border-gray-900 block w-full p-2.5
                    bg-gray-50 border-gray-400 placeholder-gray-400 text-white
    "
                    placeholder="John Doe"
                />
            </div>
            <div>
                <label
                    htmlFor="password"
                    className="text-sm font-medium block mb-2 text-gray-600"
                >
                    Password
                </label>
                <input
                    onChange={handleChangeInput}
                    type="password"
                    name="password"
                    id="password"
                    className="
                    border-2 outline-none sm:text-sm rounded-lg focus:ring-gray-500 focus:border-gray-900 block w-full p-2.5
                    bg-gray-50 border-gray-400 placeholder-gray-400 text-white
    "
                    placeholder="*******"
                />
            </div>

            <button
                type="submit"
                className="w-full text-white focus:ring-blue-300 font-medium rounded-lg
            text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s
        "
            >
                Register
            </button>

            <div className="text-sm font-medium text-gray-600">
                Already have an account?{" "}
                <a
                    href="#"
                    className="text-blue-700 hover:underline"
                    onClick={handleClick}
                >
                    Log In
                </a>
            </div>
        </form>
    );
};
export default Signup;
