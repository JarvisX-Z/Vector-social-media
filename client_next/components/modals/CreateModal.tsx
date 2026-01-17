"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export default function CreateModal({ onClose }: { onClose: () => void }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
    }, []);

    const handleClose = () => {
        setVisible(false);
        setTimeout(onClose, 200);
    };

    return (
        <>
            <div onClick={handleClose} className={`fixed inset-0 z-50 bg-black/40 dark:bg-white/5 transition-opacity duration-200 ${visible ? "opacity-100" : "opacity-0"}`} />

            <div className={`fixed z-60 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] md:w-[40vw] bg-white dark:bg-black border dark:border-white/20 rounded-lg shadow-xl p-6 transition-all duration-200 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
                <div className="flex justify-between items-center mb-4">
                    <p className="text-[1.2rem] font-semibold">Create a post</p>
                    <button onClick={handleClose} className="cursor-pointer">
                        <X />
                    </button>
                </div>

                <textarea placeholder="What's on your mind?" className="w-full h-32 resize-none border border-black/10 dark:border-white/20 rounded-lg p-3 outline-none dark:bg-black" />

                <div className="flex justify-between gap-3 mt-4">
                    <Button className="bg-black/70 dark:bg-white dark:hover:bg-white/70 cursor-pointer w-[47%]">Discard</Button>
                    <Button className="bg-blue-500 cursor-pointer hover:bg-blue-600 w-[47%]">Post</Button>
                </div>
            </div>
        </>
    );
}
