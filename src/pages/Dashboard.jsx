import { useContext, useState } from "react";
import { ApiContext } from "../contexts/ApiContext";
import { Clipboard } from "lucide-react";

export default function UrlShortenerLanding() {
    const [input, setInput] = useState("");
    const { loading, shortUrl, getShortUrl, error } = useContext(ApiContext); // use error from context

    const [copied, setCopied] = useState(null); // "url" | "id" | null

    const handleClipBoard = (target, type) => {
        navigator.clipboard.writeText(target);
        setCopied(type);
        setTimeout(() => setCopied(null), 500);
    };


    const [localError, setLocalError] = useState(""); // only for input validation




    const handleShorten = async () => {
        setLocalError("");
        if (!input) {
            setLocalError("Please enter a valid URL");
            return;
        }
        try {
            new URL(input); // basic URL validation
        } catch {
            setLocalError("Enter a valid URL including http:// or https://");
            return;
        }

        getShortUrl(input); // context handles API error + loading
        setInput("");
    };

    return (
        <div className="bg-white min-h-screen flex flex-col">

            <div className="relative isolate px-6 pt-24 lg:px-8 flex-1">
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                >
                    <div
                        className="relative left-1/2 aspect-[1155/678] w-[72rem] -translate-x-1/2 rotate-30 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%,100% 61.6%,97.5% 26.9%,85.5% 0.1%,80.7% 2%,72.5% 32.5%,60.2% 62.4%,52.4% 68.1%,47.5% 58.3%,45.2% 34.5%,27.5% 76.7%,0.1% 64.9%,17.9% 100%,27.6% 76.8%,76.1% 97.7%,74.1% 44.1%)",
                        }}
                    />
                </div>
                {/* HERO */}
                <div className="mx-auto max-w-2xl py-12 sm:py-32 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Shorten your links with ease
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Paste your long link below and get a short, shareable URL instantly.
                    </p>

                    {/* Input + Button */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-3 items-center justify-center">
                        <input
                            type="url"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Enter your long URL..."
                            className="w-full sm:w-96 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <button
                            onClick={handleShorten}
                            disabled={loading}
                            className={`px-6 py-3 rounded-lg shadow text-white font-semibold 
                                ${loading ? "bg-indigo-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-500"}`}
                        >
                            {loading ? "Shortening..." : "Short url"}
                        </button>
                    </div>

                    {/* Validation Error */}
                    {localError && <p className="mt-3 text-sm text-red-500">{localError}</p>}

                    {/* API Error */}
                    {error && <p className="mt-3 text-sm text-red-500">{error}</p>}

                    {/* Result */}
                    {shortUrl && !loading && (
                        <div className="mt-6 bg-white p-5 rounded-xl shadow-md inline-block animate-fadeIn">
                            <h3 className="text-gray-700 font-medium mb-3">Your shortened URL:</h3>

                            {/* Shortened URL with copy */}
                            <div className="flex flex-col sm:flex-row gap-3 items-center mb-3">
                                <a
                                    href={shortUrl.shortUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-indigo-600 font-medium break-words"
                                >
                                    {shortUrl.shortUrl}
                                </a>
                                <span className="relative flex items-center">
                                    {copied === "url" && (
                                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs px-2 py-1 rounded-md shadow-md animate-fade opacity-80">
                                            Copied!
                                        </span>
                                    )}

                                    <Clipboard
                                        size={22}
                                        className={`cursor-pointer text-gray-500 ${copied === "url" ? "text-indigo-600" : "text-indigo-100"} `}
                                        onClick={() => handleClipBoard(shortUrl.shortUrl, "url")}
                                    />



                                </span>

                            </div>

                            {/* Shorten ID with copy */}
                            <div className="flex items-center gap-2 text-gray-600 text-sm">
                                <span className="font-medium">ShortenID:</span>
                                <span className="font-mono">{shortUrl.shortId}</span>

                                <span className="relative flex items-center">
                                    {/* Popup message */}
                                    {copied === "id" && (
                                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs px-2 py-1 rounded-md shadow-md animate-fade opacity-80">
                                            Copied!
                                        </span>
                                    )}

                                    {/* Clipboard icon */}
                                    <Clipboard
                                        size={20}
                                        className={`cursor-pointer text-gray-500 ${copied === "id" ? "text-indigo-600" : "text-indigo-100"
                                            } hover:text-indigo-600`}
                                        onClick={() => handleClipBoard(shortUrl.shortId, "id")}
                                    />
                                </span>

                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
