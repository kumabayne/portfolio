"use client";
import { useState } from "react";
import { BsArrowClockwise } from "react-icons/bs";

const buttons = [
    {
        id: 1,
        icon: "🍔",
        mood: "😁",
    },
    {
        id: 2,
        icon: "☕️",
        mood: "🤩",
    },
    {
        id: 3,
        icon: "🏃‍♂️",
        mood: "😰",
    },
    {
        id: 4,
        icon: "🎃",
        mood: "🫣",
    },
    {
        id: 5,
        icon: "🎄",
        mood: "😍",
    },
];

function ChangeMyMood() {
    const [mood, setMood] = useState("😠");

    return (
        <div className="col-span-full mb-4 lg:col-start-8 lg:col-end-13">
            <div className="bg-black/20 flex flex-col justify-start p-4 relative rounded-md">
                <button
                    className="absolute right-2 top-2 text-gray-400 hover:text-gray-300"
                    onClick={() => setMood("😠")}
                    type="button"
                >
                    <BsArrowClockwise />
                </button>
                <code className="text-emerald-400 text-xs md:text-sm">
                    <pre>
                        <span className="text-indigo-400">function</span>{" "}
                        <span className="text-indigo-200">Kuma</span>
                        <span>()</span>
                        <span className="text-emerald-400"> &#123; </span>
                        <br />
                        {"\t"}
                        <span className="text-indigo-400">const</span>{" "}
                        <span className="text-amber-500">&#91;</span>
                        <span className="text-indigo-600">mood</span>
                        <span className="text-gray-400">,</span>{" "}
                        <span className="text-indigo-600">setMood</span>
                        <span className="text-amber-500">&#93;</span>{" "}
                        <span className="text-gray-400">&#61;</span>{" "}
                        <span className="text-indigo-200">useState</span>
                        <span className="text-amber-500">&#40;</span>
                        <span className="text-xl">{mood}</span>
                        <span className="text-amber-500">&#41;</span>
                        <span className="text-gray-400">&#59;</span>
                        <br />
                        <span className="text-emerald-400">&#125;</span>
                    </pre>
                </code>
                <div className="flex gap-3 text-lg">
                    {buttons.map((button) => (
                        <button
                            key={button.id}
                            className="hover:brightness-110"
                            onClick={() => setMood(button.mood)}
                            type="button"
                        >
                            {button.icon}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ChangeMyMood;
