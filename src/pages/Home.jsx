import React, { useState, useContext } from "react";
import { ApiContext } from "../contexts/ApiContext";

const Home = () => {
    const { data, getShortUrl } = useContext(ApiContext);
    const [input, setInput] = useState("");

    const handleShorten = () => {
        if (!input) return alert("Please enter a valid URL");
        getShortUrl(input);
        setInput("");
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
            {/* Header */}
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
                🔗 URL Shortener
            </h1>
            <p className="text-gray-600 mb-8">
                Paste your long URL and get a short, shareable link instantly!
            </p>

            {/* Input + Button */}
            <div className="w-full max-w-xl flex gap-2">
                <input
                    value={input}
                    type="url"
                    placeholder="Enter a URL..."
                    className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    onClick={handleShorten}
                    className="px-6 py-2 bg-red-400 hover:bg-red-500 text-white font-semibold rounded-lg transition"
                >
                    Shorten
                </button>
            </div>

            {/* Result */}
            <div className="mt-6 w-full max-w-xl text-center">
                {data ? (
                    <div className="bg-white p-4 rounded-lg shadow">
                        <p className="text-gray-700">Your short URL:</p>
                        <a
                            href={data.shortUrl || "#"}
                            target="_blank"
                            rel="noreferrer"
                            className="text-red-500 font-medium underline break-words"
                        >
                            {data.shortUrl}
                        </a>
                    </div>
                ) : (
                    <p className="text-gray-400">No link generated yet.</p>
                )}
            </div>
        </div>
    );
};

export default Home;
