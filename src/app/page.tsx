import Footer from "@/pages/Footer";
import HomePage from "@/pages/HomePage";
import Navbar from "@/pages/NavBar";

export default function Home() {
    return (
        <>
            <div className="relative overflow-x-hidden">
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
