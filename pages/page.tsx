"use client";
import Footer from "../components/pages/Footer";
import { authModalState } from "../atoms/authModalAtom";
import { useRecoilValue } from "recoil";
import AuthModal from "../components/Modals/AuthModal";
import HomePage from "../components/pages/HomePage";
import Navbar from "../components/Navbar/NavBar";
import "react-toastify/dist/ReactToastify.css";

export default function Page() {
    const authModal = useRecoilValue(authModalState);
    return (
        <>
            <div className="relative overflow-x-hidden">
                {authModal.isOpen && <AuthModal />}
                <div className="relative z-20">
                    <Navbar />
                </div>
                <HomePage />
                <div className="relative z-20 bg-white">
                    <Footer />
                </div>
            </div>
        </>
    );
}
