import { authModalState } from "@/atoms/authModalAtom";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import axios from "axios";
import { signIn } from "next-auth/react";

type SignupProps = {};

const Signup: React.FC<SignupProps> = () => {
    const setAuthModalState = useSetRecoilState(authModalState);
    const [inputs, setInputs] = useState({
        email: "",
        name: "",
        password: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = () => {
        setAuthModalState((prev) => ({ ...prev, type: "login" }));
    };

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        if (!inputs.email || !inputs.password || !inputs.name)
            return alert("Please fill all fields");
        try {
            toast.loading("Creating your account", {
                position: "top-center",
                toastId: "loadingToast",
            });

            await axios.post("/api/register", {
                email: inputs.email,
                name: inputs.name,
                password: inputs.password,
            });

            toast.success("Account created, please Login", {
                position: "top-center",
            });
            setAuthModalState((prev) => ({ ...prev, type: "login" }));
            // router.push("/");
        } catch (error: any) {
            toast.error(error.message, { position: "top-center" });
        } finally {
            toast.dismiss("loadingToast");
            setIsLoading(false);
        }
    };

    return (
        <form className="space-y-5 px-6 pb-4" onSubmit={handleRegister}>
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
                    bg-gray-50 border-gray-400 placeholder-gray-400 text-black
    "
                    placeholder="name@company.com"
                />
            </div>
            <div>
                <label
                    htmlFor="name"
                    className="text-sm font-medium block mb-2 text-gray-600"
                >
                    Display Name
                </label>
                <input
                    onChange={handleChangeInput}
                    type="name"
                    name="name"
                    id="name"
                    className="
                    border-2 outline-none sm:text-sm rounded-lg focus:ring-gray-500 focus:border-gray-900 block w-full p-2.5
                    bg-gray-50 border-gray-400 placeholder-gray-400 text-black
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
                    bg-gray-50 border-gray-400 placeholder-gray-400 text-black
    "
                    placeholder="*******"
                />
            </div>

            <button
                type="submit"
                className="w-full text-white focus:ring-blue-300 font-medium rounded-lg
            text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s
        "
                disabled={isLoading}
            >
                {isLoading ? "Creating user" : "Register"}
            </button>

            <div className="flex flex-row items-center gap-4 justify-center">
                <div
                    onClick={() => signIn("google", { callbackUrl: "/" })}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
                >
                    <FcGoogle size={32} />
                </div>
                <div
                    onClick={() => signIn("github", { callbackUrl: "/" })}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
                >
                    <FaGithub size={32} />
                </div>
            </div>

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
