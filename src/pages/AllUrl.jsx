import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { ApiContext } from "../contexts/ApiContext";

const AllUrls = () => {
    const { BASE_HOST } = useContext(ApiContext); // if you store host in context
    const [urls, setUrls] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchUrls = async () => {
            setLoading(true);
            setError("");
            try {
                const res = await axios.get(`${BASE_HOST}/api/url/all`);
                // safely handle response
                setUrls(Array.isArray(res.data.urls) ? res.data.urls : []);
            } catch (err) {
                console.error(err);
                setError("Failed to fetch URLs");
            } finally {
                setLoading(false);
            }
        };
        fetchUrls();
    }, [BASE_HOST]);

    if (loading) return <p className="p-4 text-gray-700">Loading...</p>;
    if (error) return <p className="p-4 text-red-500">{error}</p>;

    return (
        <div className="min-h-screen p-8 mt-16">
            <h1 className="text-2xl font-bold mb-6">All URLs</h1>
            {urls.length === 0 ? (
                <p className="text-gray-500">No URLs found.</p>
            ) : (
                <div className="grid gap-4">
                    {urls.map((url) => (
                        <div
                            key={url.shortId}
                            className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
                        >
                            <div>
                                <p className="text-indigo-600 font-medium">{url.shortId}</p>
                                <p className="text-gray-700 break-all">{url.longUrl}</p>
                            </div>
                            <div className="text-gray-500">{url.clickCount || 0} clicks</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllUrls;
