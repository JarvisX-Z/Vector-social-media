"use client";

import { Heart, MessageCircle, Repeat } from "lucide-react";
import { useState } from "react";

type PostCardProps = {
    post: any;
};

export default function PostCard({ post }: PostCardProps) {
    const [liked, setLiked] = useState(false);

    return (
        <div className="border border-black/10 dark:border-white/10 bg-white dark:bg-black cursor-pointer hover:shadow-md dark:hover:scale-[1.01] px-5 py-3 hover:bg-gray-50 rounded-2xl transition">
            <div className="flex items-center gap-2 mb-1">
                <div className="h-8 md:h-10 w-8 md:w-10 rounded-full bg-gray-300" />
                <span className="font-semibold">{post.author.username}</span>
                <span className="text-[0.9rem] text-gray-500">
                    @{post.author.username}
                </span>
            </div>

            <p className="mt-2 mb-5 text-[0.9rem] md:text-[1rem]">
                {post.content}
            </p>

            <div className="flex justify-between text-gray-500">
                <p className="flex gap-1 items-center">
                    <MessageCircle size={20} />0
                </p>
                <p className="flex gap-1 items-center">
                    <Repeat size={20} />0
                </p>
                <p
                    className="flex gap-1 items-center"
                    onClick={() => setLiked(prev => !prev)}
                >
                    <Heart
                        size={20}
                        className={`cursor-pointer ${liked ? "text-blue-500" : ""}`}
                        fill={liked ? "currentColor" : "none"}
                    />
                    0
                </p>
            </div>
        </div>
    );
}
