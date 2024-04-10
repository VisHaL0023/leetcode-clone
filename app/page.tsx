"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RecoilRoot } from "recoil";
import Page from "@/components/page";

export default function Home() {
    return (
        <>
            <RecoilRoot>
                <ToastContainer />
                <Page />
            </RecoilRoot>
        </>
    );
}
